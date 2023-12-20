import { useState, useEffect } from "react";
import CleaningVideo from "./CleaningVideo";
import { motion, AnimatePresence } from "framer-motion";
import {
  FormattedCarouselImage,
  ImageKeys,
} from "../utils/formatCarouselImages";
import useCarousel from "../hooks/useCarousel";

type CarouselProps = {
  isCleaningVideo: boolean;
  carouselImages: FormattedCarouselImage[];
  resolution?: number | null;
};

const Carousel = ({
  isCleaningVideo,
  carouselImages = [],
  resolution,
}: CarouselProps): JSX.Element => {
  const { currentIndex } = useCarousel({
    totalSlides: carouselImages.length,
  });

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
              {carouselImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`w-full object-cover brightness-90 ${
                      index === currentIndex ? "block" : "hidden"
                    }`}
                    src={image.imagesUrl[resolution as ImageKeys]}
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

export default Carousel;
