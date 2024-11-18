import { useState, useEffect } from "react";

export const useDeviceBehavior = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth <= 1024; // Мобильное устройство — ширина экрана <= 1024px
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return { isMobile };
};
