import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-1/2">
      <div id="carousel" className="relative h-full overflow-hidden md:h-3/4">
        <div className="flex items-center justify-between">
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded bg-transparent px-4 py-2 text-white transition-colors duration-300 hover:text-gray-800 focus:outline-none"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded bg-transparent px-4 py-2 text-white transition-colors duration-300 hover:text-gray-800 focus:outline-none"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="flex h-full items-center justify-center">
          <img
            className="object-cover md:h-auto md:w-full"
            src={images[currentIndex]["image"]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
