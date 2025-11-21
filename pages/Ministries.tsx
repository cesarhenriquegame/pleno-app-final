import React, { useState } from 'react';
import { Users, Heart, HandHeart, ChevronRight, Info, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Ministry {
  id: string;
  title: string;
  desc: string;
  details: string;
}

const ministries: Ministry[] = [
  { 
    id: '01', 
    title: 'IEPC Infantil', 
    desc: 'Ministério construído para trazer tranquilidade aos pais que desejam vir ao culto. Você e seu filho escutam a palavra de Deus de formas diferentes, trazendo tranquilidade para você assistir nossas reuniões.',
    details: 'O IEPC Infantil é um ambiente seguro e acolhedor, dividido por faixas etárias, onde as crianças aprendem princípios bíblicos através de linguagem lúdica, teatro, música e atividades interativas. Contamos com monitores treinados e um sistema de check-in/check-out rigoroso para garantir a segurança dos pequenos enquanto os pais cultuam.'
  },
  { 
    id: '02', 
    title: 'Mulheres em Cristo', 
    desc: 'Este ministério é dedicado ao fortalecimento espiritual, apoio mútuo e crescimento das mulheres da igreja. Ele oferece estudos bíblicos específicos para as necessidades femininas, eventos de comunhão, retiros e oportunidades de serviço.',
    details: 'O Mulheres em Cristo promove encontros mensais, chás de comunhão e o grande Congresso de Mulheres anual. Nosso foco é trabalhar a identidade da mulher em Deus, cura emocional, sabedoria no lar e protagonismo na obra social, criando uma rede de apoio onde nenhuma mulher caminha sozinha.'
  },
  { 
    id: '03', 
    title: 'Louvor IEPC', 
    desc: 'O Ministério de Louvor é responsável por conduzir a congregação na adoração através da música. Seu objetivo é criar um ambiente propício para que as pessoas se conectem com Deus por meio de cânticos e louvores.',
    details: 'Composto por instrumentistas e vocalistas dedicados, o Louvor IEPC não busca apenas técnica, mas unção. Realizamos ensaios semanais, devocionais em grupo e workshops técnicos. O repertório abrange desde hinos tradicionais até a adoração contemporânea, sempre com foco cristocêntrico.'
  },
  { 
    id: '04', 
    title: 'Projeto IDE', 
    desc: 'A equipe desse ministério realiza evangelização mensal com moradores de rua e dependentes químicos. É uma oportunidade de compartilhar o amor de Cristo e oferecer ajuda prática.',
    details: 'O Projeto IDE vai às ruas nas noites frias e fins de semana levando sopão, cobertores, kits de higiene e, principalmente, a palavra de esperança. Trabalhamos em parceria com a Casa de Recuperação para encaminhar aqueles que desejam sair da situação de rua e dependência.'
  },
  { 
    id: '05', 
    title: 'Pleno em Forma', 
    desc: 'O Ministério Pleno em Forma promove a saúde física e emocional dos membros, incentivando práticas saudáveis e bem-estar.',
    details: 'Acreditamos que nosso corpo é templo do Espírito Santo. O Pleno em Forma organiza caminhadas matinais, grupos de corrida e palestras com nutricionistas e psicólogos, incentivando a igreja a cuidar da saúde integral para servir a Deus com mais vigor.'
  },
  { 
    id: '06', 
    title: 'Kadesh', 
    desc: 'O Ministério de Dança na igreja tem três propósitos principais: adoração, ministração e evangelização. Quando realizado com alma, oração e para louvar a Deus, ele cativa muitas pessoas.',
    details: 'Kadesh significa "Santo". Nosso grupo de dança e coreografia utiliza a expressão corporal como forma de adoração profética. Participamos das aberturas de cultos, eventos especiais e evangelismos criativos, sempre com vestimentas que honram a santidade do altar.'
  },
  { 
    id: '07', 
    title: 'Hebreus 11', 
    desc: 'A Livraria Hebreus 11 oferece uma variedade de livros cristãos, Bíblias, materiais de estudo e literatura edificante. É um recurso valioso para o crescimento espiritual.',
    details: 'Mais do que uma loja, a Hebreus 11 é um centro de recursos. Oferecemos curadoria dos melhores autores cristãos, Bíblias de estudo variadas e material para EBD. Todo o lucro é revertido para as obras sociais da igreja.'
  },
  { 
    id: '08', 
    title: 'Coral IEPC', 
    desc: 'O Ministério do Coral IEPC é responsável por conduzir a adoração por meio da música coral. Ele enriquece os cultos com harmonias e louvores.',
    details: 'Mantendo a rica tradição da música sacra e pentecostal, o Coral IEPC reúne vozes de todas as idades. É um espaço de comunhão e disciplina musical, apresentando-se principalmente em cultos de Santa Ceia e festividades magnas da igreja.'
  },
  { 
    id: '09', 
    title: 'Recomeçar', 
    desc: 'O Projeto Recomeçar é uma iniciativa que visa promover apoio e proteção à população em situação de rua. A Casa de Acolhida Recomeçar oferece acolhimento humanizado e temporário.',
    details: 'O Recomeçar atua na triagem e acolhimento imediato. Diferente do IDE que vai às ruas, o Recomeçar recebe na igreja, oferecendo banho, corte de cabelo, roupas limpas e auxílio para retirada de documentos, sendo a ponte para a reintegração social.'
  },
  { 
    id: '10', 
    title: 'Casa de Paz', 
    desc: 'Os cultos nos lares, também conhecidos como Casa de Paz, proporcionam um ambiente mais intimista para estudo da Bíblia, oração e comunhão entre os membros.',
    details: 'As Casas de Paz são a igreja acontecendo nos lares. São reuniões breves e objetivas, focadas em vizinhos e amigos não crentes, onde oramos por milagres e estudamos a palavra de forma simples. É a principal porta de entrada para novos membros.'
  },
  { 
    id: '11', 
    title: 'Curando com Sorriso', 
    desc: 'Esse projeto envolve visitas e assistência a orfanatos. Proporciona amor, cuidado e esperança às crianças que precisam.',
    details: 'Nossa equipe de voluntários se veste de alegria para visitar lares de adoção e hospitais infantis. Levamos teatro de fantoches, música, presentes e o amor de Jesus, transformando ambientes tristes em lugares de esperança e riso.'
  },
  { 
    id: '12', 
    title: 'Batismo', 
    desc: 'O Ministério Tudo Novo é responsável pelo batismo oficial da igreja, preparando os novos convertidos para esta decisão pública de fé.',
    details: 'Cuidamos de todo o processo batismal: desde a aula pré-batismo (o curso "Tudo Novo"), a confecção dos certificados, a preparação das batinas até a cerimônia nas águas. Acompanhamos o novo decidido para garantir que ele entenda o significado de morrer para o mundo e viver para Cristo.'
  },
  { 
    id: '13', 
    title: 'Aviva Adolescentes', 
    desc: 'Esse ministério é voltado para os adolescentes da igreja, promovendo comunhão, crescimento espiritual e atividades específicas para essa faixa etária.',
    details: 'O Aviva Teens foca na transição da infância para a juventude. Abordamos temas como identidade, pressão social, santidade e propósito em uma linguagem dinâmica. Temos cultos mensais ("The Hype"), acampamentos e discipulado em pequenos grupos.'
  },
  { 
    id: '14', 
    title: 'Bazar', 
    desc: 'O Bazar é um espaço onde a comunidade pode comprar e vender itens diversos. Os recursos arrecadados são destinados a projetos sociais ou necessidades da igreja.',
    details: 'Recebemos doações de roupas, móveis e eletrodomésticos em bom estado. O Bazar Beneficente abre quinzenalmente com preços simbólicos, permitindo que famílias de baixa renda adquiram bens com dignidade e gerando recursos para a manutenção da Casa de Recuperação.'
  },
  { 
    id: '15', 
    title: 'Projeto Ágape', 
    desc: 'O Projeto Ágape cuida de adolescentes na Fundação Casa, oferecendo apoio emocional, espiritual e prático. É uma oportunidade de impactar vidas em situações desafiadoras.',
    details: 'Uma equipe madura e treinada visita unidades socioeducativas para levar a palavra de transformação. Através de cartas, visitas e cultos permitidos, mostramos a esses jovens que não é o fim da linha e que existe um futuro em Deus após o cumprimento da medida.'
  },
  { 
    id: '16', 
    title: 'Torre de Oração', 
    desc: 'O Ministério Torre de Oração é um serviço de SOS oração via telefone. As pessoas ligam para pedir orações específicas, e a equipe intercede por elas.',
    details: 'Funcionando 24h em turnos, a Torre de Oração mantém a chama acesa. Além de atender telefonemas de emergência espiritual, esta equipe é responsável por cobrir espiritualmente todos os cultos e eventos da igreja através de jejum e clamor.'
  },
  { 
    id: '17', 
    title: 'Comunicação', 
    desc: 'O Ministério de Comunicação abrange sonoplastia, filmagem, mídia e design. Ele garante que a mensagem da igreja seja comunicada de forma eficaz e relevante.',
    details: 'A equipe de Mídia cuida da transmissão ao vivo, gestão das redes sociais, design gráfico, fotografia e operação de som/luz. É um ministério técnico que exige excelência para levar o evangelho através das lentes e telas para o mundo todo.'
  },
  { 
    id: '18', 
    title: 'Cantina Maná', 
    desc: 'A Cantina Maná é um lugar onde os membros da igreja podem desfrutar de refeições e lanches após os cultos ou eventos. É um ambiente de comunhão e confraternização.',
    details: 'Mais que alimentação, a Cantina Maná promove a "koinonia" (comunhão). Todo o lucro obtido com a venda de salgados, doces e refrigerantes é reinvestido em melhorias para o templo ou fundo missionário. É o ponto de encontro pós-culto da família IEPC.'
  },
  { 
    id: '19', 
    title: 'Sentinela', 
    desc: 'O Ministério Sentinela é responsável pela segurança durante os cultos e eventos. Ele zela pelo bem-estar dos membros e visitantes.',
    details: 'Os Sentinelas são os guardiões do templo. Eles organizam o estacionamento, monitoram a entrada e saída, auxiliam em emergências médicas básicas e garantem que o culto ocorra sem interrupções ou riscos externos, permitindo que a igreja adore em paz.'
  },
  { 
    id: '20', 
    title: 'Intercessão', 
    desc: 'O Ministério de Intercessão é dedicado à oração contínua e intercessão pelos membros da igreja, líderes, necessidades específicas e situações urgentes.',
    details: 'O "Quarto de Guerra" da igreja. Os intercessores recebem listas de pedidos confidenciais e se reúnem antes de cada culto para orar pela atmosfera espiritual, pelos preletores e pelas vidas que serão alcançadas.'
  },
  { 
    id: '21', 
    title: 'Evangelismo', 
    desc: 'Esse ministério se dedica à distribuição semanal de panfletos e orações, alcançando a comunidade local com a mensagem do evangelho.',
    details: 'O grupo "Ide e Pregai" atua em praças, semáforos e terminais de ônibus. Utilizamos estratégias como evangelismo criativo, entrega de folhetos e "tendas de oração" para abordar passantes e convidá-los a conhecer o amor de Cristo.'
  },
  { 
    id: '22', 
    title: 'Homens de Honra', 
    desc: 'O Ministério Homens de Honra tem como propósito estabelecer um ambiente de homens determinados, com o caráter forjado por JESUS, cheios do Espírito Santo.',
    details: 'Focado no discipulado masculino, o Homens de Honra realiza cafés da manhã mensais e conferências anuais. Abordamos temas como paternidade, liderança no lar, integridade nos negócios e pureza sexual, forjando o caráter de Cristo nos homens.'
  },
  { 
    id: '23', 
    title: 'Plug', 
    desc: 'O Projeto Plug visa atender às necessidades de visitantes e membros, conectando-os à igreja. Isso pode incluir acompanhamento, integração e suporte.',
    details: 'O PLUG (Conexão) é a nossa equipe de boas-vindas e integração. Eles recebem o visitante na porta, entregam o cartão de boas-vindas, e fazem o "follow-up" (contato pós-culto) para garantir que o visitante se sinta amado e saiba como se tornar membro.'
  },
  { 
    id: '24', 
    title: 'Eventos', 
    desc: 'O Ministério de Eventos é responsável pela preparação e organização de congressos, conferências e outros eventos da igreja. Ele visa edificar e fortalecer a comunidade.',
    details: 'A equipe de Produção de Eventos cuida da logística, decoração e cronograma de grandes celebrações como a Virada de Ano, Aniversário da Igreja e Congressos. Eles trabalham nos bastidores para criar experiências memoráveis e organizadas.'
  },
  { 
    id: '25', 
    title: 'Assistência Social', 
    desc: 'O Ministério de Assistência Social visa atender às necessidades práticas e emocionais dos membros da igreja e da comunidade (alimentos, visitas, apoio financeiro).',
    details: 'Gerenciamos o "Celeiro", nosso banco de alimentos. As famílias cadastradas recebem cestas básicas mensais. Além disso, oferecemos bazar de roupas e encaminhamento para assistência jurídica e médica gratuita através de parceiros da igreja.'
  },
  { 
    id: '26', 
    title: 'Mãos que falam', 
    desc: 'O Ministério Mãos que Falam é dedicado à interpretação em linguagem de sinais durante os cultos. Ele visa incluir e servir a comunidade surda.',
    details: 'Nosso ministério de Libras garante a acessibilidade total. Além de interpretar os cultos ao vivo, oferecemos cursos gratuitos de Libras para membros que desejam aprender a se comunicar e evangelizar a comunidade surda.'
  },
  { 
    id: '27', 
    title: 'Escola Bíblica', 
    desc: 'Na EB, os participantes aprendem mais sobre as Escrituras e como aplicá-las em seu dia a dia, fortalecendo sua fé e conhecimento bíblico.',
    details: 'A EBD acontece todos os domingos pela manhã e terças à noite. Com classes divididas por maturidade espiritual (Novos Convertidos, Batismo, Liderança), oferecemos um currículo teológico sólido para fundamentar a fé dos membros contra heresias e mornidão.'
  },
  { 
    id: '28', 
    title: 'Obreiros', 
    desc: 'O Ministério de Obreiros apoia os líderes da igreja, intercedendo por eles, organizando o ambiente e auxiliando em suas responsabilidades.',
    details: 'Os Obreiros são os braços direito do pastor. Eles auxiliam na Santa Ceia, na unção com óleo, na organização do altar e na ordem do culto. Passam por um curso de formação rigoroso para servir com excelência e temor.'
  },
  { 
    id: '29', 
    title: 'Congregações', 
    desc: 'Ministério que compõe as 28 igrejas filiais da nossa Sede IEPC, dando todo apoio e cuidado necessário para que prossigam.',
    details: 'A equipe de Supervisão de Filiais dá suporte aos pastores locais, padronizando a visão da igreja, oferecendo treinamento administrativo e pastoral, e organizando o intercâmbio de pregadores entre as sedes para manter a unidade do corpo.'
  },
  { 
    id: '30', 
    title: 'Aviva Jovens', 
    desc: 'Esse ministério é voltado para os jovens da igreja, promovendo comunhão, crescimento espiritual e atividades específicas para essa faixa etária.',
    details: 'O Aviva Jovens é a força motriz da igreja. Com cultos eletrizantes aos sábados, vigílias, luais e ações universitárias, desafiamos a juventude a viver um cristianismo radical, longe do pecado e cheio do Espírito Santo.'
  },
];

const Ministries: React.FC = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  // Function to render Colorful Title for ID '01'
  const renderTitle = (min: Ministry) => {
    if (min.id === '01') {
      const colors = ['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-indigo-500', 'text-purple-500', 'text-pink-500'];
      return (
        <span>
          {min.title.split(' ').map((word, wIndex) => (
            <span key={wIndex} className="inline-block mr-2 last:mr-0">
              {word.split('').map((char, cIndex) => (
                <span key={cIndex} className={colors[(cIndex + (wIndex * 4)) % colors.length]}>
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      );
    }
    return min.title;
  };

  return (
    <div className="pt-32 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-navy-900 overflow-hidden">
        {/* LOCAL IMAGE: Banner Ministerios */}
        <div className="absolute inset-0 z-0">
            <img src="/banner-ministerios.jpg" className="w-full h-full object-cover opacity-20 animate-[pulse-slow_15s_infinite]" alt="Banner Ministérios" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-slide-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 font-bold text-sm mb-6 uppercase tracking-widest">
             Todos os Ministérios IEPC
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Um conjunto de <br/> <span className="text-gold-500">cuidados para você</span>
          </h1>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
             Conheça como nossa igreja se organiza para servir, acolher e transformar vidas através de diferentes áreas de atuação.
          </p>
        </div>
      </section>

      {/* Intro & Highlights */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
               <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                 <span className="text-gold-600 text-5xl block mb-2">30 ministérios</span>
                 que compõem nosso corpo
               </h2>
               <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                 Cada ministério foi criado e preparado para suprir a sua necessidade e a do próximo.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                 Nossa igreja possui ministérios com a finalidade de organizar pessoas e líderes para um propósito, tanto internamente como externamente.
               </p>
            </div>
            <div className="grid gap-6">
               {[
                 { icon: <Users className="text-white"/>, title: "Obreiros Preparados", desc: "Recepção, tratamento e cuidado de todos membros e visitantes.", bg: "bg-navy-900" },
                 { icon: <HandHeart className="text-white"/>, title: "Projetos de Ação Social", desc: "Mais de 5 ministérios destinados a projetos sociais e impacto real.", bg: "bg-gold-500" },
                 { icon: <Heart className="text-white"/>, title: "Cuidados Especiais", desc: "Ministérios com objetivo de apoiar e resolver sua necessidade.", bg: "bg-blue-600" },
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4 bg-white dark:bg-navy-900 p-6 rounded-xl shadow-md border border-slate-100 dark:border-navy-800 animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg ${item.bg}`}>
                       {item.icon}
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1">{item.title}</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Ministries Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((min, idx) => (
              <div 
                key={min.id} 
                className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg border-t-4 border-gold-500 border-x border-b border-slate-100 dark:border-navy-800 hover:-translate-y-2 transition-all duration-300 group animate-slide-up opacity-0 fill-mode-forwards flex flex-col relative overflow-hidden"
                style={{ animationDelay: `${(idx % 3) * 0.1}s`, animationFillMode: 'forwards' }}
              >
                 <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 relative z-10 group-hover:text-gold-600 transition-colors">
                   {renderTitle(min)}
                 </h3>
                 
                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                   {min.desc}
                 </p>
                 
                 <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                   <Link 
                     to="/contato" 
                     className="inline-flex items-center gap-2 text-xs font-bold text-white bg-navy-900 dark:bg-navy-800 py-3 px-5 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all shadow-md"
                   >
                     Contate-nos <ChevronRight size={14} />
                   </Link>
                   
                   <button 
                     className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 dark:text-slate-200 border border-navy-900 dark:border-slate-600 py-3 px-5 rounded-full hover:bg-slate-50 dark:hover:bg-navy-800 transition-all"
                     onClick={() => setSelectedMinistry(min)}
                   >
                     Saiba sobre o projeto <Info size={14} />
                   </button>
                 </div>
              </div>
            ))}
         </div>

         {/* Footer Call to Action */}
         <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl animate-slide-up">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Visite nossa galeria!</h2>
               <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">Toque no botão para acessar nossa galeria e verificar imagens de todos nossos eventos!</p>
               <Link to="/midias" className="bg-gold-500 text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)] inline-flex items-center gap-2">
                 Ler mais <ChevronRight size={20} />
               </Link>
            </div>
         </div>
      </section>

      {/* Project Detail Modal */}
      {selectedMinistry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedMinistry(null)}>
           <div 
             className="bg-white dark:bg-navy-900 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-slide-up border border-slate-100 dark:border-navy-800"
             onClick={(e) => e.stopPropagation()}
           >
              {/* Header */}
              <div className="bg-navy-900 p-6 md:p-8 relative">
                 <h2 className="text-2xl font-bold text-white mb-2 relative z-10">{renderTitle(selectedMinistry)}</h2>
                 <div className="h-1 w-12 bg-gold-500 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                 <h3 className="text-sm font-bold text-gold-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                   <CheckCircle size={16}/> Sobre o Projeto
                 </h3>
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
                   {selectedMinistry.details}
                 </p>
                 
                 <button 
                   onClick={() => setSelectedMinistry(null)}
                   className="w-full bg-slate-100 dark:bg-navy-800 text-navy-900 dark:text-white font-bold py-4 rounded-xl hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors"
                 >
                   Voltar
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Ministries;