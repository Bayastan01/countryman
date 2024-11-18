import React from "react";
import "./Post.scss";
import SliderPublic from "components/universalСomponents/SliderPublic/SliderPublic";
import Avatar from 'rsuite/Avatar';
import AvatarGroup from 'rsuite/AvatarGroup';
import { AiOutlineEye } from "react-icons/ai";
import { Icon } from '@rsuite/icons';
import 'rsuite/Avatar/styles/index.css';
import 'rsuite/AvatarGroup/styles/index.css';
import block from 'bem-cn';
import { useFormattedViews } from '../../../shared/hooks/useFormattedViews'; // Импортируем хук

const b = block('slider-card');

interface PostProps {
  post: {
    title: string;
    description: string;
    author: string;
    viewers: number;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, description, author, viewers } = post;
  const formattedViews = useFormattedViews(viewers); // Используем хук

  const phoneNumber = "+7 903 134-29-12";
  const message = "Здравствуйте, ещё актуально";

  return (
    <div className={b()}>
      <SliderPublic />
      <div className={b('content')}>
        <h3>{title}</h3>
        <p className={b('description')}>{description}</p>
        <div className={b('details')}>
          <div className={b('datetime')}>
            <span>{formattedViews} <Icon as={AiOutlineEye} size="1.3em" /></span>
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
    </div>
  );
};

export default Post;
