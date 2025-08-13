import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
}) => {
  const classes = `card card--p-${padding} card--shadow-${shadow} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
