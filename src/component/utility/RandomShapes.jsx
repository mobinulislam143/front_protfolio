import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Helper function to generate random corner positions (start and end)
const getRandomCornerPosition = () => {
  const corners = [
    { x: 0, y: 0 }, // Top-left
    { x: window.innerWidth - 100, y: 0 }, // Top-right
    { x: 0, y: window.innerHeight - 100 }, // Bottom-left
    { x: window.innerWidth - 100, y: window.innerHeight - 100 }, // Bottom-right
  ];

  return corners[Math.floor(Math.random() * corners.length)];
};

const RandomShape = () => {
  const [startPosition, setStartPosition] = useState(getRandomCornerPosition());
  const [endPosition, setEndPosition] = useState(getRandomCornerPosition());

  useEffect(() => {
    // When the animation completes, reset the start and end positions to new random corners
    const updatePosition = () => {
      setStartPosition(endPosition); // Start where the shape left off
      setEndPosition(getRandomCornerPosition()); // Move to a new random corner
    };

    const interval = setInterval(updatePosition, Math.random() * 10000 + 5000); // Update every 5-15 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [endPosition]);

  return (
    <motion.div
      className="glass w-60 h-60 absolute rounded-lg z-0"
      initial={{
        x: startPosition.x,
        y: startPosition.y,
      }}
      animate={{
        x: endPosition.x,
        y: endPosition.y,
        rotate: [0, 360], // Add rotation for visual effect
      }}
      transition={{
        duration: Math.random() * 10 + 5, // Random duration between 5 and 15 seconds
        ease: 'linear', // Constant speed
        repeat: Infinity, // Keep repeating
        onRepeat: () => {
          setStartPosition(endPosition); // Continue the animation from the last end position
          setEndPosition(getRandomCornerPosition()); // Set new target for next loop
        },
      }}
    />
  );
};

const RandomShapes = () => {
  const shapes = Array.from({ length: 10 }).map((_, i) => <RandomShape key={i} />);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      {shapes}
    </div>
  );
};

export default RandomShapes;
