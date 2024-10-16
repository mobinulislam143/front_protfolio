import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery({ getGallery }) {
  return (
    <div className="flex flex-col gap-1 pb-3">
      <AnimatePresence>
        {getGallery.map((item, index) => (
          <motion.div
            key={index}
            className="bg-bg_primary p-4 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <h2 className="text-lg font-semibold text-text_color_light mb-2">{item.title}</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 overflow-x-auto">
              {item.img1 && (
                <img
                  src={item.img1}
                  alt={`${item.title} Image 1`}
                  className="h-auto rounded-md object-cover"
                />
              )}
              {item.img2 && (
                <img
                  src={item.img2}
                  alt={`${item.title} Image 2`}
                  className="h-auto rounded-md object-cover"
                />
              )}
              {item.img3 && (
                <img
                  src={item.img3}
                  alt={`${item.title} Image 3`}
                  className="h-auto rounded-md object-cover"
                />
              )}
              {item.img4 && (
                <img
                  src={item.img4}
                  alt={`${item.title} Image 4`}
                  className="h-auto rounded-md object-cover"
                />
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
