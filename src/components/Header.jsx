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
    <header className="flex h-screen flex-col justify-between bg-blue-500 text-white">
      <Box className="py-6" textAlign="center">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            className="font-bold text-white"
          >
            ❄️ Royal Refrigeracion
          </Typography>
        </Container>
      </Box>
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
      <Box className="animate-fadeIn h-1 bg-black"></Box>
    </header>
  );
};

export default Header;
