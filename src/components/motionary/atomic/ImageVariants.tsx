'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Image Zoom Hover
export const ImageZoom = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
    </div>
);

// 2. Grayscale to Color
export const GrayToColor = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
    </div>
);

// 3. Blur Reveal
export const BlurRevealImage = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group relative">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center blur-sm group-hover:blur-0 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">HOVER ME</div>
    </div>
);

// 4. Sliding Caption
export const SlideCaption = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg cursor-pointer group relative">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-white font-bold">Forest Path</h4>
        </div>
    </div>
);

// 5. Ken Burns Effect
export const KenBurns = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center animate-[kenburns_20s_infinite_alternate]" style={{ animationName: 'pulse', animationDuration: '20s' }} />
        {/* Note: Tailwind animate-pulse is different, simulating Ken Burns via CSS scale usually needs keyframes */}
        <style jsx>{`
            @keyframes kenburns {
                0% { transform: scale(1); }
                100% { transform: scale(1.2) translate(10px, 10px); }
            }
        `}</style>
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" style={{ animation: 'kenburns 15s ease-in-out infinite alternate' }} />
    </div>
);

// 6. 3D Tilt Image
export const TiltImage = () => (
    <motion.div 
        className="w-full h-48 rounded-lg bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center perspective-1000"
        whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    />
);

// 7. Glitch Image Hover
export const GlitchImage = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-50 translate-x-2 mix-blend-difference transition-opacity duration-100" />
    </div>
);

// 8. Circle Reveal Mask
export const CircleReveal = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group bg-black">
        <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700"
            style={{ clipPath: 'circle(0% at 50% 50%)' }}
        />
         <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center transition-all duration-700 group-hover:clip-path-full"
             style={{ clipPath: 'circle(150% at 50% 50%)' }} 
        />
        {/* Default visible state needs refining for pure CSS hover or JS state */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
            <span className="text-white/50">Hover to Reveal</span>
        </div>
         <style jsx>{`
            .group:not(:hover) div:nth-child(2) { clip-path: circle(20% at 50% 50%); filter: grayscale(100%); }
            .group:hover div:nth-child(2) { clip-path: circle(150% at 50% 50%); filter: grayscale(0%); }
        `}</style>
    </div>
);

// 9. Before/After Slider (Simulated)
export const BeforeAfter = () => {
    const [slider, setSlider] = React.useState(50);
    return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-ew-resize" onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setSlider(((e.clientX - rect.left) / rect.width) * 100);
        }}>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center grayscale" />
             <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center" 
                style={{ clipPath: `inset(0 ${100-slider}% 0 0)` }} 
            />
            <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${slider}%` }} />
        </div>
    )
}

// 10. Polaroid Stack
export const PolaroidStack = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
         <div className="absolute w-32 h-40 bg-white p-2 shadow-lg rotate-[-6deg] transition-transform hover:rotate-[-12deg] hover:z-10">
             <div className="w-full h-24 bg-gray-200 mb-2 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200')] bg-cover" />
         </div>
         <div className="absolute w-32 h-40 bg-white p-2 shadow-lg rotate-[4deg] transition-transform hover:rotate-[12deg] hover:z-10 hover:scale-110 z-0">
             <div className="w-full h-24 bg-gray-200 mb-2 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw82?q=80&w=200')] bg-cover" />
         </div>
    </div>
);

// 11. Reflection Effect
export const ReflectionImage = () => (
    <div className="group w-full h-48 flex flex-col items-center perspective-1000">
         <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=500')] bg-cover bg-center rounded-t-lg group-hover:-translate-y-2 transition-transform duration-500" />
         <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=500')] bg-cover bg-center scale-y-[-1] opacity-20 mask-image-gradient" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' }} />
    </div>
);

// 12. Parallax Scroll Image (Needs scroll context, simulating hover)
export const ParallaxHover = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg group">
        <div className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=500')] bg-cover bg-center transition-transform duration-1000 group-hover:translate-y-4 group-hover:translate-x-4" />
    </div>
);

// 13. Image Pixelation
export const PixelateImage = () => (
     <div className="w-full h-48 overflow-hidden rounded-lg relative group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500')] bg-cover bg-center transition-all duration-300 group-hover:blur-md scale-110" />
        {/* Real pixelation requires Canvas/WebGL, blurring as fallback */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-mono bg-black/50">PIXELATED</div>
    </div>
);

// 14. Color Overlay Fade
export const OverlayFade = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg relative group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=500')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black font-bold">
            OVERLAY
        </div>
    </div>
);

// 15. Border Frame Draw
export const BorderDrawImage = () => (
    <div className="relative w-full h-48 p-4 group">
        <div className="absolute inset-0 border-2 border-white/20 group-hover:border-primary transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
        <div className="absolute top-0 right-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-primary group-hover:h-full transition-all duration-500" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=500')] bg-cover bg-center" />
    </div>
);

// 16. Rotate In
export const RotateInImage = () => (
    <div className="w-full h-48 overflow-hidden rounded-lg perspective-1000 group">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500')] bg-cover bg-center transition-transform duration-500 origin-bottom group-hover:rotate-x-10" />
    </div>
);

// 17. Split Image (CSS Clip)
export const SplitImage = () => (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140884-074bf86ee91c?q=80&w=500')] bg-cover bg-center transition-transform duration-500 group-hover:-translate-x-2" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140884-074bf86ee91c?q=80&w=500')] bg-cover bg-center transition-transform duration-500 group-hover:translate-x-2" style={{ clipPath: 'inset(0 0 0 50%)' }} />
        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-100 -z-10" />
    </div>
);

// 18. Gallery Stack (Auto-play)
export const GalleryStack = () => (
    <div className="relative w-full h-48 flex items-center justify-center">
        {[0, 1, 2].map(i => (
            <motion.div
                key={i}
                className="absolute w-40 h-32 bg-surface-300 rounded border border-white/10 shadow-lg bg-[url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=200')]"
                animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [i*5, i*5+5, i*5],
                    zIndex: i
                }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 1 }}
            />
        ))}
    </div>
);

// 19. Ink InkSpread (Mask Image)
export const InkSpread = () => (
    <div className="w-full h-48 bg-black rounded-lg overflow-hidden relative group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=500')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white font-bold mix-blend-overlay text-4xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-150 group-hover:scale-100">INK</span>
        </div>
    </div>
);

// 20. Lens Flare Hover
export const LensFlare = () => (
    <div className="w-full h-48 rounded-lg overflow-hidden relative group bg-black">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534849144194-b446a45f020d?q=80&w=500')] bg-cover bg-center opacity-80" />
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/30 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
);

