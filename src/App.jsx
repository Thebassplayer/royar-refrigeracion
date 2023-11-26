import { useState } from "react";
import FullscreenContainer from "./components/FullscreenContainer";
import Header from "./components/Header";
import MainSectionContainer from "./components/MainSectionContainer";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isCleaningVideo, setIscleaningVideo] = useState(false);

  return (
    <div className="flex flex-col gap-4 bg-slate-700">
      <FullscreenContainer>
        <Header />
        <Carousel isCleaningVideo={isCleaningVideo} />
        <Services setIscleaningVideo={setIscleaningVideo} />
      </FullscreenContainer>
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
