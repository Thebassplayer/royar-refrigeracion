import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5491171130958" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full bg-green-500 px-4 py-2 font-bold text-white transition-colors duration-300 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4"
      >
        <path d="M21 3.69c-2.16.9-4.52 1.36-7 1.36-3.14 0-5.96-.8-8.34-2.34l-.03-.02-1.48-.97.37 1.45c-.48.94-.72 1.96-.7 3.02v.01c.02 7.18 5.81 13.06 13 13.06 1.83 0 3.62-.37 5.28-1.11l.84-.41-.34-.94c-.58-1.6-.86-3.3-.84-5.02v-.01c.02-2.43.62-4.75 1.79-6.8l.17-.29-1.12-.94zM19.88 2.12c-1.22-.4-2.49-.6-3.78-.58h-.12c-6.63.12-11.97 5.48-11.97 12.12 0 1.24.18 2.48.54 3.68l-.4 1.64 1.64-.4c1.18.35 2.42.53 3.66.53h.12c6.63-.12 11.97-5.48 11.97-12.12 0-1.29-.2-2.56-.6-3.78l-.88.88z" />
      </svg>
      Contacto
    </a>
  );
};

export default WhatsAppButton;
