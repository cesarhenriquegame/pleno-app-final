import React, { useState } from 'react';
import { Quote, PlayCircle, MessageSquarePlus, X, Send, CheckCircle } from 'lucide-react';
import { Testimony } from '../types';

const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['Todos', 'Casa de Recuperação', 'Cura', 'Restaurados', 'Transformações'];

  const testimonials: Testimony[] = [
    {
      id: '1',
      name: 'Carlos Silva',
      category: 'Casa de Recuperação',
      excerpt: 'Cheguei aqui sem esperança, perdido nas drogas. Hoje sou um novo homem.',
      fullText: '...',
      imageUrl: '1012'
    },
    {
      id: '2',
      name: 'Ana Santos',
      category: 'Cura',
      excerpt: 'Os médicos disseram que não havia jeito, mas Deus tinha a última palavra.',
      fullText: '...',
      imageUrl: '1027'
    },
    {
      id: '3',
      name: 'Família Oliveira',
      category: 'Restaurados',
      excerpt: 'Nosso casamento estava destruído. A igreja foi o suporte para nossa reconciliação.',
      fullText: '...',
      imageUrl: '1011'
    },
    {
      id: '4',
      name: 'Pedro Souza',
      category: 'Transformações',
      excerpt: 'Encontrei um propósito de vida servindo ao próximo nos projetos sociais.',
      fullText: '...',
      imageUrl: '1005'
    }
  ];

  const filtered = filter === 'Todos' ? testimonials : testimonials.filter(t => t.category === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset submitted state after the modal animation finishes (approx 300ms)
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">Testemunhos de Vida</h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Histórias reais de pessoas que foram impactadas pelo poder de Deus e pelo amor desta comunidade.
            </p>
            
            {/* Call to Action Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mb-10 inline-flex items-center gap-2 bg-navy-900 dark:bg-white text-white dark:text-navy-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageSquarePlus size={20} className="text-gold-500" />
              Falar meu testemunho
            </button>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                    filter === cat 
                      ? 'bg-gold-500 border-gold-500 text-white shadow-md' 
                      : 'bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 animate-slide-up">
           {filtered.map((item) => (
             <div key={item.id} className="bg-white dark:bg-navy-900 rounded-2xl p-8 border border-slate-100 dark:border-navy-800 shadow-lg hover:-translate-y-1 transition-all group relative">
                <div className="flex items-start justify-between mb-6">
                   <div className="flex items-center gap-4">
                      <img src={`https://picsum.photos/id/${item.imageUrl}/150/150`} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 shadow-sm" />
                      <div>
                        <h3 className="text-navy-900 dark:text-white font-bold text-lg">{item.name}</h3>
                        <span className="text-gold-600 text-xs uppercase tracking-wide bg-gold-50 dark:bg-navy-950 px-2 py-1 rounded font-bold">{item.category}</span>
                      </div>
                   </div>
                   <Quote className="text-slate-100 dark:text-navy-800 fill-slate-100 dark:fill-navy-800 group-hover:text-gold-100 dark:group-hover:text-gold-900/20 group-hover:fill-gold-100 dark:group-hover:fill-gold-900/20 transition-colors" size={64} />
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg italic leading-relaxed mb-6 relative z-10">"{item.excerpt}"</p>
                <button className="flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors">
                   <PlayCircle size={20} /> Assistir Vídeo Completo
                </button>
             </div>
           ))}
         </div>
       </div>

       {/* Modal - Share Testimony */}
       {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in">
           <div className="bg-white dark:bg-navy-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 dark:border-navy-800 relative animate-slide-up overflow-hidden">
             
             {/* Close Button */}
             <button 
               onClick={closeModal}
               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors z-10"
             >
               <X size={20} />
             </button>

             {!isSubmitted ? (
               <div className="p-8">
                 <h2 className="text-2xl font-serif font-bold text-navy-900 dark:text-white mb-2">Compartilhe sua história</h2>
                 <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm">Seu testemunho pode edificar a vida de muitas pessoas.</p>
                 
                 <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-navy-900 dark:text-white mb-1">Seu Nome</label>
                      <input required type="text" className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Digite seu nome completo" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-navy-900 dark:text-white mb-1">Categoria</label>
                      <select className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors">
                        {categories.filter(c => c !== 'Todos').map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                        <option value="Outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 dark:text-white mb-1">Seu Testemunho</label>
                      <textarea required rows={5} className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors resize-none" placeholder="Conte-nos o que Deus fez em sua vida..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-gold-500 text-navy-900 font-bold py-4 rounded-xl hover:bg-gold-400 transition-all shadow-lg flex items-center justify-center gap-2 mt-2">
                      <Send size={18} /> Enviar Testemunho
                    </button>
                 </form>
               </div>
             ) : (
               <div className="p-12 text-center animate-fade-in flex flex-col items-center justify-center min-h-[400px]">
                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6 animate-[pulse_2s_infinite]">
                   <CheckCircle size={40} />
                 </div>
                 <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Recebido com Sucesso!</h3>
                 <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                   Enviado para um dos nossos especialistas para analisar a aprovar seu testemunho para aparecer aqui na nossa pagina.
                 </p>
                 <button 
                   onClick={closeModal}
                   className="mt-8 px-8 py-3 bg-slate-100 dark:bg-navy-800 text-navy-900 dark:text-white font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors"
                 >
                   Fechar
                 </button>
               </div>
             )}
           </div>
         </div>
       )}

    </div>
  );
};

export default Testimonials;