import React, { useEffect, useState } from 'react';
import { Play, Calendar, Heart, ArrowRight, Radio, MapPin, Check, Mic, Youtube, Music, Clock, Users, Hand, ChevronRight, Instagram, X, BookOpen, FileText, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDailyDevotional } from '../services/geminiService';
import { Devotional } from '../types';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  date: string;
  tag: string;
}

const Home: React.FC = () => {
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    getDailyDevotional().then(setDevotional);
  }, []);

  // Artigo em Destaque (Líder)
  const featuredArticle: Article = {
    id: 3,
    title: "A História do Apóstolo Rodrigo Salgado",
    excerpt: "Como R$300 e Um Sonho Com Deus Deram Início a Uma Nação de Fé. Descubra como um sussurro de Deus mudou tudo.",
    date: "História Viva",
    tag: "Nossa Liderança",
    // LOCAL IMAGE: Capa Historia Rodrigo (Path adjusted to public root)
    image: "/historia-rodrigo.jpg", 
    content: (
      <>
        <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border-l-4 border-gold-500 mb-8">
          <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Como R$300 e Um Sonho Com Deus Deram Início a Uma Nação de Fé</h3>
          <p className="italic text-slate-600 dark:text-slate-300">"UM SUSSURRO DE DEUS MUDA TUDO"</p>
        </div>

        <p className="mb-4">O Apóstolo Rodrigo Salgado não era famoso, não estava rodeado de multidões ou grandes campanhas. Era só ele, Deus, uma missão no coração e… <strong>R$300 no bolso</strong>. Isso mesmo, 300 reais e um pacote de pregos usados. E foi com isso que ele decidiu obedecer ao chamado.</p>
        
        <p className="mb-4">Tudo começou com um sussurro. Não era um trovão, não era uma visão em chamas. Era um simples sussurro. Deus falou… e um homem ouviu.</p>
        
        <p className="mb-8 font-medium text-navy-900 dark:text-white">No dia 20 de junho de 2004, nascia a Igreja do Evangelho Pleno em Cristo. E nascia também uma jornada que mudaria a vida de milhares de pessoas.</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          💥 DO “FORNINHO” AO AVIVAMENTO
        </h3>
        <p className="mb-4">O primeiro culto foi num salãozinho apertado na Av. Santa Mônica. O lugar era tão quente e cheio que ganhou o apelido carinhoso de <strong>“FORNINHO”</strong>. Mas ninguém reclamava. Era ali que o fogo do Espírito queimava forte!</p>
        <p className="mb-4">Foram apenas seis meses até perceberem: aquele espaço já era pequeno demais pra o que Deus estava fazendo. A igreja então se mudou para a Av. Mutinga — e ali começaria uma nova fase de crescimento sobrenatural.</p>
        <p className="mb-4">E foi lá, nesse novo espaço, que aconteceu o primeiro batismo. Sete pessoas dizendo SIM pra Jesus! A promessa de Mateus 28:19 estava começando a se cumprir.</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          🚐 EVANGELHO NA ESTRADA: A KOMBI E A MISSÃO
        </h3>
        <p className="mb-4">No primeiro aniversário da igreja, mais um passo: nasceu o primeiro ponto de pregação! Na Rua Mauro de Araújo Ribeiro — no Jaraguá — a chama da Palavra se espalhava.</p>
        <p className="mb-4">Não parou por aí. Em Monte Alegre, depois em Nova Esperança, os pontos de pregação se multiplicavam. E como transportar tanta gente com sede de Deus? Simples: surgiu a famosa <strong>Kombi azul!</strong> Rodrigo Salgado virava o volante com alegria, passando de casa em casa pra buscar os fiéis.</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          📻 DA RÁDIO… PARA O MUNDO!
        </h3>
        <p className="mb-4">Rodrigo resolve dar um passo ousado: começa uma programação numa rádio comunitária. A voz dele alcançava onde os pés não conseguiam chegar. Gente chorando, se convertendo dentro de casa, ouvindo só aquilo que precisava: a verdade do Evangelho!</p>
        <p className="mb-4">Em 2007, surgem novas oportunidades: mais rádios, mais ouvintes, mais vidas tocadas por Deus!</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          💪 VALENTES DE DEUS SURGE COMO UM EXÉRCITO
        </h3>
        <p className="mb-4">E num desses momentos de escuta com Deus, nasceu o projeto que transformaria tudo: “Valente de Deus”. Não era só um nome bonito. Era um chamado pra sustentar o avanço da obra! Com 37 carnês de R$100, começou algo que romperia fronteiras.</p>
        <p className="mb-4">O que parecia pouco, virou uma avalanche espiritual: muitos se levantaram como valentes. A missão se tornava coletiva!</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          🏗️ UM TEMPLO, UMA PROMESSA
        </h3>
        <p className="mb-4">Cinco anos depois do início da caminhada, em 2009, a igreja conquista sua sede própria — na Rua Joaquim de Oliveira Freitas. Um momento marcante! E foi nesse mesmo ano que veio o reconhecimento oficial: Rodrigo Salgado agora era chamado de Apóstolo, como diz em Efésios 4:11.</p>
        <p className="mb-4">A partir dali, a igreja começou a gravar os cultos e disponibilizá-los nas redes sociais e em seu site. A Palavra de Deus ganhava cliques, curtidas e mais corações!</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
          📡 DE TODAS AS FORMAS
        </h3>
        <p className="mb-4">Em 2014, um feito histórico: nasce a Pleno FM — uma rádio da própria igreja! E se 2014 foi grande… 2015 chegou ainda maior. Já eram 60 igrejas, 5 horas de programação na Rádio Musical FM, e até programas de TV!</p>
        <p className="mb-4">Rodrigo agora falava pra multidões… e ainda assim nunca se esquecia do propósito: salvar vidas e anunciar Jesus!</p>

        <h3 className="text-2xl font-bold text-gold-600 mt-8 mb-4 font-serif flex items-center gap-2">
           🌆 O CORAÇÃO DE SÃO PAULO
        </h3>
        <p className="mb-4">2016… Esse ano foi profético. O “Jubileu da Restituição” foi marcado por uma das maiores conquistas do ministério: <strong>O Templo do Avivamento, no coração de São Paulo!</strong></p>
        <p className="mb-4">Toda luta, cada lágrima, cada madrugada em oração — culminaram na realização do sonho inicial. Aquele sussurro virou realidade. Aquele R$300 deu origem a uma NAÇÃO.</p>
        <p className="mb-8 font-bold text-xl text-navy-900 dark:text-white">A Nação Pleno em Cristo foi oficialmente lançada.</p>

        <div className="bg-white dark:bg-navy-900 p-8 rounded-xl border border-slate-200 dark:border-navy-700 shadow-lg mb-8">
          <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gold-500"><Star fill="currentColor" /> UM CHAMADO PESSOAL QUE VIROU CHAMADO COLETIVO</h4>
          <p className="italic text-lg mb-4">“Me lembro da minha conversão… Logo no início, eu já sentia: aqui está meu chamado. Não demorou muito, me tornei pastor.”</p>
          <p className="font-bold text-right">— Ap. Rodrigo Salgado</p>
        </div>

        <p className="mb-4">Hoje, a igreja segue firme, com sua sede nacional na Av. Mutinga, nº 1515. São igrejas espalhadas por diversos lugares, missionários dedicados, projetos, rádio, TV, redes sociais… e uma Nação construída na presença de Deus.</p>
        <p className="mb-8 font-bold">E sabe o melhor de tudo? Essa história não acabou.</p>

        <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">🚀 E VOCÊ… QUER FAZER PARTE DESSA HISTÓRIA?</h3>
        <p className="mb-8">Esse não é só o testemunho de um homem. É uma convocação divina para todos que ainda acreditam em milagres, em avivamento e em um Deus que transforma o pouco em tudo!</p>

        <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
          <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">IEPC – Igreja Evangélica</h4>
          <div className="space-y-3 mb-6">
            <p className="flex items-start gap-3">
              <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
              <span>Av. Mutinga, 1515 – Jardim Santo Elias – São Paulo – SP, 05110-000</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold-500">☎</span>
              <span>(11) 99657-1225</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold-500">📧</span>
              <span>contato@plenoemcristo.com.br</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold-500">🌐</span>
              <span>plenoemcristo.com.br</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
              <Youtube size={16} /> Assista ao Vivo
            </a>
            <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm">
              <MapPin size={16} /> Conheça nossas igrejas
            </a>
          </div>
        </div>
      </>
    )
  };

  // Dados dos Outros Artigos
  const articles: Article[] = [
    {
      id: 1,
      title: "Igreja do Evangelho Pleno em Cristo: Um Guia Para Nos Conhecer",
      excerpt: "Na jornada da fé, muitas pessoas buscam um lugar para chamar de lar espiritual. Um ambiente de acolhimento, palavra sólida e manifestação do poder de Deus...",
      date: "2 dias atrás",
      tag: "Institucional",
      // LOCAL IMAGE: Capa Artigo Guia
      image: "/artigo-guia.jpg",
      content: (
        <>
          <p className="mb-4 font-medium text-lg">Na jornada da fé, muitas pessoas buscam um lugar para chamar de lar espiritual. Um ambiente de acolhimento, palavra sólida e manifestação do poder de Deus. Se você está nessa busca, queremos nos apresentar. Somos a Igreja do Evangelho Pleno em Cristo (IEPC), e este é um guia objetivo para que você conheça nossa história, nossa fé e nossa casa.</p>
          
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Qual é a nossa história e propósito?</h3>
          <p className="mb-4">A Igreja do Evangelho Pleno em Cristo nasceu em março de 2004, a partir do chamado de Deus ao coração dos nossos fundadores, Apóstolo Rodrigo Salgado e Bispa Cristina Salgado. Com uma visão clara e baseada no livro de Atos 1:8, nossa missão desde o primeiro dia é ser testemunha do Evangelho Pleno em nossa cidade, em nosso país e até os confins da terra.</p>
          <p className="mb-4">Ao longo de mais de duas décadas, crescemos de um pequeno grupo para uma comunidade vibrante, firmada no propósito de levar a mensagem de salvação, cura e libertação através do poder de Jesus Cristo.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Em que cremos e como vivemos nossa fé?</h3>
          <p className="mb-4">Somos uma igreja fundamentada na Bíblia Sagrada como a infalível Palavra de Deus. Nossa fé é vivida de forma prática e pentecostal, acreditando na atualidade dos dons do Espírito Santo e no seu poder para transformar vidas hoje. Nossos pilares são:</p>
          
          <ul className="space-y-4 mb-6 bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border border-slate-100 dark:border-navy-700">
            <li className="flex gap-3">
              <Check className="text-gold-500 shrink-0 mt-1" size={20} />
              <div>
                <strong className="text-navy-900 dark:text-white block">A Palavra de Deus</strong>
                <span className="text-slate-600 dark:text-slate-300 text-sm">É a base de tudo o que fazemos. Cremos no ensino expositivo das escrituras como fonte de sabedoria, direção e fé.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="text-gold-500 shrink-0 mt-1" size={20} />
              <div>
                <strong className="text-navy-900 dark:text-white block">O Poder do Espírito Santo</strong>
                <span className="text-slate-600 dark:text-slate-300 text-sm">Buscamos um relacionamento profundo com o Espírito Santo e cremos em suas manifestações, como a cura divina, a libertação e os dons espirituais.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="text-gold-500 shrink-0 mt-1" size={20} />
              <div>
                <strong className="text-navy-900 dark:text-white block">Comunidade e Discipulado</strong>
                <span className="text-slate-600 dark:text-slate-300 text-sm">Acreditamos que a fé é fortalecida em comunidade. Valorizamos o discipulado, o cuidado mútuo e o crescimento juntos como Corpo de Cristo.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="text-gold-500 shrink-0 mt-1" size={20} />
              <div>
                <strong className="text-navy-900 dark:text-white block">Adoração e Oração</strong>
                <span className="text-slate-600 dark:text-slate-300 text-sm">Nossos cultos são ambientes de adoração sincera e oração fervorosa, onde buscamos a presença de Deus de todo o coração.</span>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">O que acontece em nossos cultos e atividades?</h3>
          <p className="mb-4">Oferecemos uma programação semanal pensada para edificar sua vida e fortalecer sua família. Nossos cultos são abertos a todos que desejam buscar mais de Deus.</p>
          
          <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-navy-700 mb-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="p-3 font-bold">Dia</th>
                  <th className="p-3 font-bold">Culto</th>
                  <th className="p-3 font-bold hidden sm:table-cell">Foco</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-navy-700 bg-white dark:bg-navy-800">
                <tr>
                  <td className="p-3 font-bold text-gold-600">Domingo</td>
                  <td className="p-3 font-medium">Culto da Família</td>
                  <td className="p-3 text-slate-500 dark:text-slate-400 hidden sm:table-cell">Celebração, palavra para a família e Santa Ceia.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-gold-600">Terça-feira</td>
                  <td className="p-3 font-medium">Oração e Ensino</td>
                  <td className="p-3 text-slate-500 dark:text-slate-400 hidden sm:table-cell">Estudo aprofundado da Bíblia e oração.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-gold-600">Quinta-feira</td>
                  <td className="p-3 font-medium">Culto da Vitória</td>
                  <td className="p-3 text-slate-500 dark:text-slate-400 hidden sm:table-cell">Oração por cura, libertação e milagres.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Onde estamos?</h3>
          <p className="mb-4">Será uma alegria receber você e sua família em nossa Sede Nacional. Estamos localizados em uma área de fácil acesso em Pirituba, São Paulo.</p>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
            <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">IEPC – Igreja Evangélica</h4>
            
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span>Av. Mutinga, 1509 – Jardim Santo Elias – São Paulo – SP, 05110-000</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">☎</span>
                <span>(11) 99657-1225</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">📧</span>
                <span>contato@plenoemcristo.com.br</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">🌐</span>
                <span>plenoemcristo.com.br</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
                <Youtube size={16} /> Assista ao Vivo
              </a>
              <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm">
                <MapPin size={16} /> Conheça nossas igrejas
              </a>
            </div>
          </div>

          <p className="mt-8 italic text-slate-600 dark:text-slate-400">"Nosso maior desejo é que a Igreja Pleno em Cristo seja um farol de esperança e um lugar onde você possa crescer em seu relacionamento com Deus."</p>
        </>
      )
    },
    {
      id: 2,
      title: "Congresso Valentes de Deus 2025: Celebre 21 Anos!",
      excerpt: "Prepare o seu coração para um evento que não é apenas um congresso, mas um marco profético em nossa história...",
      date: "5 dias atrás",
      tag: "Eventos",
      // LOCAL IMAGE: Capa Artigo Congresso
      image: "/artigo-congresso.jpg",
      content: (
        <>
          <p className="mb-4 font-medium text-lg">Prepare o seu coração para um evento que não é apenas um congresso, mas o cumprimento de uma promessa! De 18 a 23 de junho de 2025, a Igreja do Evangelho Pleno em Cristo não comemora apenas seu aniversário de 21 anos, mas abre as portas da sua nova casa para o Congresso Valentes de Deus.</p>
          <p className="mb-4">Este não é um evento qualquer. É a festa da nossa “maioridade espiritual”, o primeiro congresso no templo que Deus nos deu e um encontro poderoso com alguns dos maiores nomes da música e da pregação do nosso país. Continue lendo e descubra por que você não pode ficar de fora!</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Por que o Congresso Valentes de Deus 2025 será um marco inesquecível?</h3>
          <p className="mb-4">Este congresso representa a convergência de três grandes motivos de alegria para a nossa comunidade. Cada um deles, por si só, já seria razão para uma grande festa. Juntos, eles formam um evento verdadeiramente profético e imperdível.</p>
          
          <div className="space-y-6 my-8">
            <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border-l-4 border-gold-500">
              <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">21 Anos de uma História de Fé e Milagres</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Há 21 anos, a Igreja Pleno em Cristo nascia com um chamado. Ao longo dessa jornada, vimos vidas serem transformadas, famílias restauradas e a comunidade crescer. Este aniversário celebra cada testemunho, cada oração respondida e a fidelidade de Deus que nos sustentou até aqui.</p>
            </div>
            <div className="bg-slate-50 dark:bg-navy-800 p-6 rounded-xl border-l-4 border-gold-500">
              <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">A Conquista do Templo Próprio: Um Sonho Realizado</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Quem acompanha nossa trajetória sabe o que esta vitória significa. Sair do aluguel e inaugurar nosso templo próprio é um testemunho poderoso do que a fé e a união podem alcançar. O Congresso Valentes de Deus será o primeiro grande evento em nossa nova casa.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Quem são os Valentes de Deus que estarão conosco?</h3>
          <p className="mb-6">Para tornar esta celebração ainda mais especial, reunimos um time de homens e mulheres de Deus que são referência em todo o Brasil. Prepare-se para ser impactado por mensagens profundas e louvores que tocarão o céu com nossos anfitriões Apóstolo Rodrigo Salgado e Bispa Cristina Salgado.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm">
               <h5 className="font-bold text-gold-600 mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
                 <Mic size={16} /> Preletores e Ministrações
               </h5>
               <ul className="space-y-2 text-navy-900 dark:text-white font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pr. Junior Trovão</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pr. Marcinho de Carapicuíba</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pr. Moisés Galvão</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pr. Samuel Procópio</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Bp. Felipe Simões</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Bp. Rafael Lucas</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pr. Renato Sousa</li>
               </ul>
            </div>
            <div className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm">
               <h5 className="font-bold text-gold-600 mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
                 <Music size={16} /> Louvor e Adoração
               </h5>
               <ul className="space-y-2 text-navy-900 dark:text-white font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Italo Ribeiro</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Jonathas Pontes</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> Pietro Medeiros</li>
               </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">O que você pode esperar destes dias?</h3>
          <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3"><Check className="text-gold-500 shrink-0 mt-1" size={18} /> <span><strong>Receber uma Palavra Direcionada:</strong> Mensagens que vão renovar sua fé e te impulsionar para um novo nível.</span></li>
            <li className="flex items-start gap-3"><Check className="text-gold-500 shrink-0 mt-1" size={18} /> <span><strong>Viver um Louvor Inesquecível:</strong> Momentos de adoração intensa e celebração com todo o corpo de Cristo.</span></li>
            <li className="flex items-start gap-3"><Check className="text-gold-500 shrink-0 mt-1" size={18} /> <span><strong>Conectar-se com a Comunidade:</strong> Fortalecer laços de amizade e companheirismo com irmãos na fé.</span></li>
            <li className="flex items-start gap-3"><Check className="text-gold-500 shrink-0 mt-1" size={18} /> <span><strong>Ser Parte da História:</strong> Testemunhar e fazer parte do primeiro grande evento no novo endereço.</span></li>
          </ul>

          <div className="bg-gold-500/10 rounded-2xl p-8 text-center border border-gold-500/30 mb-8">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 font-serif">Garanta sua participação</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">A entrada é totalmente gratuita, mas as vagas são limitadas e a inscrição é obrigatória.</p>
            
            <button className="bg-gold-500 text-navy-900 font-bold py-4 px-8 rounded-full hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/30 hover:scale-105 uppercase tracking-wide text-sm">
              Inscreva-se Gratuitamente no Congresso
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">Não deixe para a última hora. Queremos muito celebrar com você!</p>
          </div>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Conclusão</h3>
          <p className="mb-8 text-slate-600 dark:text-slate-300">O Congresso Valentes de Deus 2025 é mais do que um evento; é a materialização da fidelidade de Deus, a celebração de 21 anos de uma linda história e o início de um novo e glorioso capítulo que escreveremos juntos em nossa nova casa. Estamos de braços e portas abertas para te receber.</p>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
            <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">IEPC – Igreja Evangélica</h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span>Av. Mutinga, 1515 – Jardim Santo Elias – São Paulo – SP, 05110-000</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">☎</span>
                <span>(11) 99657-1225</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">📧</span>
                <span>contato@plenoemcristo.com.br</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">🌐</span>
                <span>plenoemcristo.com.br</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
                <Youtube size={16} /> Assista ao Vivo
              </a>
              <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm">
                <MapPin size={16} /> Conheça nossas igrejas
              </a>
            </div>
          </div>
        </>
      )
    },
    {
      id: 4,
      title: "Oração Poderosa: Conectando-se com Deus",
      excerpt: "A oração é a forma como nos comunicamos com Deus, expressando nossas necessidades, agradecimentos e louvores...",
      date: "2 semanas atrás",
      tag: "Estudo",
      // LOCAL IMAGE: Capa Artigo Oracao
      image: "/artigo-oracao.jpg",
      content: (
        <>
          <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 italic border-b border-slate-100 dark:border-navy-800 pb-4">
             Deixe um comentário / IE Pleno em Cristo, Igreja, Informativo / Por Pleno Cristo
          </div>

          <p className="mb-6 text-lg font-medium">A oração é a forma como nos comunicamos com Deus, expressando nossas necessidades, agradecimentos e louvores. Como podemos tornar nossas orações mais poderosas e eficazes?</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Elementos de uma Oração Poderosa:</h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3 bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700">
               <Check className="text-gold-500 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="text-navy-900 dark:text-white">Fé:</strong>
                 <span className="text-slate-600 dark:text-slate-300 ml-1">Acreditar que Deus ouve e responde nossas orações.</span>
               </div>
            </li>
            <li className="flex gap-3 bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700">
               <Check className="text-gold-500 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="text-navy-900 dark:text-white">Sinceridade:</strong>
                 <span className="text-slate-600 dark:text-slate-300 ml-1">Abrir o coração a Deus com honestidade e humildade.</span>
               </div>
            </li>
            <li className="flex gap-3 bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700">
               <Check className="text-gold-500 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="text-navy-900 dark:text-white">Persistência:</strong>
                 <span className="text-slate-600 dark:text-slate-300 ml-1">Continuar orando, mesmo quando não vemos resultados imediatos.</span>
               </div>
            </li>
            <li className="flex gap-3 bg-slate-50 dark:bg-navy-800 p-4 rounded-lg border border-slate-100 dark:border-navy-700">
               <Check className="text-gold-500 shrink-0 mt-1" size={20} />
               <div>
                 <strong className="text-navy-900 dark:text-white">Alinhamento com a Vontade de Deus:</strong>
                 <span className="text-slate-600 dark:text-slate-300 ml-1">Orar de acordo com os princípios bíblicos.</span>
               </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">A Igreja Pleno em Cristo: Aprendendo a Orar:</h3>
          <p className="mb-8 text-slate-600 dark:text-slate-300">Em nossa comunidade, você aprenderá a desenvolver uma vida de oração mais profunda e eficaz. Oferecemos encontros de oração, estudos bíblicos e aconselhamento pastoral para te ajudar a se conectar com Deus.</p>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
            <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">IEPC – Igreja Evangélica</h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span>Av. Mutinga, 1515 – Jardim Santo Elias – São Paulo – SP, 05110-000</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">☎</span>
                <span>(11) 99657-1225</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">📧</span>
                <span>contato@plenoemcristo.com.br</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">🌐</span>
                <span>plenoemcristo.com.br</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
                <Youtube size={16} /> Assista ao Vivo
              </a>
              <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm">
                <MapPin size={16} /> Conheça nossas igrejas
              </a>
            </div>
          </div>
        </>
      )
    },
    {
      id: 5,
      title: "Alcançando a Graça: A Bondade Imerecida de Deus",
      excerpt: "A graça de Deus é um presente imerecido que nos concede o perdão dos pecados e a vida eterna. Como podemos alcançar...",
      date: "3 semanas atrás",
      tag: "Teologia",
      // LOCAL IMAGE: Capa Artigo Graca
      image: "/artigo-graca.jpg",
      content: (
        <>
          <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 italic border-b border-slate-100 dark:border-navy-800 pb-4">
             Deixe um comentário / IE Pleno em Cristo, Igreja, Jornal Pleno / Por Pleno Cristo
          </div>

          <p className="mb-6 text-lg font-medium">A graça de Deus é um presente imerecido que nos concede o perdão dos pecados e a vida eterna. Como podemos alcançar essa graça e experimentá-la em nossa vida?</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">A Graça pela Fé:</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">A Bíblia nos ensina que a graça de Deus é alcançada pela fé em Jesus Cristo. Efésios 2:8-9 afirma: <span className="italic">“Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.”</span></p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Vivendo na Graça:</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">Uma vez que recebemos a graça de Deus, somos chamados a viver em gratidão e obediência aos Seus mandamentos.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">A Igreja Pleno em Cristo: Crescendo na Graça:</h3>
          <p className="mb-8 text-slate-600 dark:text-slate-300">Junte-se a nós e aprofunde seu entendimento da graça de Deus. Oferecemos cultos, estudos bíblicos e grupos de comunhão para te ajudar a crescer na fé e viver uma vida transformada pela graça.</p>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
            <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">IEPC – Igreja Evangélica</h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span>Av. Mutinga, 1515 – Jardim Santo Elias – São Paulo – SP, 05110-000</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">☎</span>
                <span>(11) 99657-1225</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">📧</span>
                <span>contato@plenoemcristo.com.br</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-gold-500">🌐</span>
                <span>plenoemcristo.com.br</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm">
                <Youtube size={16} /> Assista ao Vivo
              </a>
              <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-sm">
                <MapPin size={16} /> Conheça nossas igrejas
              </a>
            </div>
          </div>
        </>
      )
    },
    {
      id: 6,
      title: "A Importância da Comunhão: Vivendo em Unidade",
      excerpt: "O cristianismo não é uma jornada solitária. Descubra por que precisamos uns dos outros para crescer na fé e como a comunhão fortalece a igreja...",
      date: "1 mês atrás",
      tag: "Vida Cristã",
      // LOCAL IMAGE: Capa Artigo Comunhao
      image: "/artigo-comunhao.jpg",
      content: (
        <>
          <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 italic border-b border-slate-100 dark:border-navy-800 pb-4">
             Deixe um comentário / IE Pleno em Cristo, Igreja, Vida Cristã / Por Pleno Cristo
          </div>

          <p className="mb-6 text-lg font-medium">Muitas vezes, pensamos que nossa fé é algo apenas entre 'eu e Deus'. Mas a Bíblia nos mostra um quadro diferente: somos um corpo, e um corpo precisa de todas as suas partes conectadas para funcionar.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">O Modelo de Atos 2</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">A igreja primitiva perseverava na doutrina dos apóstolos e na comunhão, no partir do pão e nas orações (Atos 2:42). Eles entendiam que a força espiritual vinha da unidade. Quando estamos juntos, dividimos cargas, multiplicamos alegrias e somos edificados mutuamente.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Por que congregar?</h3>
          <ul className="space-y-4 mb-8">
             <li className="flex gap-3"><Check className="text-gold-500 mt-1" size={18} /> <span className="text-slate-600 dark:text-slate-300">Para encorajar uns aos outros (Hebreus 10:25).</span></li>
             <li className="flex gap-3"><Check className="text-gold-500 mt-1" size={18} /> <span className="text-slate-600 dark:text-slate-300">Para exercer nossos dons espirituais.</span></li>
             <li className="flex gap-3"><Check className="text-gold-500 mt-1" size={18} /> <span className="text-slate-600 dark:text-slate-300">Para prestar culto corporativo a Deus.</span></li>
          </ul>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
             <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">Participe de uma Célula</h4>
             <p className="mb-4 text-slate-300">Quer viver essa comunhão de perto? Visite uma de nossas igrejas ou grupos familiares.</p>
             <a href="https://bit.ly/edereços-pleno" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 px-6 py-3 rounded-lg font-bold hover:bg-gold-400 transition-colors inline-flex items-center gap-2 text-sm">
                <MapPin size={16} /> Encontrar uma igreja próxima
             </a>
          </div>
        </>
      )
    },
    {
      id: 7,
      title: "Restaurando o Altar da Família",
      excerpt: "Sua casa é o seu primeiro ministério. Aprenda princípios bíblicos para fortalecer os laços familiares e manter um lar cheio da presença de Deus...",
      date: "1 mês atrás",
      tag: "Família",
      // LOCAL IMAGE: Capa Artigo Familia
      image: "/artigo-familia.jpg",
      content: (
        <>
          <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 italic border-b border-slate-100 dark:border-navy-800 pb-4">
             Deixe um comentário / IE Pleno em Cristo, Igreja, Família / Por Pleno Cristo
          </div>

          <p className="mb-6 text-lg font-medium">A família é um projeto de Deus. Antes de instituir a igreja, Deus instituiu a família no Éden. Hoje, mais do que nunca, precisamos lutar pela saúde espiritual dos nossos lares.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">O que é o Altar da Família?</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-300">É o momento separado para buscar a Deus juntos. Não precisa ser uma liturgia complexa. Pode ser uma leitura bíblica à mesa, uma oração antes de dormir ou um momento de louvor na sala.</p>

          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-8 mb-4 font-serif">Passos Práticos:</h3>
          <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-slate-300 mb-8 marker:text-gold-500 marker:font-bold">
             <li><strong>Defina um horário:</strong> A consistência é mais importante que a duração.</li>
             <li><strong>Desligue as telas:</strong> Tire um tempo sem celulares ou TV para focar em Deus e uns nos outros.</li>
             <li><strong>Seja o exemplo:</strong> Pais que oram ensinam filhos a orar.</li>
          </ol>

          <div className="bg-navy-950 text-white p-8 rounded-2xl mt-8 shadow-xl border border-navy-800">
             <h4 className="text-gold-500 font-bold uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">Domingo da Família</h4>
             <p className="mb-4 text-slate-300">Traga sua casa para a casa de Deus! Todos os domingos temos cultos especiais voltados para a bênção do lar.</p>
             <p className="flex items-center gap-2 font-bold text-gold-500"><Calendar size={18}/> Domingos às 18h</p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Hero Section - Single Static Slide with Placeholder */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* LOCAL IMAGE: Banner Hero Principal - Fixed Name: banner-hero.jpg */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/banner-hero.jpg" 
             alt="Banner Hero Principal - Pleno em Cristo" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy-900/60 dark:bg-navy-950/70"></div> {/* Overlay */}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in pt-20">
          <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
            Seja Bem-vindo à
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Igreja Pleno em Cristo
          </h1>
          <p className="text-2xl md:text-4xl font-serif text-white/90 mb-10 font-medium drop-shadow-md">
            Um lugar de Novos Começos
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 flex-wrap">
            <Link 
              to="/programacao"
              className="group relative px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-full overflow-hidden hover:bg-gold-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              <span className="flex items-center gap-2">
                <Play size={20} fill="currentColor" /> Assista ao Vivo
              </span>
            </Link>
            
            <Link 
              to="/sobre"
              className="px-8 py-4 border border-white text-white backdrop-blur-sm rounded-full font-medium hover:bg-white hover:text-navy-900 transition-all"
            >
              Conheça Nossa História
            </Link>

            <Link 
              to="/igrejas"
              className="px-8 py-4 bg-navy-900/50 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-navy-900 hover:border-gold-500 hover:text-gold-500 transition-all flex items-center gap-2"
            >
              <MapPin size={18} /> Conheça nossas 21 igrejas
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="relative z-20 -mt-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Rádio Online", 
              icon: <Radio size={32} />, 
              desc: "Louvor e adoração 24h por dia.", 
              link: "/programacao",
              color: "bg-white dark:bg-navy-900 border-b-4 border-blue-600" 
            },
            { 
              title: "Casa de Recuperação", 
              icon: <Heart size={32} />, 
              desc: "Projeto social que transforma vidas.", 
              link: "/sobre",
              color: "bg-white dark:bg-navy-900 border-b-4 border-gold-500" 
            },
            { 
              title: "Agenda Semanal", 
              icon: <Calendar size={32} />, 
              desc: "Fique por dentro de nossos eventos.", 
              link: "/programacao",
              color: "bg-white dark:bg-navy-900 border-b-4 border-purple-600" 
            },
          ].map((card, idx) => (
            <Link 
              key={idx} 
              to={card.link}
              className={`${card.color} p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col`}
            >
              <div className="text-navy-900 dark:text-white mb-4 p-3 bg-slate-100 dark:bg-navy-800 w-fit rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-navy-700 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2 font-serif">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{card.desc}</p>
              <div className="flex items-center text-gold-600 font-bold text-sm uppercase tracking-wide mt-auto">
                Acessar <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Devotional Section (Gemini Powered) */}
      <section className="py-24 px-4 bg-white dark:bg-navy-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold-500 font-bold tracking-wider text-sm uppercase block mb-4">
            Alimento Diário
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-12">
            Devocional do Dia
          </h2>

          <div className="bg-white dark:bg-navy-800 p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-navy-700 relative overflow-hidden transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold-500"></div>
            {devotional ? (
              <div className="animate-fade-in text-left">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl text-gold-500 font-serif leading-none">"</div>
                  <p className="text-2xl md:text-3xl font-serif italic text-slate-700 dark:text-slate-200 leading-relaxed">
                    {devotional.verse}
                  </p>
                </div>
                <p className="text-navy-800 dark:text-gold-200 font-bold text-right text-lg mb-8">— {devotional.reference}</p>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-navy-700 pt-8">
                  <p>{devotional.message}</p>
                  <p className="italic text-slate-500 dark:text-slate-400 font-serif border-l-2 border-gold-500 pl-4 mt-6 bg-slate-50 dark:bg-navy-900 p-4 rounded-r-lg">
                    <span className="text-navy-900 dark:text-white font-bold">Oração:</span> {devotional.prayer}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Audio & Preaching */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-navy-950 transition-colors border-t border-slate-200 dark:border-navy-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
               <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-2 block">Ouça-nos</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6 leading-tight">
                 Acesse nossas pregações a qualquer momento
               </h2>
               <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                 Toque em qualquer plataforma para escutar uma palavra ao seu coração. 
                 Nossa programação está disponível onde você estiver.
               </p>
               
               <ul className="space-y-4 mb-10">
                 {[
                   "24 horas por dia",
                   "Ao vivo e gravações",
                   "Gratuito"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-navy-900 dark:text-white font-medium">
                     <Check size={20} className="text-gold-500" /> {item}
                   </li>
                 ))}
               </ul>

               <a href="https://www.instagram.com/ieplenoemcristo" target="_blank" rel="noopener noreferrer" className="inline-block bg-navy-800 dark:bg-navy-700 text-white px-8 py-4 rounded-full font-bold hover:bg-navy-900 dark:hover:bg-navy-600 transition-all hover:scale-105 shadow-lg">
                 Acessar instagram IEPC
               </a>
            </div>

            {/* Platforms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { 
                   icon: <Mic className="text-blue-600" size={32} />, 
                   title: "Rádio 87,5 fm", 
                   desc: "Rádio oficial Pleno FM com 24 horas de programação",
                   bg: "bg-white dark:bg-navy-900",
                   link: "https://plenofm.com.br/radio/"
                 },
                 { 
                   icon: <Youtube className="text-red-600" size={32} />, 
                   title: "Youtube", 
                   desc: "Cultos ao vivo toda semana, palavras para o seu coração",
                   bg: "bg-white dark:bg-navy-900",
                   link: "https://www.youtube.com/@ieplenoemcristo"
                 },
                 { 
                   icon: <Mic className="text-blue-600" size={32} />, 
                   title: "Rádio 92,7 fm", 
                   desc: "Ao vivo de Seg à Sex das 12h às 13h e das 18h às 19h",
                   bg: "bg-white dark:bg-navy-900",
                   link: "https://play.google.com/store/search?q=pleno+fm&c=apps"
                 },
                 { 
                   icon: <Music className="text-green-600" size={32} />, 
                   title: "Spotify", 
                   desc: "Ouça pregações do nosso Apóstolo Rodrigo Salgado no seu celular",
                   bg: "bg-white dark:bg-navy-900",
                   link: "https://open.spotify.com/show/0cHT4y8dfFlclMDQH6FZVy"
                 }
               ].map((item, idx) => (
                 <a 
                   key={idx} 
                   href={item.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`${item.bg} p-8 rounded-2xl border border-slate-200 dark:border-navy-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group block`}
                 >
                   <div className="mb-6 p-3 bg-slate-50 dark:bg-navy-800 rounded-full w-fit group-hover:scale-110 transition-transform">
                     {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 font-serif">{item.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     {item.desc}
                   </p>
                 </a>
               ))}
            </div>
         </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-4 bg-white dark:bg-navy-900 transition-colors">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
               <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Nossas Reuniões</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                 Venha viver o seu milagre
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 {
                   titleLines: ["Domingo da", "Família"],
                   desc: "Com três reuniões no Domingo para começar uma semana abençoada e com o amor de Deus em sua casa.",
                   times: "9:00 | 15:00 | 18:00"
                 },
                 {
                   titleLines: ["Segunda da", "Conquista"],
                   desc: "Uma Segunda-feira de conquista, alcance tudo aquilo que lhe foi prometido.",
                   times: "19:30"
                 },
                 {
                   titleLines: ["Quarta", "Profética"],
                   desc: "Uma Quarta-feira avivada, para os crentes que buscam uma resposta de Deus.",
                   times: "15:00 | 19:30"
                 },
                 {
                   titleLines: ["Sexta do", "Clamor"],
                   desc: "Uma Sexta-feira de batalha, prepare-se para uma libertação e venha buscar o seu milagre.",
                   times: "15:00 | 19:30"
                 }
               ].map((item, idx) => (
                 <div 
                   key={idx} 
                   className="bg-slate-50 dark:bg-navy-950 p-8 rounded-2xl border border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:border-gold-500/50 transition-all hover:shadow-xl group"
                 >
                    <div>
                       <h3 className="text-2xl font-serif font-bold text-navy-900 dark:text-white mb-6 leading-tight group-hover:text-gold-600 transition-colors">
                         {item.titleLines.map((line, i) => (
                           <span key={i} className="block">{line}</span>
                         ))}
                       </h3>
                       <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
                         {item.desc}
                       </p>
                    </div>
                    <div className="pt-6 border-t border-slate-200 dark:border-navy-800">
                       <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold">
                          <Clock size={18} className="text-navy-900 dark:text-white" />
                          {item.times}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Ministries */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-navy-950 transition-colors border-t border-slate-200 dark:border-navy-800">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16 animate-fade-in">
               <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Alguns de Nossos Ministérios</span>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                 Ministérios Pleno em Cristo
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   title: "IEPC Infantil",
                   desc: "Ministério pensado em todos filhos e pais que desejam visitar a igreja e ouvir a palavra de Deus.",
                   bg: "bg-white",
                   text: "text-navy-900",
                   // LOCAL IMAGE: Capa IEPC Infantil (Path adjusted to public root)
                   image: "/min-infantil.jpg" 
                 },
                 {
                   title: "IDE",
                   desc: "Projeto criado para ir até os necessitados, levando alimento, calor e muito amor de Deus",
                   bg: "bg-navy-900",
                   text: "text-white",
                   descColor: "text-gray-300",
                   // LOCAL IMAGE: Capa Projeto IDE (Path adjusted to public root)
                   image: "/min-ide.jpg"
                 },
                 {
                   title: "Mãos que falam",
                   desc: "Ministério de libras da IEPC, pensando na expansão da evangelização",
                   bg: "bg-navy-950",
                   text: "text-white",
                   descColor: "text-gray-300",
                   // LOCAL IMAGE: Capa Maos que Falam (Path adjusted to public root)
                   image: "/min-libras.jpg"
                 }
               ].map((min, idx) => (
                 <div 
                   key={idx} 
                   className={`${min.bg} ${min.text} rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-navy-800 hover:-translate-y-2 transition-all duration-300 flex flex-col`}
                 >
                    {/* Visual Top - Image Placeholder */}
                    <div className="h-48 w-full relative">
                        <img 
                          src={min.image} 
                          alt={`Capa ${min.title}`} 
                          className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                       <h3 className={`text-2xl font-bold mb-4`}>
                         {min.title}
                       </h3>
                       <p className={`text-base mb-8 leading-relaxed flex-grow ${min.descColor ? min.descColor : 'text-slate-600 dark:text-slate-300'}`}>
                         {min.desc}
                       </p>
                       
                       <Link 
                         to="/ministerios"
                         className={`inline-flex items-center gap-2 font-bold text-lg hover:gap-4 transition-all ${min.bg === 'bg-white' ? 'text-navy-900 dark:text-white hover:text-gold-600' : 'text-white hover:text-gold-400'}`}
                       >
                         Saiba mais <ChevronRight size={20} />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-24 px-4 bg-white dark:bg-navy-900 transition-colors">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
               <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Corpo Pastoral</span>
               <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                 Conheça nossos líderes
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
               
               {/* Leader 1 */}
               <div className="group flex flex-col items-center text-center animate-slide-up">
                 <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border-4 border-transparent group-hover:border-gold-500/30 transition-all">
                    {/* LOCAL IMAGE: Foto Apostolo Rodrigo (Path adjusted to public root) */}
                    <img 
                      src="/lider-rodrigo.jpg" 
                      alt="Apóstolo Rodrigo Salgado" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                 </div>
                 <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-600 transition-colors">
                   Apóstolo Rodrigo Salgado
                 </h3>
                 <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-sm">
                   Presidente e Fundador da Igreja Pleno em Cristo
                 </p>
                 <a 
                   href="#" 
                   className="bg-navy-900 dark:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-navy-800 dark:hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                 >
                   Instagram Oficial <ArrowRight size={20}/>
                 </a>
               </div>

               {/* Leader 2 */}
               <div className="group flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                 <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border-4 border-transparent group-hover:border-gold-500/30 transition-all">
                    {/* LOCAL IMAGE: Foto Bispa Cristina (Path adjusted to public root) */}
                    <img 
                      src="/lider-cristina.jpg" 
                      alt="Bispa Cristina Salgado" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                 </div>
                 <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-600 transition-colors">
                   Bispa Cristina Salgado
                 </h3>
                 <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-sm">
                   Vice-presidente da Igreja Pleno em Cristo
                 </p>
                 <a 
                   href="#" 
                   className="bg-navy-900 dark:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-navy-800 dark:hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                 >
                   Instagram Oficial <ArrowRight size={20}/>
                 </a>
               </div>

            </div>
         </div>
      </section>

      {/* OTHER PASTORS SECTION */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 animate-fade-in">
              <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Alguns de Nossos Pastores</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-6">
                Treinados para levar a palavra de Deus
              </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
             {[
               { name: "Bp. Rafael Lucas", role: "Bispo na Sede Igreja Pleno em Cristo", img: "/pastor-rafael.jpg" },
               { name: "Bp. Nadir Malaquias", role: "Bispa e Líder de Setor na Igreja Pleno em Cristo", img: "/pastora-nadir.jpg" },
               { name: "Bp. Edenilson Lopes", role: "Bispo e Líder de Setor na Igreja Pleno em Cristo", img: "/pastor-edenilson.jpg" },
               { name: "Bp. Gerson Luis", role: "Bispo e Líder Projeto Casa de Paz", img: "/pastor-gerson.jpg" },
               { name: "Bp. Marcelo Caetano", role: "Bispo na Sede Igreja Pleno em Cristo", img: "/pastor-marcelo.jpg" },
             ].map((pastor, idx) => (
               <div key={idx} className="flex flex-col items-start group animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                 <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg border border-slate-200 dark:border-navy-800 group-hover:shadow-xl transition-all">
                   <img 
                     src={pastor.img} 
                     alt={pastor.name} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                   />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white mb-1 group-hover:text-gold-600 transition-colors">
                   {pastor.name}
                 </h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                   {pastor.role}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Latest Media Grid */}
      <section className="py-24 px-4 bg-white dark:bg-navy-900 transition-colors border-t border-slate-100 dark:border-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold-600 font-bold tracking-wider text-sm uppercase block mb-2">Assista e Compartilhe</span>
              <h2 className="text-4xl font-serif font-bold text-navy-900 dark:text-white">Últimos Vídeos</h2>
            </div>
            <Link to="/midias" className="hidden md:flex items-center gap-2 text-navy-700 dark:text-slate-300 hover:text-gold-600 transition-colors font-medium">
              Ver todos <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((item) => (
               <div key={item} className="group cursor-pointer bg-white dark:bg-navy-900 rounded-xl p-3 shadow-sm hover:shadow-xl transition-all duration-300">
                 <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                   <img 
                     src={`/clipinicial-${item}.jpg`} 
                     alt="Thumbnail" 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                     <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
                       <Play size={20} fill="currentColor" className="text-navy-900 ml-1" />
                     </div>
                   </div>
                 </div>
                 <h3 className="text-navy-900 dark:text-white font-bold text-lg leading-tight mb-1 group-hover:text-gold-600 transition-colors px-1">
                   Culto de Celebração - Domingo
                 </h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 px-1">Há 2 dias • 1.2k visualizações</p>
               </div>
             ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/midias" className="inline-flex items-center gap-2 text-gold-600 font-bold">
                Ver todos os vídeos <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Recent Articles (Cards Grid) */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 animate-fade-in">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white mb-4">
               Veja alguns artigos recentes
             </h2>
             <div className="h-1 w-24 bg-gold-500 mx-auto rounded-full"></div>
           </div>

           {/* FEATURED ARTICLE (RODRIGO SALGADO) */}
           <div 
             onClick={() => setSelectedArticle(featuredArticle)}
             className="max-w-5xl mx-auto mb-16 cursor-pointer group relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-navy-900 border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-500 hover:-translate-y-1"
           >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                 <div className="h-96 lg:h-auto overflow-hidden relative">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10 opacity-60"></div>
                    <div className="absolute top-6 left-6">
                       <span className="bg-gold-500 text-navy-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-lg flex items-center gap-2 uppercase tracking-wide">
                         <Star size={14} fill="currentColor" /> Destaque
                       </span>
                    </div>
                 </div>
                 <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
                    <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3">
                      {featuredArticle.tag}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-6 leading-tight group-hover:text-gold-600 transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <button className="bg-navy-900 dark:bg-navy-800 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all shadow-lg">
                      Ler História Completa <ArrowRight size={18} />
                    </button>
                 </div>
              </div>
           </div>

           {/* OTHER ARTICLES GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {articles.map((article) => (
               <div 
                 key={article.id}
                 onClick={() => setSelectedArticle(article)}
                 className="group relative bg-white dark:bg-navy-900 rounded-2xl border border-slate-100 dark:border-navy-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/30 cursor-pointer overflow-hidden flex flex-col"
               >
                 {/* Image Top */}
                 <div className="h-56 overflow-hidden relative">
                   <img 
                     src={article.image} 
                     alt={article.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                   <div className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                     <Calendar size={12} /> {article.date}
                   </div>
                   <div className="absolute top-4 right-4 bg-navy-900/80 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                     {article.tag}
                   </div>
                 </div>

                 {/* Content */}
                 <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white mb-3 leading-tight group-hover:text-gold-600 transition-colors">
                     {article.title}
                   </h3>
                   <div className="w-10 h-1 bg-slate-200 dark:bg-navy-700 mb-4 rounded-full group-hover:bg-gold-500 transition-colors"></div>
                   <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                     {article.excerpt}
                   </p>
                   
                   <div className="pt-6 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between mt-auto">
                      <span className="text-gold-600 font-bold text-sm uppercase tracking-wide group-hover:underline flex items-center gap-2">
                        Ler Artigo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                      </span>
                      <span className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1">
                        <FileText size={12} /> Leitura
                      </span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedArticle(null)}>
          <div 
            className="bg-white dark:bg-navy-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="h-64 md:h-80 shrink-0 relative">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="animate-slide-up">
                  <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">{selectedArticle.tag}</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white shadow-md">{selectedArticle.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <span className="flex items-center gap-1"><Calendar size={14}/> {selectedArticle.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-1"><BookOpen size={14}/> 5 min de leitura</span>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedArticle.content}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-navy-800 flex justify-between items-center">
                <span className="font-serif font-bold text-navy-900 dark:text-white italic">Igreja Pleno em Cristo</span>
                <button 
                  className="flex items-center gap-2 text-gold-600 font-bold hover:text-gold-500"
                  onClick={() => {
                     // Logic to share would go here
                  }}
                >
                  <Instagram size={20} /> Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;