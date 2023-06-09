import React from "react";

// Framer Motion
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section id="header">
      <div className="px-4 py-6 text-center text-3xl font-extrabold leading-none tracking-tight text-white dark:text-white sm:text-5xl md:py-8 md:text-5xl lg:py-4 lg:text-left lg:text-4xl">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
        >
          <span className="mr-3">❄️</span>
        </motion.div>
        <motion.div
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
          }}
        >
          <span>Royal Refrigeracion</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
