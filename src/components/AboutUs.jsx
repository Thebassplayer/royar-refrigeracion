import SectionsContainer from "./SectionsContainer";

const AboutUs = () => {
  return (
    <SectionsContainer>
      <section id="aboutUs">
        <h2 className="py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Quienes Somos?
        </h2>
        <div>
          <p className="mt-4 px-4 text-justify text-gray-300">
            - Somos una empresa especializada en reparación e instalación de
            aires acondicionados domiciliarios y comerciales en la zona norte de
            CABA, Argentina.
          </p>
          <p className="mt-4 px-4 text-justify text-gray-300">
            - Tecnicos matriculados.
          </p>
          <p className="mt-4 px-4 text-justify text-gray-300">
            - Más de 12 años de experienciaen el rubro.
          </p>
          <p className="mt-4 px-4 text-justify text-gray-300">
            - Ofrecemos 1 año de garantia escrita en todos nuestros trabajos.
          </p>
          <p className="mt-4 px-4 text-justify text-gray-300">
            - Villa Urquiza, Villa Pueyrredon, Saavedra, Coghlan, Belgrano,
            Parque Chas, Villa Ortuzar
          </p>
        </div>
      </section>
    </SectionsContainer>
  );
};

export default AboutUs;
