import React, { useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'glass' | 'glow' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children?: React.ReactNode;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  children,
  onClick,
  ...props
}: ButtonProps) {
  const { animationLevel } = useTheme();
  const isMinimalAnim = animationLevel === 'minimal';

  // Magnetic Hover state hooks
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  // Ripple state
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [rippleCount, setRippleCount] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMinimalAnim) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Limit displacement to maximum 12px for magnetic tracking
    const displaceX = (e.clientX - centerX) * 0.22;
    const displaceY = (e.clientY - centerY) * 0.22;
    
    x.set(displaceX);
    y.set(displaceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isMinimalAnim) {
      if (onClick) onClick(e as any);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;
    
    const newRipple = {
      id: rippleCount,
      x: rippleX,
      y: rippleY
    };

    setRipples((prev) => [...prev, newRipple]);
    setRippleCount((prev) => prev + 1);

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e as any);
    }
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden select-none active:scale-[0.97] border-none bg-transparent';
  
  const sizeStyles = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-6.5 py-3 text-sm tracking-wide',
    lg: 'px-8.5 py-4 text-base tracking-wider'
  };

  // Modern dynamic configurations linked to custom properties
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_8px_30px_var(--glow)] text-black border border-accent/20 font-semibold shadow-sm',
    secondary: 'bg-white text-black border-2 border-primary/45 hover:border-primary hover:bg-primary-light hover:shadow-[0_8px_25px_var(--glow)] shadow-sm',
    accent: 'bg-accent text-black hover:shadow-[0_8px_25px_var(--glow)] shadow-sm',
    glass: 'bg-bg-card/60 backdrop-blur-md text-black hover:bg-bg-card/85 hover:shadow-md border border-border-color shadow-sm',
    glow: 'bg-bg-card hover:bg-surface-hover text-black border-2 border-primary/75 text-glow shadow-[0_8px_20px_var(--glow)] hover:shadow-[0_8px_30px_var(--glow)]',
    outline: 'border-2 border-border-color hover:border-text-muted text-black hover:bg-surface-hover'
  };

  return (
    <motion.button
      style={{ x: isMinimalAnim ? 0 : springX, y: isMinimalAnim ? 0 : springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
      whileHover={isMinimalAnim ? {} : { scale: 1.04 }}
      whileTap={isMinimalAnim ? {} : { scale: 0.96 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {/* Background Animated Gradient Flow Border */}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-marquee -z-10 opacity-10"></span>
      )}

      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 120,
            height: 120,
            animationDuration: '600ms'
          }}
        />
      ))}

      {isLoading ? (
        <span className="flex items-center space-x-2 relative z-10">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center space-x-2">{children}</span>
      )}
    </motion.button>
  );
}
