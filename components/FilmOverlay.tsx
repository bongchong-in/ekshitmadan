import React, { useEffect, useRef } from 'react';
import { X, Film as FilmIcon, ExternalLink } from 'lucide-react';
import { Film } from '../types';

interface FilmOverlayProps {
  film: Film | null;
  onClose: () => void;
}

export const FilmOverlay: React.FC<FilmOverlayProps> = ({ film, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (film) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div 
        className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-[#000]/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}
    >
      <div 
        ref={modalRef}
        className="bg-[#1A1816] text-[#E8E6E1] w-full max-w-4xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-[600px] border border-[#E8E6E1]/10 animate-[translateY_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#E8E6E1] hover:text-[#1A1816] rounded-full transition-colors interactive backdrop-blur border border-[#E8E6E1]/20"
        >
            <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-5/12 h-64 md:h-full bg-black relative shrink-0">
             <img 
                src={film.image} 
                alt={film.title} 
                className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] to-transparent md:hidden"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
             <div className="mb-auto">
                 <div className="flex items-center gap-3 mb-6 text-[#8C4B33] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                    <FilmIcon size={14} />
                    <span>Cinema Index</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-2">{film.title}</h2>
                 <p className="text-sm md:text-base font-sans uppercase tracking-widest opacity-60 mb-8">{film.director} • {film.year}</p>
                 
                 <div className="space-y-4 text-lg font-serif italic opacity-80 border-l border-[#E8E6E1]/20 pl-6 py-2">
                    <p>"{film.quote}"</p>
                 </div>
             </div>

             <div className="mt-12 space-y-4">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Reference</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {film.imdbUrl && (
                        <a 
                            href={film.imdbUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#E8E6E1] text-[#1A1816] py-4 px-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-[#8C4B33] hover:text-[#E8E6E1] transition-colors interactive group"
                        >
                            <span>Explore on IMDB</span>
                            <ExternalLink size={14} className="opacity-60 group-hover:opacity-100"/>
                        </a>
                    )}
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};
