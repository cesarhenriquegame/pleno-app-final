import React from 'react';
import { Play, Image } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-12 text-center">Galeria & Mídias</h1>
        
        {/* Clips Section */}
        <section className="mb-20">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-navy-900 dark:text-white flex items-center gap-3">
               <Play className="text-gold-500" fill="currentColor" /> Portal de Clips
             </h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                 {/* LOCAL IMAGE: Clips */}
                 <img src={`/clip-${i}.jpg`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Clip ${i}`} />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 p-4 flex flex-col justify-end">
                   <h3 className="text-white font-bold text-sm mb-1">Momento de Adoração</h3>
                   <p className="text-xs text-gray-300">1.5k visualizações</p>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Play size={40} fill="white" className="text-white drop-shadow-lg" />
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Photos Section */}
        <section>
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-navy-900 dark:text-white flex items-center gap-3">
               <Image className="text-gold-500" /> Álbuns de Fotos
             </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Culto da Virada', img: '/album-virada.jpg' }, 
                { title: 'Batismo nas Águas', img: '/album-batismo.jpg' }, 
                { title: 'Ação Social', img: '/album-social.jpg' }
              ].map((album, idx) => (
                <div key={idx} className="bg-white dark:bg-navy-900 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all border border-slate-100 dark:border-navy-800">
                  <div className="h-48 overflow-hidden relative">
                    {/* LOCAL IMAGE: Albums */}
                    <img src={album.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={album.title} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-navy-900 dark:text-white font-bold text-lg mb-1">{album.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">24 fotos • Janeiro 2024</p>
                  </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default Media;