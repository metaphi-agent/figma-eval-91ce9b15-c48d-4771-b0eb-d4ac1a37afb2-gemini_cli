import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer whitespace-nowrap";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-[#388E3C] border border-transparent",
    secondary: "bg-brand-secondary text-white hover:bg-gray-800 border border-transparent",
    outline: "border border-brand-primary text-brand-primary hover:bg-gray-50",
    text: "text-brand-primary hover:text-green-700 bg-transparent hover:bg-gray-50",
    white: "bg-white text-brand-primary hover:bg-gray-50 border border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
