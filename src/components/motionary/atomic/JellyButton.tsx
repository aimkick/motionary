'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const JellyButton = ({ children = "Jelly" }: { children?: React.ReactNode }) => {
  return (
    <motion.button
      className="px-10 py-4 bg-accent text-white font-bold rounded-xl shadow-[0_10px_30px_-10px_rgba(255,0,255,0.5)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ 
        scale: 0.95,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.4 } 
      }}
    >
      {children}
    </motion.button>
  );
};

