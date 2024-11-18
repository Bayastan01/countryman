import React from 'react';
import './HomePage.scss';
import Post from 'components/universalСomponents/Post/Post';
import HandleFilter from 'components/HandleFilter/HandleFilter';
import block from 'bem-cn';

const b = block('post-list');

const posts = [
  { id: 1, title: "Post 1", description: "Description of post 1", author: "John Doe", viewers: 123 },
  { id: 2, title: "Post 2", description: "Description of post 2", author: "Jane Smith", viewers: 405 },
  { id: 3, title: "Post 3", description: "Description of post 3", author: "Alice Johnson", viewers: 1001 },
  { id: 4, title: "Post 4", description: "Description of post 4", author: "Robert Brown", viewers: 1500001 },
];

const HomePage: React.FC = () => {
  return (
    <div className={b()}>
      <HandleFilter />
      <div className={b('posts')}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
