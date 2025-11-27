'use client';

import React from 'react';
import { useFilterStore, FilterCategory } from '@/store/useFilterStore';
import { cn } from '@/lib/utils';
import { Atom, MousePointer2, Zap, Code2, Layers } from 'lucide-react';

const FILTERS = {
  trigger: {
    label: 'Trigger',
    icon: MousePointer2,
    options: ['Hover', 'Click', 'Scroll', 'Drag', 'Load', 'Gyro'],
  },
  emotion: {
    label: 'Emotion',
    icon: Zap,
    options: ['Bouncy', 'Silky', 'Aggressive', 'Mechanical'],
  },
  tech: {
    label: 'Tech',
    icon: Code2,
    options: ['CSS Only', 'SVG', 'Canvas', 'WebGL', 'Rive'],
  },
  element: {
    label: 'Element',
    icon: Layers,
    options: ['Button', 'Text', 'Card', 'Input', 'Menu', 'Background'],
  },
};

export const Sidebar = () => {
  const { activeFilters, setFilter, resetFilters } = useFilterStore();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-surface-50 border-r border-white/10 flex flex-col p-6 overflow-y-auto hide-scrollbar z-50">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Atom className="w-5 h-5 text-black animate-spin-slow" />
        </div>
        <h1 className="text-2xl font-bold tracking-tighter text-glow">
          Motionary
        </h1>
      </div>

      <div className="space-y-8 flex-1">
        {Object.entries(FILTERS).map(([key, category]) => {
          const filterKey = key as FilterCategory;
          const Icon = category.icon;
          
          return (
            <div key={key} className="space-y-3">
              <div className="flex items-center gap-2 text-white/50 text-sm uppercase tracking-widest font-medium">
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(filterKey, option)}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-xs transition-all duration-300 border",
                      activeFilters[filterKey] === option
                        ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        : "bg-surface-200 text-white/70 border-transparent hover:bg-surface-300 hover:border-white/20"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-6 border-t border-white/10">
        <button
          onClick={resetFilters}
          className="w-full py-3 text-sm text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2 group"
        >
          <span className="group-hover:rotate-180 transition-transform duration-500">
            ↻
          </span>
          Reset Laboratory
        </button>
      </div>
    </aside>
  );
};

