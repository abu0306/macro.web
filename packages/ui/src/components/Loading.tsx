import React from 'react';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  className = '',
}) => {
  const classes = `loading loading--${size} ${className}`;

  return (
    <div className={classes} />
  );
};
