'use client';
import React from 'react';
import styles from './index.module.scss';

export interface HeaderProps {
  title?: string;
  className?: string;
}

function resolveLinks(): { label: string; href: string }[] {
  const prodLinks = [
    { label: 'Next1', href: '/next1/' },
    { label: 'Next2', href: '/next2/' },
    { label: 'Vite1', href: '/vite1/' },
    { label: 'Vite2', href: '/vite2/' },
    { label: 'Tauri', href: '/tauri/' },
  ];

  if (typeof window === 'undefined') {
    return prodLinks;
  }

  const { protocol, hostname, port, pathname } = window.location;

  const isProdHosts =
    hostname.endsWith('.local') ||
    ['nextjs-app1.local', 'nextjs-app2.local', 'vite-app1.local', 'vite-app2.local', 'tauri-app.local'].includes(
      hostname
    );
  if (isProdHosts) {
    return prodLinks;
  }

  const usingDevGateway = port === '9090' || pathname.startsWith('/next') || pathname.startsWith('/vite') || pathname.startsWith('/tauri');
  if (usingDevGateway) {
    // 在网关模式下返回相对路径，保持当前 host:port（避免丢失 9090）
    return [
      { label: 'Next1', href: `/next1` },
      { label: 'Next2', href: `/next2` },
      { label: 'Vite1', href: `/vite1/` },
      { label: 'Vite2', href: `/vite2/` },
      { label: 'Tauri', href: `/tauri` },
    ];
  }

  // Fallback to standalone local dev ports
  return [
    { label: 'Next1', href: `${protocol}//${hostname}:3001/` },
    { label: 'Next2', href: `${protocol}//${hostname}:3002/` },
    { label: 'Vite1', href: `${protocol}//${hostname}:4001/` },
    { label: 'Vite2', href: `${protocol}//${hostname}:4002/` },
    { label: 'Tauri', href: `${protocol}//${hostname}:1420/` },
  ];
}

export const Header: React.FC<HeaderProps> = ({ title = 'Wisland', className = '' }) => {
  const links = resolveLinks();
  return (
    <header className={`${styles.root} ${className}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>{title}</div>
        <nav className={styles.nav}>
          {links.map((item) => (
            <a key={item.label} className={styles.tab} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

//