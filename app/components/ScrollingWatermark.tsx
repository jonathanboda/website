'use client';

import { motion } from 'framer-motion';

export default function ScrollingWatermark() {
  // Create a long string of text to ensure seamless scrolling
  const text = "ELVENWOOD INTERIOR • ".repeat(20);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden hidden md:block">
      {/* Left Side - Moves Up */}
      <div className="absolute left-4 top-[-100%] bottom-[-100%] flex flex-col justify-center w-24 opacity-[0.04]">
        <motion.div
          className="whitespace-nowrap font-bold text-8xl text-orange-600 tracking-widest"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          animate={{ y: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear"
          }}
        >
          {text}
        </motion.div>
      </div>

      {/* Right Side - Moves Down */}
      <div className="absolute right-4 top-[-100%] bottom-[-100%] flex flex-col justify-center w-24 opacity-[0.04]">
        <motion.div
          className="whitespace-nowrap font-bold text-8xl text-orange-600 tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
          animate={{ y: [-1000, 0] }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear"
          }}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}
