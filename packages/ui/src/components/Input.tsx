import React from 'react';

export interface InputProps {
  value?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  value = '',
  placeholder,
  type = 'text',
  disabled = false,
  onChange,
  className = '',
  label,
  error,
}) => {
  const classes = `input ${error ? 'input--error' : ''} ${className}`;

  return (
    <div>
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={classes}
      />
      {error && (
        <p className="input-error">{error}</p>
      )}
    </div>
  );
};
