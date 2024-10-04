import { block } from 'bem-cn';
import React from 'react';
import './HomePage.scss';
import Post from 'components/Post/Post';

const b = block('home-page');

const HomePage: React.FC = () => {
  return (
    <div className={b()}>
      <div className={b('title')}>
       <Post/>
      </div>
    </div>
  );
};

export default HomePage;
