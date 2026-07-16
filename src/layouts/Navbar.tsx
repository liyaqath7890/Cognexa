import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Briefcase, Trophy, Sparkles, LayoutDashboard } from 'lucide-react';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { useTheme, accentColors } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const location = useLocation();
  const { accentColor } = useTheme();

  // Derive the active theme accent
  const activeAccent = accentColors[accentColor] || accentColors['royal-purple'];
  const primary = activeAccent.primary; // e.g. "#6C3BFF"

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };
  const rgb = hexToRgb(primary);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  // Translucent tinted background matching active theme but kept light/legible for black text
  const navBg = scrolled
    ? `rgba(${rgb}, 0.16)`
    : `rgba(${rgb}, 0.08)`;

  const navStyle: React.CSSProperties = {
    background: navBg,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: scrolled
      ? `1px solid rgba(${rgb}, 0.25)`
      : '1px solid transparent',
    boxShadow: scrolled
      ? `0 4px 20px rgba(${rgb}, 0.08)`
      : 'none',
    transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  };

  // Keep navigation text always in black / dark slate regardless of header background color
  const linkBase = 'text-xs font-black uppercase tracking-wider transition-all duration-200 hover:scale-105';
  const linkActive = `${linkBase} text-primary`; // Active state highlighted in active theme color
  const linkInactive = `${linkBase} text-slate-950/80 hover:text-slate-950`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50" style={navStyle}>
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center h-[60px]">

        {/* Logo — brand purple stays fixed, never shifts or changes with theme selection */}
        <Link to="/" className="flex items-center group">
          <Logo size={scrolled ? 'sm' : 'md'} className="transition-all duration-300" />
        </Link>

        {/* Desktop Nav links (Black text) */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={location.pathname === '/' ? linkActive : linkInactive}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? linkActive : linkInactive}>About</Link>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className={`flex items-center space-x-1 py-2 border-none bg-transparent cursor-pointer ${linkInactive}`}
            >
              <span>Products</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className={`absolute top-full -left-4 w-72 border border-slate-200/80 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl transition-all duration-300 ${
                productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <Link to="/products" className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition">
                <div className="p-2 bg-primary/10 rounded-lg"><BookOpen className="w-4 h-4 text-primary" /></div>
                <div>
                  <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Enterprise SaaS Suite</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Explore 10 modules: School ERP, PIM, CRM...</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Academy Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setAcademyOpen(true)}
              onMouseLeave={() => setAcademyOpen(false)}
              className={`flex items-center space-x-1 py-2 border-none bg-transparent cursor-pointer ${linkInactive}`}
            >
              <span>Academy</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div
              onMouseEnter={() => setAcademyOpen(true)}
              onMouseLeave={() => setAcademyOpen(false)}
              className={`absolute top-full -left-4 w-72 border border-slate-200/80 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl transition-all duration-300 ${
                academyOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="space-y-2">
                <Link to="/academy" className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition">
                  <div className="p-2 bg-primary/10 rounded-lg"><Trophy className="w-4 h-4 text-primary" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Academy Overview</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Roadmaps, mentorship and certification</p>
                  </div>
                </Link>
                <Link to="/courses" className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition">
                  <div className="p-2 bg-primary/10 rounded-lg"><BookOpen className="w-4 h-4 text-primary" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Elite Courses</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">React 19, DevOps, ML Pipelines</p>
                  </div>
                </Link>
                <Link to="/internships" className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition">
                  <div className="p-2 bg-primary/10 rounded-lg"><Briefcase className="w-4 h-4 text-primary" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wide">Internships</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Industry, virtual and offline tracks</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/games" className={location.pathname === '/games' ? linkActive : linkInactive}>Games</Link>
          <Link to="/careers" className={location.pathname === '/careers' ? linkActive : linkInactive}>Careers</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? linkActive : linkInactive}>Pricing</Link>
        </div>

        {/* Right side CTAs (Black text) */}
        <div className="hidden lg:flex items-center space-x-5">
          <Link
            to="/student/dashboard"
            className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-slate-950/80 hover:text-slate-950 transition-all duration-200 hover:scale-105"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-primary" />
            <span>Dashboard</span>
          </Link>
          <Link to="/contact">
            <button
              className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-slate-950 py-2 px-5 rounded-full border border-slate-950/20 bg-white/70 hover:bg-white hover:border-slate-950/40 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Connect Now</span>
            </button>
          </Link>
        </div>

        {/* Hamburger (Black) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-950 hover:text-primary cursor-pointer border-none bg-transparent"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Black text / White-glass background) */}
      {isOpen && (
        <div
          style={{ background: `rgba(255, 255, 255, 0.98)`, borderTop: `1px solid rgba(${rgb}, 0.15)` }}
          className="lg:hidden absolute top-full left-0 w-full py-6 px-6 flex flex-col space-y-4 shadow-xl backdrop-blur-xl"
        >
          {[
            ['/', 'Home'], ['/about', 'About'], ['/products', 'Products'],
            ['/academy', 'Academy'], ['/courses', 'Courses'], ['/internships', 'Internships'],
            ['/games', 'Games Arena'], ['/careers', 'Careers'], ['/pricing', 'Pricing'], ['/contact', 'Contact']
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-black uppercase tracking-wide transition ${
                location.pathname === path ? 'text-primary' : 'text-slate-950/80 hover:text-slate-950'
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-slate-200 pt-4 flex flex-col space-y-3">
            <Link
              to="/student/dashboard"
              className="text-center py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 border border-slate-300 rounded-full hover:bg-slate-50 transition"
            >
              Student Portal
            </Link>
            <Link to="/contact" className="text-center">
              <button className="w-full py-2.5 text-xs font-black uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-900 rounded-full transition">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
