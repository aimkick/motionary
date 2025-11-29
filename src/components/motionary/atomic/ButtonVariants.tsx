'use client';

import React from 'react';
import { motion } from 'framer-motion';

// 1. Neon Button
export const NeonButton = () => (
  <motion.button
    className="px-8 py-3 text-primary border border-primary rounded shadow-[0_0_10px_rgba(0,243,255,0.5)] hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.8)] transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Neon Pulse
  </motion.button>
);

// 2. Glitch Button
export const GlitchButton = () => (
  <button className="relative px-8 py-3 bg-surface-200 text-white font-mono overflow-hidden group">
    <span className="relative z-10 group-hover:translate-x-1 transition-transform">GLITCH</span>
    <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 translate-x-[-2px] translate-y-[2px] mix-blend-difference transition-opacity duration-75"></span>
    <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 translate-x-[2px] translate-y-[-2px] mix-blend-difference transition-opacity duration-75 delay-75"></span>
  </button>
);

// 3. Cyberpunk Button
export const CyberButton = () => (
  <button className="relative px-10 py-4 bg-transparent border border-yellow-400 text-yellow-400 font-bold tracking-widest uppercase hover:bg-yellow-400 hover:text-black transition-colors duration-200"
    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
  >
    CYBERPUNK
  </button>
);

// 4. Spotlight Button
export const SpotLightButton = () => (
    <button className="relative px-8 py-3 rounded-full bg-surface-300 text-white overflow-hidden group">
        <span className="relative z-10">Spotlight</span>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </button>
);

// 5. Elastic Button
export const ElasticButton = () => (
    <motion.button 
        className="px-8 py-3 bg-secondary text-white rounded-lg"
        whileHover={{ scaleX: 1.2, scaleY: 0.9 }}
        whileTap={{ scaleX: 0.9, scaleY: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        Elastic
    </motion.button>
);

// 6. Shimmer Button
export const ShimmerButton = () => (
    <button className="relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md overflow-hidden group">
        <span className="relative z-10">Shimmer</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-pulse-slow" />
    </button>
);

// 7. Blob Button (Simplified for CSS performance)
export const BlobButton = () => (
    <motion.button
        className="px-8 py-3 bg-[#ff0055] text-white rounded-full"
        animate={{ 
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
        Morphing Blob
    </motion.button>
);

// 8. Ghost Button
export const GhostButton = () => (
    <button className="px-8 py-3 border border-white/30 text-white/70 rounded hover:border-white hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        Ghost Hover
    </button>
);

// 9. Send Button (Micro-interaction)
export const SendButton = () => {
    const [sent, setSent] = React.useState(false);
    return (
        <motion.button
            className={`px-8 py-3 rounded-full text-white flex items-center justify-center gap-2 overflow-hidden ${sent ? 'bg-green-500' : 'bg-blue-600'}`}
            onClick={() => { setSent(true); setTimeout(() => setSent(false), 2000); }}
            layout
        >
            <motion.span layout>{sent ? "Sent!" : "Send"}</motion.span>
            {sent && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.span>}
        </motion.button>
    )
}

// 10. 3D Tilt Button
export const TiltButton = () => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        setRotateX(yPct * -20);
        setRotateY(xPct * 20);
    };

    return (
        <motion.button
            ref={ref}
            className="px-8 py-4 bg-surface-100 border border-white/10 text-white rounded-xl shadow-xl transform-style-3d perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            <span className="block transform translate-z-10">3D Tilt</span>
        </motion.button>
    )
}

