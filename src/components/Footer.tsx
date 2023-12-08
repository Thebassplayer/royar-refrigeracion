import React from "react";

const Footer = (): JSX.Element => {
  return (
    <section className="mt-2 flex flex-col bg-gray-800 text-center text-xs text-gray-300 md:flex-row md:justify-evenly">
      <p>© 2023 Refrigeracion Royal. All rights reserved.</p>
      <a href="mailto:royalservicearg@gmail.com">
        <p>royalservicearg@gmail.com</p>
      </a>
    </section>
  );
};

export default Footer;
