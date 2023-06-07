import React from "react";

const AboutUs = () => {
  return (
    <section className="m-2 flex h-max grow flex-col justify-between rounded-lg bg-gray-800 p-4 shadow-lg lg:m-4">
      <div>
        <h2 className="py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Quienes Somos?
        </h2>
        <p className="mt-4 text-justify text-gray-300">
          "Somos una empresa especializada en reparación e instalación de aires
          acondicionados domiciliarios y comerciales en el norte de CABA y Gran
          Buenos Aires, Argentina. Contamos con más de 10 años de experiencia. 1
          año de garantia en todos nuestros trabajos.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
