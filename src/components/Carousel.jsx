import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
        return newIndex;
      });
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-2/6 sm:h-2/5 md:h-1/2">
      <div id="carousel" className="flex h-full overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="flex h-full items-center justify-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className={`object-cover md:h-auto md:w-full ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                src={image.src}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Carousel;
