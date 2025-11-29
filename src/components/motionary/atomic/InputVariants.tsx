'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Search, Upload, Mic, CreditCard, X, Check, Paperclip, Send } from 'lucide-react';

// 1. Floating Label Input (Enhanced) - Previously implemented simplified
export const FloatingLabelInput = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className="relative w-full">
            <input 
                type="text" 
                className="peer w-full pt-5 pb-1 px-2 bg-transparent border-b border-white/20 text-white outline-none focus:border-primary transition-colors"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setValue(e.target.value)}
            />
            <label className={`absolute left-2 transition-all duration-300 pointer-events-none ${focused || value ? 'top-0 text-xs text-primary' : 'top-3 text-sm text-white/50'}`}>
                Username
            </label>
        </div>
    )
}

// 2. Shake on Error Input (Enhanced)
export const ShakeErrorInput = () => {
    const [error, setError] = useState(false);
    const shake = {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 }
    };
    return (
        <div className="w-full">
            <motion.input 
                animate={error ? shake : {}}
                type="text"
                placeholder="Type 'error'..."
                className={`w-full px-4 py-2 rounded bg-surface-100 border ${error ? 'border-red-500 text-red-500' : 'border-white/10 text-white'} outline-none focus:border-primary`}
                onChange={(e) => e.target.value === 'error' ? setError(true) : setError(false)}
            />
        </div>
    )
}

// 3. Border Spread Input
export const BorderSpreadInput = () => {
    return (
        <div className="relative w-full group">
            <input type="text" placeholder="Border Spread" className="w-full px-4 py-2 bg-transparent border-b border-white/20 outline-none text-white placeholder-white/30" />
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary group-focus-within:w-full group-focus-within:left-0 transition-all duration-300" />
        </div>
    )
}

// 4. Password Reveal
export const PasswordReveal = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative w-full flex items-center border border-white/10 rounded bg-surface-100 px-3">
            <input 
                type={show ? "text" : "password"} 
                placeholder="Password" 
                className="w-full py-2 bg-transparent outline-none text-white text-sm"
            />
            <button onClick={() => setShow(!show)} className="text-white/50 hover:text-white transition-colors">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
        </div>
    )
}

// 5. Search Expand
export const SearchExpandInput = () => {
    const [expanded, setExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const toggle = () => {
        setExpanded(!expanded);
        if (!expanded) setTimeout(() => inputRef.current?.focus(), 100);
    }

    return (
        <div className={`flex items-center bg-surface-100 rounded-full overflow-hidden transition-all duration-300 ${expanded ? 'w-full px-3 border border-white/10' : 'w-10 border border-transparent'}`}>
            <button onClick={toggle} className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-white/70 hover:text-white">
                <Search size={18} />
            </button>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent outline-none text-white text-sm ml-2"
            />
        </div>
    )
}

// 6. OTP Input
export const OTPInput = () => {
    return (
        <div className="flex gap-2 justify-center">
            {[1,2,3,4].map(i => (
                <input 
                    key={i}
                    type="text" 
                    maxLength={1}
                    className="w-10 h-12 text-center bg-surface-100 border border-white/10 rounded text-xl text-white focus:border-primary focus:bg-surface-200 outline-none transition-all"
                />
            ))}
        </div>
    )
}

// 7. Tag Input
export const TagInput = () => {
    const [tags, setTags] = useState(["React", "Motion"]);
    const addTag = (e: any) => {
        if (e.key === 'Enter' && e.target.value) {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    }
    return (
        <div className="flex flex-wrap gap-2 p-2 bg-surface-100 border border-white/10 rounded w-full min-h-[3rem]">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded flex items-center gap-1">
                    {tag} <button onClick={() => setTags(tags.filter(t => t !== tag))}><X size={12}/></button>
                </span>
            ))}
            <input type="text" placeholder="Add tag..." onKeyDown={addTag} className="bg-transparent outline-none text-sm text-white flex-1 min-w-[60px]" />
        </div>
    )
}

// 8. File Dropzone
export const FileDropzone = () => {
    return (
        <div className="w-full h-24 border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer gap-2">
            <Upload size={24} />
            <span className="text-xs">Drop files here</span>
        </div>
    )
}

// 9. Voice Input Wave
export const VoiceInput = () => {
    const [recording, setRecording] = useState(false);
    return (
        <div className="flex items-center gap-2 w-full bg-surface-100 rounded-full px-4 py-2 border border-white/10">
            <input type="text" placeholder="Speak now..." className="bg-transparent outline-none text-white text-sm flex-1" disabled={recording} />
            <button 
                onClick={() => setRecording(!recording)}
                className={`p-2 rounded-full transition-colors ${recording ? 'bg-red-500 text-white' : 'text-white/50 hover:text-white'}`}
            >
                <Mic size={16} className={recording ? 'animate-pulse' : ''} />
            </button>
            {recording && (
                 <div className="flex gap-0.5 items-center h-4">
                    {[1,2,3,4,5].map(i => (
                        <motion.div 
                            key={i} 
                            className="w-1 bg-primary rounded-full"
                            animate={{ height: [4, 16, 4] }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                 </div>
            )}
        </div>
    )
}

// 10. Credit Card Input (Flip logic simulated)
export const CreditCardInput = () => {
    return (
        <div className="relative w-full flex items-center border border-white/10 rounded bg-surface-100 px-3 group focus-within:border-secondary transition-colors">
            <CreditCard size={18} className="text-white/50 group-focus-within:text-secondary" />
            <input 
                type="text" 
                placeholder="Card Number" 
                className="w-full py-2 bg-transparent outline-none text-white text-sm ml-2 tracking-widest"
            />
            <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] text-white/50">VISA</div>
        </div>
    )
}

// 11. Character Count
export const CharCountInput = () => {
    const [val, setVal] = useState("");
    const limit = 20;
    return (
        <div className="relative w-full">
            <input 
                type="text" 
                maxLength={limit}
                value={val}
                onChange={e => setVal(e.target.value)}
                className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded outline-none text-white focus:border-primary pr-12"
                placeholder="Limited text..."
            />
            <span className={`absolute right-3 top-2.5 text-xs ${val.length === limit ? 'text-red-500' : 'text-white/30'}`}>
                {val.length}/{limit}
            </span>
        </div>
    )
}

// 12. Material Filled Input
export const MaterialFilledInput = () => {
    return (
        <div className="relative w-full bg-white/5 rounded-t-lg px-3 pt-5 pb-1 border-b border-white/30 hover:bg-white/10 transition-colors group">
            <input type="text" className="w-full bg-transparent outline-none text-white peer placeholder-transparent" placeholder="Label" />
            <label className="absolute left-3 top-4 text-white/50 text-sm transition-all peer-focus:text-xs peer-focus:text-primary peer-focus:top-1 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs">
                Material Filled
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 peer-focus:w-full" />
        </div>
    )
}

// 13. Inline Submit
export const InlineSubmitInput = () => {
    const [val, setVal] = useState("");
    return (
        <div className="relative w-full">
            <input 
                type="email" 
                value={val}
                onChange={e => setVal(e.target.value)}
                placeholder="Email for newsletter"
                className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded-full outline-none text-white focus:border-primary pr-10"
            />
            <AnimatePresence>
                {val.length > 0 && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-1 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                    >
                        <Send size={14} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

// 14. Auto-resize Textarea
export const AutoResizeTextarea = () => {
    return (
        <textarea 
            className="w-full p-3 bg-surface-100 border border-white/10 rounded text-white text-sm outline-none focus:border-primary resize-none overflow-hidden min-h-[3rem]"
            placeholder="Type and I grow..."
            onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
            }}
        />
    )
}

// 15. Color Picker Input
export const ColorInput = () => {
    const [color, setColor] = useState("#00f3ff");
    return (
        <div className="flex items-center gap-3 w-full px-3 py-2 bg-surface-100 border border-white/10 rounded">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20 shadow-inner">
                <input 
                    type="color" 
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer p-0 border-0 opacity-0" 
                />
                <div className="w-full h-full" style={{ backgroundColor: color }} />
            </div>
            <span className="text-sm font-mono text-white uppercase">{color}</span>
        </div>
    )
}

// 16. Stepper Input
export const StepperInput = () => {
    const [val, setVal] = useState(1);
    return (
        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden w-32">
            <button onClick={() => setVal(Math.max(0, val-1))} className="px-3 py-2 bg-surface-100 hover:bg-surface-200 text-white transition-colors">-</button>
            <div className="flex-1 text-center bg-surface-50 text-white py-2 text-sm">{val}</div>
            <button onClick={() => setVal(val+1)} className="px-3 py-2 bg-surface-100 hover:bg-surface-200 text-white transition-colors">+</button>
        </div>
    )
}

// 17. Copy to Clipboard
export const CopyInput = () => {
    const [copied, setCopied] = useState(false);
    const val = "npm i motionary";
    const copy = () => {
        navigator.clipboard.writeText(val);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <div className="flex items-center w-full bg-black border border-white/10 rounded font-mono text-xs p-1 pl-3">
            <span className="flex-1 text-white/70">{val}</span>
            <button onClick={copy} className="px-3 py-1 bg-surface-200 hover:bg-primary hover:text-black rounded text-white transition-all">
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}

// 18. Slider Input (Range)
export const SliderInput = () => {
    const [val, setVal] = useState(50);
    return (
        <div className="w-full">
            <div className="flex justify-between text-xs text-white/50 mb-2">
                <span>Volume</span>
                <span>{val}%</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={val}
                onChange={e => setVal(Number(e.target.value))}
                className="w-full h-1 bg-surface-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
        </div>
    )
}

// 19. Chat Input (with attachments)
export const ChatInput = () => {
    return (
        <div className="flex items-center gap-2 w-full bg-surface-100 p-2 rounded-lg border border-white/10">
            <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded"><Paperclip size={16}/></button>
            <input type="text" placeholder="Message..." className="bg-transparent outline-none text-white text-sm flex-1" />
            <button className="p-1.5 bg-primary text-black rounded hover:opacity-90"><Send size={14}/></button>
        </div>
    )
}

// 20. Mention Input (Simulated)
export const MentionInput = () => {
    return (
        <div className="w-full px-4 py-2 bg-surface-100 border border-white/10 rounded outline-none text-white text-sm">
            Hello <span className="text-primary font-bold">@Alice</span>, check this out!
        </div>
    )
}

