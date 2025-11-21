import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Heart, HandHeart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300 animate-fade-in">
      
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 animate-slide-up">
          <span className="text-gold-500 font-bold tracking-wider text-sm uppercase mb-2 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">Estamos aqui por você</h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tem algum pedido de oração, dúvida ou quer agendar uma visita? 
            Entre em contato conosco através dos canais abaixo.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
        
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            
            {/* Geral */}
            <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-navy-800 hover:-translate-y-1 transition-all duration-300 group animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 bg-blue-50 dark:bg-navy-800 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                   <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Geral</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Envie um email para nossa equipe:</p>
                <a href="mailto:igrejaplenoemcristo@gmail.com" className="text-blue-600 font-bold hover:underline break-all text-sm sm:text-base">igrejaplenoemcristo@gmail.com</a>
            </div>

            {/* Secretaria */}
            <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-navy-800 hover:-translate-y-1 transition-all duration-300 group animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-green-50 dark:bg-navy-800 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                   <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Secretaria</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Entre em contato com nossa secretaria:</p>
                <a href="tel:+551126795714" className="text-navy-900 dark:text-white font-bold text-lg hover:text-gold-500 transition-colors">(11) 2679-5714</a>
            </div>

            {/* Doações - Destaque */}
            <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-navy-800 hover:-translate-y-1 transition-all duration-300 group animate-slide-up sm:col-span-2 relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 dark:bg-navy-800 rounded-bl-[4rem] -mr-6 -mt-6 opacity-50 pointer-events-none group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gold-100 dark:bg-navy-800 text-gold-600 rounded-xl flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors shadow-sm">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white">Doações</h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-md">Contato seguro para doações e ofertas? Faça diretamente clicando no botão abaixo:</p>
                    <Link to="/ofertar" className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-lg hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:scale-105">
                        Fazer doação <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Voluntário */}
            <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 dark:border-navy-800 hover:-translate-y-1 transition-all duration-300 group animate-slide-up sm:col-span-2" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 bg-purple-50 dark:bg-navy-800 text-purple-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
                        <HandHeart size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Voluntário</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Entre em contato e faça parte do nosso voluntáriado e aprenda:</p>
                        <a href="mailto:igrejaplenoemcristo@gmail.com" className="text-purple-600 font-bold hover:underline text-sm sm:text-base break-all">igrejaplenoemcristo@gmail.com</a>
                    </div>
                </div>
            </div>

        </div>

        {/* Form Side */}
        <div className="bg-white dark:bg-navy-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-navy-800 shadow-xl animate-fade-in transition-colors h-fit sticky top-24" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
            <MessageCircle className="text-gold-500"/> Envie uma Mensagem
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Nome</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Telefone</label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Assunto</label>
              <select className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors">
                <option>Pedido de Oração</option>
                <option>Informações sobre a Casa de Recuperação</option>
                <option>Secretaria</option>
                <option>Voluntariado</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Mensagem</label>
              <textarea rows={4} className="w-full bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 rounded-lg px-4 py-3 text-navy-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full bg-gold-500 text-white font-bold py-4 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20">
              <Send size={18} /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      {/* Fake Map */}
      <div className="w-full h-96 bg-slate-200 dark:bg-navy-800 relative">
         <div className="absolute inset-0 flex items-center justify-center bg-navy-900/10 dark:bg-black/40">
           <p className="bg-white dark:bg-navy-900 text-navy-900 dark:text-white px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-2 z-10 animate-bounce">
             <MapPin className="text-red-600" /> Igreja Pleno em Cristo
           </p>
         </div>
         {/* LOCAL IMAGE: Mapa */}
         <img src="/mapa-localizacao.jpg" alt="Map Location" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
      </div>
    </div>
  );
};

export default Contact;