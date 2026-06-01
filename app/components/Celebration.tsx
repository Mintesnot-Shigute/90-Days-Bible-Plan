import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CelebrationProps {
  trigger: boolean;
}

export function Celebration({ trigger }: CelebrationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gold shimmer burst */}
      <motion.div
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-gold via-gold-light to-gold rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 1, 
            x: 0, 
            y: 0,
          }}
          animate={{ 
            opacity: 0, 
            x: Math.cos((i / 6) * Math.PI * 2) * 120,
            y: Math.sin((i / 6) * Math.PI * 2) * 120,
          }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      ))}

      {/* Text celebration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: -40 }}
        exit={{ opacity: 0, scale: 0.8, y: -80 }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <div className="text-3xl font-serif font-bold text-gold">
          Day Complete! 🎉
        </div>
      </motion.div>
    </div>
  );
}
