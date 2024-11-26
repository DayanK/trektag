
import React, { ReactNode } from 'react';

interface ButtonProps {
    buttonType: string
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonType, children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${buttonType === 'secondary' ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
