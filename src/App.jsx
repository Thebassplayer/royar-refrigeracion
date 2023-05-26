import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-slate-800">
      <Header />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
