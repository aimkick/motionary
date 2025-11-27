'use client';

import React, { useState } from 'react';
import { RefreshCw, Maximize2, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlaygroundCardProps {
  title: string;
  trigger: string;
  children: React.ReactNode;
  className?: string;
}

export const PlaygroundCard = ({ title, trigger, children, className }: PlaygroundCardProps) => {
  const [key, setKey] = useState(0);

  return (
    <div className="group relative bg-surface-50 border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-500">
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
            onClick={() => setKey(k => k + 1)}
            className="p-2 hover:bg-white/10 rounded-md text-white/60 hover:text-primary transition-colors"
            title="Replay"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button 
            className="p-2 hover:bg-white/10 rounded-md text-white/60 hover:text-white transition-colors"
            title="View Code"
          >
            <Code className="w-3.5 h-3.5" />
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

