import React from "react";
import ServiesButton from "./ServicesButton";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faScrewdriverWrench,
  faShower,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const servicesButtons = [
    {
      id: 1,
      icon: faSnowflake,
      color: "#d6d6d6",
      text: "Especializados en equipos Split y Piso-Techo.",
    },
    {
      id: 2,
      icon: faScrewdriverWrench,
      color: "#0dc5de",
      text: "Reparación e instalación.",
    },
    {
      id: 3,
      icon: faShower,
      color: "#35f500",
      text: "Lavamos tu aire acondicionado.",
    },
    {
      id: 4,
      icon: faLocationDot,
      color: "#ff0000",
      text: "Nuñez, Belgrano, Villa Urquiza, Saavedra, Coghlan, Colegiales, Vicente Lopez, San Isidro",
    },
  ];

  return (
    <section
      className="m-4 flex h-max grow flex-col rounded-lg bg-gray-800 px-4 py-2 shadow-lg"
      role="About us"
    >
      {
        // Sub-title
      }
      <h2 className="py-4 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
        Servicio técnico en Aires Acondicionados
      </h2>
      {
        // Buttons container
      }
      <div className="flex grow flex-col justify-evenly">
        {servicesButtons.map(({ id, icon, color, text }) => (
          <ServiesButton key={id} icon={icon} color={color} text={text} />
        ))}
      </div>
    </section>
  );
};

export default Services;
