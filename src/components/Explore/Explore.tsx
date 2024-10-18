import React, { useState } from 'react';
import './Explore.scss';
import Categories from './Categories/Categories';

interface AppItem {
  title: string;
  category: string;
  icon: string;
  isNew?: boolean;
}

const appItems: AppItem[] = [
  { title: 'Афиша', category: 'Мероприятия', icon: '📅' },
  { title: 'YCLIENTS', category: 'Инструменты', icon: '⚒️' },
  { title: 'Натальная карта', category: 'Выбор редакции', icon: '🗺️', isNew: true },
  { title: 'Открытки и поздравления', category: 'Развлечения', icon: '💐' },
  { title: 'Тест на СДВГ', category: 'Медицина', icon: '❤️', isNew: true },
  { title: 'Tool 42', category: 'Инструменты', icon: '🛠️' },
  { title: 'Сбор файлов', category: 'Инструменты', icon: '🗂️' },
  { title: 'Матчи', category: 'Спорт', icon: '⚽' },
  { title: 'Фильмы по эмодзи', category: 'Развлечения', icon: '🎬' },
  { title: 'Рандомный розыгрыш', category: 'Инструменты', icon: '🎲' },
  { title: 'Песня моего ДР', category: 'Развлечения', icon: '🎉' },
  { title: 'QR-конструктор', category: 'Бизнес', icon: '🔗' },
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
          filteredItems.map((item) => (
            <div key={item.title} className="app-item">
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="category">{item.category}</div>
              {item.isNew && <div className="new-badge">NEW</div>}
            </div>
          ))
        ) : (
          <div className="no-results">Нет результатов для выбранной категории</div>
        )}
      </div>
    </div>
  );
};

export default Explore;
