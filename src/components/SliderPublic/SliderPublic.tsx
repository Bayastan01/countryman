import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPublic.scss';  // Ваши стили SCSS

import block from 'bem-cn';
const b = block('carousel-container');


const images = [
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/400",
];

const SliderPublic = () => {
  const settings = {
    dots: false,  // Показать точки для навигации
    infinite: true,  // Бесконечная прокрутка
    speed: 500,  // Скорость переходов
    slidesToShow: 1,  // Показывать по одному слайду
    slidesToScroll: 1,  // Прокручивать по одному слайду
    arrows: true,  // Показывать стрелки
  };

  return (
    <div className={b()}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPublic;
