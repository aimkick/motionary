'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Typewriter Effect
export const TypewriterText = ({ text = "Coding the future..." }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) clearInterval(timer);
        }, 100);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="font-mono text-xl">
            {displayedText}
            <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    );
};

// 2. Scramble Text (Hacker Effect)
export const ScrambleText = ({ text = "DECRYPTING" }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    const scramble = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(text.split("").map((letter, index) => {
                if (index < iterations) return text[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));
            
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };

    return (
        <span 
            onMouseEnter={scramble}
            className="font-mono text-xl cursor-default hover:text-primary transition-colors"
        >
            {display}
        </span>
    );
};

// 3. Gradient Text
export const GradientText = ({ text = "Unicorn Power" }) => (
    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
        {text}
    </span>
);

// 4. Staggered Letter Reveal
export const StaggerText = ({ text = "Staggered Reveal" }) => (
    <div className="overflow-hidden">
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.05, ease: "backOut" }}
                className="inline-block text-2xl font-bold"
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </div>
);

// 5. Blur Reveal
export const BlurText = ({ text = "Focusing..." }) => (
    <motion.h2
        initial={{ filter: "blur(20px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-3xl font-light"
    >
        {text}
    </motion.h2>
);

// 6. Masked Video Text
export const VideoText = ({ text = "OCEAN" }) => (
    <div className="relative">
         <h1 className="text-8xl font-black text-transparent bg-clip-text bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODliZTViODliZTViODliZTViODliZTViODliZTViODliZTVi/3o6Zt481isNVuQI1l6/giphy.gif')] bg-cover bg-center tracking-tighter">
            {text}
        </h1>
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
    </div>
);

// 7. 3D Rotate Text
export const RotateText = ({ text = "Flip Me" }) => (
    <motion.div
        whileHover={{ rotateX: 360 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-secondary perspective-1000 cursor-pointer"
    >
        {text}
    </motion.div>
);

// 8. Wavy Text
export const WavyText = ({ text = "Wavy Vibes" }) => (
    <div className="flex">
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    delay: i * 0.1,
                    ease: "easeInOut" 
                }}
                className="text-2xl font-medium"
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </div>
);

// 9. Spotlight Text (CSS Mask)
export const SpotlightText = () => (
    <div className="relative text-4xl font-bold text-[#333] cursor-default group">
        <span className="block">Hidden in Dark</span>
        <span 
            className="absolute top-0 left-0 text-white clip-path-circle transition-all duration-300 group-hover:clip-path-circle-open"
            style={{ 
                clipPath: "circle(0% at 50% 50%)", 
                backgroundImage: "linear-gradient(45deg, #ff00cc, #3333ff)", 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
            }} 
        >
            Hidden in Dark
        </span>
        <style jsx>{`
            .group:hover span:last-child {
                clip-path: circle(100% at 50% 50%) !important;
            }
        `}</style>
    </div>
);

// 10. Glitch Text
export const GlitchTextEffect = ({ text = "System Failure" }) => (
    <div className="relative inline-block text-4xl font-black text-white group cursor-pointer">
        <span className="relative z-10">{text}</span>
        <span className="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-0 group-hover:opacity-70 animate-pulse">{text}</span>
        <span className="absolute top-0 left-0 ml-[2px] text-blue-500 opacity-0 group-hover:opacity-70 animate-pulse delay-75">{text}</span>
    </div>
);

