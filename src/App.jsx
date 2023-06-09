import { useState } from "react";
import FullscreenContainer from "./components/FullscreenContainer";
import Header from "./components/Header";
import MainSectionContainer from "./components/MainSectionContainer";
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
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";
import image7 from "./assets/image7.jpeg";
import image8 from "./assets/image8.jpg";

const App = () => {
  const [isCleaningVideo, setIscleaningVideo] = useState(false);

  //Provisorie carousel items
  const carouselItems = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
  ];

  return (
    <div className="bg-slate-700">
      <FullscreenContainer>
        <Header />
        <Carousel isCleaningVideo={isCleaningVideo} images={carouselItems} />
        <Services setIscleaningVideo={setIscleaningVideo} />
      </FullscreenContainer>
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
