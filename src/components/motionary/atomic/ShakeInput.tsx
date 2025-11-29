'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ShakeInput = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (value.length < 3) {
      setError(true);
      setTimeout(() => setError(false), 500);
    } else {
      alert("Success!");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="relative"
        animate={error ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          placeholder="Enter 3+ chars"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full px-4 py-2 bg-white/5 border rounded-lg focus:outline-none transition-colors ${
            error ? "border-red-500 text-red-500 placeholder:text-red-500/50" : "border-white/10 text-white focus:border-primary/50"
          }`}
        />
      </motion.div>
      <button
        onClick={handleSubmit}
        className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded text-xs text-white/70 transition-colors self-start"
      >
        Validate
      </button>
    </div>
  );
};

