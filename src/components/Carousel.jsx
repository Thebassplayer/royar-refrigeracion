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
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-2/6 sm:h-2/5 md:h-1/2">
      <div id="carousel" className="h-full overflow-hidden ">
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
