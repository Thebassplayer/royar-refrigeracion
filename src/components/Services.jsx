import React from "react";

import Contact from "./Contact";

const Services = () => {
  return (
    <section className="flex flex-col py-4">
      {/* Aquí va la información sobre tus servicios */}
      <div>
        <div className="m-4 h-full max-w-max rounded-lg bg-gray-800 p-6 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-white">
            ¿Quienes Somos?
          </h1>
          <p className="mt-4 text-gray-300">
            "Somos una empresa especializada en reparación e instalación de
            aires acondicionados domiciliarios y comerciales en el norte de CABA
            y Gran Buenos Aires, Argentina. Contamos con más de 10 años de
            experiencia. 1 año de garantia en todos nuestros trabajos.
          </p>
        </div>
      </div>
      <div className="h-1/2">
        <Contact />
      </div>
    </section>
  );
};

export default Services;
