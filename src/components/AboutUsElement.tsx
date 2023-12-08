type AboutUsElementProps = {
  content: string;
};

const AboutUsElement = ({ content }: AboutUsElementProps) => {
  return (
    <p className="px-4 text-justify text-gray-300 md:text-base lg:text-xl">
      - {content}
    </p>
  );
};

export default AboutUsElement;
