import React from "react";

import Contact from "./Contact";

const Services = () => {
  return (
    <section className="flex h-screen flex-col">
      {/* Aquí va la información sobre tus servicios */}
      <div className="h-1/2">
        <div className="m-4 h-full rounded-lg bg-gray-800 p-6 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-white">
            ¿Quienes Somos?
          </h1>
          <p className="mt-4 text-gray-300">
            "Somos una empresa líder en reparación e instalación de aires
            acondicionados domiciliarios y comerciales en CABA, Argentina. Más
            de 10 años de experiencia. 1 año de garantia en todos nuestros
            trabajos.
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
