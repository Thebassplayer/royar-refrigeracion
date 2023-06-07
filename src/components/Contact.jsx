import React from "react";

import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <section className="mx-2 flex h-full flex-col items-center justify-evenly lg:m-4">
      <div className="m-4 w-full rounded-lg bg-gray-800 p-6 shadow-lg">
        <h2 className="py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Consultas?
        </h2>
        <p className="mt-4 text-center text-gray-300">
          Realizanos tu consulta directamente por Whatsapp. Te responderemos a
          la brevedad
        </p>
      </div>
      <div className="my-4">
        <WhatsAppButton />
      </div>
    </section>
  );
};

export default Contact;
