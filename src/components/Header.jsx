import React from "react";
import { Box, Container, Typography } from "@mui/material";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const Header = () => {
  const carouselItems = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  return (
    <section className="flex h-screen flex-col text-white">
      {/* Title */}
      <div class="mx-auto max-w-screen-xl px-4 py-6 text-center lg:px-12 lg:py-16">
        <h1 className=" text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          ❄️ Royal Refrigeracion
        </h1>
      </div>
      {/* Subtitle */}
      <div className="mx-auto w-full max-w-screen-xl bg-slate-700 px-4 py-4 text-center lg:px-12 lg:py-16">
        <h2 className=" text-2xl font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Servicio técnico de Aires Acondicionados
        </h2>
        <h3 className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Nuñez, Belgrano, Villa Urquiza, Saavedra, Coghlan, Colegiales, Vicente
          Lopez, San Isidro
        </h3>
      </div>
      <Carousel images={carouselItems} />
    </section>
  );
};

export default Header;
