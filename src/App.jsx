import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";

import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";

const App = () => {
  const carouselItems = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];
  return (
    <div className="bg-slate-800">
      <Header />
      <Services />
    </div>
  );
};

export default App;
