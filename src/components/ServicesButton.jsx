import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiesButton = ({ id, icon, color, text }) => {
  return (
    <div
      id={id}
      className="mt-2 flex grow items-center rounded-lg bg-gray-700 px-4 py-2 shadow-lg sm:py-0 sm:text-xl lg:text-2xl"
    >
      <div className="pr-4">
        <FontAwesomeIcon icon={icon} size="xl" style={{ color }} />
      </div>
      <h3 className="text-white">{text}</h3>
    </div>
  );
};

export default ServiesButton;
