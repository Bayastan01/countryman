import React, { useState } from 'react';
import './Explore.scss';
import Categories from './Categories/Categories';
import { Link } from 'react-router-dom';

interface AppItem {
  title: string;
  category: string;
  icon: string;
  isNew?: boolean;
  route?: string;
  id:number
}

const appItems: AppItem[] = [
  {id:1, route: "taxi" , title: 'Такси', category: 'Путевой лист', icon: '🚕' },
  {id:2, route: "yni" , title: 'YCLIENTS', category: 'Инструменты', icon: '⚒️' },
  // {id:3, route: map , title: 'Натальная карта', category: 'Выбор редакции', icon: '🗺️', isNew: true },
  // {id:4, route: happy , title: 'Открытки и поздравления', category: 'Развлечения', icon: '💐' },
  // {id:5, route: test , title: 'Тест на СДВГ', category: 'Медицина', icon: '❤️', isNew: true },
  // {id:6, route: tool , title: 'Tool 42', category: 'Инструменты', icon: '🛠️' },
  // {id:7, route: sbor , title: 'Сбор файлов', category: 'Инструменты', icon: '🗂️' },
  // {id:8, route: match , title: 'Матчи', category: 'Спорт', icon: '⚽' },
  // {id:9, route: filme , title: 'Фильмы по эмодзи', category: 'Развлечения', icon: '🎬' },
  // {id:10, route: sd , title: 'Рандомный розыгрыш', category: 'Инструменты', icon: '🎲' },
  // {id:11, route: sf , title: 'Песня моего ДР', category: 'Развлечения', icon: '🎉' },
  // {id:12, route: sff , title: 'QR-конструктор', category: 'Бизнес', icon: '🔗' },
];

// Список категорий для фильтрации
const categories = ['Популярное', 'Игры', 'От ВКонтакте', 'Здоровье и фитнес', 'Общение', 'Развлечения', 'Инструменты', 'Медицина', 'Спорт', 'Бизнес', 'Все'];

const Explore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Популярное');

  // Функция для фильтрации по категории
  const filteredItems = appItems.filter((item) => {
    if (selectedCategory === 'Все' || selectedCategory === 'Популярное') {
      return true; // Для "Все" и "Популярное" показываем все элементы
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="app">
      <div className="explore">
        <Categories/>
        {/* {categories.map((category) => (
          <div
            key={category}
            className={`menu-item ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
           <span >
           {category}
           </span>
          </div>
        ))} */}
      </div>
      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item,index) => (
            <Link key={item.route} to={item.route}>
              <div key={index} className="app-item">
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
                <div className="category">{item.category}</div>
                {item.isNew && <div className="new-badge">NEW</div>}
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">Нет результатов для выбранной категории</div>
        )}
      </div>
    </div>
  );
};

export default Explore;
