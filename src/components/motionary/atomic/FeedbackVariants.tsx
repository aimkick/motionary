'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, Info, Bell } from 'lucide-react';

// 1. Success Checkmark (Modal)
export const SuccessModal = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="px-4 py-2 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30">Success</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
                        className="absolute top-full mt-2 left-0 w-full bg-surface-200 p-4 rounded border border-green-500/50 flex flex-col items-center z-20"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 text-black">
                            <Check size={20} />
                        </div>
                        <span className="text-sm font-bold text-green-500">Complete!</span>
                        <button onClick={(e) => { e.stopPropagation(); setShow(false); }} className="mt-2 text-xs text-white/50 hover:text-white">Close</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 2. Error Shake Toast
export const ErrorToast = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="px-4 py-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30">Error</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute top-0 left-full ml-2 bg-red-900 border border-red-500 text-white px-3 py-2 rounded flex items-center gap-2 whitespace-nowrap z-20"
                    >
                        <X size={14} /> Failed
                        <motion.div 
                            animate={{ width: 0 }} 
                            transition={{ duration: 2 }} 
                            className="absolute bottom-0 left-0 h-0.5 bg-white"
                            onAnimationComplete={() => setShow(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 3. Warning Pulsing Alert
export const WarningAlert = () => (
    <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/50 rounded text-yellow-500">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
            <AlertTriangle size={16} />
        </motion.div>
        <span className="text-xs font-medium">Warning</span>
    </div>
);

// 4. Info Slide Down
export const InfoBanner = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="overflow-hidden">
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                        className="bg-blue-500/20 border-l-4 border-blue-500 p-2 text-xs text-blue-200 flex justify-between items-center"
                    >
                        <span>System Update Available</span>
                        <button onClick={() => setOpen(false)}><X size={12}/></button>
                    </motion.div>
                )}
            </AnimatePresence>
            {!open && <button onClick={() => setOpen(true)} className="text-xs text-blue-500 mt-2">Show Info</button>}
        </div>
    )
}

// 5. Notification Bell Shake
export const BellShake = () => (
    <motion.div 
        className="relative"
        whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
    >
        <Bell size={24} />
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
    </motion.div>
);

// 6. Confetti Burst (CSS)
export const ConfettiBurst = () => {
    const [burst, setBurst] = useState(false);
    return (
        <button onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 1000); }} className="relative px-4 py-2 bg-primary text-black rounded font-bold">
            Celebrate
            {burst && [...Array(12)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2"
                    initial={{ scale: 0 }}
                    animate={{ 
                        x: (Math.random() - 0.5) * 100, 
                        y: (Math.random() - 0.5) * 100, 
                        scale: 0, 
                        opacity: 0 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            ))}
        </button>
    )
}

// 7. Typing Indicator (Chat)
export const TypingIndicator = () => (
    <div className="flex gap-1 p-2 bg-surface-100 rounded-full w-fit">
        {[0, 1, 2].map(i => (
            <motion.div 
                key={i} 
                className="w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 8. Signal Strength
export const SignalStrength = () => (
    <div className="flex items-end gap-0.5">
        {[1,2,3,4].map(i => (
            <div key={i} className={`w-1 bg-white ${i > 2 ? 'opacity-20' : ''}`} style={{ height: i * 4 }} />
        ))}
    </div>
);

// 9. 404 Glitch Text
export const Error404 = () => (
    <div className="font-mono font-bold text-2xl relative group cursor-default">
        404
        <span className="absolute top-0 left-0 text-red-500 opacity-0 group-hover:opacity-50 translate-x-[-2px] animate-pulse">404</span>
        <span className="absolute top-0 left-0 text-blue-500 opacity-0 group-hover:opacity-50 translate-x-[2px] animate-pulse delay-75">404</span>
    </div>
);

// 10. Empty State (Box Open)
export const EmptyBox = () => (
    <div className="w-12 h-12 border-2 border-dashed border-white/20 rounded flex items-center justify-center">
        <span className="text-xs text-white/20">Empty</span>
    </div>
);

// 11. Pulse Beacon
export const PulseBeacon = () => (
    <div className="relative w-4 h-4 bg-green-500 rounded-full">
        <motion.div 
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        />
    </div>
);

// 12. Lock Shake (Access Denied)
export const LockShake = () => {
    const [denied, setDenied] = useState(false);
    return (
        <button 
            onClick={() => { setDenied(true); setTimeout(() => setDenied(false), 500); }}
            className="p-2 bg-surface-100 rounded border border-white/10"
        >
            <motion.div animate={denied ? { x: [-5, 5, -5, 5, 0] } : {}}>
                🔒
            </motion.div>
        </button>
    )
}

// 13. Countdown Timer (Urgency)
export const UrgencyTimer = () => (
    <div className="text-red-500 font-mono font-bold border border-red-500/30 px-2 py-1 rounded bg-red-500/10">
        00:59
    </div>
);

// 14. Online Badge
export const OnlineBadge = () => (
    <div className="relative inline-block">
        <div className="w-8 h-8 bg-gray-500 rounded-full" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
    </div>
);

// 15. Offline Overlay
export const OfflineOverlay = () => (
    <div className="w-full h-16 bg-surface-100 relative rounded overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
            <span className="text-xs font-bold text-white">OFFLINE</span>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-600" />
    </div>
);

// 16. Skeleton Card Loading
export const SkeletonCard = () => (
    <div className="w-full p-2 bg-surface-100 rounded border border-white/5 space-y-2">
        <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
        <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
    </div>
);

// 17. Upload Complete Check
export const UploadComplete = () => (
    <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500">
        <motion.svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M20 6L9 17l-5-5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        </motion.svg>
    </div>
);

// 18. Battery Low Alert
export const BatteryLow = () => (
    <div className="w-8 h-4 border border-red-500 rounded-sm p-0.5 relative">
        <div className="h-full w-[10%] bg-red-500 animate-pulse" />
        <div className="absolute top-1/2 -right-1 w-0.5 h-2 bg-red-500 -translate-y-1/2 rounded-r-sm" />
    </div>
);

// 19. Fingerprint Scan
export const FingerprintScan = () => (
    <div className="w-10 h-12 border border-white/20 rounded-full relative overflow-hidden flex items-center justify-center">
        <div className="text-2xl text-white/20">ID</div>
        <motion.div className="absolute inset-0 bg-primary/20 border-b-2 border-primary" animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} />
    </div>
);

// 20. Eye Tracking (Privacy)
export const EyeTracking = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div className="w-12 h-6 bg-white rounded-full border-2 border-black relative overflow-hidden" onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setX((e.clientX - rect.left - 24) / 5);
            setY((e.clientY - rect.top - 12) / 5);
        }}>
            <div className="w-4 h-4 bg-black rounded-full absolute top-1 left-4 transition-transform duration-75" style={{ transform: `translate(${x}px, ${y}px)` }} />
        </div>
    )
}

