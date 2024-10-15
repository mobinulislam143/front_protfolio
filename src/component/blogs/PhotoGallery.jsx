import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './photogallery.css';

function Gallery({ items, setIndex }) {
  return (
    <ul className="gallery-container">
      {items.map((image, i) => (
        <motion.li
          className="gallery-item"
          key={image.img1 + i}
          onClick={() => setIndex(i)}
          layoutId={image.img1 + i}
        >
          <img src={image.img1} alt={`Gallery item ${i}`} className="gallery-image" />
        </motion.li>
      ))}
    </ul>
  );
}

function SingleImage({ image, onClick, prev, next }) {
  return (
    <div className="single-image-container" onClick={onClick}>
      <motion.div layoutId={image.img1} className="single-image">
        <img src={image.img1} alt="Single view" className="single-view-image" />
      </motion.div>
      <div className="image-navigation">
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="nav-button">
          Previous
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default function PhotoGallery({ getGallery }) {
  const [index, setIndex] = useState(false);

  // Extract the images from the gallery data
  const images = getGallery.map((item) => ({
    img1: item.img1,
    img2: item.img2,
    img3: item.img3,
    img4: item.img4,
  }));

  const nextIndex = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevIndex = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Gallery items={images} setIndex={setIndex} />
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
            image={images[index]}
            onClick={() => setIndex(false)}
            next={nextIndex}
            prev={prevIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
