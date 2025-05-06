import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '', variant = 'primary' }) => {

  const variantClasses = variant === 'primary' 
    ? 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80' 
    : 'bg-secondary text-primary hover:bg-secondary/90 active:bg-secondary/80';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className} ${disabled ? 'btn-disabled cursor-not-allowed opacity-50' : 'cursor-pointer'} ${variantClasses} w-full py-2.5 font-sen text-xl border-1 border-primary transition-colors duration-200`}
    >
      {label}
    </button>
  );
};

export default Button;