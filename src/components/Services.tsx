import React from "react";
import ServicesButton from "./ServicesButton";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

// Font Awesome
import {
  faLocationDot,
  faScrewdriverWrench,
  faShower,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

type ServiceButtonType = {
  id: number;
  icon: IconDefinition;
  color: string;
  text: string;
  onClick?: () => void;
  link?: string;
};

type ServicesProps = {
  setIscleaningVideo: React.Dispatch<React.SetStateAction<boolean>>;
};

const Services = ({ setIscleaningVideo }: ServicesProps) => {
  const servicesButtons: ServiceButtonType[] = [
    {
      id: 1,
      icon: faSnowflake,
      color: "#d6d6d6",
      text: "Tecnico Matriculado CACAAV",
      onClick: () => {
        setIscleaningVideo(false);
      },
      link: "https://www.cacaav.com.ar/Informacion-al-usuario",
    },
    {
      id: 2,
      icon: faScrewdriverWrench,
      color: "#0dc5de",
      text: "Reparación e instalación de equipos Split y Piso-Techo.",
      onClick: () => {
        setIscleaningVideo(false);
      },
    },
    {
      id: 3,
      icon: faShower,
      color: "#35f500",
      text: "Lavamos tu aire acondicionado.",
      onClick: () => {
        setIscleaningVideo(true);
      },
    },
    {
      id: 4,
      icon: faLocationDot,
      color: "#ff0000",
      text: "Villa Urquiza, Villa Pueyrredon, Saavedra, Coghlan, Belgrano, Parque Chas, Villa Ortuzar",
      onClick: () => {
        setIscleaningVideo(false);
      },
      link: "https://www.google.com.ar/maps/place/Refrigeraci%C3%B3n+Royal/@-34.5629894,-58.4906778,14.42z/data=!4m6!3m5!1s0x95bcb19cd53d9109:0x47a2ecdc0b99101c!8m2!3d-34.5701134!4d-58.4843619!16s%2Fg%2F11j7j149p2?hl=en&entry=ttu",
    },
  ];

  const motionDelayFunction = (index: number): number => {
    return index * 0.1;
  };

  return (
    <section
      className="m-2 flex grow flex-col rounded-lg bg-gray-800 p-4 shadow-lg md:p-4 lg:m-6 lg:p-8"
      role="Services"
    >
      {/* Sub-title */}
      <h2 className="mb-4 py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:mb-8 lg:text-4xl xl:px-48">
        Servicio técnico de Aires Acondicionados
      </h2>
      {/* Buttons container */}
      <div className="flex grow flex-col justify-evenly gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {servicesButtons.map(({ id, icon, color, text, onClick, link }) => (
          <ServicesButton
            onClick={onClick ? () => onClick() : undefined}
            key={id}
            id={id}
            icon={icon}
            color={color}
            text={text}
            link={link}
            motionDelay={motionDelayFunction(id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
