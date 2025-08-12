import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  fallback,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  };

  const baseClasses = 'inline-block rounded-full bg-gray-300 flex items-center justify-center font-medium text-gray-700 overflow-hidden';
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
      />
    );
  }

  return (
    <div className={classes}>
      {fallback || 'U'}
    </div>
  );
};
