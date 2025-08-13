import { useMemo, useState } from "react";
import { Header, Footer } from '@wisland/ui'
import { useTranslation } from 'react-i18next'
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="container">
      <Header title="Wisland" />
      <h1>{t('common.appName')}</h1>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => i18n.changeLanguage(i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN')}>
          {i18n.language}
        </button>
      </div>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img
            src={useMemo(() => `${import.meta.env.BASE_URL}vite.svg`, [])}
            className="logo vite"
            alt="Vite logo"
          />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img
            src={useMemo(() => `${import.meta.env.BASE_URL}tauri.svg`, [])}
            className="logo tauri"
            alt="Tauri logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder={t('common.greetings.hello', { name: '...' })}
        />
        <button type="submit">{t('common.actions.confirm')}</button>
      </form>
      <p>{greetMsg}</p>
      <Footer />
    </main>
  );
}

export default App;
