import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Type, Play, Pause, 
  Facebook, Instagram, Youtube, MapPin, Phone, Heart, Mail, HandHeart, ArrowRight, Home, ChevronDown, Trophy, Calendar, Video
} from 'lucide-react';
import { AudioPlayerContextType, AccessibilityContextType } from '../types';

// --- Contexts ---
export const AudioContext = createContext<AudioPlayerContextType>({
  isPlaying: false,
  togglePlay: () => {},
  currentTrack: '',
  setTrack: () => {},
  volume: 1,
  setVolume: () => {},
  isRadioLive: true
});

export const AccessibilityContext = createContext<AccessibilityContextType>({
  fontSize: 100,
  setFontSize: () => {},
  highContrast: false,
  toggleHighContrast: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  speak: () => {}
});

// --- Components ---

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isValenteModalOpen, setIsValenteModalOpen] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useContext(AccessibilityContext);
  
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Ministérios', path: '/ministerios' },
    { name: 'Programações', path: '/programacao' },
    { name: 'Mídias', path: '/midias' },
    { name: 'Testemunhos', path: '/testemunhos' },
    { name: 'Espaço Kids', path: '/kids' },
    { name: 'Contato', path: '/contato' },
    { name: 'Igrejas', path: '/igrejas' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed w-full z-40 top-0 font-sans">
        <div className="relative bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-navy-800 transition-all duration-500 flex flex-col items-center">
          <div className="w-full max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-center relative z-20">
            <Link to="/" className="transform hover:scale-105 transition-transform duration-300 flex justify-center items-center">
               <img src="/logo.png" alt="Logo Igreja Pleno em Cristo" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
               <button onClick={() => setIsValenteModalOpen(true)} className="hidden sm:flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 animate-pulse-slow">
                  <Trophy size={14} /> VIRE UM VALENTE
               </button>
               <button onClick={toggleDarkMode} className="p-2 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-gold-500 transition-colors shadow-sm">
                  {darkMode ? <Sun size={20} className="text-gold-500" /> : <Moon size={20} />}
                </button>
            </div>
          </div>

          <div className={`hidden md:block w-full overflow-hidden transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-100 dark:border-navy-800 ${isMenuOpen ? 'max-h-[80vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} className={`text-base font-medium transition-all duration-300 hover:-translate-y-0.5 relative group ${link.path === '/kids' ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold' : isActive(link.path) ? 'text-navy-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-gold-600 dark:hover:text-gold-400'}`}>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${link.path === '/kids' ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500' : 'bg-gold-500'} ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                ))}
              </div>
              <div className="w-12 h-1 bg-gold-200 dark:bg-navy-700 rounded-full"></div>
              <Link to="/ofertar" className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 rounded-full font-bold text-sm hover:from-gold-400 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 flex items-center gap-2 transform hover:scale-105">
                  <Heart size={18} fill="currentColor" /> QUERO OFERTAR
              </Link>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[80%] z-30 bg-white dark:bg-navy-900 text-gold-500 border border-slate-200 dark:border-navy-700 w-12 h-12 rounded-full items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group">
            <ChevronDown size={24} className={`transition-transform duration-500 ease-out ${isMenuOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
          </button>
        </div>
      </nav>

      {isValenteModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-navy-900 p-8 rounded-3xl shadow-2xl border border-orange-500/30 max-w-md w-full text-center relative animate-slide-up">
            <button onClick={() => setIsValenteModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-1 bg-slate-100 dark:bg-navy-800 rounded-full"><X size={20}/></button>
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 shadow-inner"><Trophy size={40} /></div>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 font-serif">Seja um Valente!</h3>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed italic">"Quer ser uma valente? Venha comigo!"</p>
            <a href="https://valente.plenoemcristo.com.br/#transformacao" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform uppercase tracking-wide text-sm" onClick={() => setIsValenteModalOpen(false)}>QUERO PARTICIPAR</a>
          </div>
        </div>
      )}
    </>
  );
};

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuSheetOpen, setIsMenuSheetOpen] = useState(false);

  const navItems = [
    { name: 'Início', path: '/', icon: <Home size={22} /> },
    { name: 'Programação', path: '/programacao', icon: <Calendar size={22} /> },
    { name: 'Ofertar', path: '/ofertar', icon: <Heart size={26} fill="currentColor" />, isMain: true },
    { name: 'Mídias', path: '/midias', icon: <Video size={22} /> },
    { name: 'Menu', action: () => setIsMenuSheetOpen(true), icon: <Menu size={22} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  const menuLinks = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Ministérios', path: '/ministerios' },
    { name: 'Testemunhos', path: '/testemunhos' },
    { name: 'Espaço Kids', path: '/kids' },
    { name: 'Contato', path: '/contato' },
    { name: 'Igrejas', path: '/igrejas' },
  ];

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-navy-800 z-50 pb-safe transition-all shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item, idx) => (
            <button key={idx} onClick={() => item.action ? item.action() : navigate(item.path!)} className={`flex flex-col items-center justify-center w-full h-full relative no-select ${item.isMain ? '-mt-6' : ''}`}>
              {item.isMain ? (
                 <div className="w-14 h-14 bg-gradient-to-tr from-gold-500 to-gold-400 rounded-full flex items-center justify-center shadow-lg text-white border-4 border-slate-50 dark:border-navy-950 transform transition-transform active:scale-95">
                    {item.icon}
                 </div>
              ) : (
                <div className={`transition-colors flex flex-col items-center gap-1 ${isActive(item.path!) ? 'text-gold-500' : 'text-slate-400 dark:text-slate-500'}`}>
                  {item.icon}
                  <span className="text-[10px] font-medium">{item.name}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {isMenuSheetOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuSheetOpen(false)}></div>
           <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-navy-900 rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
              <div className="w-12 h-1.5 bg-slate-200 dark:bg-navy-700 rounded-full mx-auto mb-6"></div>
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-xl font-bold text-navy-900 dark:text-white">Menu Principal</h3>
                 <button onClick={() => setIsMenuSheetOpen(false)} className="p-2 bg-slate-100 dark:bg-navy-800 rounded-full"><X size={20} className="text-slate-500" /></button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                 {menuLinks.map((link) => (
                   <Link key={link.name} to={link.path} onClick={() => setIsMenuSheetOpen(false)} className="flex items-center p-4 bg-slate-50 dark:bg-navy-800 rounded-xl text-navy-900 dark:text-white font-bold text-sm border border-slate-100 dark:border-navy-700 active:bg-gold-100 dark:active:bg-navy-700 transition-colors">
                     {link.name}
                   </Link>
                 ))}
              </div>
              <div className="bg-gold-500/10 rounded-xl p-4 flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-white"><Trophy size={20} /></div>
                 <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">Projeto Valente</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Faça parte dessa missão</p>
                 </div>
                 <a href="https://valente.plenoemcristo.com.br" className="ml-auto bg-gold-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">Acessar</a>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

const PersistentPlayer: React.FC = () => {
  const { isPlaying, togglePlay, isRadioLive } = useContext(AudioContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className={`fixed left-0 right-0 bg-navy-950 border-t border-gold-600/30 z-30 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 bottom-[64px] md:bottom-0`}>
      <audio ref={audioRef} src="https://s3.radio.co/s96e294e62/listen" preload="none" />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
           <div className={`w-3 h-3 rounded-full ${isRadioLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
           <div className="max-w-[200px] md:max-w-none overflow-hidden">
             <p className="text-gold-500 font-bold text-sm uppercase tracking-wider truncate">Rádio Pleno em Cristo</p>
             <p className="text-xs text-gray-400 truncate">{isRadioLive ? 'AO VIVO - Adoração Profética' : 'Offline'}</p>
           </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-end gap-1 h-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1 bg-gold-500 rounded-t transition-all duration-150 ${isPlaying ? 'animate-[pulse_0.5s_ease-in-out_infinite]' : 'h-1'}`} style={{ height: isPlaying ? `${Math.random() * 20 + 5}px` : '4px', animationDelay: `${i * 0.1}s` }}/>
            ))}
          </div>
          <button onClick={togglePlay} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gold-500 text-navy-900 hover:bg-gold-400 transition-transform hover:scale-105 shadow-lg shadow-gold-500/20">
            {isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} className="ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const AccessibilityTools: React.FC = () => {
  const { fontSize, setFontSize, highContrast, toggleHighContrast } = useContext(AccessibilityContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-32 md:bottom-24 right-4 z-30 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white dark:bg-navy-900 text-navy-900 dark:text-white p-4 rounded-lg shadow-xl mb-2 flex flex-col gap-3 min-w-[200px] animate-slide-up border border-slate-100 dark:border-navy-800">
          <h4 className="font-bold text-sm uppercase tracking-wide border-b border-gray-200 dark:border-navy-700 pb-2">Acessibilidade</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Tamanho da Fonte</span>
            <div className="flex gap-2">
              <button onClick={() => setFontSize(100)} className={`p-1 rounded ${fontSize === 100 ? 'bg-navy-900 dark:bg-white text-white dark:text-navy-900' : 'bg-gray-100 dark:bg-navy-800'}`}>A</button>
              <button onClick={() => setFontSize(110)} className={`p-1 rounded ${fontSize === 110 ? 'bg-navy-900 dark:bg-white text-white dark:text-navy-900' : 'bg-gray-100 dark:bg-navy-800'}`}>A+</button>
              <button onClick={() => setFontSize(125)} className={`p-1 rounded ${fontSize === 125 ? 'bg-navy-900 dark:bg-white text-white dark:text-navy-900' : 'bg-gray-100 dark:bg-navy-800'}`}>A++</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
             <span className="text-sm font-medium">Alto Contraste</span>
             <button onClick={toggleHighContrast} className="text-navy-900 dark:text-white hover:text-gold-600">
               {highContrast ? <Sun size={20} /> : <Moon size={20} />}
             </button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-navy-900 border-2 border-gold-500 rounded-full flex items-center justify-center text-gold-500 shadow-lg hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
        <Type size={20} />
      </button>
    </div>
  );
};

const FloatingHomeButton: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <Link to="/" className="hidden md:flex fixed bottom-24 left-4 z-50 w-12 h-12 bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-navy-700 rounded-full items-center justify-center text-navy-900 dark:text-white shadow-lg hover:bg-slate-50 dark:hover:bg-navy-800 hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-500 transition-all group">
      <Home size={22} />
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-20 pb-32 md:pb-24 font-sans mb-[64px] md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
               <h3 className="text-2xl font-serif font-bold text-white mb-2">Igreja <span className="text-gold-500">Pleno em Cristo</span></h3>
               <p className="text-gray-400 text-sm leading-relaxed">Transformando vidas através da palavra de Deus. Um lugar de novos começos, cura e restauração.</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-navy-800 transition-all border border-navy-800"><Facebook size={20}/></a>
              <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-navy-800 transition-all border border-navy-800"><Youtube size={20}/></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gold-500/30 pb-2 inline-block">Fale Conosco</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="group"><div className="flex items-center gap-2 text-white font-bold mb-1"><Mail size={16} className="text-gold-500" /> Geral</div><p className="text-sm hover:text-gold-400 transition-colors">igrejaplenoemcristo@gmail.com</p></li>
              <li className="group"><div className="flex items-center gap-2 text-white font-bold mb-1"><Phone size={16} className="text-gold-500" /> Secretaria</div><p className="text-sm hover:text-gold-400 transition-colors">(11) 2679-5714</p></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gold-500/30 pb-2 inline-block">Nossos Cultos</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-3 hover:pl-2 transition-all"><span>Domingo (Celebração)</span><span className="text-gold-500 font-bold">18:00</span></li>
              <li className="flex justify-between border-b border-white/5 pb-3 hover:pl-2 transition-all"><span>Quarta (Ensino)</span><span className="text-gold-500 font-bold">19:30</span></li>
              <li className="flex justify-between border-b border-white/5 pb-3 hover:pl-2 transition-all"><span>Sexta (Libertação)</span><span className="text-gold-500 font-bold">20:00</span></li>
            </ul>
          </div>
          <div>
             <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gold-500/30 pb-2 inline-block">Contribuição</h4>
             <div className="bg-navy-900 p-6 rounded-2xl border border-navy-800 shadow-lg hover:border-gold-500/50 transition-colors">
               <p className="text-gray-300 text-sm mb-6 leading-relaxed">Contato seguro para doações e ofertas?</p>
               <Link to="/ofertar" className="bg-gold-500 text-navy-900 font-bold py-3 px-6 rounded-lg hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 w-full text-center flex items-center justify-center gap-2 group">
                 <Heart size={18} fill="currentColor" /> Fazer doação <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Igreja Pleno em Cristo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, MobileBottomNav, PersistentPlayer, AccessibilityTools, Footer, FloatingHomeButton };