import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AccentColorToken {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
}

export const accentColors: Record<string, AccentColorToken> = {
  'royal-purple': {
    name: 'Royal Purple',
    primary: '#6C3BFF',
    secondary: '#8A5BFF',
    accent: '#B794FF',
    glow: 'rgba(108, 59, 255, 0.35)'
  },
  'royal-blue': {
    name: 'Royal Blue',
    primary: '#2563EB',
    secondary: '#3B82F6',
    accent: '#60A5FA',
    glow: 'rgba(37, 99, 235, 0.35)'
  },
  'emerald': {
    name: 'Emerald',
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#6EE7B7',
    glow: 'rgba(16, 185, 129, 0.35)'
  },
  'teal': {
    name: 'Teal',
    primary: '#14B8A6',
    secondary: '#2DD4BF',
    accent: '#5EEAD4',
    glow: 'rgba(20, 184, 166, 0.35)'
  },
  'orange': {
    name: 'Orange',
    primary: '#F97316',
    secondary: '#FB923C',
    accent: '#FDBA74',
    glow: 'rgba(249, 115, 22, 0.35)'
  },
  'crimson': {
    name: 'Crimson',
    primary: '#DC2626',
    secondary: '#EF4444',
    accent: '#F87171',
    glow: 'rgba(220, 38, 38, 0.35)'
  },
  'pink': {
    name: 'Pink',
    primary: '#EC4899',
    secondary: '#F472B6',
    accent: '#F9A8D4',
    glow: 'rgba(236, 72, 153, 0.35)'
  },
  'indigo': {
    name: 'Indigo',
    primary: '#4F46E5',
    secondary: '#6366F1',
    accent: '#818CF8',
    glow: 'rgba(79, 70, 229, 0.35)'
  },
  'gold': {
    name: 'Gold',
    primary: '#D4AF37',
    secondary: '#E5C158',
    accent: '#F3D980',
    glow: 'rgba(212, 175, 55, 0.35)'
  },
  'dark-purple': {
    name: 'Dark Purple',
    primary: '#8A2BE2',
    secondary: '#A044FF',
    accent: '#C482FF',
    glow: 'rgba(138, 43, 226, 0.35)'
  }
};

export type AppearanceType = 'light' | 'dark' | 'auto';
export type CardStyleType = 'glass' | 'flat' | 'elevated';
export type BgPatternType = 'circuit' | 'circuits' | 'blueprint' | 'dots' | 'grid' | 'neural' | 'waves' | 'hexagons' | 'hexagon' | 'mesh' | 'particles' | 'glass' | 'network' | 'glow';
export type AnimationLevelType = 'minimal' | 'standard' | 'rich';
export type FontSizeType = 'small' | 'medium' | 'large';

interface ThemeContextType {
  accentColor: string;
  setAccentColor: (color: string) => void;
  appearance: AppearanceType;
  setAppearance: (appearance: AppearanceType) => void;
  cardStyle: CardStyleType;
  setCardStyle: (style: CardStyleType) => void;
  bgPattern: BgPatternType;
  setBgPattern: (pattern: BgPatternType) => void;
  animationLevel: AnimationLevelType;
  setAnimationLevel: (level: AnimationLevelType) => void;
  fontSize: FontSizeType;
  setFontSize: (size: FontSizeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accentColor, setAccentColorState] = useState<string>(() => {
    return localStorage.getItem('cognexa_accent_color') || 'royal-purple';
  });
  const [appearance, setAppearanceState] = useState<AppearanceType>(() => {
    return (localStorage.getItem('cognexa_appearance') as AppearanceType) || 'light';
  });
  const [cardStyle, setCardStyleState] = useState<CardStyleType>(() => {
    return (localStorage.getItem('cognexa_card_style') as CardStyleType) || 'glass';
  });
  const [bgPattern, setBgPatternState] = useState<BgPatternType>(() => {
    return (localStorage.getItem('cognexa_bg_pattern') as BgPatternType) || 'mesh';
  });
  const [animationLevel, setAnimationLevelState] = useState<AnimationLevelType>(() => {
    return (localStorage.getItem('cognexa_animation_level') as AnimationLevelType) || 'standard';
  });
  const [fontSize, setFontSizeState] = useState<FontSizeType>(() => {
    return (localStorage.getItem('cognexa_font_size') as FontSizeType) || 'medium';
  });

  const setAccentColor = (color: string) => {
    if (accentColors[color]) {
      setAccentColorState(color);
      localStorage.setItem('cognexa_accent_color', color);
    }
  };

  const setAppearance = (app: AppearanceType) => {
    setAppearanceState(app);
    localStorage.setItem('cognexa_appearance', app);
  };

  const setCardStyle = (style: CardStyleType) => {
    setCardStyleState(style);
    localStorage.setItem('cognexa_card_style', style);
  };

  const setBgPattern = (pat: BgPatternType) => {
    setBgPatternState(pat);
    localStorage.setItem('cognexa_bg_pattern', pat);
  };

  const setAnimationLevel = (level: AnimationLevelType) => {
    setAnimationLevelState(level);
    localStorage.setItem('cognexa_animation_level', level);
  };

  const setFontSize = (size: FontSizeType) => {
    setFontSizeState(size);
    localStorage.setItem('cognexa_font_size', size);
  };

  // Synchronize dynamic properties with HTML document
  useEffect(() => {
    const root = document.documentElement;

    // 1. Accent color variables
    const activeAccent = accentColors[accentColor] || accentColors['royal-purple'];
    root.style.setProperty('--primary', activeAccent.primary);
    root.style.setProperty('--secondary', activeAccent.secondary);
    root.style.setProperty('--accent', activeAccent.accent);
    root.style.setProperty('--glow', activeAccent.glow);

    // Calculate variations
    root.style.setProperty('--primary-light', `${activeAccent.primary}20`);
    root.style.setProperty('--primary-dark', `${activeAccent.primary}e0`);

    // 2. Light/Dark logic - strictly locked to White / Light Grey background per user's final design directions.
    const isDark = false;
    root.classList.add('light');
    root.classList.remove('dark');
    root.style.setProperty('--background', '#FFFFFF');
    root.style.setProperty('--background-alt', '#F8FAFC');
    root.style.setProperty('--surface', '#F3F4F6');
    root.style.setProperty('--surface-hover', '#E5E7EB');
    root.style.setProperty('--text-primary', '#111827');
    root.style.setProperty('--text-secondary', '#4B5563');
    root.style.setProperty('--text-muted', '#9CA3AF');
    root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.08)');

    // 3. Card Style variables
    if (cardStyle === 'glass') {
      root.style.setProperty('--card-bg', isDark ? 'rgba(17, 24, 39, 0.65)' : 'rgba(255, 255, 255, 0.75)');
      root.style.setProperty('--card-backdrop', 'blur(16px)');
      root.style.setProperty('--card-border', '1px solid var(--border-color)');
      root.style.setProperty('--card-shadow', '0 8px 30px rgba(0, 0, 0, 0.04)');
    } else if (cardStyle === 'flat') {
      root.style.setProperty('--card-bg', isDark ? '#111827' : '#FFFFFF');
      root.style.setProperty('--card-backdrop', 'none');
      root.style.setProperty('--card-border', '1px solid var(--border-color)');
      root.style.setProperty('--card-shadow', 'none');
    } else if (cardStyle === 'elevated') {
      root.style.setProperty('--card-bg', isDark ? '#1f2937' : '#FFFFFF');
      root.style.setProperty('--card-backdrop', 'none');
      root.style.setProperty('--card-border', 'none');
      root.style.setProperty('--card-shadow', '0 20px 45px rgba(0, 0, 0, 0.06)');
    }

    // 4. Font scale factor variables
    const fontScale = fontSize === 'small' ? '0.9' : fontSize === 'large' ? '1.1' : '1.0';
    root.style.setProperty('--font-scale-factor', fontScale);

    // 5. Animation modifiers
    if (animationLevel === 'minimal') {
      root.classList.add('disable-animations');
      root.style.setProperty('--anim-multiplier', '0');
    } else {
      root.classList.remove('disable-animations');
      root.style.setProperty('--anim-multiplier', animationLevel === 'rich' ? '1.2' : '1');
    }

  }, [accentColor, appearance, cardStyle, fontSize, animationLevel]);

  return (
    <ThemeContext.Provider value={{
      accentColor, setAccentColor,
      appearance, setAppearance,
      cardStyle, setCardStyle,
      bgPattern, setBgPattern,
      animationLevel, setAnimationLevel,
      fontSize, setFontSize
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
