import SectionsContainer from "./SectionsContainer";

const AboutUs = () => {
  return (
    <SectionsContainer>
      <section id="aboutUs">
        <h2 className="mb-4 py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Quienes Somos?
        </h2>
        <div className="flex h-full cursor-pointer flex-col gap-4  rounded-lg bg-gray-700 px-4 py-4 shadow-lg hover:bg-gray-600 active:bg-gray-500 sm:py-0 sm:text-xl md:flex-col lg:text-2xl">
          <p className="px-4 text-justify text-gray-300">
            - Somos una empresa especializada en reparación e instalación de
            aires acondicionados domiciliarios y comerciales en la zona norte de
            CABA, Argentina.
          </p>
          <p className="px-4 text-justify text-gray-300">
            - Tecnicos matriculados.
          </p>
          <p className="px-4 text-justify text-gray-300">
            - Más de 12 años de experienciaen el rubro.
          </p>
          <p className="px-4 text-justify text-gray-300">
            - Ofrecemos 1 año de garantia escrita en todos nuestros trabajos.
          </p>
          <p className="px-4 text-justify text-gray-300">
            - Villa Urquiza, Villa Pueyrredon, Saavedra, Coghlan, Belgrano,
            Parque Chas, Villa Ortuzar
          </p>
        </div>
      </section>
    </SectionsContainer>
  );
};

export default AboutUs;
