import React from 'react';
import { useTheme, BgPatternType } from '@/contexts/ThemeContext';

interface PageBackgroundProps {
  pattern?: BgPatternType;
  children?: React.ReactNode;
}

export default function PageBackground({ pattern, children }: PageBackgroundProps) {
  const { bgPattern, appearance } = useTheme();
  
  // Prioritize user-customized pattern, fall back to page-defined default
  const activePattern = bgPattern || pattern || 'mesh';

  const isDark = appearance === 'dark' || (appearance === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Set stroke opacities: dark mode needs slightly higher visibility, light mode must be extremely subtle (max 3-8%)
  const strokeOpacity = isDark ? '0.12' : '0.04';
  const fillOpacity = isDark ? '0.08' : '0.03';

  const renderPatternSvg = () => {
    switch (activePattern) {
      case 'grid':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bg-grid-pat" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grid-pat)" />
          </svg>
        );

      case 'dots':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bg-dots-pat" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-dots-pat)" />
          </svg>
        );

      case 'hexagons':
      case 'hexagon':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: fillOpacity }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bg-hex-pat" width="56" height="97" patternUnits="userSpaceOnUse">
                <path d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 97 L56 80.84 L56 48.5 L28 32.34 L0 48.5 L0 80.84 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-hex-pat)" />
          </svg>
        );

      case 'circuit':
      case 'circuits':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M 50 100 L 250 100 L 350 200 L 600 200 M 100 400 L 300 400 L 400 300 L 700 300 M 500 50 L 500 150 L 550 200 L 680 200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="250" cy="100" r="3" fill="currentColor" />
            <circle cx="350" cy="200" r="3" fill="currentColor" />
            <circle cx="300" cy="400" r="3" fill="currentColor" />
            <circle cx="400" cy="300" r="3" fill="currentColor" />
            <circle cx="500" cy="150" r="3" fill="currentColor" />
          </svg>
        );

      case 'blueprint':
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ 
            opacity: isDark ? '0.07' : '0.03',
            backgroundImage: 'linear-gradient(#6C3BFF 1px, transparent 1px), linear-gradient(90deg, #6C3BFF 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} />
        );

      case 'neural':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="200" y1="150" x2="400" y2="250" stroke="currentColor" strokeWidth="1" />
            <line x1="400" y1="250" x2="500" y2="450" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="450" x2="750" y2="350" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="150" x2="350" y2="350" stroke="currentColor" strokeWidth="1" />
            <line x1="350" y1="350" x2="500" y2="450" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="450" x2="680" y2="600" stroke="currentColor" strokeWidth="1" />
            <line x1="750" y1="350" x2="850" y2="200" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="150" r="4" fill="currentColor" />
            <circle cx="400" cy="250" r="5" fill="currentColor" />
            <circle cx="500" cy="450" r="6" fill="currentColor" />
            <circle cx="750" cy="350" r="5" fill="currentColor" />
            <circle cx="350" cy="350" r="3" fill="currentColor" />
            <circle cx="680" cy="600" r="4.5" fill="currentColor" />
            <circle cx="850" cy="200" r="4" fill="currentColor" />
          </svg>
        );

      case 'waves':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M 0 100 Q 360 250 720 100 T 1440 100" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 0 250 Q 360 400 720 250 T 1440 250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 0 400 Q 360 550 720 400 T 1440 400" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );

      case 'particles':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#B794FF', opacity: strokeOpacity }} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="120" r="2" fill="currentColor" />
            <circle cx="640" cy="180" r="1.5" fill="currentColor" />
            <circle cx="250" cy="320" r="3" fill="currentColor" />
            <circle cx="480" cy="500" r="2" fill="currentColor" />
            <circle cx="150" cy="600" r="1.5" fill="currentColor" />
            <circle cx="720" cy="650" r="2" fill="currentColor" />
            <circle cx="340" cy="710" r="1.5" fill="currentColor" />
          </svg>
        );

      case 'glass':
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" style={{ opacity: fillOpacity }}>
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px]" style={{ backgroundColor: '#6C3BFF' }} />
            <div className="absolute bottom-[30%] left-[5%] w-[350px] h-[350px] rounded-full blur-[120px]" style={{ backgroundColor: '#8A5BFF' }} />
          </div>
        );

      case 'network':
        return (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: '#6C3BFF', opacity: strokeOpacity }} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 100 H 1000 M 0 300 H 1000 M 0 600 H 1000 M 0 800 H 1000 M 200 0 V 1000 M 500 0 V 1000 M 800 0 V 1000" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="200" cy="300" r="3" fill="currentColor" />
            <circle cx="500" cy="600" r="3" fill="currentColor" />
            <circle cx="800" cy="800" r="3" fill="currentColor" />
          </svg>
        );

      case 'glow':
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" style={{ opacity: fillOpacity }}>
            <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full blur-[130px]" style={{ backgroundColor: '#6C3BFF' }} />
            <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: '#B794FF' }} />
          </div>
        );

      case 'mesh':
      default:
        return (
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" style={{ opacity: isDark ? '0.1' : '0.04' }}>
            <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: '#6C3BFF' }} />
            <div className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] rounded-full blur-[180px]" style={{ backgroundColor: '#8A5BFF' }} />
          </div>
        );
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      {renderPatternSvg()}
      <div className="relative z-10 w-full bg-transparent">{children}</div>
    </div>
  );
}
