import React, { useEffect, useRef } from 'react';
import { X, BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';
import { Book } from '../types';

interface BookOverlayProps {
  book: Book | null;
  onClose: () => void;
}

export const BookOverlay: React.FC<BookOverlayProps> = ({ book, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2B2623]/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}
    >
      <div 
        ref={modalRef}
        className="bg-[#E8E6E1] text-[#2B2623] w-full max-w-4xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-[600px] animate-[translateY_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-[#E8E6E1]/50 hover:bg-[#2B2623] hover:text-[#E8E6E1] rounded-full transition-colors interactive backdrop-blur"
        >
            <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-5/12 h-64 md:h-full bg-[#D6D3CD] relative shrink-0">
             <img 
                src={book.cover || book.image} 
                alt={book.title} 
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
             
             {/* Mobile Status Tag */}
             {book.status && (
                <div className="absolute bottom-4 left-4 bg-[#2B2623] text-[#E8E6E1] px-3 py-1 text-[10px] uppercase tracking-widest md:hidden">
                    {book.status}
                </div>
             )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
             <div className="mb-auto">
                 {book.status && (
                    <span className="hidden md:inline-block bg-[#2B2623] text-[#E8E6E1] px-3 py-1 text-[10px] uppercase tracking-widest mb-6">
                        {book.status}
                    </span>
                 )}
                 {book.category && (
                    <span className="block text-[#8C4B33] text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-4">
                        {book.category}
                    </span>
                 )}
                 
                 <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-2">{book.title}</h2>
                 <p className="text-sm md:text-base font-sans uppercase tracking-widest opacity-60 mb-8">{book.author}</p>
                 
                 <div className="space-y-2 text-sm font-sans opacity-70 border-l border-[#2B2623]/20 pl-4 py-2">
                    {book.rating && <p>Rating: <span className="text-[#8C4B33]">{book.rating}</span></p>}
                    {book.progress && <p>Progress: {book.progress}%</p>}
                    {book.priority && <p>Priority: {book.priority}</p>}
                    <p className="italic opacity-80 mt-2">"{book.quote || "A curated selection for the quiet moments."}"</p>
                 </div>
             </div>

             <div className="mt-12 space-y-4">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Acquire / Explore</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {book.goodreadsUrl && (
                        <a 
                            href={book.goodreadsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 border border-[#2B2623] py-4 px-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F3F1ED] transition-colors interactive group"
                        >
                            <BookOpen size={14} className="opacity-60 group-hover:opacity-100"/>
                            <span>Goodreads</span>
                            <ExternalLink size={10} className="ml-1 opacity-40"/>
                        </a>
                    )}
                    {book.amazonUrl && (
                        <a 
                            href={book.amazonUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#2B2623] text-[#E8E6E1] py-4 px-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-[#8C4B33] transition-colors interactive group"
                        >
                            <ShoppingCart size={14} className="opacity-60 group-hover:opacity-100"/>
                            <span>Amazon</span>
                        </a>
                    )}
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};