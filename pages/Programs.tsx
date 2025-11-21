import React, { useState } from 'react';
import { Mic, Tv, Calendar as CalendarIcon, Play, Clock } from 'lucide-react';

const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tv' | 'radio' | 'schedule'>('tv');

  const schedule = [
    { time: '08:00', title: 'Café com Deus', host: 'Pra. Maria', type: 'radio' },
    { time: '12:00', title: 'Meio Dia de Oração', host: 'Equipe de Fé', type: 'tv' },
    { time: '15:00', title: 'Tarde da Benção', host: 'Rodrigo Salgado', type: 'radio' },
    { time: '20:00', title: 'Cristina Salgado Show', host: 'Cristina Salgado', type: 'tv' },
  ];

  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="bg-white dark:bg-navy-900 py-12 px-4 border-b border-slate-200 dark:border-navy-800 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-8">Nossas Programações</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveTab('tv')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${activeTab === 'tv' ? 'bg-gold-500 border-gold-500 text-white shadow-lg' : 'bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-700'}`}
            >
              <Tv size={20} /> TV Ao Vivo
            </button>
            <button 
              onClick={() => setActiveTab('radio')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${activeTab === 'radio' ? 'bg-gold-500 border-gold-500 text-white shadow-lg' : 'bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-700'}`}
            >
              <Mic size={20} /> Pleno em Cristo
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${activeTab === 'schedule' ? 'bg-gold-500 border-gold-500 text-white shadow-lg' : 'bg-white dark:bg-navy-800 border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-700'}`}
            >
              <CalendarIcon size={20} /> Grade Semanal
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'tv' && (
          <div className="animate-fade-in">
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              {/* LOCAL IMAGE: Live Stream Thumb */}
              <img src="/live-stream-thumb.jpg" alt="Live Stream" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:scale-110 transition-transform">
                   <Play size={32} fill="currentColor" className="text-white ml-1"/>
                 </button>
              </div>
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase animate-pulse shadow-md">
                Ao Vivo Agora
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-100 dark:border-navy-800 shadow-md transition-colors">
                 <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Programa Cristina Salgado</h3>
                 <p className="text-slate-600 dark:text-slate-300 mb-4">Entrevistas, louvor e uma palavra de fé para o seu coração.</p>
                 <div className="flex items-center gap-2 text-sm text-gold-600 font-bold">
                   <Clock size={16} /> Seg a Sex - 20h
                 </div>
               </div>
               <div className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-100 dark:border-navy-800 shadow-md transition-colors">
                 <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Programa Rodrigo Salgado</h3>
                 <p className="text-slate-600 dark:text-slate-300 mb-4">Papo jovem, música e descontração com propósito.</p>
                 <div className="flex items-center gap-2 text-sm text-gold-600 font-bold">
                   <Clock size={16} /> Sábados - 15h
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="grid gap-4 animate-slide-up">
            {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
              <div key={day} className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-sm transition-colors">
                <div className="bg-slate-100 dark:bg-navy-800 px-6 py-3 font-bold text-navy-900 dark:text-white border-b border-slate-200 dark:border-navy-700">{day}</div>
                <div className="divide-y divide-slate-100 dark:divide-navy-800">
                  {schedule.map((item, i) => (
                    <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-navy-700 dark:text-slate-200 font-mono bg-slate-100 dark:bg-navy-950 px-3 py-1 rounded border border-slate-200 dark:border-navy-800 font-bold">{item.time}</span>
                        <div>
                          <h4 className="text-navy-900 dark:text-white font-bold">{item.title}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.host}</p>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full ${item.type === 'radio' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}`}>
                        {item.type === 'radio' ? <Mic size={16} /> : <Tv size={16} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'radio' && (
          <div className="text-center py-20 animate-fade-in bg-white dark:bg-navy-900 rounded-3xl shadow-xl border border-slate-100 dark:border-navy-800 transition-colors">
            <div className="w-48 h-48 mx-auto bg-navy-900 rounded-full border-4 border-gold-500 shadow-xl flex items-center justify-center mb-8 relative">
               <Mic size={64} className="text-white" />
               <div className="absolute inset-0 rounded-full border-t-4 border-transparent border-t-white animate-spin"></div>
            </div>
            <h3 className="text-3xl font-serif font-bold text-navy-900 dark:text-white mb-4">Rádio Pleno em Cristo FM</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto mb-8">
              A melhor programação gospel, 24 horas no ar levando a palavra de Deus até você.
            </p>
            <button className="px-8 py-4 bg-gold-500 text-white font-bold rounded-full hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/30">
              Ouvir Agora
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;