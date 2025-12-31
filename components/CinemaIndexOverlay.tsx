import React from 'react';
import { X, Play } from 'lucide-react';
import { CINEMA_COLLECTION } from '../data';
import { Film } from '../types';

interface CinemaIndexOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFilm: (film: Film) => void;
}

export const CinemaIndexOverlay: React.FC<CinemaIndexOverlayProps> = ({ isOpen, onClose, onSelectFilm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1A1816] text-[#E8E6E1] overflow-y-auto animate-[fadeIn_0.5s_ease-out] overscroll-contain">
      <div className="fixed top-6 right-6 z-[110] safe-top">
        <button onClick={onClose} className="p-2 rounded-full border border-[#E8E6E1]/20 hover:bg-[#E8E6E1] hover:text-[#1A1816] transition-colors interactive bg-[#1A1816]">
          <X size={24} />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif mb-12 text-center text-[#8C4B33]">The Cinema Index</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {CINEMA_COLLECTION.map((film) => (
            <div 
                key={film.id} 
                className="group cursor-pointer interactive"
                onClick={() => onSelectFilm(film)}
            >
              <div className="aspect-[2/3] bg-black relative overflow-hidden rounded-sm mb-4 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={film.image} 
                  alt={film.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="p-3 bg-white/10 backdrop-blur rounded-full">
                      <Play size={24} fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm md:text-lg font-serif leading-tight">{film.title}</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{film.director} • {film.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};