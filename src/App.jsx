import React from "react";
import FullscreenContainer from "./components/FullscreenContainer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Provisorie carousel images
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.png";

const App = () => {
  //Provisorie carousel items
  const carouselItems = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
  ];

  return (
    <div className="bg-slate-700">
      <FullscreenContainer>
        <Header />
        <Carousel images={carouselItems} />
        <Services />
      </FullscreenContainer>
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
