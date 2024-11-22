
import React, { ReactNode } from 'react';

interface ButtonProps {
    type: string
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button className={`btn ${type === 'secondary' ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
