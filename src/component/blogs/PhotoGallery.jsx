import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery({ items, setIndex }) {
  return (
    <ul className="gallery-container">
      {items.map((color, i) => (
        <motion.li
          className="gallery-item"
          key={color}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: color }}
          layoutId={color}
        />
      ))}
    </ul>
  );
}

function SingleImage({ color, onClick, prev, next }) {
  return (
    <div className="single-image-container" onClick={onClick}>
      <motion.div
        layoutId={color}
        className="single-image"
        style={{ backgroundColor: color }}
      />
      <div className="image-navigation">
        <button onClick={prev} className="nav-button">Previous</button>
        <button onClick={next} className="nav-button">Next</button>
      </div>
    </div>
  );
}

export default function PhotoGallery() {
  const [index, setIndex] = useState(false);

  const numColors = 4 * 4;
  const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
  const colors = Array.from(Array(numColors)).map((_, i) =>
    makeColor(Math.round((360 / numColors) * i))
  );

  const nextIndex = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  const prevIndex = () => {
    setIndex((prev) => (prev - 1 + colors.length) % colors.length);
  };

  return (
    <div>
      <Gallery items={colors} setIndex={setIndex} />
      <AnimatePresence>
        {index !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="overlay"
            onClick={() => setIndex(false)}
          />
        )}

        {index !== false && (
          <SingleImage
            key="image"
            color={colors[index]}
            onClick={() => setIndex(false)}
            next={nextIndex}
            prev={prevIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
