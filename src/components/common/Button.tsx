import * as React from 'react';
import { ButtonProps } from '../../types';

const Button = ({ onClick, children, className = '', disabled = false, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
