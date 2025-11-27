'use client';

import { PlaygroundCard } from "@/components/system/PlaygroundCard";
import { MagneticButton } from "@/components/motionary/atomic/MagneticButton";
import { LiquidButton } from "@/components/motionary/atomic/LiquidButton";
import { JellyButton } from "@/components/motionary/atomic/JellyButton";
import { KineticText } from "@/components/motionary/atomic/KineticText";
import { useFilterStore } from "@/store/useFilterStore";

export default function Home() {
  const { activeFilters } = useFilterStore();

  // Simple filter logic (client-side for demo)
  // In a real app, this would filter a config array
  
  return (
    <div className="space-y-12 pb-20">
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Atomic Library</h2>
          <p className="text-white/50">Fundamental building blocks of interaction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlaygroundCard title="Magnetic Button" trigger="Hover">
            <MagneticButton />
          </PlaygroundCard>

          <PlaygroundCard title="Liquid Fill" trigger="Hover">
            <LiquidButton />
          </PlaygroundCard>

          <PlaygroundCard title="Jelly Wobble" trigger="Click">
            <JellyButton />
          </PlaygroundCard>

          <PlaygroundCard title="Kinetic Typography" trigger="Hover">
            <KineticText />
          </PlaygroundCard>
          
          {/* Placeholder for future components */}
          <PlaygroundCard title="3D Tilt" trigger="Hover">
             <div className="text-white/20 font-mono text-xs">Coming Soon</div>
          </PlaygroundCard>
           <PlaygroundCard title="Glitch Offset" trigger="Hover">
             <div className="text-white/20 font-mono text-xs">Coming Soon</div>
          </PlaygroundCard>
        </div>
      </section>

       <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Web Exclusive</h2>
          <p className="text-white/50">Immersive desktop experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlaygroundCard title="Custom Cursor" trigger="System">
                <div className="text-center">
                    <p className="text-sm text-white/60 mb-2">Move your mouse</p>
                    <div className="px-4 py-2 border border-white/10 rounded cursor-none">
                        Interactable Area
                    </div>
                </div>
            </PlaygroundCard>
        </div>
       </section>
    </div>
  );
}
