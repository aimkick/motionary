'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Tablet, Watch, Battery, Wifi, Signal, Bluetooth, Lock, Unlock, Camera, Bell, Moon, Sun, Grid, Search, ArrowLeft, Home } from 'lucide-react';

// 1. Dynamic Island Morph
export const DynamicIsland = () => {
    const [state, setState] = useState<'idle' | 'call' | 'music'>('idle');
    return (
        <div className="flex gap-2">
            <button onClick={() => setState('idle')} className="text-[10px] bg-surface-100 px-2 rounded">Idle</button>
            <button onClick={() => setState('call')} className="text-[10px] bg-surface-100 px-2 rounded">Call</button>
            <button onClick={() => setState('music')} className="text-[10px] bg-surface-100 px-2 rounded">Music</button>
            <motion.div 
                layout
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-full flex items-center justify-center text-white overflow-hidden"
                animate={{ 
                    width: state === 'idle' ? 80 : state === 'call' ? 200 : 150,
                    height: state === 'idle' ? 24 : state === 'call' ? 40 : 40,
                    borderRadius: 20
                }}
            >
                <motion.div layout className="flex items-center gap-4 px-4 w-full justify-between">
                     {state === 'call' && (
                        <>
                            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /><span className="text-xs">Incoming...</span></div>
                            <div className="flex gap-2"><div className="w-6 h-6 bg-red-500 rounded-full" /><div className="w-6 h-6 bg-green-500 rounded-full" /></div>
                        </>
                     )}
                     {state === 'music' && (
                        <>
                            <div className="w-4 h-4 bg-primary rounded" />
                            <div className="flex-1 h-1 bg-white/20 rounded overflow-hidden"><div className="w-1/2 h-full bg-white" /></div>
                        </>
                     )}
                </motion.div>
            </motion.div>
        </div>
    )
}

// 2. Mobile Notch Reveal
export const NotchReveal = () => (
    <div className="relative w-32 h-48 bg-black rounded-2xl border-4 border-surface-300 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20" />
        <motion.div 
            className="w-full h-full bg-white text-black flex items-center justify-center pt-6"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", damping: 20 }}
        >
            Swipe Up
        </motion.div>
    </div>
);

// 3. Phone Rotate Landscape
export const PhoneRotate = () => (
    <motion.div 
        className="w-10 h-16 border-2 border-white/50 rounded-lg flex items-center justify-center"
        animate={{ rotate: 90 }}
        transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
    >
        <Smartphone size={20} />
    </motion.div>
);

// 4. Laptop Open/Close
export const LaptopHinge = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="perspective-1000 cursor-pointer" onClick={() => setOpen(!open)}>
            <motion.div 
                className="w-24 h-16 bg-surface-200 rounded-t-lg border border-white/10 origin-bottom relative"
                animate={{ rotateX: open ? 0 : -90 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-[8px]">Screen</span></div>
            </motion.div>
            <div className="w-24 h-2 bg-surface-300 rounded-b-lg" />
        </div>
    )
}

// 5. Fingerprint Scan (Screen)
export const ScreenFingerprint = () => (
    <div className="relative w-12 h-16 bg-black border border-white/10 rounded-lg flex items-center justify-center overflow-hidden group">
        <div className="w-6 h-8 border-2 border-white/20 rounded-full flex items-center justify-center">
            <motion.div 
                className="w-full h-[2px] bg-green-500 absolute top-0"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div className="w-4 h-5 border border-green-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    </div>
);

// 6. Face ID Scan
export const FaceID = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="text-blue-500">
            <ScanFaceIcon />
        </motion.div>
    </div>
);
const ScanFaceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z" />
    </svg>
)

// 7. Battery Charge
export const BatteryCharge = () => (
    <div className="relative">
        <Battery size={24} className="text-white/50" />
        <motion.div 
            className="absolute top-[3px] left-[2px] h-[10px] bg-green-500 rounded-sm"
            animate={{ width: ["0%", "80%"] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div className="absolute -right-2 top-0 text-green-500" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity }}>
            <span className="text-xs">⚡</span>
        </motion.div>
    </div>
);

// 8. Airplane Mode
export const AirplaneToggle = () => {
    const [on, setOn] = useState(false);
    return (
        <button 
            onClick={() => setOn(!on)}
            className={`w-12 h-8 rounded-full flex items-center px-1 transition-colors ${on ? 'bg-orange-500 justify-end' : 'bg-surface-200 justify-start'}`}
        >
            <motion.div layout className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">✈️</span>
            </motion.div>
        </button>
    )
}

// 9. App Icon Squircle
export const AppSquircle = () => (
    <motion.div 
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white cursor-pointer"
        initial={{ borderRadius: "25%" }}
        whileHover={{ borderRadius: "40%", scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Grid size={20} />
    </motion.div>
);

// 10. Notification Stack
export const NotificationStack = () => {
    const [count, setCount] = useState(3);
    return (
        <div className="relative w-full h-16 flex items-center justify-center cursor-pointer" onClick={() => setCount(c => c > 0 ? c - 1 : 3)}>
            {[...Array(count)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="absolute w-32 h-10 bg-surface-100 rounded-lg border border-white/10 flex items-center px-2 gap-2 shadow-lg"
                    initial={{ scale: 0.8, y: 0 }}
                    animate={{ scale: 1 - i * 0.05, y: i * 5, zIndex: 10 - i }}
                >
                    <div className="w-4 h-4 bg-blue-500 rounded" />
                    <div className="h-2 w-16 bg-white/20 rounded" />
                </motion.div>
            ))}
             {count === 0 && <span className="text-xs text-white/30">No Notifications</span>}
        </div>
    )
}

// 11. Home Indicator Swipe
export const HomeIndicator = () => (
    <div className="w-full h-16 bg-black border border-white/10 rounded-b-xl relative flex justify-center items-end pb-2 overflow-hidden">
        <motion.div 
            className="w-1/3 h-1 bg-white rounded-full cursor-grab active:cursor-grabbing"
            drag="y"
            dragConstraints={{ top: -50, bottom: 0 }}
            whileDrag={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-white/10 text-[10px]">Swipe Up</div>
    </div>
);

// 12. Camera Shutter
export const CameraShutter = () => (
    <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors group">
        <motion.div 
            className="w-10 h-10 bg-white rounded-full"
            initial={{ scale: 0.8 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [0.8, 0.85, 0.8] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
    </button>
);

// 13. Keyboard Popup
export const KeyboardPopup = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative w-full h-24 bg-surface-300 rounded overflow-hidden border border-white/5">
            <input 
                type="text" 
                placeholder="Tap to type..." 
                className="w-full bg-transparent p-2 text-xs outline-none"
                onFocus={() => setShow(true)}
                onBlur={() => setTimeout(() => setShow(false), 200)}
            />
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-16 bg-surface-100 grid grid-cols-10 gap-[1px] p-1"
                initial={{ y: "100%" }}
                animate={{ y: show ? "0%" : "100%" }}
            >
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-sm" />
                ))}
            </motion.div>
        </div>
    )
}

// 14. Dark Mode Transition (Device)
export const DeviceDarkMode = () => {
    const [dark, setDark] = useState(true);
    return (
        <div 
            className={`w-full h-20 rounded-lg border transition-colors duration-500 flex items-center justify-center cursor-pointer ${dark ? 'bg-slate-900 border-slate-700' : 'bg-sky-100 border-sky-200'}`}
            onClick={() => setDark(!dark)}
        >
            <motion.div layout className="flex gap-4">
                <Moon size={20} className={dark ? "text-white" : "text-sky-300"} />
                <Sun size={20} className={dark ? "text-slate-700" : "text-yellow-500"} />
            </motion.div>
        </div>
    )
}

// 15. Tablet Split Screen
export const TabletSplit = () => (
    <div className="w-24 h-16 border-2 border-white/20 rounded flex overflow-hidden relative group">
        <motion.div className="w-1/2 h-full bg-blue-500/20" whileHover={{ width: "60%" }} />
        <div className="w-0.5 h-full bg-white/50 cursor-col-resize" />
        <motion.div className="flex-1 h-full bg-purple-500/20" />
    </div>
);

// 16. Watch Face Swipe
export const WatchSwipe = () => (
    <div className="w-16 h-16 rounded-full bg-black border-2 border-surface-200 overflow-hidden relative cursor-grab active:cursor-grabbing">
        <motion.div 
            className="flex h-full"
            drag="x"
            dragConstraints={{ left: -64, right: 0 }}
        >
            <div className="w-16 h-full flex-shrink-0 bg-red-900 flex items-center justify-center text-[10px]">Face 1</div>
            <div className="w-16 h-full flex-shrink-0 bg-blue-900 flex items-center justify-center text-[10px]">Face 2</div>
        </motion.div>
    </div>
);

// 17. Signal Search
export const SignalSearch = () => (
    <div className="flex items-end gap-1 h-4">
        {[...Array(4)].map((_, i) => (
            <motion.div 
                key={i} 
                className="w-1 bg-white rounded-sm"
                animate={{ height: ["20%", "100%", "20%"], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
        ))}
    </div>
);

// 18. App Library Grid
export const AppLibrary = () => (
    <div className="grid grid-cols-2 gap-1 w-16 p-2 bg-white/10 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
        <div className="w-5 h-5 bg-orange-500 rounded-full" />
        <div className="w-5 h-5 bg-blue-500 rounded-full" />
        <div className="w-5 h-5 bg-green-500 rounded-full" />
        <div className="w-5 h-5 bg-purple-500 rounded-full" />
    </div>
);

// 19. Browser Tab Switch
export const BrowserTabs = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="w-full flex items-end border-b border-white/10">
            {[0, 1, 2].map(i => (
                <div 
                    key={i} 
                    onClick={() => setActive(i)}
                    className={`px-3 py-1 rounded-t-lg text-[10px] cursor-pointer transition-colors ${active === i ? 'bg-surface-200 text-white' : 'bg-transparent text-white/30 hover:bg-white/5'}`}
                >
                    Tab {i+1}
                </div>
            ))}
        </div>
    )
}

// 20. Lock Screen Unlock
export const LockScreen = () => {
    const [unlocked, setUnlocked] = useState(false);
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setUnlocked(!unlocked)}>
            <motion.div animate={{ y: unlocked ? -10 : 0, opacity: unlocked ? 0 : 1 }}>
                <Lock size={20} />
            </motion.div>
            <motion.div animate={{ y: unlocked ? 0 : 10, opacity: unlocked ? 1 : 0 }} className="absolute">
                <Unlock size={20} className="text-green-500" />
            </motion.div>
        </div>
    )
}

