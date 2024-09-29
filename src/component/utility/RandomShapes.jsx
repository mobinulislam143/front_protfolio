// RandomShapes.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Helper function to generate random positions within the viewport
const randomPosition = () => ({
  x: Math.random() * (window.innerWidth - 100), // Adjust for width of shapes
  y: Math.random() * (window.innerHeight - 100), // Adjust for height of shapes
});

const RandomShape = () => {
  const [position, setPosition] = useState(randomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(randomPosition());
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      className="bg-blue-500 w-20 h-20 absolute rounded-lg z-0"
      animate={{
        x: position.x,
        y: position.y,
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const RandomShapes = () => {
  const shapes = Array.from({ length: 5 }).map((_, i) => <RandomShape key={i} />);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      {shapes}
    </div>
  );
};

export default RandomShapes;
