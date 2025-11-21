import React from 'react';
import { Gamepad2, Palette, HelpCircle, Star, Lock, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Kids: React.FC = () => {
  const activities = [
    {
      title: "Jogo da Memória",
      subtitle: "Heróis da Bíblia",
      color: "bg-blue-400",
      icon: <Gamepad2 size={32} className="text-white" />,
      image: "/kids-memoria.jpg"
    },
    {
      title: "Vamos Colorir",
      subtitle: "A Arca de Noé",
      color: "bg-pink-400",
      icon: <Palette size={32} className="text-white" />,
      image: "/kids-colorir.jpg"
    },
    {
      title: "Quiz Bíblico",
      subtitle: "Desafie seu conhecimento",
      color: "bg-purple-400",
      icon: <HelpCircle size={32} className="text-white" />,
      image: "/kids-quiz.jpg"
    },
    {
      title: "Caça Palavras",
      subtitle: "Frutos do Espírito",
      color: "bg-green-400",
      icon: <Star size={32} className="text-white" />,
      image: "/kids-caca.jpg"
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-yellow-50 dark:bg-navy-950 font-sans selection:bg-pink-300">
      
      {/* Hero Section Fun */}
      <div className="relative overflow-hidden bg-white dark:bg-navy-900 pt-10 pb-20 px-4 border-b-8 border-dashed border-pink-300">
        {/* Floating Elements Decoration */}
        <div className="absolute top-10 left-10 text-yellow-400 animate-bounce"><Star size={40} fill="currentColor"/></div>
        <div className="absolute bottom-10 right-10 text-blue-400 animate-pulse"><Sparkles size={40} /></div>
        <div className="absolute top-20 right-20 text-purple-400 animate-spin-slow hidden md:block"><Rocket size={40} /></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6 shadow-lg animate-pulse">
            Em Breve
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 drop-shadow-sm" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
            Espaço Kids
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Um lugar cheio de diversão e Deus feito especialmente para você!
            <br/>
            Prepare-se para minigames, desenhos e muita alegria.
          </p>
        </div>
      </div>

      {/* Content Preview Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white dark:bg-navy-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-yellow-300"
            >
              {/* Locked Overlay */}
              <div className="absolute inset-0 z-20 bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Lock size={48} className="mb-2" />
                <span className="font-bold text-lg">Em Breve</span>
              </div>

              <div className="h-40 overflow-hidden relative">
                {/* LOCAL IMAGE: Kids Activities */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className={`absolute -bottom-6 right-4 w-12 h-12 ${item.color} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-navy-900 z-10`}>
                  {item.icon}
                </div>
              </div>
              
              <div className="p-6 pt-8">
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notify Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">O Universo da Alegria está chegando!</h2>
             <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
               Estamos construindo um site incrível com jogos bíblicos, desenhos para imprimir e histórias animadas.
             </p>
             <Link to="/" className="inline-block bg-white text-purple-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 hover:text-purple-700 hover:scale-105 transition-all">
               Voltar para o site da Igreja
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Kids;