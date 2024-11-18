import { useMemo } from 'react';

export const useFormattedViews = (views: number) => {
  const formattedViews = useMemo(() => {
    if (views >= 1_000_000) {
      const millions = views / 1_000_000;
      return `${millions % 1 === 0 ? Math.round(millions) : millions.toFixed(1)} млн просмотров`;
    } else if (views >= 1_000) {
      const thousands = views / 1_000;
      // Если число не целое, показываем с 1 знаков после запятой, если целое - без десятичной части
      return `${thousands % 1 === 0 ? Math.round(thousands) : thousands.toFixed(1)} тыс. просмотров`;
    } else {
      return `${views} просмотров`;
    }
  }, [views]);

  return formattedViews;
};
