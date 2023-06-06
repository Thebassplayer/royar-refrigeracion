import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiesButton = ({ id, icon, color, text }) => {
  return (
    <div
      id={id}
      className="mt-2 flex grow cursor-pointer flex-col items-center rounded-lg bg-gray-700 px-4 py-2 shadow-lg hover:bg-gray-600 active:bg-gray-500 sm:py-0 sm:text-xl lg:justify-center lg:text-2xl"
    >
      <div className="pr-4 lg:hidden">
        <FontAwesomeIcon icon={icon} size="xl" style={{ color }} />
      </div>
      <div className="lg: hidden justify-center lg:mb-4 lg:flex lg:h-2/3 lg:flex-col">
        <FontAwesomeIcon icon={icon} size="2xl" style={{ color }} />
      </div>
      <h3 className="text-sm text-gray-200 lg:h-1/3 lg:text-center xl:text-lg">
        {text}
      </h3>
    </div>
  );
};

export default ServiesButton;
