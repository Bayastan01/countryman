import React from "react";
import SliderPublic from "components/SliderPublic/SliderPublic";
import Avatar from 'rsuite/Avatar';
import AvatarGroup from 'rsuite/AvatarGroup';
import 'rsuite/Avatar/styles/index.css';
import 'rsuite/AvatarGroup/styles/index.css';
import "./Post.scss";

import block from 'bem-cn';
import Button from "components/Button/Button";

const b = block('slider-cards');

const Post = () => {
  return (
    <div className={b()}>
      <SliderPublic />
      <div className={b('card-content')}>
        <h3 className={b('card-content__title')}>All in New York City</h3>
        <div className={b('card-content__avatar-section')}>
          <AvatarGroup spacing={6}>
            <Avatar src="https://i.pravatar.cc/150?u=2" circle size="xs" />
          </AvatarGroup>
          <p className={b('card-content__author')}>@DarellKenedy USA</p>
        </div>
        <span className={b('card-content__description')}>
          Explore New York City with confidence with an exclusive travel guide by Darell Kenedy.
        </span>
        <div className={b('card-content__details')}>
          <div className={b('card-content__datetime')}>
            <span>3 hours, 51 minutes</span>
            <span>120,283 viewers</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
        </div>
      </div>
      
      <div className={b('icons')}>
        <div className={b("heart-icon")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
        fill="#ff0000"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
        </svg>
        </div>
       
      </div>
    </div>
  );
};

export default Post;

