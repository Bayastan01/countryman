import React from 'react';
import block from 'bem-cn'; // Для генерации BEM-классов
import { Panel } from 'rsuite'; // Панель для каждого блока

const b = block('app-panel'); // BEM блок для компонентов

type AppBlockProps = {
  title: string;
  category: string;
  icon: string;
};

export const AppPanel: React.FC<AppBlockProps> = ({ title, category, icon }) => {
  return (
    <Panel shaded bordered bodyFill className={b()} style={{ textAlign: 'center' }}>
      <img src={icon} alt={`${title} icon`} className={b('icon')} />
      <h4 className={b('title')}>{title}</h4>
      <p className={b('category')}>{category}</p>
    </Panel>
  );
};
