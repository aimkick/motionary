'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. 3D Flip Card
export const FlipCard = () => (
    <div className="group w-full h-40 perspective-1000">
        <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-surface-200 rounded-xl flex items-center justify-center backface-hidden border border-white/10">
                <h3 className="text-xl font-bold">Front</h3>
            </div>
            <div className="absolute inset-0 bg-primary text-black rounded-xl flex items-center justify-center backface-hidden rotate-y-180">
                <h3 className="text-xl font-bold">Back</h3>
            </div>
        </div>
    </div>
);

// 2. Glow Border Card
export const GlowCard = () => (
    <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden group border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-secondary to-primary rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
        <div className="absolute inset-[1px] bg-surface-100 rounded-xl flex items-center justify-center z-10">
            <span className="text-white/70 font-medium">Neon Glow</span>
        </div>
    </div>
);

// 3. Parallax Tilt Card (Simplified)
export const TiltCard = () => (
    <motion.div
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex items-center justify-center shadow-xl perspective-1000 cursor-pointer"
    >
        <div className="transform translate-z-20">
             <h3 className="text-lg font-bold">Tilt Interaction</h3>
        </div>
    </motion.div>
);

// 4. Image Reveal Card
export const RevealCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer">
        <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:-translate-y-full transition-transform duration-500 ease-in-out bg-surface-200">
            <h3 className="text-lg font-bold">Hover Me</h3>
        </div>
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <h3 className="text-lg font-bold text-white">Hello!</h3>
        </div>
    </div>
);

// 5. Glassmorphism Card
export const GlassCard = () => (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500&auto=format&fit=crop')] bg-cover">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative w-[80%] h-[60%] glass-panel rounded-lg flex items-center justify-center border border-white/20 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <span className="font-bold text-white drop-shadow-md">Frosted Glass</span>
        </div>
    </div>
);

// 6. Curtain Card
export const CurtainCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer">
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary font-mono">HIDDEN CONTENT</span>
         </div>
         <div className="absolute inset-0 bg-surface-300 flex items-center justify-center transition-transform duration-500 origin-top group-hover:scale-y-0">
            <span className="font-bold text-white/50">Curtain Up</span>
         </div>
    </div>
);

// 7. Stacking Card
export const StackCard = () => (
    <div className="group relative w-full h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-secondary rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 opacity-50" />
        <div className="absolute inset-0 bg-primary rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 opacity-70" />
        <div className="relative w-full h-full bg-surface-200 border border-white/10 rounded-xl flex items-center justify-center z-10 hover:-translate-y-1 transition-transform duration-300">
            Stacking
        </div>
    </div>
);

// 8. Pattern Reveal Card
export const PatternCard = () => (
    <div className="group relative w-full h-40 bg-primary rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-surface-200 transition-transform duration-500 group-hover:translate-x-full z-10 flex items-center justify-center border border-white/10 rounded-xl">
            <span className="font-bold">Slide Reveal</span>
        </div>
        <div className="absolute inset-0 bg-[url('/grid-small.svg')] opacity-50 flex items-center justify-center text-black font-bold">
            PATTERN
        </div>
    </div>
);

// 9. Border Beam Card
export const BorderBeamCard = () => (
    <div className="relative w-full h-40 bg-surface-100 rounded-xl overflow-hidden flex items-center justify-center border border-transparent">
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#00f3ff_100%)] animate-spin-slow" />
        <div className="absolute inset-[2px] bg-surface-100 rounded-lg z-10 flex items-center justify-center">
            Border Beam
        </div>
    </div>
);

// 10. Floating Icon Card
export const FloatingIconCard = () => (
    <div className="group w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-surface-300 transition-colors duration-300">
        <div className="p-4 bg-white/5 rounded-full group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            <div className="w-6 h-6 bg-primary rounded-full" />
        </div>
        <span className="text-sm text-white/50 group-hover:text-white transition-colors">Hover Me</span>
    </div>
);

// 11. Noise Card (TV Static)
export const NoiseCard = () => (
    <div className="group relative w-full h-40 bg-black rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <span className="font-mono tracking-widest group-hover:text-primary transition-colors">NOISE</span>
    </div>
);

// 12. Spotlight Gradient Card
export const SpotlightGradientCard = () => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-40 bg-surface-200 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center group"
        >
            <div 
                className="absolute w-[200px] h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ left: position.x - 100, top: position.y - 100 }}
            />
            <span className="relative z-10 font-light">Spotlight</span>
        </div>
    );
}

// 13. Directional Hover Card (Concept)
export const DirectionalCard = () => (
     <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 font-bold group-hover:text-black transition-colors">Directional</span>
    </div>
)

// 14. Zoom Background Card
export const ZoomBgCard = () => (
    <div className="relative w-full h-40 rounded-xl overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4">
            <h4 className="font-bold text-white translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Zoom Effect</h4>
        </div>
    </div>
);

// 15. Blob Morph Card
export const BlobMorphCard = () => (
     <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
        <div className="absolute w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-xl top-2 right-2 animate-pulse" />
        <span className="relative z-10 font-bold tracking-wider text-white/80">Ambient</span>
    </div>
);

// 16. Skew Card
export const SkewCard = () => (
     <div className="group w-full h-40 perspective-1000 cursor-pointer">
        <div className="w-full h-full bg-surface-200 border border-white/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-x-12 group-hover:-translate-y-2 shadow-2xl">
            Skew Hover
        </div>
    </div>
);

// 17. Content Slide Up Card
export const SlideUpCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden cursor-pointer border border-white/5">
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-lg font-bold translate-y-4 group-hover:-translate-y-6 transition-transform duration-300">Title</h3>
            <p className="text-sm text-white/60 translate-y-12 opacity-0 group-hover:translate-y-[-1.5rem] group-hover:opacity-100 transition-all duration-300 delay-75">
                Hidden description appears on hover.
            </p>
        </div>
    </div>
);

// 18. Glitch Border Card
export const GlitchBorderCard = () => (
    <div className="group relative w-full h-40 bg-surface-200 rounded-xl flex items-center justify-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-200" />
        <div className="relative w-full h-full bg-surface-200 rounded-xl z-10 flex items-center justify-center border border-white/10">
            Glitch Border
        </div>
    </div>
);

// 19. Magnetic Element Card
export const MagneticElementCard = () => (
    <div className="w-full h-40 bg-surface-200 rounded-xl border border-white/10 flex items-center justify-center p-8 group">
        <motion.div
            className="w-12 h-12 bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
        />
    </div>
);

// 20. Video Hover Card
export const VideoHoverCard = () => (
    <div className="relative w-full h-40 bg-surface-200 rounded-xl overflow-hidden group">
         <div className="absolute inset-0 flex items-center justify-center z-10 font-bold bg-black/50 group-hover:opacity-0 transition-opacity duration-300">
            HOVER TO PLAY
         </div>
         {/* Placeholder for video - using GIF for demo */}
         <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/3o7TKSjRrfIPjeiSEQ/giphy.gif')] bg-cover bg-center opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

