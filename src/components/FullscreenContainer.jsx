import React from "react";

const FullscreenContainer = ({ children }) => {
  return <div className="flex h-screen flex-col">{children}</div>;
};

export default FullscreenContainer;
