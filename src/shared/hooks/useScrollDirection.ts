import { useState, useEffect } from 'react';

interface UseDeviceDetectionReturn {
  isMobile: boolean;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDeviceDetection = (): UseDeviceDetectionReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Устройство мобильное, если ширина экрана меньше или равна 768px
    };

    const handleMouseLeave = () => {
      if (isMobile) {
        setIsModalVisible(false); // Не показывать модалку на мобильных
        startCamera();  // Запускаем камеру на мобильных устройствах
      } else {
        setIsModalVisible(true); // Показывать модалку на десктопе
      }
    };

    handleResize(); // Проверяем тип устройства сразу после загрузки
    window.addEventListener('resize', handleResize); // Обработчик изменения размера окна
    document.addEventListener('mouseleave', handleMouseLeave); // Обработчик для выхода курсора

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  return { isMobile, isModalVisible, setIsModalVisible };
};

export default useDeviceDetection;
