'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, UserPlus, Bookmark, ThumbsUp, ThumbsDown, Repeat, Send } from 'lucide-react';

// 1. Like Heart Burst
export const HeartBurst = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)} className="group relative">
            <Heart className={`w-6 h-6 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-white/50 group-hover:text-white'}`} />
            {liked && (
                <motion.div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div 
                            key={i} 
                            className="absolute w-1 h-1 bg-red-500 rounded-full top-1/2 left-1/2"
                            initial={{ scale: 0 }}
                            animate={{ 
                                x: Math.cos(i * 45 * Math.PI / 180) * 20, 
                                y: Math.sin(i * 45 * Math.PI / 180) * 20, 
                                opacity: 0 
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </motion.div>
            )}
        </button>
    )
}

// 2. Follow Button (Optimistic UI)
export const FollowButton = () => {
    const [followed, setFollowed] = useState(false);
    return (
        <button 
            onClick={() => setFollowed(!followed)}
            className={`px-4 py-1 rounded-full text-sm font-bold transition-all duration-300 border ${followed ? 'bg-transparent border-white/20 text-white' : 'bg-white text-black border-white'}`}
        >
            {followed ? "Following" : "Follow"}
        </button>
    )
}

// 3. Comment Expand
export const CommentExpand = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="flex items-center gap-2">
            <button onClick={() => setExpand(!expand)}><MessageCircle size={20} className="text-white/50 hover:text-white" /></button>
            <AnimatePresence>
                {expand && (
                    <motion.div 
                        initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <input type="text" placeholder="Reply..." className="bg-surface-100 px-2 py-1 rounded text-sm outline-none w-32 border border-white/10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// 4. Share Nodes
export const ShareNodes = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="bg-surface-100 p-2 rounded-full hover:bg-white/10"><Share2 size={18}/></button>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.button initial={{ y: 0, x: 0, opacity: 0 }} animate={{ y: -40, x: -20, opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 bg-blue-500 p-2 rounded-full w-8 h-8 flex items-center justify-center text-xs">F</motion.button>
                        <motion.button initial={{ y: 0, x: 0, opacity: 0 }} animate={{ y: -40, x: 20, opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 left-0 bg-sky-400 p-2 rounded-full w-8 h-8 flex items-center justify-center text-xs">T</motion.button>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

// 5. Avatar Stack
export const AvatarStack = () => (
    <div className="flex pl-2">
        {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full bg-surface-300 border-2 border-black -ml-2 hover:-translate-y-1 transition-transform cursor-pointer" style={{ zIndex: i }} />
        ))}
        <div className="w-8 h-8 rounded-full bg-surface-100 border-2 border-black -ml-2 flex items-center justify-center text-[10px] z-10 hover:-translate-y-1 cursor-pointer">+5</div>
    </div>
);

// 6. Live Viewer Count
export const LiveCount = () => (
    <div className="flex items-center gap-2 bg-black/50 px-2 py-1 rounded text-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span>1.2k</span>
    </div>
);

// 7. Bookmark Ribbon
export const BookmarkRibbon = () => {
    const [saved, setSaved] = useState(false);
    return (
        <button onClick={() => setSaved(!saved)}>
            <Bookmark className={`transition-all ${saved ? 'fill-white text-white' : 'text-white/50'}`} />
        </button>
    )
}

// 8. Reaction Bar
export const ReactionBar = () => (
    <div className="flex gap-4 p-2 bg-surface-100 rounded-full border border-white/10">
        <motion.button whileHover={{ scale: 1.2 }}>🔥</motion.button>
        <motion.button whileHover={{ scale: 1.2 }}>🚀</motion.button>
        <motion.button whileHover={{ scale: 1.2 }}>🤯</motion.button>
    </div>
);

// 9. User Plus Animation
export const UserPlusAnim = () => {
    const [added, setAdded] = useState(false);
    return (
        <button onClick={() => setAdded(!added)} className="flex items-center gap-1 text-sm text-white/70 hover:text-white">
            <UserPlus size={16} />
            {added ? "Request Sent" : "Add Friend"}
        </button>
    )
}

// 10. Upvote/Downvote
export const VotingArrows = () => {
    const [score, setScore] = useState(0);
    return (
        <div className="flex flex-col items-center bg-surface-100 rounded p-1 gap-1">
            <button onClick={() => setScore(1)} className={score===1 ? "text-orange-500" : "text-white/20 hover:text-white"}><ThumbsUp size={14}/></button>
            <span className="text-xs font-bold">{142 + score}</span>
            <button onClick={() => setScore(-1)} className={score===-1 ? "text-blue-500" : "text-white/20 hover:text-white"}><ThumbsDown size={14}/></button>
        </div>
    )
}

// 11. Retweet Spin
export const RetweetButton = () => {
    const [rt, setRt] = useState(false);
    return (
        <button onClick={() => setRt(!rt)} className={`group flex items-center gap-1 transition-colors ${rt ? 'text-green-500' : 'text-white/50 hover:text-green-500'}`}>
            <motion.div animate={rt ? { rotate: 180 } : { rotate: 0 }}>
                <Repeat size={18} />
            </motion.div>
        </button>
    )
}

// 12. Story Ring
export const StoryRing = () => (
    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 cursor-pointer">
        <div className="w-10 h-10 bg-black rounded-full border-2 border-black" />
    </div>
);

// 13. Chat Bubble Pop
export const ChatBubble = () => (
    <div className="relative">
        <div className="bg-primary text-black px-3 py-1 rounded-t-lg rounded-br-lg text-sm">Hey!</div>
        <div className="absolute -bottom-1 left-0 w-2 h-2 bg-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
    </div>
);

// 14. Typing Dots (Message)
export const TypingDotsMessage = () => (
    <div className="bg-surface-200 px-3 py-2 rounded-full w-fit flex gap-1">
        {[0, 1, 2].map(i => (
            <motion.div 
                key={i}
                className="w-1.5 h-1.5 bg-white/50 rounded-full"
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i*0.1 }}
            />
        ))}
    </div>
);

// 15. Send Plane Fly
export const SendPlane = () => {
    const [sent, setSent] = useState(false);
    return (
        <button onClick={() => { setSent(true); setTimeout(() => setSent(false), 1500); }} className="text-primary hover:text-white transition-colors">
            <motion.div animate={sent ? { x: 50, y: -50, opacity: 0 } : { x: 0, y: 0, opacity: 1 }}>
                <Send size={20} />
            </motion.div>
        </button>
    )
}

// 16. Verified Badge
export const VerifiedBadge = () => (
    <div className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full text-white text-[8px] ml-1">
        ✓
    </div>
);

// 17. Profile Card Hover
export const ProfileHover = () => (
    <div className="relative group">
        <span className="font-bold underline cursor-pointer decoration-white/30 hover:decoration-white">@username</span>
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-surface-200 p-3 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
            <div className="flex gap-3 mb-2">
                <div className="w-10 h-10 bg-white/10 rounded-full" />
                <div>
                    <div className="font-bold">User Name</div>
                    <div className="text-xs text-white/50">Bio description...</div>
                </div>
            </div>
            <div className="flex gap-4 text-xs">
                <span><b>100</b> Following</span>
                <span><b>500</b> Followers</span>
            </div>
        </div>
    </div>
);

// 18. Message Swipe Reply
export const SwipeReply = () => (
    <div className="w-full bg-surface-100 p-2 rounded flex justify-end group cursor-ew-resize hover:-translate-x-2 transition-transform">
        <span className="text-sm">Swipe left to reply</span>
    </div>
);

// 19. Group Chat Pile
export const GroupChatIcon = () => (
    <div className="relative w-10 h-10">
        <div className="absolute top-0 left-0 w-6 h-6 bg-red-500 rounded-full border border-black" />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border border-black" />
    </div>
);

// 20. Notification Dot Pulse
export const NotifDot = () => (
    <div className="relative">
        <div className="w-8 h-8 bg-surface-200 rounded-full" />
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
    </div>
);

