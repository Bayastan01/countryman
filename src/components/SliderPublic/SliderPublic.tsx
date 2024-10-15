import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPublic.scss';  // Ваши стили SCSS

import block from 'bem-cn';
const b = block('carouselContainer');


const images = [
  "https://cdn0.divan.ru/img/v1/otP7I6m9PB1lBjyacgloUl5F0sjQf9qspK3XL3da3r0/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDYwMDYxNS5qcGc.jpg",
  "https://cdn2.divan.ru/img/v1/2bWU-vRj0HWAS0VILT-SyjyuHnuqAsist3A0KSI51DE/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjI4MS82Mzc0ZTQ1ZWExMmNmLmpwZw.jpg",
  "https://homeinteriors.com.ua/wp-content/uploads/2022/10/dizayn-malenkoy-kvartiry-studii.jpg",
  "https://cf-kr.kcdn.online/content/49/1635260795c67c5460-247-2021top-5-samyh-deshyovyh-arendnyh-kvartir-almaty.jpg",
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
          <div key={index} className={b('carouselSlide')}>
            <img className={b('img')} src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPublic;
