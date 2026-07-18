import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark bg-gradient-mesh text-white select-none">
      {/* Background glow effects - locked to default royal purple colors */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(108, 59, 255, 0.1)' }}
      ></div>
      <div 
        className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(138, 91, 255, 0.05)' }}
      ></div>

      {/* Global SVG Duotone Filter for 3D illustrations */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <filter id="purple-white-duotone">
          <feColorMatrix
            type="matrix"
            values="0.299 0.587 0.114 0 0
                    0.299 0.587 0.114 0 0
                    0.299 0.587 0.114 0 0
                    0     0     0     1 0"
            result="grayscale"
          />
          <feComponentTransfer in="grayscale">
            <feFuncR type="table" tableValues="0.18 0.42 1.0" />
            <feFuncG type="table" tableValues="0.04 0.23 1.0" />
            <feFuncB type="table" tableValues="0.31 1.0 1.0" />
            <feFuncA type="identity" />
          </feComponentTransfer>
        </filter>
      </svg>

      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
