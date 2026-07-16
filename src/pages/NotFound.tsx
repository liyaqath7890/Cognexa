import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-8xl font-display font-black text-primary text-glow">404</h1>
      <h2 className="mt-4 text-3xl font-display font-bold text-gray-900">Lost in Space</h2>
      <p className="mt-2 text-gray-500 max-w-md font-semibold">The page you are looking for has been relocated or doesn't exist.</p>
      <Link to="/" className="mt-8">
        <Button variant="primary" size="md">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
