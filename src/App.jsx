import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Services from "./components/Services";

// Provisorie carousel images
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";

const App = () => {
  //Provisorie carousel items
  const carouselItems = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  return (
    <div className="bg-slate-700">
      <div className="h-screen">
        <Header />
        <Carousel images={carouselItems} />
      </div>
      <Services />
    </div>
  );
};

export default App;
