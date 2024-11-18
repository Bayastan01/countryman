import { useState, useEffect, useRef } from 'react';

export const useWebcam = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [photoHistory, setPhotoHistory] = useState<string[]>([]);
  const [isCameraActive, setIsCameraActive] = useState(false);

  // Функция для запуска камеры
  const startCamera = async () => {
    if (!isCameraActive && videoRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraActive(true);
    }
  };

  // Функция для остановки камеры
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      setIsCameraActive(false);
    }
  };

  // Функция для захвата снимка
  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        // Отменяем зеркальное отображение для снимка
        context.scale(-1, 1);
        context.drawImage(videoRef.current, -canvasRef.current.width, 0, canvasRef.current.width, canvasRef.current.height);
        const photoData = canvasRef.current.toDataURL('image/png');
        setPhotoURL(photoData);
        stopCamera();
      }
    }
  };

  // Функция для сохранения снимка и автоматического перезапуска камеры
  const savePhotoAndNext = () => {
    if (photoURL) {
      setPhotoHistory((prev) => [...prev, photoURL]);
      setPhotoURL(null);

      setTimeout(() => {
        startCamera();
      }, 500);
    }
  };

  // Автоматический запуск камеры при загрузке компонента
  useEffect(() => {
    startCamera();
    return () => stopCamera(); // Останавливаем камеру при размонтировании компонента
  }, []);

  return {
    videoRef,
    canvasRef,
    photoURL,
    photoHistory,
    isCameraActive,
    startCamera,
    stopCamera,
    takePhoto,
    savePhotoAndNext,
  };
};
// 