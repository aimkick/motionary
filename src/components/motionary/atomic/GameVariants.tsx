'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Shield, Star, Crown, Zap, Lock, Unlock, Coins, Target, Flame, Swords, Map, Gift, Ghost, Skull } from 'lucide-react';

// 1. XP Bar Gain
export const XPBar = () => {
    const [xp, setXp] = useState(30);
    return (
        <div onClick={() => setXp(Math.min(100, xp+20))} className="w-full cursor-pointer">
            <div className="flex justify-between text-[10px] mb-1 font-bold text-yellow-400">
                <span>LVL 5</span>
                <span>{xp}/100 XP</span>
            </div>
            <div className="h-2 bg-surface-100 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                    initial={{ width: "30%" }}
                    animate={{ width: `${xp}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                />
            </div>
        </div>
    )
}

// 2. Badge Unlock
export const BadgeUnlock = () => {
    const [unlocked, setUnlocked] = useState(false);
    return (
        <div 
            onClick={() => setUnlocked(true)}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer ${unlocked ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'bg-surface-100 border-white/10 text-white/20'}`}
        >
            <Award size={24} />
            {unlocked && (
                <motion.div 
                    className="absolute inset-0 border-2 border-yellow-500 rounded-full"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            )}
        </div>
    )
}

// 3. Card Flip (Game)
export const GameCardFlip = () => (
    <div className="group w-24 h-32 perspective-1000 cursor-pointer">
        <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-indigo-900 rounded-lg backface-hidden border-2 border-indigo-500 flex items-center justify-center">
                <span className="text-2xl">?</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg backface-hidden rotate-y-180 flex items-center justify-center border-2 border-yellow-200">
                <Crown size={32} className="text-white drop-shadow-md" />
            </div>
        </div>
    </div>
);

// 4. Coin Spin
export const CoinSpin = () => (
    <div className="w-10 h-10 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-lg animate-[spin_3s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg)' }}>
        <span className="font-bold text-yellow-700">$</span>
    </div>
);

// 5. Health Bar Shake
export const HealthBar = () => {
    const [hp, setHp] = useState(100);
    return (
        <div onClick={() => setHp(Math.max(0, hp-20))} className="w-full cursor-pointer group">
            <motion.div 
                className="h-4 bg-surface-100 rounded border border-white/10 overflow-hidden relative"
                animate={hp < 30 ? { x: [-2, 2, -2, 2, 0] } : {}}
                transition={{ repeat: Infinity, duration: 0.2 }}
            >
                <motion.div 
                    className={`h-full ${hp < 30 ? 'bg-red-500' : 'bg-green-500'}`}
                    initial={{ width: "100%" }}
                    animate={{ width: `${hp}%` }}
                />
            </motion.div>
        </div>
    )
}

// 6. Level Up Burst
export const LevelUp = () => {
    const [lvl, setLvl] = useState(false);
    return (
        <button onClick={() => { setLvl(true); setTimeout(() => setLvl(false), 2000); }} className="relative font-black italic text-2xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-white">
            LEVEL UP
            {lvl && (
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-4xl">✨</span>
                </motion.div>
            )}
        </button>
    )
}

// 7. Loot Box Shake
export const LootBox = () => (
    <motion.div 
        className="w-12 h-12 bg-gradient-to-b from-purple-600 to-indigo-900 rounded-lg border border-purple-400 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        whileHover={{ 
            rotate: [0, -10, 10, -10, 10, 0],
            scale: 1.1 
        }}
        transition={{ duration: 0.5 }}
    >
        <Gift size={24} className="text-white" />
    </motion.div>
);

// 8. Daily Streak Flame
export const StreakFlame = () => (
    <div className="flex flex-col items-center">
        <motion.div 
            animate={{ scale: [1, 1.1, 1], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]"
        >
            <Flame size={32} className="fill-orange-500" />
        </motion.div>
        <span className="text-[10px] font-bold text-orange-400">5 DAYS</span>
    </div>
);

// 9. Mana Orb (Liquid)
export const ManaOrb = () => (
    <div className="relative w-12 h-12 rounded-full border-2 border-blue-400 bg-blue-900 overflow-hidden shadow-[0_0_10px_#60a5fa]">
        <motion.div 
            className="absolute bottom-0 w-full bg-blue-400"
            animate={{ height: ["40%", "60%", "40%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
    </div>
);

// 10. Quest Item Shine
export const QuestItem = () => (
    <div className="relative w-10 h-10 bg-surface-200 rounded border border-white/20 flex items-center justify-center overflow-hidden group">
        <Swords size={20} className="text-white/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </div>
);

// 11. Achievement Popup
export const AchievementToast = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setShow(true)} className="text-xs bg-surface-100 px-2 py-1 rounded hover:bg-white/10">Unlock</button>
            <AnimatePresence>
                {show && (
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 bg-black/90 border border-yellow-500/50 rounded p-2 flex items-center gap-2 z-20"
                    >
                        <Trophy size={16} className="text-yellow-500" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-yellow-500">ACHIEVEMENT</span>
                            <span className="text-[10px]">First Blood</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 12. Character Select Hover
export const CharacterSelect = () => (
    <div className="w-12 h-16 bg-surface-200 rounded border-2 border-transparent hover:border-primary hover:bg-surface-300 transition-all cursor-pointer relative overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <Ghost size={24} />
        </div>
    </div>
);

// 13. Skill Cooldown
export const SkillCooldown = () => {
    const [cd, setCd] = useState(false);
    return (
        <button 
            disabled={cd}
            onClick={() => { setCd(true); setTimeout(() => setCd(false), 3000); }}
            className="relative w-10 h-10 bg-surface-200 rounded border border-white/20 overflow-hidden flex items-center justify-center"
        >
            <Zap size={20} className={cd ? 'text-white/20' : 'text-yellow-400'} />
            {cd && (
                <motion.div 
                    className="absolute inset-0 bg-black/70 origin-bottom"
                    initial={{ height: "100%" }}
                    animate={{ height: "0%" }}
                    transition={{ duration: 3, ease: "linear" }}
                />
            )}
        </button>
    )
}

// 14. Inventory Slot Drop
export const InventorySlot = () => (
    <div className="w-10 h-10 bg-black/50 border border-white/10 rounded flex items-center justify-center hover:border-white/50 transition-colors cursor-grab active:cursor-grabbing">
        <Shield size={18} className="text-gray-400" />
    </div>
);

// 15. Map Marker Bounce
export const MapMarker = () => (
    <div className="flex flex-col items-center cursor-pointer group">
        <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-red-500"
        >
            <Map size={24} className="fill-red-500" />
        </motion.div>
        <div className="w-4 h-1 bg-black/50 rounded-full blur-[1px] group-hover:w-6 transition-all" />
    </div>
);

// 16. Combo Counter
export const ComboCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(c => c + 1)} className="font-black text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 relative">
            {count}x
            <motion.span 
                key={count}
                className="absolute -top-4 -right-4 text-xs text-white not-italic"
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                COMBO!
            </motion.span>
        </button>
    )
}

// 17. Leaderboard Rank
export const RankRow = () => (
    <div className="flex items-center gap-2 w-full bg-surface-100 p-1 rounded border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-colors cursor-pointer">
        <div className="w-6 h-6 bg-yellow-500 text-black font-bold flex items-center justify-center rounded text-xs">1</div>
        <div className="w-6 h-6 bg-white/20 rounded-full" />
        <span className="text-xs font-bold">PlayerOne</span>
    </div>
);

// 18. Boss Warning
export const BossWarning = () => (
    <div className="w-full h-8 bg-red-900/50 border-y border-red-500 flex items-center justify-center overflow-hidden relative">
        <div className="flex gap-4 animate-marquee text-red-500 font-bold text-xs tracking-widest">
            <span>WARNING</span><span>BOSS APPROACHING</span><span>WARNING</span><span>BOSS APPROACHING</span>
        </div>
    </div>
);

// 19. Lock/Unlock Anim
export const LockUnlock = () => {
    const [locked, setLocked] = useState(true);
    return (
        <button onClick={() => setLocked(!locked)} className="p-2 bg-surface-200 rounded-full">
            <AnimatePresence mode='wait'>
                {locked ? (
                    <motion.div key="lock" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }}>
                        <Lock size={18} className="text-red-400" />
                    </motion.div>
                ) : (
                    <motion.div key="unlock" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }}>
                        <Unlock size={18} className="text-green-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}

// 20. Enemy Health Segment
export const EnemyHealth = () => (
    <div className="w-full h-3 bg-black border border-red-900 rounded flex gap-[1px]">
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 bg-red-600" />
        ))}
    </div>
);

