import React from 'react';
import { CheckCircle, Heart, BookOpen, HandHeart, MapPin, Car, Users, Radio, Star, Video, Church, ArrowDown } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 py-20 px-4 border-b border-slate-200 dark:border-navy-800 transition-colors">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy-900 dark:text-white mb-6">Nossa História</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Conheça a origem da Igreja Pleno em Cristo e o propósito que nos move.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                    Fundador da <br/> <span className="text-gold-500">IEPC</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    Deus sussurrou um sonho no coração de um homem: propagar Sua palavra por toda a terra.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    Assim, em 20 de junho de 2004, com meros R$300, um pacote de pregos usados e uma vocação para liderança, a Igreja do Evangelho Pleno em Cristo teve seu início.
                </p>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-navy-800 hover:rotate-0 transition-transform duration-500 w-full max-w-sm aspect-[4/5]">
                    <img 
                        src="/lider-rodrigo.jpg" 
                        alt="Fundador Rodrigo Salgado" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-4 order-3">
                <div className="bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-100 dark:border-navy-800 shadow-lg relative">
                    <span className="text-6xl text-gold-500 font-serif absolute -top-6 left-6">“</span>
                    <p className="text-slate-600 dark:text-slate-300 text-lg italic leading-relaxed pt-4 mb-6">
                        Me lembro da minha conversão, logo no início sentia que tinha encontrado meu chamado, em pouco tempo me tornei pastor.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-gold-500"></div>
                        <span className="font-bold text-navy-900 dark:text-white">Ap. Rodrigo Salgado</span>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Value Cards Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { 
                    icon: <BookOpen size={32}/>, 
                    title: "Pregação da Palavra", 
                    desc: "Sempre uma palavra de Deus para o seu coração com base Bíblica" 
                },
                { 
                    icon: <HandHeart size={32}/>, 
                    title: "Caridade", 
                    desc: "Uma igreja com apenas um propósito, ajudar as almas necessitadas" 
                },
                { 
                    icon: <MapPin size={32}/>, 
                    title: "Perto de você", 
                    desc: "Visite uma de nossas congregações que está perto de você" 
                },
                { 
                    icon: <Car size={32}/>, 
                    title: "Comodidade", 
                    desc: "Sempre buscamos um local para facilitar a sua vinda com carro ou moto" 
                }
            ].map((card, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-navy-900 p-8 rounded-2xl border border-slate-200 dark:border-navy-800 hover:border-gold-500 transition-colors group hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md">
                    <div className="text-navy-900 dark:text-white mb-6 group-hover:text-gold-500 transition-colors">
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{card.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>
      </section>

      {/* Recovery House Highlight */}
      <section className="py-24 bg-slate-100 dark:bg-navy-900 relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white dark:bg-navy-800 skew-x-12 pointer-events-none transition-colors"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full mb-6 border border-gold-200">
                <Heart size={16} fill="currentColor" />
                <span className="font-bold text-sm uppercase">Projeto Social</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                Pleno em Cristo <br/> <span className="text-gold-500">Casa de Recuperação</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                Um lugar de refúgio e tratamento para aqueles que buscam libertação e um novo começo. Oferecemos suporte espiritual, psicológico e profissionalizante.
              </p>
              <ul className="space-y-4 mb-8">
                {['Acomodação para 50 residentes', 'Acompanhamento Psicológico', 'Oficinas Profissionalizantes', 'Reinserção Social'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                    <CheckCircle size={20} className="text-gold-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-gold-500 text-white font-bold rounded-lg hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20">
                Quero Ajudar / Doar
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white dark:border-navy-800 shadow-2xl transition-colors">
                {/* LOCAL IMAGE: Casa de Recuperacao */}
                <img 
                  src="/casa-recuperacao.jpg" 
                  alt="Casa de Recuperação" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy-900 p-6 rounded-xl border border-white/10 shadow-xl max-w-xs text-white">
                <div className="text-4xl font-bold text-gold-500 mb-1">500+</div>
                <div className="text-sm text-gray-300">Vidas transformadas e famílias restauradas através deste projeto.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline History Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
             O Início da Nossa História
           </h2>
           <div className="max-w-3xl mx-auto bg-white dark:bg-navy-900 p-8 rounded-2xl border-l-4 border-gold-500 shadow-md">
             <p className="text-lg italic text-slate-600 dark:text-slate-300 font-serif">
               "No entanto, está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São estes os adoradores que o Pai procura."
             </p>
             <p className="text-gold-600 font-bold mt-4 text-right">— João 4:23</p>
           </div>
        </div>

        <div className="relative border-l-4 border-gold-200 dark:border-navy-800 ml-6 md:ml-12 space-y-12 md:space-y-16">
          
          {/* Item 1: O Início */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 flex items-center gap-3">
                2004: O Sonho e o "Forninho"
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 Em um dia marcado pela inspiração divina, Deus sussurrou um sonho no coração de um homem. Assim, em 20 de junho de 2004, com meros R$300, um pacote de pregos usados e uma vocação para liderança, a Igreja do Evangelho Pleno em Cristo teve seu início.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                 Um pequeno salão na Av. Santa Mônica, apelidado carinhosamente de <strong>FORNINHO</strong>, devido ao seu espaço modesto e à multidão fervorosa nos cultos, tornou-se o berço desta jornada extraordinária.
               </p>
             </div>
          </div>

          {/* Item 2: Crescimento */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                Expansão e Primeiros Frutos
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 Permanecendo por apenas seis meses na Av. Santa Mônica, a igreja sentiu a necessidade de um novo lar. Transferindo seus cultos para a Av. Mutinga, testemunhou um crescimento exponencial.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                 <Users className="shrink-0 text-gold-500 mt-1" size={18}/>
                 <span>Sete almas, tocadas pelo Espírito de Deus, entregaram-se a Jesus, marcando o primeiro batismo nas águas, cumprindo a promessa de Mateus 28:19.</span>
               </p>
             </div>
          </div>

          {/* Item 3: Primeiro Ponto de Pregação */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                Primeiros Pontos de Pregação
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 No seu primeiro aniversário, inauguramos o primeiro ponto de pregação no Jaraguá. Em um ano, mais dois pontos (Monte Alegre e Nova Esperança) foram estabelecidos.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex items-center gap-2">
                  <Car className="text-gold-500" size={18}/>
                  <span>A igreja adquiriu sua primeira <strong>Kombi azul</strong>, usada pelo Pastor Rodrigo Salgado para buscar os fiéis em suas casas.</span>
               </p>
             </div>
          </div>

           {/* Item 4: Rádio e Valente de Deus */}
           <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                2005-2007: A Voz no Rádio
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 Em um ato de fé, iniciou-se a primeira programação radiofônica em uma rádio comunitária. Em 2007, novos compromissos impulsionaram o crescimento.
               </p>
               <div className="bg-gold-50 dark:bg-navy-950 p-4 rounded-lg border border-gold-100 dark:border-navy-800">
                 <h4 className="font-bold text-navy-900 dark:text-white mb-2 flex items-center gap-2">
                    <Star size={18} className="text-gold-500"/> Projeto Valente de Deus
                 </h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Inspirado por Deus, nasceu o projeto destinado a patrocinar a obra. Com 37 carnês e contribuições de R$100, tornou-se uma bênção fundamental.
                 </p>
               </div>
             </div>
          </div>

          {/* Item 5: 2009 Sede Própria */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                2009: Sede Própria e Reconhecimento
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 Com cinco anos de ministério, a Pleno em Cristo conquistou sua sede própria na Rua Joaquim de Oliveira Freitas.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                 Nesse mesmo ano, Pastor Rodrigo Salgado foi reconhecido como <strong>Apóstolo</strong>. Os cultos começaram a ser filmados e o "Valente de Deus" expandiu-se para 36 igrejas.
               </p>
             </div>
          </div>

          {/* Item 6: 2014-2015 Pleno FM */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                2014-2015: Grandes Conquistas de Mídia
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <ul className="space-y-3">
                 <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                   <Radio className="text-gold-500 shrink-0 mt-1" size={18}/>
                   <span>Criação da Pleno FM.</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                   <Video className="text-gold-500 shrink-0 mt-1" size={18}/>
                   <span>5 horas de programação na rádio Musical FM e programas de TV.</span>
                 </li>
                 <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                   <Church className="text-gold-500 shrink-0 mt-1" size={18}/>
                   <span>A igreja já contava com 60 igrejas filiadas.</span>
                 </li>
               </ul>
             </div>
          </div>

          {/* Item 7: 2016 Jubileu */}
          <div className="relative pl-8 md:pl-12">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                2016: O Templo do Avivamento
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                 No Jubileu da Restituição, concretizou-se a promessa divina: o Templo do Avivamento no coração de São Paulo. Nasceu a <strong>Nação Pleno em Cristo</strong>.
               </p>
             </div>
          </div>

          {/* Item 8: Hoje */}
          <div className="relative pl-8 md:pl-12 pb-8">
             <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-md"></div>
             <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                Hoje: Uma Nação Unida
             </h3>
             <div className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-800">
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                 Com sede nacional na Av. Mutinga 1515, somos uma nação unida. A jornada continua, adorando o Senhor Jesus e compartilhando Sua salvação com todos.
               </p>
               <div className="flex items-center gap-2 text-gold-600 font-bold">
                 <MapPin size={20}/>
                 <span>Av. Mutinga 1515, São Paulo</span>
               </div>
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;