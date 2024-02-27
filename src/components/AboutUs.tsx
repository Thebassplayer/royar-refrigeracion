import AboutUsElement from "./AboutUsElement";
import SectionsContainer from "./SectionsContainer";

const aboutUsContent = [
  {
    id: 1,
    text: "Somos una empresa especializada en reparación e instalación de aires acondicionados domiciliarios y comerciales en la zona norte de CABA, Argentina.",
  },
  {
    id: 2,
    text: "Tecnicos matriculados.",
  },
  {
    id: 3,
    text: "Más de 12 años de experienciaen el rubro.",
  },
  {
    id: 4,
    text: "Ofrecemos 1 año de garantia escrita en todos nuestros trabajos.",
  },
  {
    id: 5,
    text: "Villa Urquiza, Villa Pueyrredon, Saavedra, Coghlan, Belgrano, Parque Chas, Villa Ortuzar",
  },
];

const AboutUs = () => {
  return (
    <SectionsContainer>
      <section
        id="aboutUs"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="mb-4 py-0 text-center text-2xl text-white sm:px-16 sm:text-3xl lg:text-3xl xl:px-48">
          ¿Quienes Somos?
        </h2>
        <div className="container flex flex-col gap-4 rounded-lg bg-gray-700 p-4 sm:text-xl md:flex-col">
          {aboutUsContent.map(({ id, text }) => (
            <AboutUsElement key={id} content={text} />
          ))}
        </div>
      </section>
    </SectionsContainer>
  );
};

export default AboutUs;
