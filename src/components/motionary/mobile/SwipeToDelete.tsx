'use client';

import React from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Trash2, Mail } from 'lucide-react';

interface SwipeItemProps {
    id: number;
    sender: string;
    subject: string;
    onDelete: (id: number) => void;
}

const SwipeItem = ({ id, sender, subject, onDelete }: SwipeItemProps) => {
    const [exitX, setExitX] = React.useState(0);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -100) {
            setExitX(-200); // Trigger exit animation
            setTimeout(() => onDelete(id), 200);
        }
    };

    return (
        <motion.div
            layout
            className="relative bg-surface-100 mb-2 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
            exit={{ x: -300, opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.2 }}
        >
             {/* Background Action (Delete) */}
            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-end px-6">
                <Trash2 className="w-5 h-5 text-red-500" />
            </div>

            {/* Foreground Content */}
            <motion.div
                className="relative bg-surface-100 p-4 flex items-center gap-4 z-10 border border-white/5"
                drag="x"
                dragConstraints={{ left: -150, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                style={{ x: 0 }} // Initial x
                whileDrag={{ scale: 1.02 }}
            >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">{sender}</h4>
                    <p className="text-xs text-white/50 truncate">{subject}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const SwipeToDelete = () => {
  const [items, setItems] = React.useState([
    { id: 1, sender: "Alice", subject: "Project Update" },
    { id: 2, sender: "Bob", subject: "Lunch tomorrow?" },
    { id: 3, sender: "Charlie", subject: "Design System Docs" },
  ]);

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode='popLayout'>
        {items.map((item) => (
          <SwipeItem key={item.id} {...item} onDelete={handleDelete} />
        ))}
      </AnimatePresence>
        {items.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center text-white/30 py-8 text-sm"
            >
                All caught up!
                <button onClick={() => setItems([
                     { id: 1, sender: "Alice", subject: "Project Update" },
                     { id: 2, sender: "Bob", subject: "Lunch tomorrow?" },
                     { id: 3, sender: "Charlie", subject: "Design System Docs" },
                ])} className="block mx-auto mt-2 text-primary hover:underline">Reset</button>
            </motion.div>
        )}
    </div>
  );
};

