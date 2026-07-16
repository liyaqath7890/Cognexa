import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Card({ className = '', children, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel p-6 rounded-[24px] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        backdropFilter: 'var(--card-backdrop)',
        border: 'var(--card-border)',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {children}
    </div>
  );
}

export function GlowCard({ className = '', children, onClick }: CardProps) {
  const { animationLevel } = useTheme();
  
  // Conditionally disable framer motion spring animations if animationLevel is set to minimal
  const isMinimalAnim = animationLevel === 'minimal';

  return (
    <motion.div
      onClick={onClick}
      whileHover={isMinimalAnim ? {} : { y: -4, borderColor: 'var(--primary)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`glass-panel p-6 rounded-[24px] hover:shadow-[0_15px_30px_var(--glow)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        backdropFilter: 'var(--card-backdrop)',
        border: 'var(--card-border)',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ className = '', children, onClick }: CardProps) {
  const { animationLevel } = useTheme();
  const isMinimalAnim = animationLevel === 'minimal';

  return (
    <motion.div
      onClick={onClick}
      initial={isMinimalAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMinimalAnim ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={isMinimalAnim ? {} : { scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`glass-panel p-6 rounded-[24px] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        backdropFilter: 'var(--card-backdrop)',
        border: 'var(--card-border)',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {children}
    </motion.div>
  );
}
