'use client';

import React, { useState } from 'react';
import { RefreshCw, Maximize2, Code, Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBubbleSound } from '@/hooks/useBubbleSound';
import { useFilterStore } from '@/store/useFilterStore';

interface PlaygroundCardProps {
  title: string;
  trigger: string;
  children: React.ReactNode;
  className?: string;
  codePath?: string;
}

export const PlaygroundCard = ({ title, trigger, children, className, codePath }: PlaygroundCardProps) => {
  const [key, setKey] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { activeFilters } = useFilterStore();

  // 1. Filter by Trigger
  if (activeFilters.trigger && activeFilters.trigger !== trigger) {
    return null;
  }

  const handleViewCode = async () => {
    if (!codePath) {
      alert(`Code path not linked for "${title}".\nView repo at github.com/aimkick/motionary`);
      return;
    }

    try {
      setIsLoading(true);
      // Fetch raw content from GitHub
      const response = await fetch(`https://raw.githubusercontent.com/aimkick/motionary/main/src/components/motionary/${codePath}.tsx`);
      
      if (!response.ok) {
         // Try without .tsx extension or verify path?
         throw new Error('Failed to fetch code');
      }

      const code = await response.text();
      await navigator.clipboard.writeText(code);
      
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Error fetching code:', error);
      alert('Failed to load code from GitHub. Please check console or visit the repository.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative bg-surface-50 border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-500" onMouseEnter={useBubbleSound()}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.02]">
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-white/90">{title}</h3>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono mt-1">
            {trigger}
          </span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setKey(k => k + 1);
            }}
            className="p-2 hover:bg-white/10 rounded-md text-white/60 hover:text-primary transition-colors active:scale-90 transform"
            title="Replay"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleViewCode();
            }}
            className={cn(
                "p-2 hover:bg-white/10 rounded-md transition-colors active:scale-90 transform flex items-center gap-2",
                isCopied ? "text-green-400" : "text-white/60 hover:text-white"
            )}
            title={codePath ? "Copy Code" : "View Code"}
            disabled={isLoading}
          >
            {isLoading ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : isCopied ? (
                <Check className="w-3.5 h-3.5" />
            ) : (
                <Code className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className={cn("h-64 flex items-center justify-center p-8 relative bg-[url('/grid-small.svg')] bg-center", className)}>
        <React.Fragment key={key}>
          {children}
        </React.Fragment>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10" />
    </div>
  );
};

