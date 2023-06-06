import React from "react";

const Header = () => {
  return (
    <section className="flex h-1/2 flex-col text-white">
      {/* Title */}
      <div className="h-1/4 sm:h-1/4">
        <div className="mx-auto max-w-screen-xl px-4 py-6 text-center md:py-8 lg:px-14 lg:py-16">
          <h1 className="text-center text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl lg:text-6xl">
            ❄️ Royal Refrigeracion
          </h1>
        </div>
        {/* Subtitle */}
        <div className="m-4 mt-0 rounded-lg bg-gray-800 p-6 shadow-lg">
          <h2 className="text-whitesm:px-16 text-center text-2xl font-normal lg:text-3xl xl:px-48">
            Servicio técnico de Aires Acondicionados
          </h2>
          <h3 className="text-whitesm:px-16 mt-2 text-center text-sm font-normal lg:text-xl xl:px-48">
            Nuñez, Belgrano, Villa Urquiza, Saavedra, Coghlan, Colegiales,
            Vicente Lopez, San Isidro
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
