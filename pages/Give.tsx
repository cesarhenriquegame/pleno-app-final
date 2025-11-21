import React, { useState, useEffect } from 'react';
import { Copy, CheckCircle, Heart, Smartphone, Building2, CreditCard, Hammer, Calendar, Clock, FileText, Share2, Play, ArrowDown } from 'lucide-react';

const Give: React.FC = () => {
  const pixKey = "11912277192";
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Simple scroll spy to trigger animations if we wanted to use IntersectionObserver, 
  // but for now we'll use simple CSS animations on mount for simplicity in this environment.
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const constructionItems = [
    { item: "Ferragens para o mezanino", cost: "R$ 254.000", desc: "Estrutura que ampliará o espaço interno da igreja" },
    { item: "Telhas e cobertura", cost: "R$ 106.000", desc: "Proteção, ventilação e conforto" },
    { item: "Forro", cost: "R$ 130.000", desc: "Isolamento térmico e acústico" },
    { item: "Piso de granito", cost: "R$ 30.000", desc: "Acabamento durável e bonito" },
    { item: "Drywall (R$ 50/unid)", cost: "R$ 30.000", desc: "Divisórias e acabamento interno" },
    { item: "Cabeamento e câmeras", cost: "R$ 25.000", desc: "Segurança para todos os frequentadores" },
    { item: "Sistema de som", cost: "R$ 30.000", desc: "Cultos e eventos com qualidade e clareza sonora" },
    { item: "Pias (12 unidades)", cost: "R$ 12.000", desc: "Banheiros prontos para receber todos com dignidade" },
    { item: "Portas de aço", cost: "R$ 13.000", desc: "Segurança e resistência" },
    { item: "Telão de vídeo", cost: "R$ 100.000", desc: "Transmissão nítida e de qualidade" },
  ];

  const receipts = [
    { label: "Boleto", value: "R$ 7.794,00" },
    { label: "Boleto", value: "R$ 16.704,02" },
    { label: "Boleto", value: "R$ 3.837,12" },
    { label: "Boleto", value: "R$ 3.440,00" },
    { label: "Boleto", value: "R$ 9.700,00" },
    { label: "Boleto", value: "R$ 3.640,00" },
  ];

  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy-900 overflow-hidden min-h-[80vh] flex items-center">
        {/* LOCAL IMAGE: Banner Doacao */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20 animate-[pulse-slow_10s_infinite]" style={{ backgroundImage: "url('/banner-doacao.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/30 to-navy-900 z-0"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 font-bold text-sm mb-6 uppercase tracking-widest">
              Campanha 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 drop-shadow-lg leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ajude a Construir o <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Novo Templo</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10 animate-slide-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            A Igreja do Evangelho Pleno em Cristo está em obras! Com sua ajuda, construiremos um marco
            para nossos 20 anos de história.
            <span className="block mt-4 font-bold text-gold-400 text-2xl animate-pulse">Temos até 20 de maio para terminar!</span>
          </p>
          
          <div className="animate-slide-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button 
              onClick={() => document.getElementById('doar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-full text-lg hover:from-gold-400 hover:to-gold-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2 mx-auto"
            >
              <Heart fill="currentColor" className="animate-bounce" /> DOE AGORA
            </button>
            <div className="mt-12 text-white/30 animate-bounce">
              <ArrowDown className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Videos / Connect Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-4">Conecte-se Com o Sonho</h2>
           <div className="h-1 w-24 bg-gold-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Atualização final", time: "01:07", img: "/video-thumb-1.jpg" },
            { title: "Você pode estender sua mão?", time: "01:32", img: "/video-thumb-2.jpg" },
            { title: "Atualização da Obra", time: "01:00", img: "/video-thumb-3.jpg" }
          ].map((vid, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] animate-slide-up opacity-0 fill-mode-forwards"
              style={{ animationDelay: `${0.2 + (idx * 0.15)}s`, animationFillMode: 'forwards' }}
            >
              {/* LOCAL IMAGE: Video Thumbs */}
              <img src={vid.img} alt={vid.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12">
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-gold-400 transition-colors">{vid.title}</h3>
                <span className="text-gold-500 text-sm font-mono bg-black/50 px-2 py-1 rounded">{vid.time}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-600 dark:text-slate-300 mt-12 max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Você pode ver com seus próprios olhos onde sua ajuda está sendo investida. Acompanhe o andamento e os próximos passos da construção.
        </p>
      </section>

      {/* Why Donate Section */}
      <section className="bg-white dark:bg-navy-900 py-24 px-4 transition-colors border-y border-slate-100 dark:border-navy-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-20 text-center max-w-3xl mx-auto animate-slide-up">
            Por Que Sua Doação É Tão Importante?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <CreditCard size={32} />, title: "Economia Real", text: <>Hoje pagamos <strong className="text-navy-900 dark:text-white">R$ 70 mil de aluguel</strong> em um espaço que já não comporta o crescimento da nossa comunidade.</> },
              { icon: <Building2 size={32} />, title: "Fase Final", text: <>Estamos em <strong className="text-navy-900 dark:text-white">fase final da construção</strong> do novo templo, um local que acolherá membros, visitantes e ações sociais.</> },
              { icon: <Heart size={32} />, title: "Legado Eterno", text: <>Cada doação é um tijolo na construção de algo eterno. Você está construindo mais que um prédio, está edificando <strong className="text-navy-900 dark:text-white">vidas e um legado de fé</strong>.</> }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-navy-800 p-8 rounded-3xl border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up opacity-0 fill-mode-forwards"
                style={{ animationDelay: `${0.2 + (idx * 0.15)}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 bg-gold-100 dark:bg-navy-950 text-gold-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4 font-serif">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Table Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-4">Sua doação constrói essa visão</h2>
          <p className="text-slate-600 dark:text-slate-400">Transparência é compromisso. Aqui está para onde sua contribuição será destinada:</p>
        </div>
        
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 shadow-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <table className="w-full text-left border-collapse bg-white dark:bg-navy-900">
            <thead>
              <tr className="bg-navy-50 dark:bg-navy-950 border-b border-slate-200 dark:border-navy-700">
                <th className="p-5 text-navy-900 dark:text-white font-bold uppercase text-sm tracking-wider">Item</th>
                <th className="p-5 text-navy-900 dark:text-white font-bold uppercase text-sm tracking-wider">Custo Estimado</th>
                <th className="p-5 text-navy-900 dark:text-white font-bold uppercase text-sm tracking-wider hidden md:table-cell">Impacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-navy-800 text-slate-600 dark:text-slate-300">
              {constructionItems.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors group">
                  <td className="p-5 font-medium group-hover:text-navy-900 dark:group-hover:text-white transition-colors">{row.item}</td>
                  <td className="p-5 font-bold text-navy-900 dark:text-white">{row.cost}</td>
                  <td className="p-5 hidden md:table-cell text-sm opacity-80 group-hover:opacity-100 transition-opacity">{row.desc}</td>
                </tr>
              ))}
              <tr className="bg-gold-50 dark:bg-navy-950 font-bold text-navy-900 dark:text-white">
                <td className="p-6 text-xl">Total:</td>
                <td className="p-6 text-xl text-gold-600">R$ 730.000</td>
                <td className="p-6 hidden md:table-cell text-gold-600 uppercase text-sm tracking-wider">Custo da finalização da obra</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 animate-slide-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <p className="text-center font-medium text-navy-900 dark:text-white bg-gold-100/50 dark:bg-navy-800 p-6 rounded-xl border border-gold-200 dark:border-navy-700">
            💡 <span className="font-bold">Exemplo:</span> Cada R$ 50 ajuda com uma placa de drywall. Cada R$ 200 compra uma lata de tinta. Cada contribuição é parte real dessa obra.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-navy-950 py-24 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 animate-slide-up">O Tempo É Curto!</h2>
          <p className="text-center text-gold-400 mb-16 font-mono animate-fade-in">CRONOGRAMA DE FINALIZAÇÃO</p>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative mt-16 gap-8 md:gap-0">
            {/* Line background for desktop */}
            <div className="hidden md:block absolute top-[26px] left-0 w-full h-1 bg-gradient-to-r from-gold-500/20 via-gold-500 to-gold-500/20 -z-0 rounded-full"></div>
            
            {[
              { date: "Hoje", label: "Fase Final", desc: "Construção a todo vapor", active: true },
              { date: "Próximos Dias", label: "Custos", desc: "Pintura e Acabamentos", active: false },
              { date: "03/05", label: "Inauguração", desc: "Novo Templo", active: false },
              { date: "Maio", label: "Fase 1", desc: "Som e Luz", active: false },
              { date: "Maio", label: "Fase 2", desc: "Telão LED", active: false },
              { date: "Maio", label: "Fase 3", desc: "Salas Infantis", active: false },
              { date: "20/05", label: "Entrega", desc: "Glória a Deus!", active: false },
            ].map((step, i) => (
              <div 
                key={i} 
                className="relative z-10 flex md:flex-col items-center text-left md:text-center w-full md:w-32 gap-4 md:gap-0 animate-slide-up opacity-0 fill-mode-forwards group"
                style={{ animationDelay: `${0.2 + (i * 0.1)}s`, animationFillMode: 'forwards' }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl md:mb-4 border-4 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  ${i === 0 ? 'bg-gold-500 border-gold-500 text-navy-900 scale-110' : 'bg-navy-900 border-navy-800 group-hover:border-gold-500/50 text-gray-400 group-hover:text-white'}`}>
                  {i === 0 ? <Calendar size={24} className="animate-pulse" /> : i + 1}
                </div>
                <div>
                   <h3 className="font-bold text-gold-400 text-xs uppercase tracking-wider mb-1">{step.date}</h3>
                   <p className="font-bold text-white text-sm mb-1">{step.label}</p>
                   <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="inline-block bg-navy-900 border border-gold-500/30 p-6 rounded-2xl">
               <p className="text-xl text-gray-300">
                 <span className="text-gold-500 font-bold text-2xl block md:inline mb-2 md:mb-0">Meta: R$ 730.000 até 20/05. </span> 
                 Sua contribuição <strong className="text-white border-b-2 border-gold-500">faz toda a diferença.</strong>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Goal & Methods */}
      <section id="doar" className="py-24 px-4 max-w-6xl mx-auto">
        
        {/* Progress Bar */}
        <div className="bg-white dark:bg-navy-900 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-navy-800 mb-24 transform transition-all hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.15)] animate-slide-up">
          <h2 className="text-3xl font-serif font-bold text-navy-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="bg-gold-100 dark:bg-navy-800 p-2 rounded-lg text-gold-600"><Hammer size={24}/></span>
            Meta de Arrecadação
          </h2>
          <div className="relative h-10 bg-slate-100 dark:bg-navy-950 rounded-full overflow-visible mb-6 shadow-inner">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 w-[5.73%] rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-[pulse-slow_3s_infinite]">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
             </div>
             <div 
               className="absolute -top-14 z-10 transform -translate-x-1/2 transition-all duration-1000"
               style={{ left: '5.73%' }}
             >
                <div className="bg-navy-900 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-xl flex flex-col items-center animate-bounce">
                  5,73%
                  <div className="w-3 h-3 bg-navy-900 rotate-45 -mb-6 mt-1"></div>
                </div>
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-slate-100 dark:border-navy-800 pt-6 mt-6">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-1">
                R$ 35.000
              </p>
              <p className="text-lg text-slate-500 font-medium">arrecadados de <span className="text-navy-900 dark:text-white font-bold">R$ 610.000</span></p>
            </div>
            <span className="text-sm font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full mt-4 md:mt-0 flex items-center gap-1">
              <Clock size={14} /> Atualizado em tempo real
            </span>
          </div>
        </div>

        {/* Donation Methods */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white mb-6">Como Doar?</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">Escolha a forma mais fácil e rápida para abençoar esta obra.</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in">
          <div className="bg-gradient-to-b from-white to-slate-50 dark:from-navy-900 dark:to-navy-950 p-8 md:p-16 rounded-[3rem] shadow-2xl border-4 border-gold-500 max-w-3xl w-full text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600"></div>
             
             <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-4 text-sm">Chave PIX (Celular)</p>
             <div 
               onClick={copyToClipboard}
               className="bg-white dark:bg-navy-900 rounded-2xl p-6 md:p-8 mb-10 cursor-pointer hover:bg-gold-50 dark:hover:bg-navy-800 transition-all border-2 border-slate-200 dark:border-navy-700 hover:border-gold-500 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 group/pix shadow-sm hover:shadow-lg"
             >
                <Smartphone className="w-8 h-8 text-gold-500 hidden md:block" />
                <span className="text-3xl md:text-5xl font-mono font-bold text-navy-900 dark:text-white tracking-tight select-all">{pixKey}</span>
                <div className={`p-3 rounded-full transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gold-100 dark:bg-navy-800 text-gold-600 group-hover/pix:bg-gold-500 group-hover/pix:text-white'}`}>
                   {copied ? <CheckCircle size={24} /> : <Copy size={24} />}
                </div>
             </div>
             
             <div className="mb-10 relative inline-block">
               <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-gold-300 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
               <img 
                 src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${pixKey}`} 
                 alt="QR Code" 
                 className="w-56 h-56 mx-auto border-8 border-white dark:border-navy-800 rounded-xl shadow-2xl relative z-10"
               />
             </div>
             <p className="text-slate-500 dark:text-slate-400 font-medium">Abra o app do seu banco e escaneie o QR Code</p>
          </div>

          {/* Value Equivalence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-16">
             {[
               { val: "R$50", label: "1 placa de drywall", icon: <Hammer size={24}/> },
               { val: "R$200", label: "1 lata de tinta", icon: <Building2 size={24}/> },
               { val: "R$500", label: "parte do forro ou som", icon: <Clock size={24}/> },
               { val: "R$1.000", label: "1 pia completa", icon: <Heart size={24}/> },
             ].map((card, i) => (
               <button 
                  key={i} 
                  onClick={copyToClipboard}
                  className="bg-white dark:bg-navy-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-navy-800 hover:-translate-y-2 hover:border-gold-500 transition-all text-center group relative overflow-hidden animate-slide-up opacity-0 fill-mode-forwards"
                  style={{ animationDelay: `${0.5 + (i * 0.1)}s`, animationFillMode: 'forwards' }}
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/10 transition-colors"></div>
                 <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-navy-950 rounded-2xl flex items-center justify-center text-navy-900 dark:text-white mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-inner">
                    {card.icon}
                 </div>
                 <div className="text-4xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{card.val}</div>
                 <div className="text-slate-500 dark:text-slate-400 font-medium">{card.label}</div>
               </button>
             ))}
          </div>
          
          <div className="mt-16 animate-bounce">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white px-10 py-5 rounded-full inline-flex items-center gap-4 shadow-2xl border border-navy-700">
               <div className="bg-gold-500 text-navy-900 p-2 rounded-full font-bold text-xl">R$</div>
               <div className="text-left">
                  <h3 className="text-xl font-bold">Qualquer Valor</h3>
                  <p className="text-gold-400 text-sm">É um avanço real para a obra!</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-slate-100 dark:bg-navy-950 py-24 px-4 transition-colors">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-serif font-bold text-navy-900 dark:text-white mb-4 inline-flex items-center gap-3">
                <FileText className="text-gold-500" size={32} /> Transparência Financeira
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Nosso compromisso é com a verdade. Todos os comprovantes e boletos estão disponíveis para conferência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {receipts.map((rec, i) => (
                <div key={i} className="flex items-center justify-between bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border-l-4 border-gold-500 hover:shadow-md transition-all">
                  <span className="font-medium text-slate-500 uppercase text-xs tracking-wider flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> {rec.label}
                  </span>
                  <span className="font-bold text-xl text-navy-900 dark:text-white font-mono">{rec.value}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Share Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-16 animate-slide-up">Agradecimento e Compartilhamento</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gold-50 dark:bg-navy-800 p-10 rounded-[2rem] border border-gold-100 dark:border-navy-700 relative overflow-hidden group hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <div className="absolute top-0 right-0 w-20 h-20 bg-gold-200 dark:bg-navy-700 rounded-bl-[2rem] -mr-4 -mt-4 z-0 group-hover:scale-110 transition-transform"></div>
               <div className="relative z-10">
                 <h3 className="font-bold text-2xl text-navy-900 dark:text-white mb-4">Certificado Digital</h3>
                 <p className="text-slate-700 dark:text-slate-300 mb-8 italic leading-relaxed">"Eu ajudei a construir o novo templo e espalhar o evangelho!"</p>
                 <button className="bg-navy-900 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-navy-800 transition-all hover:shadow-lg w-full flex items-center justify-center gap-2">
                   <FileText size={18} /> BAIXAR CERTIFICADO
                 </button>
               </div>
            </div>
            <div className="bg-white dark:bg-navy-800 p-10 rounded-[2rem] border border-slate-100 dark:border-navy-700 shadow-lg hover:shadow-xl transition-all animate-slide-up" style={{ animationDelay: '0.4s' }}>
               <h3 className="font-bold text-2xl text-navy-900 dark:text-white mb-4 flex items-center gap-3">
                 <div className="p-2 bg-gold-100 dark:bg-navy-900 rounded-lg text-gold-600"><Share2 size={20} /></div> 
                 Compartilhe
               </h3>
               <p className="text-slate-600 dark:text-slate-300 mb-6">Inspire outros a participarem desta obra. Use as hashtags:</p>
               <div className="flex flex-wrap gap-3 mb-8">
                 <span className="bg-slate-100 dark:bg-navy-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white font-bold text-sm">#TemploPleno</span>
                 <span className="bg-slate-100 dark:bg-navy-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white font-bold text-sm">#DoeiPorFé</span>
               </div>
               <div className="flex gap-4">
                  <button className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Facebook</button>
                  <button className="flex-1 py-3 rounded-lg bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors">WhatsApp</button>
               </div>
            </div>
         </div>
      </section>
      
    </div>
  );
};

export default Give;