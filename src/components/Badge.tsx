import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'gray' | 'success' | 'warning';
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = 'primary', children, className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-display border';

  const variantStyles = {
    primary: 'bg-primary/10 text-primary border-primary/25',
    secondary: 'bg-secondary/10 text-secondary border-secondary/25',
    accent: 'bg-accent/10 text-accent border-accent/25',
    gray: 'bg-gray-100 dark:bg-gray-900 text-text-sub border-border-color',
    success: 'bg-green-500/10 text-green-500 border-green-500/25',
    warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-500/25'
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
