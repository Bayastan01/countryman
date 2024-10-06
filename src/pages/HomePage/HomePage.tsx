import { block } from 'bem-cn';
import React from 'react';
import './HomePage.scss';
import Post from 'components/Post/Post';
import HandleFilter from 'components/HandleFilter/HandleFilter';

const b = block('post-list');

// Данные для примера постов
const posts = [
  { id: 1, title: "Post 1", description: "Description of post 1", author: "John Doe", viewers: 123 },
  { id: 2, title: "Post 2", description: "Description of post 2", author: "Jane Smith", viewers: 456 },
  { id: 2, title: "Post 2", description: "Description of post 2", author: "Jane Smith", viewers: 456 },
  { id: 2, title: "Post 2", description: "Description of post 2", author: "Jane Smith", viewers: 456 },
  { id: 2, title: "Post 2", description: "Description of post 2", author: "Jane Smith", viewers: 456 },
  // Добавьте больше постов
];
const HomePage: React.FC = () => {
  return (
    <div className={b()}>
      <div className={b('header')}>
        <h1>Квартиры {}</h1>
        <HandleFilter/>
      </div>
      <div className={b('posts')}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
