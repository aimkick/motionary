'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Settings, Mail, Bell } from 'lucide-react';

// 1. Underline Nav
export const UnderlineNav = () => {
    const [active, setActive] = React.useState(0);
    const items = ["Home", "About", "Work", "Contact"];
    
    return (
        <div className="flex gap-4">
            {items.map((item, i) => (
                <button 
                    key={i} 
                    onClick={() => setActive(i)}
                    className="relative px-2 py-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                    {item}
                    {active === i && (
                        <motion.div 
                            layoutId="underline" 
                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" 
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

// 2. Background Pill Nav
export const PillNav = () => {
    const [active, setActive] = React.useState(0);
    const items = ["All", "Design", "Code"];
    
    return (
        <div className="flex bg-surface-100 p-1 rounded-full gap-1">
            {items.map((item, i) => (
                <button 
                    key={i} 
                    onClick={() => setActive(i)}
                    className={`relative px-4 py-1 text-xs font-medium rounded-full transition-colors z-10 ${active === i ? 'text-black' : 'text-white/60'}`}
                >
                    {item}
                    {active === i && (
                        <motion.div 
                            layoutId="pill" 
                            className="absolute inset-0 bg-white rounded-full -z-10" 
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

// 3. Dock Icon Effect
export const DockMenu = () => {
    return (
        <div className="flex gap-2 items-end h-12">
            {[1,2,3,4,5].map((i) => (
                <motion.div 
                    key={i}
                    className="w-8 h-8 bg-surface-300 rounded-lg flex items-center justify-center border border-white/10"
                    whileHover={{ scale: 1.5, y: -10, margin: "0 8px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            ))}
        </div>
    )
}

// 4. Sidebar Expand
export const SidebarExpand = () => (
    <motion.div 
        className="w-12 h-32 bg-surface-200 border border-white/10 rounded-r-xl overflow-hidden flex flex-col gap-4 py-4 items-start pl-3"
        whileHover={{ width: 140 }}
    >
        {[1,2,3].map(i => (
             <div key={i} className="flex items-center gap-3 min-w-max">
                <div className="w-6 h-6 bg-white/20 rounded" />
                <span className="text-sm opacity-0 hover:opacity-100 transition-opacity delay-100">Menu Item</span>
            </div>
        ))}
    </motion.div>
)

// 5. Circular Menu (Concept)
export const CircularMenu = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.button
            className="w-10 h-10 bg-primary rounded-full z-20"
            whileTap={{ scale: 0.9 }}
        />
         {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute w-8 h-8 bg-surface-300 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                animate={{ 
                    x: Math.cos(deg * Math.PI / 180) * 40, 
                    y: Math.sin(deg * Math.PI / 180) * 40,
                    scale: 1
                }}
                transition={{ delay: i * 0.05 }}
            />
        ))}
    </div>
)

// 6. Staggered Dropdown
export const StaggerDropdown = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-surface-200 rounded border border-white/10 text-sm">
                Menu {isOpen ? '▲' : '▼'}
            </button>
            <motion.div 
                className="absolute top-full mt-2 left-0 w-32 bg-surface-200 border border-white/10 rounded-lg overflow-hidden flex flex-col"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1, transition: { staggerChildren: 0.05 } },
                    closed: { height: 0, opacity: 0 }
                }}
            >
                {["Profile", "Settings", "Logout"].map((item) => (
                    <motion.button 
                        key={item}
                        className="px-4 py-2 text-left text-sm hover:bg-white/10"
                        variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -10 }
                        }}
                    >
                        {item}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    )
}

// 7. Tab Indicator
export const TabIndicator = () => {
    const [active, setActive] = React.useState(0);
    return (
        <div className="flex flex-col gap-2 w-full">
            {["Account", "Security", "Notifications"].map((item, i) => (
                <button 
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative px-4 py-2 text-left text-sm rounded-lg transition-colors ${active === i ? 'bg-white/5 text-white' : 'text-white/50 hover:text-white'}`}
                >
                    {active === i && (
                        <motion.div 
                            layoutId="active-tab"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" 
                        />
                    )}
                    {item}
                </button>
            ))}
        </div>
    )
}

// 8. Morphing Hamburger
export const MorphingBurger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2">
            <motion.div animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white origin-center" />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white" />
            <motion.div animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white origin-center" />
        </button>
    )
}

// 9. Gooey Menu (SVG Filter required, simplified here)
export const GooeyMenu = () => (
     <div className="relative flex items-center justify-center">
         <div className="w-10 h-10 bg-primary rounded-full" />
         {/* Real implementation needs SVG filters in global css */}
         <span className="absolute text-[10px] text-black font-bold">GOO</span>
     </div>
)

// 10. Fullscreen Menu Reveal
export const FullscreenReveal = () => (
    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20">
        <span className="text-xs">☰</span>
    </div>
)

// 11. Magnetic Link
export const MagneticLink = () => (
    <motion.a 
        href="#" 
        className="text-lg font-bold relative inline-block"
        whileHover={{ scale: 1.1, x: 5 }}
    >
        Hover Me
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white scale-x-0 transition-transform origin-right hover:scale-x-100 hover:origin-left" />
    </motion.a>
)

// 12. Breadcrumb Collapse
export const Breadcrumb = () => (
    <div className="flex items-center gap-2 text-sm text-white/50">
        <span>Home</span>
        <span>/</span>
        <span className="w-4 h-1 bg-white/20 rounded-full" />
        <span>/</span>
        <span className="text-white">Current</span>
    </div>
)

// 13. Step Progress Nav
export const StepNav = () => (
    <div className="flex items-center gap-2">
        {[1,2,3].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full ${i===1 ? 'bg-primary w-6' : 'bg-white/20'}`} />
        ))}
    </div>
)

// 14. Vertical Icon Bar
export const IconBar = () => (
    <div className="flex flex-col gap-4 bg-surface-100 p-2 rounded-full border border-white/5">
        <Home className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
        <User className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
        <Settings className="w-4 h-4 text-white/50 hover:text-white hover:scale-110 transition-all" />
    </div>
)

// 15. Notification Badge
export const NotificationBadge = () => (
    <div className="relative">
        <Bell className="w-6 h-6 text-white" />
        <motion.div 
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
        />
    </div>
)

// 16. Bottom Tab Bar
export const BottomTabBar = () => (
    <div className="w-full bg-surface-200 h-12 rounded-b-xl flex items-center justify-around px-4 border-t border-white/10">
        <div className="w-8 h-1 bg-primary absolute bottom-0 rounded-t-full" />
        <Home className="w-5 h-5 text-primary" />
        <User className="w-5 h-5 text-white/30" />
        <Settings className="w-5 h-5 text-white/30" />
    </div>
)

// 17. Mega Menu Column
export const MegaMenuCol = () => (
    <div className="flex flex-col gap-2 p-2">
        <h4 className="text-xs font-bold text-white/40 uppercase">Products</h4>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Analytics</a>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Marketing</a>
        <a href="#" className="text-sm hover:translate-x-2 transition-transform block">Commerce</a>
    </div>
)

// 18. Search Bar Expand
export const SearchExpand = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <div className={`flex items-center ${expanded ? 'bg-white/10 w-full' : 'bg-transparent w-8'} h-8 rounded transition-all duration-300 overflow-hidden`}>
             <button onClick={() => setExpanded(!expanded)} className="w-8 h-8 flex items-center justify-center min-w-[2rem]">🔍</button>
             <input className="bg-transparent outline-none text-sm px-2 w-full" placeholder="Search..." />
        </div>
    )
}

// 19. Language Switcher
export const LangSwitch = () => (
    <div className="flex items-center gap-1 text-xs font-mono">
        <span className="text-primary">EN</span>
        <span className="text-white/30">/</span>
        <span className="text-white/30 hover:text-white cursor-pointer">CN</span>
    </div>
)

// 20. Dark Mode Toggle
export const ThemeToggle = () => (
    <div className="w-12 h-6 bg-surface-300 rounded-full p-1 flex items-center cursor-pointer">
        <motion.div layout className="w-4 h-4 bg-white rounded-full shadow-sm" />
    </div>
)

