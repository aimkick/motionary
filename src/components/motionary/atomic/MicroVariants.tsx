'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Heart, Star, Volume2, ThumbsUp, Share2, Trash2, MoreHorizontal, Check, X, Upload } from 'lucide-react';

// 1. Day/Night Toggle
export const DayNightToggle = () => {
    const [isDark, setIsDark] = useState(true);
    return (
        <button 
            onClick={() => setIsDark(!isDark)}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${isDark ? 'bg-surface-300' : 'bg-blue-400'}`}
        >
            <motion.div 
                layout
                className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? 'bg-black' : 'bg-white'}`}
            >
                {isDark ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-yellow-500" />}
            </motion.div>
        </button>
    )
}

// 2. Elastic Toggle
export const ElasticToggle = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className="flex items-center cursor-pointer" onClick={() => setIsOn(!isOn)}>
            <div className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${isOn ? 'bg-primary' : 'bg-surface-200'}`}>
                <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    className="bg-white w-6 h-6 rounded-full shadow-md"
                />
            </div>
        </div>
    )
}

// 3. Checkmark Draw
export const CheckDraw = () => {
    const [checked, setChecked] = useState(false);
    return (
        <button onClick={() => setChecked(!checked)} className={`w-8 h-8 border-2 rounded flex items-center justify-center transition-colors ${checked ? 'border-primary bg-primary' : 'border-white/30'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {checked && <motion.path d="M20 6L9 17l-5-5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2 }} />}
            </svg>
        </button>
    )
}

// 4. Heart Like (Explosion)
export const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="relative p-2">
            <Heart 
                className={`w-8 h-8 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-white/50'}`} 
            />
            {liked && (
                <>
                    <motion.div className="absolute inset-0 border-2 border-red-500 rounded-full" initial={{ scale: 0, opacity: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 0.5 }} />
                    {[...Array(6)].map((_, i) => (
                         <motion.div 
                            key={i} 
                            className="absolute w-1 h-1 bg-red-500 rounded-full left-1/2 top-1/2" 
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{ x: Math.cos(i * 60 * Math.PI / 180) * 20, y: Math.sin(i * 60 * Math.PI / 180) * 20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </>
            )}
        </button>
    )
}

// 5. Star Rating
export const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className="flex gap-1">
            {[1,2,3,4,5].map(star => (
                <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setRating(star)}
                    className={`transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                >
                    <Star size={20} />
                </motion.button>
            ))}
        </div>
    )
}

// 6. Volume Slider (Vertical)
export const VolumeSlider = () => {
    const [vol, setVol] = useState(50);
    return (
        <div className="h-32 w-8 bg-surface-100 rounded-full relative flex items-end justify-center pb-2 overflow-hidden border border-white/10">
            <div className="absolute bottom-0 w-full bg-white/10 rounded-b-full" style={{ height: `${vol}%` }} />
            <input 
                type="range" 
                min="0" max="100" 
                value={vol} onChange={e => setVol(Number(e.target.value))} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-ns-resize" 
                orient="vertical" 
                style={{ appearance: 'slider-vertical' } as any}
            />
            <Volume2 size={16} className="text-white/70 z-10" />
        </div>
    )
}

// 7. Delete Animation
export const TrashDelete = () => {
    const [deleted, setDeleted] = useState(false);
    return (
        <button 
            onClick={() => { setDeleted(true); setTimeout(() => setDeleted(false), 2000); }}
            className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-colors"
        >
            <AnimatePresence mode='wait'>
                {!deleted ? (
                    <motion.div key="trash" exit={{ scale: 0, rotate: 180 }}><Trash2 size={18} /></motion.div>
                ) : (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={18} /></motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

// 8. Share Fan
export const ShareFan = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center z-20 relative">
                <Share2 size={18} />
            </button>
            {[1,2,3].map((i) => (
                <motion.button
                    key={i}
                    className="absolute top-0 left-0 w-10 h-10 bg-surface-200 rounded-full flex items-center justify-center border border-white/10 -z-10"
                    animate={{ x: open ? i * 50 : 0, opacity: open ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                >
                    <span className="text-xs">{i}</span>
                </motion.button>
            ))}
        </div>
    )
}

// 9. More Options (Dots)
export const MoreOptions = () => (
    <button className="group w-10 h-6 flex items-center justify-center gap-1 hover:gap-2 transition-all duration-300 bg-surface-100 rounded-full">
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-white rounded-full" />
    </button>
);

// 10. Circular Slider (Simulated)
export const CircularSlider = () => (
    <div className="w-16 h-16 rounded-full border-4 border-surface-200 relative flex items-center justify-center">
         <div className="absolute inset-0 border-4 border-primary rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 50%)' }} />
         <div className="w-4 h-4 bg-white rounded-full absolute top-0 right-0 translate-x-1/2 translate-y-1/2 shadow-md cursor-pointer" />
         <span className="text-xs font-bold">75%</span>
    </div>
);

// 11. Download Button
export const DownloadButton = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
    return (
        <button 
            onClick={() => {
                if(status === 'idle') {
                    setStatus('loading');
                    setTimeout(() => setStatus('done'), 2000);
                    setTimeout(() => setStatus('idle'), 4000);
                }
            }}
            className={`relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300 ${status === 'done' ? 'bg-green-500' : 'bg-surface-200 border border-white/10'}`}
        >
            <span className="relative z-10 text-sm font-medium">
                {status === 'idle' && "Download"}
                {status === 'loading' && "Downloading..."}
                {status === 'done' && "Complete"}
            </span>
            {status === 'loading' && (
                <motion.div 
                    className="absolute inset-0 bg-primary/20"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                />
            )}
        </button>
    )
}

// 12. Copy Feedback (Icon)
export const CopyIcon = () => {
    const [copied, setCopied] = useState(false);
    return (
        <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}>
            <AnimatePresence mode='wait'>
                {copied ? (
                    <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-green-500 font-bold">✓</motion.span>
                ) : (
                    <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-white/50 hover:text-white font-mono text-xs">CPY</motion.span>
                )}
            </AnimatePresence>
        </button>
    )
}

// 13. Sortable Item (Drag Handle)
export const DragHandle = () => (
    <div className="flex items-center gap-3 p-3 bg-surface-100 rounded border border-white/5 w-full cursor-grab active:cursor-grabbing hover:border-white/20 transition-colors">
        <div className="flex flex-col gap-0.5 opacity-50">
            <div className="w-4 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
        </div>
        <span className="text-sm">Drag Me</span>
    </div>
);

// 14. Swipe Switch
export const SwipeSwitch = () => {
    const [on, setOn] = useState(false);
    return (
        <motion.div 
            className={`w-20 h-8 rounded-full flex items-center px-1 cursor-pointer ${on ? 'bg-green-500 justify-end' : 'bg-red-500 justify-start'}`}
            onClick={() => setOn(!on)}
            layout
        >
            <motion.div layout className="w-6 h-6 bg-white rounded-full shadow-sm" />
        </motion.div>
    )
}

// 15. Reaction Picker
export const ReactionPicker = () => (
    <div className="group relative">
        <button className="w-8 h-8 bg-surface-100 rounded-full text-white/50 hover:text-white">☺</button>
        <div className="absolute bottom-full left-0 mb-2 flex gap-1 bg-surface-200 p-1 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
            <button className="hover:scale-125 transition-transform">👍</button>
            <button className="hover:scale-125 transition-transform">❤️</button>
            <button className="hover:scale-125 transition-transform">😂</button>
        </div>
    </div>
);

// 16. Accordion Chevron
export const AccordionChevron = () => {
    const [open, setOpen] = useState(false);
    return (
        <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-2 bg-surface-100 rounded text-sm">
            <span>Details</span>
            <motion.span animate={{ rotate: open ? 180 : 0 }}>▼</motion.span>
        </button>
    )
}

// 17. Upload Progress Ring
export const UploadRing = () => (
    <div className="relative w-10 h-10 flex items-center justify-center">
        <Upload size={14} className="text-white/50" />
        <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
            <motion.circle 
                cx="20" cy="20" r="18" stroke="#00f3ff" strokeWidth="2" fill="none" 
                strokeDasharray="113"
                strokeDashoffset="113"
                animate={{ strokeDashoffset: 20 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    </div>
);

// 18. Pin/Unpin
export const PinToggle = () => {
    const [pinned, setPinned] = useState(false);
    return (
        <button onClick={() => setPinned(!pinned)} className={`transition-all ${pinned ? 'text-primary -rotate-45' : 'text-white/30'}`}>
            📌
        </button>
    )
}

// 19. Brightness Control
export const BrightnessControl = () => (
    <div className="flex items-center gap-2 text-white/50">
        <Sun size={14} />
        <div className="w-24 h-1 bg-surface-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-white rounded-full" />
        </div>
        <Sun size={18} className="text-white" />
    </div>
);

// 20. Confetti Button
export const ConfettiBtn = () => (
    <button className="px-4 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold rounded hover:scale-105 transition-transform">
        PARTY
    </button>
);

