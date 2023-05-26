import React from "react";

import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <section className="flex h-full flex-col items-center justify-evenly">
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white">Consultas</h1>
        <p className="mt-4 text-gray-300">
          Realizanos tu consulta directamente por Whatsapp. Te responderemos a
          la brevedad
        </p>
      </div>

      <WhatsAppButton />
    </section>
  );
};

export default Contact;
