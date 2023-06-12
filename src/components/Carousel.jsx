import React, { useState, useEffect } from "react";

// Custom hooks
import useSanityQuery from "../hooks/useSanityQuery";
import useScreenResolution from "../hooks/useScreenResolution";

// Components
import CleaningVideo from "./CleaningVideo";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ isCleaningVideo, images, resolution }) => {
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
    <section className="h-2/6 sm:h-2/5 md:h-2/5 lg:h-1/2">
      {isCleaningVideo ? (
        <div id="cleaning-video" className="flex h-full overflow-hidden">
          <CleaningVideo videoId="-xcsCyxIXis" />
        </div>
      ) : (
        <div id="carousel" className="flex h-full overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="flex w-full items-center justify-center overflow-hidden"
              initial={{ opacity: 1, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {images.map((image, index) => {
                console.log("Resolution:", image.imagesUrl[resolution]);
                return (
                  <img
                    key={index}
                    className={`w-full object-cover brightness-50 ${
                      index === currentIndex ? "block" : "hidden"
                    }`}
                    src={image.imagesUrl[resolution]}
                    alt={`Slide ${index + 1}`}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

const CarouselContainer = ({ isCleaningVideo }) => {
  const { isLoading, isError, images } = useSanityQuery();
  const resolution = useScreenResolution();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <Carousel
      isCleaningVideo={isCleaningVideo}
      images={images}
      resolution={resolution}
    />
  );
};

export default CarouselContainer;
