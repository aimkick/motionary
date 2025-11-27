import React from 'react';
import { Sidebar } from './Sidebar';
import { CustomCursor } from '@/components/motionary/web/CustomCursor';

interface LayoutShellProps {
  children: React.ReactNode;
}

export const LayoutShell = ({ children }: LayoutShellProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black cursor-none">
      <CustomCursor />
      <Sidebar />
      <main className="pl-64 min-h-screen relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
        
        <div className="p-12 max-w-[1920px] mx-auto relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

