import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { ToastProvider } from './contexts/ToastContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeSelector from './components/ThemeSelector';
import AppRoutes from './routes';

import 'lenis/dist/lenis.css';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider>
        <ToastProvider>
          <BrowserRouter>
            <AppRoutes />
            <ThemeSelector />
          </BrowserRouter>
        </ToastProvider>
      </ThemeProvider>
    </ReactLenis>
  );
}
