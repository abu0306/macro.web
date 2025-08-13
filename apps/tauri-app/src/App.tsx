import React from 'react';

const isTauri = Boolean((window as any).__TAURI_IPC__ || (window as any).__TAURI__);

export default function App(): JSX.Element {
  return (
    <div style={{ padding: 24, fontFamily: 'ui-sans-serif, system-ui, -apple-system' }}>
      <h1 style={{ margin: 0 }}>Tauri App</h1>
      <p style={{ marginTop: 8 }}>
        Running in: <strong>{isTauri ? 'Desktop (Tauri)' : 'Web (NGINX /tauri)'}</strong>
      </p>
      <p>
        Web version must be served under the <code>/tauri/</code> base path. Desktop build uses root base.
      </p>
    </div>
  );
}


