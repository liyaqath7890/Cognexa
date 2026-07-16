import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** When true the wordmark renders white — for use on coloured / dark backgrounds */
  light?: boolean;
}

export default function Logo({ className = '', size = 'md', light = false }: LogoProps) {
  const dimensions = {
    sm: { width: 32, height: 32, text: 'text-base' },
    md: { width: 40, height: 40, text: 'text-xl' },
    lg: { width: 56, height: 56, text: 'text-3xl' }
  };

  const dim = dimensions[size];

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: dim.width, height: dim.height }}
      >
        <div className="absolute inset-0 bg-[#6C3BFF]/20 rounded-xl blur-md animate-pulse"></div>

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C3BFF" />
              <stop offset="50%" stopColor="#8A5BFF" />
              <stop offset="100%" stopColor="#B794FF" />
            </linearGradient>
            <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>

          {/* Outer rotating ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#logo-grad-1)"
            strokeWidth="3.5"
            strokeDasharray="60 30 10 40"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          />

          {/* Inner core connecting network */}
          <motion.path
            d="M50 25 L50 75 M25 50 L75 50 M32.5 32.5 L67.5 67.5 M32.5 67.5 L67.5 32.5"
            stroke="url(#logo-grad-1)"
            strokeWidth="1.5"
            opacity="0.35"
            animate={{ scale: [0.95, 1.05, 0.95], rotate: -90 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            style={{ originX: '50px', originY: '50px' }}
          />

          {/* Glowing Central AI Node */}
          <motion.circle
            cx="50"
            cy="50"
            r="16"
            fill="url(#logo-grad-1)"
            filter="url(#logo-glow)"
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />

          {/* Orbiting particles */}
          <motion.circle
            cx="50"
            cy="15"
            r="4.5"
            fill="#FFFFFF"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            style={{ originX: '50px', originY: '50px' }}
          />
          <motion.circle
            cx="50"
            cy="85"
            r="3.5"
            fill="#B794FF"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            style={{ originX: '50px', originY: '50px' }}
          />
        </svg>
      </div>

      <span className={`font-display font-black tracking-tight text-[#6C3BFF] ${dim.text} hover:text-[#8A5BFF] transition duration-300 uppercase`}>
        Cognexa
      </span>
    </div>
  );
}
