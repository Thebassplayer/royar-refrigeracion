import React from "react";

const AboutUs = () => {
  return (
    <section className="m-4 flex h-max grow flex-col justify-between rounded-lg bg-gray-800 p-4 shadow-lg">
      <div>
        <h1 className="text-center text-2xl font-bold text-white">
          ¿Quienes Somos?
        </h1>
        <p className="mt-4 text-gray-300">
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
