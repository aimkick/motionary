'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingInput = ({ label = "Username" }: { label?: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mt-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-0 py-2 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-primary transition-colors"
      />
      <motion.label
        className="absolute left-0 pointer-events-none text-white/50 origin-top-left"
        initial={false}
        animate={{
          top: isFocused || value ? "-1.25rem" : "0.5rem",
          scale: isFocused || value ? 0.75 : 1,
          color: isFocused ? "var(--primary)" : "rgba(255, 255, 255, 0.5)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {label}
      </motion.label>
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

