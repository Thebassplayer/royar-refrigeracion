import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faScrewdriverWrench,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section
      className="m-4 flex h-max grow flex-col rounded-lg bg-gray-800 p-4 shadow-lg"
      role="About us"
    >
      {
        // Sub-title
      }
      <h2 className="pt-0 text-center text-2xl font-extrabold tracking-wide  text-white sm:px-16 lg:text-3xl xl:px-48">
        Servicio técnico en Aires Acondicionados
      </h2>
      <div className="flex grow flex-col justify-evenly">
        {
          // Description
        }
        <div className="mt-4 flex grow items-center rounded-lg bg-gray-700 px-4 py-2 shadow-lg">
          <div className="pr-4">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="xl"
              style={{ color: "#0dc5de" }}
            />
          </div>
          <h3 className="text-white">
            Especializados en equipos Split y Piso-Techo. Reparación e
            instalación.
          </h3>
        </div>
        {
          //Lavamos tu aire
        }
        <div className="mt-4 flex grow items-center rounded-lg bg-gray-700 px-4 py-2 shadow-lg">
          <div className="pr-4">
            <FontAwesomeIcon
              icon={faShower}
              size="xl"
              rotation={270}
              style={{ color: "#35f500" }}
            />
          </div>
          <h3 className="text-white">
            Lavamos tu aire acondicionado. Mejora el funionamiento. Baja el
            onsumo. Evita malos olores y bacterias.
          </h3>
        </div>
        {
          // Location
        }
        <div className="mt-4 flex grow items-center rounded-lg bg-gray-700 px-4 py-2 shadow-lg">
          <div className="pr-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="xl"
              style={{ color: "#ff0000" }}
            />
          </div>
          <h3 className="text-white">
            Nuñez, Belgrano, Villa Urquiza, Saavedra, Coghlan, Colegiales,
            Vicente Lopez, San Isidro
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
