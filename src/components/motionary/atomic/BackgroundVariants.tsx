'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Mesh Gradient (Animated)
export const MeshGradient = () => (
    <div className="w-full h-full absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,1),rgba(124,58,237,0.5),transparent)] animate-spin-slow opacity-50" />
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,1),rgba(37,99,235,0.5),transparent)] animate-spin-slow animation-delay-2000 opacity-50 mix-blend-overlay" style={{ animationDirection: 'reverse' }} />
    </div>
);

// 2. Grid Moving
export const MovingGrid = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-20"
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
    </div>
);

// 3. Dot Matrix
export const DotMatrix = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
    </div>
);

// 4. Aurora Borealis
export const AuroraBg = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl filter blur-3xl">
        <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-green-500/30" animate={{ x: [-50, 50, -50], skewX: [-10, 10, -10] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-full h-1/2 bg-purple-500/30" animate={{ x: [50, -50, 50], skewX: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity }} />
    </div>
);

// 5. Neon Lines
export const NeonLines = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl flex items-center justify-center">
        {[1,2,3,4,5].map(i => (
            <motion.div 
                key={i}
                className="absolute w-full h-[2px] bg-primary shadow-[0_0_10px_#00f3ff]"
                style={{ top: `${i * 20}%` }}
                animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
        ))}
    </div>
);

// 6. Starfield (CSS)
export const StarfieldCSS = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: Math.random()*2 + 1, repeat: Infinity, delay: Math.random() }}
            />
        ))}
    </div>
);

// 7. Gradient Wave
export const GradientWave = () => (
    <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-black"
            animate={{ opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    </div>
);

// 8. Hexagon Pattern
export const HexagonPattern = () => (
    <div className="w-full h-full absolute inset-0 bg-surface-100 overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'40\' viewBox=\'0 0 24 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10s-10 4.477-10 10v20c0 5.523 4.477 10 10 10z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
    </div>
);

// 9. Radial Pulse
export const RadialPulse = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl flex items-center justify-center">
        {[1,2,3].map(i => (
            <motion.div 
                key={i}
                className="absolute border border-primary/30 rounded-full"
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{ width: "150%", height: "150%", opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            />
        ))}
    </div>
);

// 10. Noise Static (Animated)
export const AnimatedNoise = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-[spin_0.5s_linear_infinite]" />
    </div>
);

// 11. Circuit Board
export const CircuitBoard = () => (
    <div className="w-full h-full absolute inset-0 bg-surface-200 overflow-hidden rounded-xl">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M10 10h30v10h-30z" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="10" cy="10" r="2" fill="white"/>
                <circle cx="40" cy="20" r="2" fill="white"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
    </div>
);

// 12. Fog Flow
export const FogFlow = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

// 13. Stripes Moving
export const MovingStripes = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.1)_50%,rgba(255,255,255,.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[spin_2s_linear_infinite]" />
    </div>
);

// 14. Rain Effect
export const RainEffect = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-[1px] h-10 bg-blue-400/50"
                style={{ left: `${Math.random()*100}%`, top: -40 }}
                animate={{ top: "100%" }}
                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random(), ease: "linear" }}
            />
        ))}
    </div>
);

// 15. Fire Ember
export const FireEmbers = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
                style={{ left: `${Math.random()*100}%`, bottom: -10 }}
                animate={{ bottom: "100%", opacity: 0, x: Math.random()*20 - 10 }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() }}
            />
        ))}
    </div>
);

// 16. Bokeh Blur
export const BokehBlur = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 blur-xl"
                style={{ 
                    width: Math.random()*50 + 20, 
                    height: Math.random()*50 + 20,
                    left: `${Math.random()*80}%`,
                    top: `${Math.random()*80}%`
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + Math.random(), repeat: Infinity }}
            />
        ))}
    </div>
);

// 17. Cyber Grid (Perspective)
export const CyberGrid = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl perspective-500">
        <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-30 origin-bottom"
            style={{ rotateX: 60 }}
            animate={{ backgroundPositionY: ["0px", "40px"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black" />
    </div>
);

// 18. Spotlight Follow (Global) - Simplified for component
export const SpotlightFollow = () => {
    // Needs mouse tracking logic usually, simplified here
    return (
        <div className="w-full h-full absolute inset-0 bg-surface-100 overflow-hidden rounded-xl flex items-center justify-center group">
            <div className="w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    )
}

// 19. Vignette Pulse
export const VignettePulse = () => (
    <div className="w-full h-full absolute inset-0 bg-white overflow-hidden rounded-xl">
        <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,black_150%)]"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </div>
);

// 20. TV Glitch Lines
export const TvGlitchBg = () => (
    <div className="w-full h-full absolute inset-0 bg-black overflow-hidden rounded-xl">
        <motion.div 
            className="absolute w-full h-[2px] bg-white/20"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute w-full h-[5px] bg-white/10"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
        />
    </div>
);

