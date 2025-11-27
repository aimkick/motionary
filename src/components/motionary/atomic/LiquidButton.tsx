'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LiquidButton = ({ children = "Liquid Fill" }: { children?: React.ReactNode }) => {
  return (
    <motion.button
      className="relative px-8 py-4 bg-transparent text-primary border border-primary/30 rounded-lg overflow-hidden group"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-primary"
        initial={{ y: "100%" }}
        variants={{
          hover: { 
            y: 0,
            transition: { 
              type: "spring", 
              stiffness: 100, 
              damping: 20 
            } 
          }
        }}
      />
      {/* Wave Effect using pseudo-elements or SVG if needed, simplified here for speed */}
      <motion.div 
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-primary/50 rounded-[40%]"
        variants={{
            hover: {
                rotate: 360,
                y: "-50%",
                transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }
            }
        }}
        style={{ originX: 0.5, originY: 0.5, top: '100%' }}
      />
      
      <span className="relative z-10 font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
        {children}
      </span>
    </motion.button>
  );
};

