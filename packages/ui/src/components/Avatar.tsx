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
  const classes = `avatar avatar--${size} ${className}`;

  if (src) {
    return (
      <img src={src} alt={alt} className={classes} />
    );
  }

  return (
    <div className={classes}>
      {fallback || 'U'}
    </div>
  );
};
