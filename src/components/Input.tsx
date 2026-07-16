import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-[10px] font-bold text-text-sub uppercase tracking-wider font-display">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`glass-input px-4 py-2.5 text-xs w-full ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
        {error && <span className="text-[11px] text-red-500 font-semibold">{error}</span>}
      </div>
    );
  }
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-[10px] font-bold text-text-sub uppercase tracking-wider font-display">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`glass-input px-4 py-2.5 text-xs w-full min-h-[100px] resize-y ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
        {error && <span className="text-[11px] text-red-500 font-semibold">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
TextArea.displayName = 'TextArea';
