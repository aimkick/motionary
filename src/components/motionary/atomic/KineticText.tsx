'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const KineticText = ({ text = "Kinetic Motion" }: { text?: string }) => {
  const characters = text.split("");

  return (
    <div className="flex overflow-hidden cursor-default">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className="text-4xl font-black uppercase tracking-tight text-white inline-block"
          initial={{ y: 0 }}
          whileHover={{ 
            y: "-100%",
            transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
          }}
        >
          <span className="block h-[1em]">{char === " " ? "\u00A0" : char}</span>
          <span className="block h-[1em] text-primary absolute top-full left-0">
            {char === " " ? "\u00A0" : char}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

