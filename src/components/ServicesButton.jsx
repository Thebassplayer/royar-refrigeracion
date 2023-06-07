import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiesButton = ({ id, icon, color, text }) => {
  return (
    <div
      id={id}
      className="flex grow cursor-pointer items-center justify-start rounded-lg bg-gray-700 px-4 py-2 shadow-lg hover:bg-gray-600 active:bg-gray-500 sm:py-0 sm:text-xl md:flex-col lg:text-2xl"
    >
      <div className="flex h-full items-center justify-center pr-4 md:hidden">
        <FontAwesomeIcon icon={icon} size="xl" style={{ color }} />
      </div>
      <div className="hidden justify-center md:flex md:h-2/3 md:flex-col lg:mb-4">
        <FontAwesomeIcon icon={icon} size="2xl" style={{ color }} />
      </div>
      <h3 className="text-sm text-gray-200 lg:h-1/3 lg:text-center xl:text-lg">
        {text}
      </h3>
    </div>
  );
};

export default ServiesButton;
