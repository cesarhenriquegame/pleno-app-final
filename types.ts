export interface Testimony {
  id: string;
  name: string;
  category: 'Restaurados' | 'Cura' | 'Casa de Recuperação' | 'Transformações';
  excerpt: string;
  fullText: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ProgramEvent {
  id: string;
  title: string;
  host: string;
  day: string;
  time: string;
  image: string;
  description: string;
}

export interface Devotional {
  verse: string;
  reference: string;
  message: string;
  prayer: string;
}

export interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  speak: (text: string) => void;
}

export interface AudioPlayerContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTrack: string;
  setTrack: (track: string) => void;
  volume: number;
  setVolume: (vol: number) => void;
  isRadioLive: boolean;
}