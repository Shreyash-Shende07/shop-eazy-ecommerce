
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CelebrationOverlayProps {
  show: boolean;
}

const CelebrationOverlay: React.FC<CelebrationOverlayProps> = ({ show }) => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  
  useEffect(() => {
    if (show) {
      // Create random sparkles when shown
      const newSparkles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // random position as percentage
        y: Math.random() * 100,
      }));
      setSparkles(newSparkles);
    }
  }, [show]);
  
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="relative">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Sparkles className="text-yellow-400" />
          </motion.div>
        ))}

        <motion.div 
          className="text-5xl font-bold text-white text-center px-16 py-12 rounded-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          I LOVE YOU
        </motion.div>
      </div>
    </div>
  );
};

export default CelebrationOverlay;
