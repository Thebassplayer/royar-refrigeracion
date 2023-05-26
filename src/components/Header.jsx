import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
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
      <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          ❄️ Royal Refrigeracion
        </h1>
      </div>
      <div className="mx-auto w-full max-w-screen-xl bg-slate-700 px-4 py-4 text-center lg:px-12 lg:py-16">
        <h2 className=" text-2xl font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Servicio técnico de Aires Acondicionados
        </h2>
        <h3 className="mt-4 text-sm font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Nuñez, Belgrano, Villa Urquiza, Saavedra, Coghlan, Colegiales, Vicente
          Lopez, San Isidro
        </h3>
      </div>
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="mx-auto w-full"
      >
        {carouselItems.map(item => (
          <div key={item.id}>
            <div className="w-full">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="my-auto h-auto w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Header;
