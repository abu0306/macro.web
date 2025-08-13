import React from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__inner">
        <span>© {year} Wisland</span>
        <span className="footer__sep">·</span>
        <a className="footer__link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
};


