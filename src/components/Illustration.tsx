import React from 'react';
import { motion } from 'framer-motion';

import heroImg from '@/assets/images/hero.png';
import productsImg from '@/assets/images/products.png';
import academyImg from '@/assets/images/academy.png';
import aboutImg from '@/assets/images/about.png';
import careersImg from '@/assets/images/careers.png';
import pricingImg from '@/assets/images/pricing.png';
import contactImg from '@/assets/images/contact.png';
import gamesImg from '@/assets/images/games.png';

// Shared image wrapper
// - mix-blend-mode: multiply  → white PNG edges vanish on light backgrounds
// - mix-blend-mode: screen    → white PNG edges vanish on dark backgrounds (along with color inversion)
// Images are static (no float) as requested
function IllustrationImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkDark = () => {
      const darkClass = document.documentElement.classList.contains('dark');
      setIsDark(darkClass);
    };
    checkDark();
    // Create a MutationObserver to listen to class changes on documentElement
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* Ambient glow behind the illustration */}
      <div
        className="absolute inset-0 m-auto w-2/3 h-2/3 rounded-full blur-[90px] pointer-events-none"
        style={{ background: 'var(--glow, rgba(108,59,255,0.15))' }}
      />

      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 w-full max-w-[480px] h-auto object-contain select-none"
        style={
          isDark
            ? {
                // On dark theme: invert to turn white bg to black, then dissolve via screen
                mixBlendMode: 'screen',
                filter: 'invert(1) hue-rotate(180deg) brightness(1.1) drop-shadow(0 12px 40px rgba(255,255,255,0.1))',
              }
            : {
                // On light theme: white areas multiply to nothing → only illustration shape visible
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 12px 40px rgba(108,59,255,0.18))',
              }
        }
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        draggable={false}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Named exports — map 1-to-1 with page usage
// ─────────────────────────────────────────────

/** Home / Hero section */
export function DevIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa enterprise software ecosystem" />;
}

/** Products page hero */
export function SaaSIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa SaaS product suite" />;
}

/** Academy / Courses page hero */
export function AcademyIllustration() {
  return <IllustrationImage src={academyImg} alt="Cognexa Academy learning platform" />;
}

/** About page */
export function NetworkIllustration() {
  return <IllustrationImage src={aboutImg} alt="Cognexa global technology network" />;
}

/** Careers page */
export function CareersIllustration() {
  return <IllustrationImage src={careersImg} alt="Cognexa careers and hiring" />;
}

/** Contact page */
export function ContactIllustration() {
  return <IllustrationImage src={contactImg} alt="Cognexa contact center" />;
}

/** Games page */
export function GamesIllustration() {
  return <IllustrationImage src={gamesImg} alt="Cognexa games arena" />;
}

/** Pricing page */
export function PricingIllustration() {
  return <IllustrationImage src={pricingImg} alt="Cognexa pricing and plan tiers" />;
}

// ─────────────────────────────────────────────
// Alias / fallback exports
// ─────────────────────────────────────────────

export function LaptopIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa SaaS platform" />;
}

export function ProgrammingIllustration() {
  return <IllustrationImage src={academyImg} alt="Cognexa programming courses" />;
}

export function AnalyticsIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa analytics dashboard" />;
}

export function SecurityIllustration() {
  return <IllustrationImage src={contactImg} alt="Cognexa secure gateway" />;
}

export function AIIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa AI solutions" />;
}

export function ERPIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa ERP system" />;
}

export function DeviceIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa cross-device platform" />;
}

export function AIResearchIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa AI research" />;
}

export function DashboardIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa dashboard" />;
}
