import React from "react";

import Contact from "./Contact";

const Services = () => {
  return (
    <section className="h-screen">
      {/* Aquí va la información sobre tus servicios */}
      <div className="h-1/2">
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white">Quienes Somos?</h1>
          <p className="mt-4 text-gray-300">
            "Somos una empresa líder en reparación e instalación de aires
            acondicionados domiciliarios y comerciales en Buenos Aires. Con más
            de 10 años de experiencia, ofrecemos soluciones eficientes y
            confiables para mantener un ambiente fresco y confortable. Nuestro
            equipo altamente capacitado garantiza un servicio profesional y de
            calidad. ¡Contáctanos para disfrutar del máximo confort en tu hogar
            o negocio!"
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
