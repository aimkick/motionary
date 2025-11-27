'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children = "Magnetic" }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      className="relative px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium tracking-wider overflow-hidden group"
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <span className="relative z-10 mix-blend-difference">{children}</span>
      <div className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full" />
    </motion.button>
  );
};

