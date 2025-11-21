import React, { useState, useMemo, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AudioContext, AccessibilityContext, Navbar, Footer, PersistentPlayer, AccessibilityTools, FloatingHomeButton, MobileBottomNav } from './components/Layout';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Media from './pages/Media';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Churches from './pages/Churches';
import Give from './pages/Give';
import Ministries from './pages/Ministries';
import Kids from './pages/Kids';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const VLibras = () => {
  useEffect(() => {
    const scriptId = 'vlibras-script';
    
    // Verificar se o script já existe para não duplicar
    if (document.getElementById(scriptId)) {
      // Se já existe, tenta inicializar caso não esteja rodando
      // @ts-ignore
      if (window.VLibras && window.VLibras.Widget) {
        // @ts-ignore
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore
      if (window.VLibras && window.VLibras.Widget) {
        // @ts-ignore
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    
    document.body.appendChild(script);
    
    // Removido o cleanup (removeChild) para evitar que o script suma 
    // quando o React faz o re-render inicial no Strict Mode.
  }, []);

  return (
    // @ts-ignore
    <div vw="true" className="enabled">
      {/* @ts-ignore */}
      <div vw-access-button="true" className="active"></div>
      {/* @ts-ignore */}
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  // Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioState = useMemo(() => ({
    isPlaying,
    togglePlay: () => setIsPlaying(!isPlaying),
    currentTrack: 'Rádio Pleno em Cristo',
    setTrack: () => {},
    volume,
    setVolume,
    isRadioLive: true
  }), [isPlaying, volume]);

  // Accessibility State
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const accessibilityState = useMemo(() => ({
    fontSize,
    setFontSize,
    highContrast,
    toggleHighContrast: () => setHighContrast(!highContrast),
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
    speak: (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }), [fontSize, highContrast, darkMode]);

  return (
    <AudioContext.Provider value={audioState}>
      <AccessibilityContext.Provider value={accessibilityState}>
        <div 
          className={`${highContrast ? 'contrast-125 saturate-0 bg-black' : ''} transition-all duration-300 bg-slate-50 dark:bg-navy-950`}
          style={{ fontSize: `${fontSize}%` }}
        >
          <Router>
            <ScrollToTop />
            <VLibras />
            <div className="flex flex-col min-h-screen text-slate-800 dark:text-slate-200 selection:bg-gold-500 selection:text-navy-950 transition-colors duration-300">
              <Navbar />
              <FloatingHomeButton />
              
              <main className="flex-grow relative">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/ministerios" element={<Ministries />} />
                  <Route path="/programacao" element={<Programs />} />
                  <Route path="/midias" element={<Media />} />
                  <Route path="/testemunhos" element={<Testimonials />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/igrejas" element={<Churches />} />
                  <Route path="/ofertar" element={<Give />} />
                  <Route path="/kids" element={<Kids />} />
                </Routes>
              </main>

              <Footer />
              
              <PersistentPlayer />
              <MobileBottomNav />
              <AccessibilityTools />
            </div>
          </Router>
        </div>
      </AccessibilityContext.Provider>
    </AudioContext.Provider>
  );
};

export default App;