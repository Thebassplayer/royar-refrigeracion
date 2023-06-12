import React from "react";
import SectionsContainer from "./SectionsContainer";

const AboutUs = () => {
  return (
    <SectionsContainer>
      <section id="aboutUs">
        <h2 className="py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Quienes Somos?
        </h2>
        <p className="mt-4 px-4 text-justify text-gray-300">
          Somos una empresa especializada en reparación e instalación de aires
          acondicionados domiciliarios y comerciales en el norte de CABA y Gran
          Buenos Aires, Argentina. Contamos con más de 10 años de experiencia.
          Ofrecemos 1 año de garantia escrita en todos nuestros trabajos.
        </p>
      </section>
    </SectionsContainer>
  );
};

export default AboutUs;
