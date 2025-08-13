import React from 'react';

export interface NavTab {
  label: string;
  href: string;
}

export interface HeaderProps {
  title?: string;
  tabs?: NavTab[];
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Wisland',
  tabs = [
    { label: 'Next 1', href: '/next1' },
    { label: 'Next 2', href: '/next2' },
    { label: 'Vite 1', href: '/vite1/' },
    { label: 'Vite 2', href: '/vite2/' },
    { label: 'Tauri', href: '/tauri/' },
  ],
  className = '',
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header__inner">
        <div className="header__brand">{title}</div>
        <nav className="nav">
          {tabs.map((tab) => (
            <a key={tab.href} href={tab.href} className="nav__tab">
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};


