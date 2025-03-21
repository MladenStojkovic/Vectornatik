import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '', variant = 'primary' }) => {

  const variantClasses = variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-primary';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className} ${disabled ? 'btn-disabled' : ''} ${variantClasses} w-full py-2.5 font-sen text-xl border-1 border-primary`}
    >
      {label}
    </button>
  );
};

export default Button;