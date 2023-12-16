import { useState, useEffect } from "react";

const useScreenResolution = () => {
  const [resolution, setResolution] = useState<number | 768>(768);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      const breakpoints = [640, 768, 1024, 1280];

      // Find the closest resolution value
      const closestResolution = breakpoints.reduce((prev, curr) =>
        Math.abs(curr - innerWidth) < Math.abs(prev - innerWidth) ? curr : prev
      );

      setResolution(closestResolution);
    };

    // Initially set the resolution on component mount
    handleResize();

    // Update the resolution when the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return resolution;
};

export default useScreenResolution;
