'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Fade Transition
export const FadePage = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200 text-white"
                >
                    Page {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 2. Slide Left
export const SlideLeft = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='popLayout'>
                <motion.div 
                    key={key}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-100 border border-white/5"
                >
                    Slide {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 3. Scale Up
export const ScaleUp = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary/20 text-primary font-bold"
                >
                    Scale {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 4. Wipe Reveal
export const WipeReveal = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0 0 0)" }}
                    exit={{ clipPath: "inset(0 0 0 100%)", zIndex: 10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-secondary text-white"
                >
                    Wipe {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 5. Flip Transition
export const FlipTransition = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden perspective-1000 cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-300 border border-white/10"
                >
                    Flip {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 6. Circle Mask
export const CircleMask = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "circle(0% at 50% 50%)" }}
                    animate={{ clipPath: "circle(100% at 50% 50%)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-accent/20 text-accent"
                >
                    Circle {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 7. Blinds Effect
export const BlindsEffect = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex" onClick={() => setKey(k => k+1)}>
            {[0,1,2,3,4].map(i => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="h-full flex-1 bg-white/10 border-r border-black"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Blinds {key}</div>
        </div>
    )
}

// 8. Dissolve Pixel
export const DissolvePixel = () => {
    const [key, setKey] = useState(0);
    // Simplified CSS dissolve simulation
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center bg-[url('/grid.svg')] bg-cover"
                >
                    <span className="bg-black p-1">Dissolve {key}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 9. Drawer Up
export const DrawerUp = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence>
                <motion.div 
                    key={key}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }} // Or stay and get covered
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200 border-t border-white/20"
                >
                    Drawer {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 10. Curtain Open
export const CurtainOpen = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex" onClick={() => setOpen(!open)}>
            <motion.div className="h-full w-1/2 bg-red-900 z-10" animate={{ x: open ? "-100%" : "0%" }} transition={{ duration: 0.8 }} />
            <motion.div className="h-full w-1/2 bg-red-900 z-10" animate={{ x: open ? "100%" : "0%" }} transition={{ duration: 0.8 }} />
            <div className="absolute inset-0 flex items-center justify-center">Showtime!</div>
        </div>
    )
}

// 11. Zoom Out Fade
export const ZoomOutFade = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-blue-900/20"
                >
                    Zoom {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 12. Folder Tab
export const FolderTab = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer pt-4" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="absolute inset-0 top-4 flex items-center justify-center bg-surface-100 rounded-t-xl border-t border-x border-white/10"
                >
                    Tab {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 13. Glitch Transition
export const GlitchTransition = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ x: -100, opacity: 0, skewX: 20 }}
                    animate={{ x: 0, opacity: 1, skewX: 0 }}
                    exit={{ x: 100, opacity: 0, skewX: -20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-200"
                >
                    Glitch {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 14. Morph Shape
export const MorphPage = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex items-center justify-center" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ borderRadius: "100%", width: 10, height: 10 }}
                    animate={{ borderRadius: "0%", width: "100%", height: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 flex items-center justify-center"
                >
                    <span className="text-white">Morph {key}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 15. Tiles Reveal
export const TilesReveal = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer grid grid-cols-4 grid-rows-2" onClick={() => setKey(k => k+1)}>
            {[...Array(8)].map((_, i) => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="bg-primary/20 border border-black"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Tiles {key}</div>
        </div>
    )
}

// 16. Clock Wipe
export const ClockWipe = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ clipPath: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 0deg)" }}
                    animate={{ clipPath: "conic-gradient(from 0deg at 50% 50%, black 0deg, black 360deg)" }} // Simulate wipe with CSS not fully possible, fallback to circle or use specialized SVG
                    className="absolute inset-0 flex items-center justify-center bg-surface-200"
                >
                    Clock {key} (Sim)
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 17. Crossfade Blur
export const CrossfadeBlur = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    exit={{ filter: "blur(20px)", opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-900 to-black"
                >
                    Blur {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 18. Lines Slide
export const LinesSlide = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer flex flex-col" onClick={() => setKey(k => k+1)}>
            {[0,1,2,3].map(i => (
                <motion.div 
                    key={`${key}-${i}`}
                    className="w-full flex-1 bg-surface-100 border-b border-black"
                    initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">Lines {key}</div>
        </div>
    )
}

// 19. Rotate Cube
export const RotateCube = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden perspective-1000 cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center bg-surface-300"
                >
                    Cube {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 20. Elastic Snap
export const ElasticSnap = () => {
    const [key, setKey] = useState(0);
    return (
        <div className="relative w-full h-24 bg-black overflow-hidden cursor-pointer" onClick={() => setKey(k => k+1)}>
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={key}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary/10 border border-primary/30"
                >
                    Snap {key}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

