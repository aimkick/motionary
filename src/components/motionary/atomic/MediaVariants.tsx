'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Mic, Radio, Disc, Music, Maximize2, Cast, Airplay, List, Repeat, Shuffle } from 'lucide-react';

// 1. Play/Pause Morph
export const PlayPauseMorph = () => {
    const [playing, setPlaying] = useState(false);
    return (
        <button onClick={() => setPlaying(!playing)} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black">
            <motion.div animate={{ rotate: playing ? 180 : 0 }}>
                {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
            </motion.div>
        </button>
    )
}

// 2. Waveform Visualizer
export const Waveform = () => (
    <div className="flex items-end gap-1 h-10">
        {[...Array(10)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-1 bg-white rounded-full"
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ 
                    duration: 0.5 + Math.random() * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1 
                }}
            />
        ))}
    </div>
);

// 3. Vinyl Record Spin
export const VinylRecord = () => {
    const [spinning, setSpinning] = useState(false);
    return (
        <div 
            className="relative w-20 h-20 rounded-full bg-black border-4 border-surface-300 flex items-center justify-center cursor-pointer overflow-hidden"
            onMouseEnter={() => setSpinning(true)}
            onMouseLeave={() => setSpinning(false)}
        >
             <motion.div 
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #111 0%, #333 50%, #111 100%)' }}
                animate={{ rotate: spinning ? 360 : 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
             <div className="w-8 h-8 bg-red-500 rounded-full z-10 flex items-center justify-center relative">
                <div className="w-2 h-2 bg-black rounded-full" />
             </div>
        </div>
    )
}

// 4. Volume Knob
export const VolumeKnob = () => {
    const [vol, setVol] = useState(0);
    return (
        <div className="relative w-16 h-16 bg-surface-200 rounded-full flex items-center justify-center border border-white/10 shadow-xl">
            <motion.div 
                className="w-full h-full rounded-full absolute"
                style={{ rotate: vol }}
                drag="x" // Simulate drag rotation loosely
                onDrag={(_, info) => setVol(v => v + info.delta.x)}
            >
                <div className="w-2 h-2 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2" />
            </motion.div>
            <Volume2 size={20} className="text-white/50 pointer-events-none" />
        </div>
    )
}

// 5. Equalizer Bars (Color)
export const EqualizerColor = () => (
    <div className="flex items-end gap-[2px] h-12 bg-black/50 p-2 rounded">
        {[...Array(8)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-2 bg-gradient-to-t from-green-500 to-red-500 rounded-sm"
                animate={{ height: ["10%", "90%", "30%"] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
            />
        ))}
    </div>
);

// 6. Cassette Tape
export const CassetteTape = () => (
    <div className="w-24 h-16 bg-orange-500 rounded-lg relative flex items-center justify-center gap-4 px-2 border-b-4 border-orange-700 shadow-lg group cursor-pointer hover:translate-y-1 transition-transform">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black" /></motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black" /></motion.div>
        <div className="absolute bottom-1 w-full text-center text-[8px] font-mono text-black font-bold">AWESOME MIX VOL.1</div>
    </div>
);

// 7. Podcast Mic Pulse
export const PodcastMic = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div 
            className="absolute inset-0 bg-red-500 rounded-full opacity-20"
            animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
        />
        <Mic className="z-10 text-red-500" />
    </div>
);

// 8. Lyrics Highlight
export const LyricsKaraoke = () => (
    <div className="text-lg font-bold space-y-1 text-center">
        <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white"
            animate={{ backgroundPosition: ["200% center", "0% center"] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ backgroundSize: "200% auto" }}
        >
            Hello World
        </motion.span>
    </div>
);

// 9. Album Cover 3D
export const AlbumCover3D = () => (
    <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded shadow-2xl flex items-center justify-center cursor-pointer"
        whileHover={{ rotateY: 25, rotateX: -10, scale: 1.1 }}
        style={{ transformStyle: "preserve-3d" }}
    >
        <Music size={32} className="text-white/50" />
    </motion.div>
);

// 10. Like Track
export const LikeTrack = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="relative">
            <motion.div animate={liked ? { scale: [1, 1.4, 1] } : {}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "#ef4444" : "none"} stroke={liked ? "#ef4444" : "white"} strokeWidth="2">
                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </motion.div>
        </button>
    )
}

// 11. Shuffle Toggle
export const ShuffleToggle = () => {
    const [on, setOn] = useState(false);
    return (
        <button onClick={() => setOn(!on)} className={`transition-colors ${on ? 'text-green-500' : 'text-white/30'}`}>
            <Shuffle size={20} />
            {on && <div className="w-1 h-1 bg-green-500 rounded-full mx-auto mt-1" />}
        </button>
    )
}

// 12. Airplay Cast
export const AirplayCast = () => {
    const [active, setActive] = useState(false);
    return (
        <button onClick={() => setActive(!active)} className={`transition-all ${active ? 'text-blue-500 animate-pulse' : 'text-white/50'}`}>
            <Airplay size={20} />
        </button>
    )
}

// 13. Scrubber Hover
export const VideoScrubber = () => (
    <div className="group w-full h-8 flex items-center cursor-pointer relative">
        <div className="w-full h-1 bg-surface-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-red-500" />
        </div>
        <div className="absolute left-1/3 w-3 h-3 bg-red-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
        <div className="absolute left-1/3 bottom-6 -translate-x-1/2 bg-black border border-white/20 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
            01:23
        </div>
    </div>
);

// 14. Mute Toggle
export const MuteToggle = () => {
    const [muted, setMuted] = useState(false);
    return (
        <button onClick={() => setMuted(!muted)} className="p-2 bg-surface-100 rounded-full">
            {muted ? <VolumeX size={18} className="text-red-500" /> : <Volume2 size={18} />}
        </button>
    )
}

// 15. Radio Tuner
export const RadioTuner = () => (
    <div className="w-full h-10 bg-black border border-white/20 rounded flex items-center relative overflow-hidden">
        <div className="flex gap-2 absolute left-0 animate-marquee whitespace-nowrap text-[10px] font-mono text-white/50">
            <span>| 88.0</span><span>| 90.0</span><span>| 92.0</span><span>| 94.0</span><span>| 96.0</span><span>| 98.0</span><span>| 100.0</span><span>| 102.0</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-red-500 z-10" />
    </div>
);

// 16. Mini Player Expand
export const MiniPlayer = () => {
    const [expand, setExpand] = useState(false);
    return (
        <motion.div 
            layout 
            onClick={() => setExpand(!expand)}
            className={`bg-surface-200 rounded-xl overflow-hidden cursor-pointer border border-white/10 ${expand ? 'w-40 h-40 p-4' : 'w-40 h-12 flex items-center p-2 gap-2'}`}
        >
            <motion.div layout className={`bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg ${expand ? 'w-full h-24 mb-2' : 'w-8 h-8 flex-shrink-0'}`} />
            <motion.div layout className="flex-1 overflow-hidden">
                <div className="text-xs font-bold truncate">Song Title</div>
                <div className="text-[10px] text-white/50 truncate">Artist Name</div>
            </motion.div>
        </motion.div>
    )
}

// 17. Playback Speed
export const PlaybackSpeed = () => {
    const [speed, setSpeed] = useState(1);
    const speeds = [1, 1.25, 1.5, 2];
    return (
        <button onClick={() => setSpeed(speeds[(speeds.indexOf(speed) + 1) % speeds.length])} className="text-xs font-bold font-mono bg-surface-100 px-2 py-1 rounded hover:bg-white/10">
            {speed}x
        </button>
    )
}

// 18. Audio Spectrum 3D (Sim)
export const Spectrum3D = () => (
    <div className="flex items-center justify-center gap-1 perspective-500">
        {[...Array(5)].map((_, i) => (
            <motion.div 
                key={i}
                className="w-4 h-16 bg-primary/50 border border-primary"
                animate={{ rotateX: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
            />
        ))}
    </div>
);

// 19. Playlist Reorder (Static Visual)
export const PlaylistDrag = () => (
    <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/5 cursor-grab active:cursor-grabbing hover:bg-white/5">
            <List size={14} className="text-white/30" />
            <span className="text-xs">Top Hits 2024</span>
        </div>
        <div className="flex items-center gap-2 p-2 bg-surface-100 rounded border border-white/5 opacity-50">
            <List size={14} className="text-white/30" />
            <span className="text-xs">Chill Vibes</span>
        </div>
    </div>
);

// 20. CD Insert
export const CDInsert = () => (
    <div className="w-full h-1 bg-white/20 relative overflow-visible group cursor-pointer">
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 border-4 border-white shadow-xl"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            whileHover={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full" />
            </div>
        </motion.div>
    </div>
);

