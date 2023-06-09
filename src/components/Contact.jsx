import React from "react";
import SectionsContainer from "./SectionsContainer";

import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <SectionsContainer>
      <section>
        <h2 className="py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Consultas?
        </h2>
        <p className="mt-4 text-center text-gray-300">
          Realizanos tu consulta directamente por Whatsapp. Te responderemos a
          la brevedad
        </p>

        <div className="mx-auto mt-4 w-min lg:mt-8">
          <WhatsAppButton />
        </div>
      </section>
    </SectionsContainer>
  );
};

export default Contact;
