import { useState, useEffect } from "react";

type UseCarouselProps = {
  totalSlides: number;
  intervalDuration?: number;
  random?: boolean;
};

const useCarousel = ({
  totalSlides,
  intervalDuration = 5000,
  random = false,
}: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (random) {
          // Generate a random index different from the current one
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * totalSlides);
          } while (randomIndex === prevIndex);
          return randomIndex;
        } else {
          return prevIndex < totalSlides - 1 ? prevIndex + 1 : 0;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [totalSlides, intervalDuration, random]);

  return { currentIndex, setCurrentIndex };
};

export default useCarousel;
