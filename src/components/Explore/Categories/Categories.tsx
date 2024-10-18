import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import './Categories.scss';

const categories = [
  { label: 'Главная', value: 'Главная' },
  { label: 'Популярное', value: 'Популярное' },
  { label: 'Игры', value: 'Игры' },
  { label: 'От ВКонтакте', value: 'От ВКонтакте' },
  { label: 'Здоровье и фитнес', value: 'Здоровье и фитнес' },
  { label: 'Общение', value: 'Общение' },
  { label: 'Развлечения', value: 'Развлечения' },
];

const Categories: React.FC = () => {
 
  

  return (
    <div className="navbar">
      <div className="categories">
        {categories.map((cat) => (
          <button key={cat.value} className="category">{cat.label}</button>
        ))}
      </div>

    </div>
  );
};

export default Categories;
