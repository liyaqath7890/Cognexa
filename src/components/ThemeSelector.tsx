import React, { useState } from 'react';
import { Palette, X, Monitor, Sliders, Type, Zap, LayoutGrid } from 'lucide-react';
import { useTheme, accentColors, AppearanceType, CardStyleType, BgPatternType, AnimationLevelType, FontSizeType } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';

export default function ThemeSelector() {
  const {
    accentColor, setAccentColor,
    appearance, setAppearance,
    cardStyle, setCardStyle,
    bgPattern, setBgPattern,
    animationLevel, setAnimationLevel,
    fontSize, setFontSize
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-theme-customizer', handleOpen);
    return () => window.removeEventListener('open-theme-customizer', handleOpen);
  }, []);

  const appearances: { value: AppearanceType; label: string }[] = [
    { value: 'light', label: '☀️ Light' },
    { value: 'dark', label: '🌙 Dark' },
    { value: 'auto', label: '💻 Auto' }
  ];

  const cardStyles: { value: CardStyleType; label: string }[] = [
    { value: 'glass', label: '✨ Glass' },
    { value: 'flat', label: '⬜ Flat' },
    { value: 'elevated', label: '⬛ Elevated' }
  ];

  const bgPatterns: { value: BgPatternType; label: string }[] = [
    { value: 'mesh', label: 'Mesh' },
    { value: 'circuit', label: 'Circuit' },
    { value: 'blueprint', label: 'Blueprint' },
    { value: 'dots', label: 'Dots' },
    { value: 'grid', label: 'Grid' },
    { value: 'neural', label: 'Neural' },
    { value: 'waves', label: 'Waves' },
    { value: 'hexagons', label: 'Hexagons' }
  ];

  const animations: { value: AnimationLevelType; label: string }[] = [
    { value: 'minimal', label: 'None' },
    { value: 'standard', label: 'Normal' },
    { value: 'rich', label: 'Rich' }
  ];

  const fontSizes: { value: FontSizeType; label: string }[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer group"
        aria-label="Open appearance settings"
        style={{ boxShadow: '0 8px 30px var(--glow)' }}
      >
        <Palette className="w-5.5 h-5.5" />
        <span className="absolute -left-36 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-widest shadow-md">
          Branding & Layout
        </span>
      </button>

      {/* Slide-out Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Customizer Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-85 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 z-50 shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-150 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/50 sticky top-0 backdrop-blur-md z-10">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                  <Sliders className="w-4.5 h-4.5 text-primary" />
                  <span>Theme & Appearance</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-650 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition cursor-pointer border-none bg-transparent"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow space-y-8 text-left">
                
                {/* 1. Accent Color */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <Palette className="w-4 h-4 text-primary" />
                    <span>Branding Accent Color</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(accentColors).map(([key, theme]) => {
                      const isActive = accentColor === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setAccentColor(key)}
                          className={`flex items-center space-x-2.5 p-2.5 rounded-xl border text-[11px] font-bold transition cursor-pointer text-left bg-transparent ${
                            isActive 
                              ? 'border-primary bg-primary/5 text-primary' 
                              : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                          }`}
                        >
                          <span 
                            className="w-3.5 h-3.5 rounded-full flex-shrink-0 border border-black/10 dark:border-white/10" 
                            style={{ backgroundColor: theme.primary }}
                          />
                          <span className="truncate">{theme.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Appearance */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <Monitor className="w-4 h-4 text-primary" />
                    <span>Interface Appearance</span>
                  </label>
                  <div className="flex bg-gray-50 dark:bg-gray-900 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800">
                    {appearances.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setAppearance(opt.value)}
                        className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition cursor-pointer border-none bg-transparent ${
                          appearance === opt.value
                            ? 'bg-white dark:bg-gray-800 text-primary shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                            : 'text-gray-500 dark:text-gray-450 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Card Style */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <LayoutGrid className="w-4 h-4 text-primary" />
                    <span>Card System Design</span>
                  </label>
                  <div className="flex bg-gray-50 dark:bg-gray-900 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800">
                    {cardStyles.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setCardStyle(opt.value)}
                        className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition cursor-pointer border-none bg-transparent ${
                          cardStyle === opt.value
                            ? 'bg-white dark:bg-gray-800 text-primary shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                            : 'text-gray-500 dark:text-gray-450 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Background Pattern */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <LayoutGrid className="w-4 h-4 text-primary" />
                    <span>Watermark Pattern</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                    {bgPatterns.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setBgPattern(opt.value)}
                        className={`py-2 text-[10px] uppercase font-bold rounded-lg transition cursor-pointer border-none bg-transparent ${
                          bgPattern === opt.value
                            ? 'bg-white dark:bg-gray-800 text-primary shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                            : 'text-gray-550 dark:text-gray-450 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Animation Scale */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Animation Fidelity</span>
                  </label>
                  <div className="flex bg-gray-50 dark:bg-gray-900 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800">
                    {animations.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setAnimationLevel(opt.value)}
                        className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition cursor-pointer border-none bg-transparent ${
                          animationLevel === opt.value
                            ? 'bg-white dark:bg-gray-800 text-primary shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                            : 'text-gray-500 dark:text-gray-450 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Font Scale */}
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <Type className="w-4 h-4 text-primary" />
                    <span>Typography Font Scale</span>
                  </label>
                  <div className="flex bg-gray-50 dark:bg-gray-900 p-1.5 rounded-xl border border-gray-200 dark:border-gray-800">
                    {fontSizes.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setFontSize(opt.value)}
                        className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition cursor-pointer border-none bg-transparent ${
                          fontSize === opt.value
                            ? 'bg-white dark:bg-gray-800 text-primary shadow-sm border border-gray-200/50 dark:border-gray-700/50'
                            : 'text-gray-500 dark:text-gray-450 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-150 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-center">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Preferences
                </Button>
                <p className="text-[9px] text-gray-400 dark:text-gray-550 uppercase tracking-widest mt-3 font-semibold">
                  Saved dynamically to localStorage
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
