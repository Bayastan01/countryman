/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import block from 'bem-cn';
import { Link, useHistory } from 'react-router-dom';
import { Button as MUIButton, CircularProgress } from '@mui/material';

import './Button.scss';

type CustomButtonProps = {
  text?: string | number;
  callback?: (a: any) => void;
  disabled?: boolean;
  uppercase?: boolean;
  rounded?: boolean;
  link?: string;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  [x: string]: any;
};

const Button: React.FC<CustomButtonProps> = ({
  text,
  size = 'medium',
  callback,
  variant = 'contained',
  children,
  disabled = false,
  uppercase = false,
  rounded,
  color = 'primary',
  type,
  link,
  loading,
  ...props
}) => {
  const b = block('button');
  const history = useHistory();

  const onClick = useCallback(
    (...args) => {
      if (link) {
        history.push(link);
      } else if (callback) {
        callback(args);
      }
    },
    [history, link, callback]
  );

  return (
    <div className={b('button-container', { uppercase })}>
      <MUIButton
        {...props}
        type={type}
        variant={variant}
        disabled={disabled || loading}
        color={color}
        size={size}
        onClick={disabled ? undefined : onClick}
        style={{ borderRadius: rounded ? '50px' : undefined }}>
        {loading ? <CircularProgress size={24} color="inherit" /> : text}
        {children}
      </MUIButton>
    </div>
  );
};

export default Button;
