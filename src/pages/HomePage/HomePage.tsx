import { block } from 'bem-cn';
import React from 'react';
import './HomePage.scss';

const b = block('home-page');

const HomePage: React.FC = () => {
  return (
    <div className={b()}>
      <div className={b('title')}>
        Что вы хотите сделать?
      </div>
    </div>
  );
};

export default HomePage;
