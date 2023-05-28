import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5491171130958" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-green-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-green-600"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
      <p>Contacto</p>
    </a>
  );
};

export default WhatsAppButton;
