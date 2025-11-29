'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 1. Bar Chart Grow
export const BarChartGrow = () => (
    <div className="flex items-end gap-2 h-24">
        {[40, 70, 50, 90, 60, 30].map((h, i) => (
            <motion.div
                key={i}
                className="w-4 bg-primary rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 2. Circular Progress
export const CircleProgress = () => (
    <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
            <motion.circle 
                cx="48" cy="48" r="40" stroke="#00f3ff" strokeWidth="8" fill="none"
                strokeDasharray="251" strokeDashoffset="251"
                animate={{ strokeDashoffset: 251 * 0.25 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold">75%</div>
    </div>
);

// 3. Counter Count Up
export const CountUp = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c < 100 ? c + 1 : 100);
        }, 20);
        return () => clearInterval(interval);
    }, []);
    return <div className="text-4xl font-mono font-bold">{count}%</div>
};

// 4. Line Chart Draw
export const LineChart = () => (
    <svg className="w-full h-24 overflow-visible" viewBox="0 0 100 50">
        <motion.path 
            d="M0,50 L20,30 L40,40 L60,10 L80,25 L100,5"
            fill="none" stroke="#00f3ff" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
        />
    </svg>
);

// 5. Pie Chart Spin
export const PieChart = () => (
    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-surface-200">
        <motion.div 
            className="absolute inset-0 bg-primary"
            initial={{ clipPath: "polygon(50% 50%, 50% 0%, 50% 0%)" }}
            animate={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)" }} // ~40%
            transition={{ duration: 1 }}
        />
    </div>
);

// 6. Area Chart Fill
export const AreaChart = () => (
    <svg className="w-full h-24" viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#00f3ff" stopOpacity="0"/>
            </linearGradient>
        </defs>
        <motion.path 
            d="M0,50 L0,30 L20,40 L40,10 L60,30 L80,20 L100,40 L100,50 Z"
            fill="url(#grad)"
            initial={{ d: "M0,50 L0,50 L20,50 L40,50 L60,50 L80,50 L100,50 L100,50 Z" }}
            animate={{ d: "M0,50 L0,30 L20,40 L40,10 L60,30 L80,20 L100,40 L100,50 Z" }}
            transition={{ duration: 1 }}
        />
    </svg>
);

// 7. Scatter Plot Pop
export const ScatterPlot = () => (
    <div className="relative w-full h-24 bg-surface-100 rounded border border-white/10">
        {[...Array(10)].map((_, i) => (
            <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{ left: `${Math.random()*90}%`, bottom: `${Math.random()*90}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
            />
        ))}
    </div>
);

// 8. Vertical Progress
export const VerticalProgress = () => (
    <div className="w-4 h-24 bg-surface-100 rounded-full overflow-hidden flex items-end">
        <motion.div 
            className="w-full bg-secondary"
            initial={{ height: 0 }}
            animate={{ height: "60%" }}
            transition={{ duration: 1 }}
        />
    </div>
);

// 9. Radar Chart Draw
export const RadarChart = () => (
    <svg className="w-24 h-24" viewBox="0 0 100 100">
        <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <motion.polygon 
            points="50,20 80,50 50,80 20,50"
            fill="rgba(0,243,255,0.3)" stroke="#00f3ff" strokeWidth="2"
            initial={{ scale: 0, transformOrigin: "center" }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        />
    </svg>
);

// 10. Stacked Bar
export const StackedBar = () => (
    <div className="w-full h-6 bg-surface-100 rounded overflow-hidden flex">
        <motion.div className="h-full bg-primary" initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ duration: 0.5 }} />
        <motion.div className="h-full bg-secondary" initial={{ width: 0 }} animate={{ width: "30%" }} transition={{ duration: 0.5, delay: 0.5 }} />
        <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: "20%" }} transition={{ duration: 0.5, delay: 1 }} />
    </div>
);

// 11. Live Data Stream
export const LiveData = () => (
    <div className="flex items-end gap-1 h-12 w-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-1 bg-primary"
                animate={{ height: [10, Math.random()*40+10, 10] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
            />
        ))}
    </div>
);

// 12. Donut Chart
export const DonutChart = () => (
    <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
            <circle cx="48" cy="48" r="30" stroke="rgba(255,255,255,0.1)" strokeWidth="15" fill="none" />
            <motion.circle 
                cx="48" cy="48" r="30" stroke="#ff00ff" strokeWidth="15" fill="none"
                strokeDasharray="188" strokeDashoffset="188"
                animate={{ strokeDashoffset: 188 * 0.4 }}
                transition={{ duration: 1 }}
            />
        </svg>
    </div>
);

// 13. Heatmap Grid
export const Heatmap = () => (
    <div className="grid grid-cols-5 gap-1">
        {[...Array(25)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-4 rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                    backgroundColor: `rgba(0,243,255, ${Math.random()})`,
                    opacity: 1 
                }}
                transition={{ delay: i * 0.02 }}
            />
        ))}
    </div>
);

// 14. Funnel Chart
export const FunnelChart = () => (
    <div className="flex flex-col items-center gap-1 w-full">
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-4 bg-primary/80 rounded" transition={{ duration: 0.5 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} className="h-4 bg-primary/60 rounded" transition={{ duration: 0.5, delay: 0.2 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} className="h-4 bg-primary/40 rounded" transition={{ duration: 0.5, delay: 0.4 }} />
        <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-4 bg-primary/20 rounded" transition={{ duration: 0.5, delay: 0.6 }} />
    </div>
);

// 15. Gauge Meter
export const GaugeChart = () => (
    <div className="relative w-24 h-12 overflow-hidden">
        <div className="w-24 h-24 rounded-full border-8 border-white/10" />
        <motion.div 
            className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-t-primary border-r-primary border-b-transparent border-l-transparent -rotate-45"
            initial={{ rotate: -135 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
        />
    </div>
);

// 16. Network Graph
export const NetworkGraph = () => (
    <div className="relative w-full h-24">
        {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full" 
                style={{ top: Math.random()*80+"%", left: Math.random()*80+"%" }}
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i*0.1 }}
            />
        ))}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.line x1="20%" y1="20%" x2="80%" y2="80%" stroke="white" strokeWidth="1" strokeOpacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
        </svg>
    </div>
);

// 17. Comparison Bars
export const ComparisonBars = () => (
    <div className="flex items-center gap-4 w-full">
        <div className="flex-1 flex flex-col items-end gap-1">
            <motion.div className="h-2 bg-white/50 rounded w-full" initial={{ width: 0 }} animate={{ width: "80%" }} />
            <motion.div className="h-2 bg-white/50 rounded w-full" initial={{ width: 0 }} animate={{ width: "60%" }} />
        </div>
        <div className="w-px h-12 bg-white/20" />
        <div className="flex-1 flex flex-col gap-1">
            <motion.div className="h-2 bg-primary rounded w-full" initial={{ width: 0 }} animate={{ width: "90%" }} />
            <motion.div className="h-2 bg-primary rounded w-full" initial={{ width: 0 }} animate={{ width: "70%" }} />
        </div>
    </div>
);

// 18. Step Tracker
export const StepTracker = () => (
    <div className="flex justify-between items-center w-full relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
        <motion.div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10" initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1 }} />
        <div className="w-4 h-4 bg-primary rounded-full" />
        <div className="w-4 h-4 bg-primary rounded-full" />
        <div className="w-4 h-4 bg-white/20 rounded-full" />
    </div>
);

// 19. Candle Stick
export const CandleStick = () => (
    <div className="flex items-center gap-2 h-16">
        <div className="w-2 bg-green-500 h-8 relative rounded-sm"><div className="absolute -top-2 left-1/2 w-px h-12 bg-green-500 -translate-x-1/2" /></div>
        <div className="w-2 bg-red-500 h-6 relative rounded-sm"><div className="absolute -top-1 left-1/2 w-px h-10 bg-red-500 -translate-x-1/2" /></div>
        <div className="w-2 bg-green-500 h-10 relative rounded-sm"><div className="absolute -top-3 left-1/2 w-px h-16 bg-green-500 -translate-x-1/2" /></div>
    </div>
);

// 20. Percentage Ring (Small)
export const MiniRing = () => (
    <div className="w-8 h-8 border-2 border-white/10 rounded-full flex items-center justify-center relative">
        <motion.div className="absolute inset-0 border-2 border-primary rounded-full border-l-transparent border-b-transparent rotate-45" animate={{ rotate: 405 }} transition={{ duration: 1.5 }} />
        <span className="text-[8px]">50</span>
    </div>
);

