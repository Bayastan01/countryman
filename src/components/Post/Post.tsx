import React from "react";
import "./Post.scss";
import SliderPublic from "components/SliderPublic/SliderPublic";
import Avatar from 'rsuite/Avatar';
import AvatarGroup from 'rsuite/AvatarGroup';

import 'rsuite/Avatar/styles/index.css';
import 'rsuite/AvatarGroup/styles/index.css';
import block from 'bem-cn';
const b = block('slider-card');

const Post = () => {
  const phoneNumber = "++7 903 134-29-12";  // Replace with the actual phone number
  const message = "Здраствуйте, eще актуально";  // Optional predefined message

  return (
    <div className={b()}>
      <SliderPublic />
      <div className={b('content')}>
        <h3>All in New York City</h3>
        {/* <div className={b('avatar-section')}>
          <AvatarGroup spacing={6}>
            <Avatar src="https://i.pravatar.cc/150?u=2" circle size="sm" />
          </AvatarGroup>
          <p className={b('author')}>@DarellKenedy USA</p>
        </div> */}
        <p className={b('description')}>
          Explore New York City with confidence with an exclusive travel guide by Darell Kenedy.
         
        </p>
        <div className={b('details')}>
          <div className={b('datetime')}>
            <span>3 hours, 51 minutes</span>
            <span>120,283 viewers</span>
          </div>
          <a href={`tel:${phoneNumber}`}>
          <svg xmlns="http://www.w3.org/2000/svg" cursor={'pointer'} viewBox="0 0 24 24" width="20" height="20">
            <path fill="none" stroke="black" strokeWidth="2" d="M6.62 10.79a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011.05-.24c1.14.45 2.38.7 3.63.7a1 1 0 011 1v3.75a1 1 0 01-1 1C10.01 22.59 1.41 14 1.41 3.75a1 1 0 011-1H6.2a1 1 0 011 1c0 1.25.25 2.49.7 3.63a1 1 0 01-.24 1.05l-2.2 2.2z"/>
          </svg>
          </a>
          <a
        href={`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
          <svg xmlns="http://www.w3.org/2000/svg" cursor={'pointer'} viewBox="0 0 32 32" width="20" height="20">
            <path fill="#25D366" d="M16 0C7.164 0 0 7.164 0 16c0 2.822.735 5.506 2.013 7.845L0 32l8.447-2.015A15.929 15.929 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm7.744 22.35c-.33.93-1.63 1.72-2.78 1.98-.742.176-1.688.32-4.904-1.03-4.118-1.7-6.757-5.837-6.97-6.112-.215-.28-1.66-2.214-1.66-4.217 0-2.003 1.047-2.995 1.42-3.41.375-.415.825-.518 1.102-.518.273 0 .547.003.79.015.256.012.602-.097.945.727.33.787 1.116 2.714 1.216 2.91.1.196.17.428.034.692-.13.268-.196.427-.39.653-.192.226-.413.5-.59.67-.198.19-.405.4-.174.786.23.385 1.015 1.665 2.186 2.7 1.504 1.337 2.768 1.754 3.155 1.942.392.19.617.164.84-.1.23-.27 1.034-1.2 1.314-1.615.28-.414.56-.33.94-.195.378.13 2.39 1.125 2.8 1.332.413.208.69.313.79.487.097.177.097 1.028-.233 1.957z"/>
          </svg>
          </a>
        </div>
      </div>
      <div className={b('icons')}>
        <div className={b('icon', 'heart')}>
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
