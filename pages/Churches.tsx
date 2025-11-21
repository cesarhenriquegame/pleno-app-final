import React, { useState } from 'react';
import { MapPin, Clock, Calendar, ChevronDown, ChevronUp, Navigation, Building2 } from 'lucide-react';

interface ChurchData {
  id: string;
  name: string;
  address: string;
  schedule: { day: string; time: string }[];
  mapLink: string;
}

interface RegionData {
  region: string;
  churches: ChurchData[];
}

const churchesData: RegionData[] = [
  {
    region: 'Zona Leste | SP',
    churches: [
      {
        id: 'zl-1',
        name: 'IEPC Cidade Tiradentes',
        address: 'Av. dos Metalúrgicos, 1234 - Cidade Tiradentes, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00 - Culto da Família' },
          { day: 'Quarta', time: '19:30 - Culto de Ensino' },
          { day: 'Sexta', time: '20:00 - Libertação' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zl-2',
        name: 'IEPC Itaquera',
        address: 'Rua Flores do Piauí, 450 - Itaquera, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quinta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zl-3',
        name: 'IEPC São Mateus',
        address: 'Av. Mateo Bei, 3000 - São Mateus, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '09:00 e 18:00' },
          { day: 'Quarta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zl-4',
        name: 'IEPC Guaianases',
        address: 'Estrada de Poá, 500 - Guaianases, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:30' },
          { day: 'Sexta', time: '19:30' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zl-5',
        name: 'IEPC Penha',
        address: 'Rua Rodovalho Júnior, 100 - Penha, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quarta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      }
    ]
  },
  {
    region: 'Zona Sul | SP',
    churches: [
      {
        id: 'zs-1',
        name: 'IEPC Santo Amaro',
        address: 'Av. João Dias, 200 - Santo Amaro, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Terça', time: '19:30' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zs-2',
        name: 'IEPC Grajaú',
        address: 'Av. Dona Belmira Marin, 800 - Grajaú, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '19:00' },
          { day: 'Quinta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zs-3',
        name: 'IEPC Interlagos',
        address: 'Av. Interlagos, 1500 - Interlagos, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '10:00 e 18:00' },
          { day: 'Quarta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      }
    ]
  },
  {
    region: 'Zona Oeste | SP',
    churches: [
      {
        id: 'zo-1',
        name: 'IEPC Lapa',
        address: 'Rua Clélia, 400 - Lapa, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quinta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'zo-2',
        name: 'IEPC Pinheiros',
        address: 'Rua Teodoro Sampaio, 1000 - Pinheiros, São Paulo - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quarta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      }
    ]
  },
  {
    region: 'Outras Cidades',
    churches: [
      {
        id: 'oc-1',
        name: 'IEPC Guarulhos',
        address: 'Av. Tiradentes, 500 - Centro, Guarulhos - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quarta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'oc-2',
        name: 'IEPC Osasco',
        address: 'Av. dos Autonomistas, 3000 - Centro, Osasco - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Sexta', time: '20:00' }
        ],
        mapLink: 'https://maps.google.com'
      },
      {
        id: 'oc-3',
        name: 'IEPC Diadema',
        address: 'Av. Fábio Eduardo Ramos Esquivel, 200 - Centro, Diadema - SP',
        schedule: [
          { day: 'Domingo', time: '18:00' },
          { day: 'Quarta', time: '19:30' }
        ],
        mapLink: 'https://maps.google.com'
      }
    ]
  }
];

const Churches: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleChurch = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      
      {/* Hero Section - Dark Header */}
      <section className="relative pt-32 pb-20 px-4 bg-navy-900 overflow-hidden">
        {/* LOCAL IMAGE: Banner Churches */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/banner-igrejas.jpg')" }}></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Encontre a Pleno em Cristo mais próxima de você
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Conheça Nossas Igrejas
          </h1>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            Uma família de fé espalhada por diversos regiões, unida pelo mesmo propósito de adorar a Deus.
          </p>
        </div>
      </section>

      {/* List Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        {churchesData.map((regionData, idx) => (
          <div key={idx} className="mb-16 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 dark:text-white shrink-0">
                {regionData.region}
              </h2>
              <div className="h-px bg-gold-500/30 w-full"></div>
            </div>

            <div className="space-y-4">
              {regionData.churches.map((church) => {
                const isOpen = expandedId === church.id;

                return (
                  <div key={church.id} className="group">
                    {/* Button / Closed Card */}
                    <button
                      onClick={() => toggleChurch(church.id)}
                      className={`w-full text-left transition-all duration-300 rounded-xl overflow-hidden flex items-center justify-between px-6 py-5 md:px-8
                        ${isOpen 
                          ? 'bg-navy-900 text-white shadow-lg transform scale-[1.01]' 
                          : 'bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:shadow-md border border-slate-100 dark:border-navy-800 hover:border-gold-500/50'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${isOpen ? 'bg-gold-500 text-navy-900' : 'bg-slate-100 dark:bg-navy-800 text-gold-500'}`}>
                          <Building2 size={24} />
                        </div>
                        <span className={`text-lg md:text-xl font-bold ${isOpen ? 'text-white' : 'text-navy-900 dark:text-white'}`}>
                          {church.name}
                        </span>
                      </div>
                      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-500' : 'text-slate-400'}`}>
                        <ChevronDown size={24} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out
                        ${isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                    >
                      <div className="bg-white dark:bg-navy-900 border-2 border-gold-500 rounded-xl p-6 md:p-8 shadow-xl mx-1 md:mx-2 relative">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Info Column */}
                          <div className="space-y-6">
                            <div>
                              <h3 className="flex items-center gap-2 text-gold-600 font-bold text-sm uppercase tracking-wide mb-2">
                                <MapPin size={16} /> Endereço Completo
                              </h3>
                              <p className="text-xl text-navy-900 dark:text-white font-medium leading-relaxed">
                                {church.address}
                              </p>
                            </div>

                            <div>
                              <h3 className="flex items-center gap-2 text-gold-600 font-bold text-sm uppercase tracking-wide mb-3">
                                <Clock size={16} /> Horário dos Cultos
                              </h3>
                              <ul className="space-y-3">
                                {church.schedule.map((s, i) => (
                                  <li key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-navy-950 rounded-lg border border-slate-100 dark:border-navy-800">
                                    <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold">
                                      <Calendar size={16} className="text-slate-400" />
                                      {s.day}
                                    </div>
                                    <span className="text-slate-600 dark:text-slate-300 font-mono text-sm">{s.time}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex gap-4 pt-4">
                              <a 
                                href={church.mapLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-gold-500/20"
                              >
                                <Navigation size={18} /> Como Chegar
                              </a>
                              <button className="flex-1 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                Visitar Igreja
                              </button>
                            </div>
                          </div>

                          {/* Map Column */}
                          <div className="h-64 lg:h-auto rounded-lg overflow-hidden border border-slate-200 dark:border-navy-700 shadow-inner relative bg-slate-100">
                            <iframe 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              loading="lazy" 
                              allowFullScreen 
                              title={`Mapa ${church.name}`}
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0981693191755!2d-46.65206592380884!3d-23.564917561731147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59541c6c79c3%3A0x36b90a85f0f8cb33!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709235000000!5m2!1spt-BR!2sbr"
                              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Churches;