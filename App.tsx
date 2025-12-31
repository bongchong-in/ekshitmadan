import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Search, Play, Mail, Instagram, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { DESK_BOOKS, COLLECTION, CINEMA_COLLECTION } from './data';
import { Book, Film } from './types';
import { Grain, CustomCursor, Reveal } from './components/Visuals';
import { SpineNav, MobileNav, InkStampSeal } from './components/Navigation';
import { CinemaIndexOverlay } from './components/CinemaIndexOverlay';
import { BookOverlay } from './components/BookOverlay';
import { FilmOverlay } from './components/FilmOverlay';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('default');
  const [filter, setFilter] = useState('All');
  const [offset, setOffset] = useState(0);
  const [showCinemaIndex, setShowCinemaIndex] = useState(false);
  const [showAllCollection, setShowAllCollection] = useState(false);
  
  // Modal States
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  // Email Subscription State
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Refs for scrolling
  const cinemaScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollProgress(current / total);
      setOffset(current);

      const cinemaSection = document.getElementById('cinema');
      if (cinemaSection) {
        const rect = cinemaSection.getBoundingClientRect();
        // Adjust trigger point for smoother transition
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {
          setActiveSection('cinema');
        } else {
          setActiveSection('default');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setSubmitStatus('error');
        return;
    }

    setSubmitting(true);
    setSubmitStatus('idle');
    
    // Google Forms Configuration
    const FORM_ID = "1FAIpQLScH3UMIMBfbEJZnrNIoeltCLuGqBZxSlE1Mw63jKeZoGWfCEw";
    const ENTRY_ID = "entry.2087327006";
    const url = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
    
    const formData = new FormData();
    formData.append(ENTRY_ID, email);

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Forms submission from client-side
        body: formData
      });
      
      // Since 'no-cors' returns an opaque response, we assume success if no network error occurred
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Subscription error:", error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const scrollCinema = (direction: 'left' | 'right') => {
    if (cinemaScrollRef.current) {
        const scrollAmount = window.innerWidth < 768 ? 280 : 350;
        cinemaScrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  const isDark = activeSection === 'cinema';
  const filteredCollection = filter === 'All' ? COLLECTION : COLLECTION.filter(b => b.category === filter);
  // Ensure 'Comfort' is included in the categories
  const categories = ['All', 'Must Reads', 'Emotion', 'Christmas', 'Feels Like Home', 'Comfort'];

  return (
    <div 
      className={`
        relative min-h-screen font-serif transition-colors duration-1000 ease-in-out cursor-default md:cursor-none
        ${isDark ? 'bg-[#1A1816] text-[#E8E6E1]' : 'bg-[#E8E6E1] text-[#2B2623]'}
      `}
    >
      <CustomCursor />
      <Grain />
      <SpineNav scrollProgress={scrollProgress} />
      <MobileNav isDark={isDark} />
      <InkStampSeal />
      
      <CinemaIndexOverlay 
        isOpen={showCinemaIndex} 
        onClose={() => setShowCinemaIndex(false)} 
        onSelectFilm={(film) => setSelectedFilm(film)}
      />
      <BookOverlay book={selectedBook} onClose={() => setSelectedBook(null)} />
      <FilmOverlay film={selectedFilm} onClose={() => setSelectedFilm(null)} />

      <div className={`fixed inset-0 border-[12px] md:border-[20px] border-transparent pointer-events-none z-30 ${isDark ? '' : 'border-t-[#E8E6E1] border-b-[#E8E6E1]'}`}></div>

      <main className="w-full md:pl-16">
        
        {/* --- 01. HERO --- */}
        <section className="min-h-screen relative flex flex-col justify-between p-6 md:p-20 overflow-hidden">
          <div 
            className="absolute right-0 top-20 opacity-[0.04] pointer-events-none select-none transition-transform duration-75 ease-linear"
            style={{ transform: `translateY(${offset * 0.2}px)` }}
          >
            <h1 className="text-[20vw] leading-[0.8] tracking-tighter">SOLITUDE</h1>
          </div>

          <Reveal>
            <div className="relative z-10 flex justify-between items-start pt-16 md:pt-0">
              <div className="flex flex-col">
                <span className="text-xs font-sans uppercase tracking-[0.3em] mb-2 text-[#8C4B33]">Dehradun, India</span>
                <span className="text-xs font-sans uppercase tracking-widest opacity-60">Lat 30.3165° N</span>
              </div>
              <div className="hidden md:block text-right">
                  <span className="block text-xs font-sans uppercase tracking-widest opacity-60">Curated By</span>
                  <span className="font-bold">Ekshit Madan</span>
              </div>
            </div>
          </Reveal>

          <div className="relative z-10 mt-10 md:mt-20 mb-20">
            <Reveal delay={200}>
              <h2 className="text-6xl md:text-9xl font-light tracking-tighter leading-[0.9] mix-blend-multiply">
                The Quiet <br/>
                <span className="ml-12 md:ml-32 italic font-serif">Observer.</span>
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 md:ml-36 max-w-md border-l border-[#2B2623] pl-6 py-2">
                <p className="font-sans text-sm md:text-base leading-relaxed opacity-80">
                  A digital archive of slow living. Curating the intersection of literary fiction, cinema, and the feeling of rain on a tin roof.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={600}>
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center animate-bounce">
                <ArrowDown size={16} />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest opacity-60">Begin the Ascent</span>
            </div>
          </Reveal>
        </section>

        {/* --- 02. IDENTITY --- */}
        <section className="min-h-screen py-20 px-6 md:px-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 md:sticky md:top-32">
               <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8C4B33]">01. Identity</span>
            </div>
            <div className="md:col-span-10 relative">
               <div 
                  className="absolute -top-16 -left-10 text-[8rem] md:text-[12rem] opacity-5 font-bold select-none pointer-events-none z-0 transition-transform duration-75 ease-linear"
                  style={{ transform: `translateY(${(offset - window.innerHeight) * 0.15}px)` }}
               >
                 SCOUT
               </div>
               
               <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <Reveal className="w-full md:w-1/2">
                    <div className="aspect-[3/4] bg-[#D6D3CD] relative overflow-hidden group interactive rounded-sm shadow-xl">
                       <img 
                         src="https://raw.githubusercontent.com/bongchong-in/ekshitmadan/refs/heads/main/images/profile.jpg" 
                         alt="The Reader" 
                         className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </Reveal>

                  <div className="w-full md:w-1/2 space-y-8">
                     <Reveal delay={200}>
                       <p className="text-2xl md:text-3xl leading-tight">
                          "I don't just recommend books. I recommend <span className="italic text-[#8C4B33]">feelings</span>."
                       </p>
                     </Reveal>
                     <Reveal delay={400}>
                       <div className="font-sans text-sm md:text-base leading-relaxed opacity-70 space-y-6">
                          <p>
                             Based in the foothills of the Himalayas, I bridge the gap between pop culture and literary fiction. My work is an invitation to slow down.
                          </p>
                       </div>
                     </Reveal>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- 03. ON MY DESK --- */}
        <section className="py-32 px-6 md:px-20 bg-[#E3E0D9] border-t border-[#2B2623]/10">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-2 md:sticky md:top-32 h-fit">
                 <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8C4B33] block mb-2">02. The Desk</span>
                 <h3 className="text-3xl font-serif leading-none">Current<br/>Rotation</h3>
              </div>

              <div className="md:col-span-10">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DESK_BOOKS.map((book, index) => (
                       <Reveal key={book.id} delay={index * 200} className="h-full">
                         <div 
                            className="group relative flex flex-col interactive h-full cursor-pointer"
                            onClick={() => setSelectedBook(book)}
                         >
                            <div className="aspect-[2/3] bg-gray-200 mb-6 relative shadow-lg transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
                               <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                               <div className="absolute inset-0 bg-[#2B2623]/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity"></div>
                               <div className="absolute -top-3 -right-3 bg-[#2B2623] text-[#E8E6E1] px-3 py-1 text-[10px] uppercase tracking-widest shadow-md transform rotate-2 group-hover:rotate-0 transition-transform">
                                  {book.status}
                               </div>
                            </div>

                            <div className="mt-auto">
                               <h4 className="text-xl font-serif leading-tight group-hover:text-[#8C4B33] transition-colors">{book.title}</h4>
                               <p className="text-xs font-sans uppercase tracking-widest opacity-50 mt-1">{book.author}</p>
                               <div className="mt-4 pt-4 border-t border-[#2B2623]/10 text-xs font-sans opacity-60">
                                  {book.progress && <span>{book.progress}% Completed</span>}
                                  {book.rating && <span>Rating: {book.rating}</span>}
                                  {book.priority && <span>Priority: {book.priority}</span>}
                               </div>
                            </div>
                         </div>
                       </Reveal>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- 04. THE COLLECTION --- */}
        <section className="py-32 px-6 md:px-20 bg-[#E8E6E1]">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3 md:sticky md:top-32 h-fit">
                 <Reveal>
                   <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#8C4B33] block mb-6">03. Collection</span>
                   <h3 className="text-3xl font-serif leading-none mb-8">The<br/>Stacks</h3>
                 </Reveal>
                 
                 {/* Mobile: Horizontal scrollable pills. Desktop: Vertical list. */}
                 <div className="flex overflow-x-auto md:flex-col gap-4 pb-4 md:pb-0 hide-scrollbar snap-x">
                    {categories.map((cat, idx) => (
                       <div key={cat} className="snap-start flex-shrink-0">
                         <button 
                            onClick={() => {
                                setFilter(cat);
                                setShowAllCollection(false);
                            }}
                            className={`
                               block text-sm font-sans tracking-wide transition-all duration-300 interactive px-4 py-2 md:px-0 md:py-0 border rounded-full md:border-0 md:rounded-none whitespace-nowrap
                               ${filter === cat 
                                 ? 'text-[#E8E6E1] bg-[#2B2623] md:bg-transparent md:text-[#2B2623] md:font-bold md:pl-4 md:border-l-2 md:border-[#8C4B33] border-[#2B2623]' 
                                 : 'text-[#2B2623]/60 hover:text-[#2B2623] border-[#2B2623]/20 md:border-0'}
                            `}
                         >
                            {cat}
                         </button>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="md:col-span-9">
                 <div className="flex justify-end mb-8 border-b border-[#2B2623]/10 pb-4">
                    <span className="text-[10px] font-sans uppercase tracking-widest opacity-40 flex items-center gap-2">
                       <Search size={12}/> {filteredCollection.length} Volumes Found
                    </span>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
                    {filteredCollection.map((book, idx) => (
                       <Reveal 
                        key={book.id} 
                        delay={idx % 3 * 100}
                        className={idx >= 4 && !showAllCollection ? 'hidden md:block' : ''}
                       >
                         <div 
                            className="group cursor-pointer interactive"
                            onClick={() => setSelectedBook(book)}
                         >
                            <div className="relative aspect-[2/3] mb-4 perspective-1000">
                               <div className="w-full h-full relative transform transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-y-12 group-hover:shadow-2xl shadow-sm bg-white overflow-hidden">
                                  <img 
                                    src={book.image} 
                                    alt={book.title} 
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                                  />
                                  <div className="absolute bottom-0 left-0 w-full bg-[#2B2623]/90 backdrop-blur text-[#E8E6E1] p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                     <span className="text-[10px] font-sans uppercase tracking-widest">{book.category}</span>
                                  </div>
                               </div>
                            </div>
                            <div className="text-center md:text-left">
                               <h4 className="font-serif text-sm md:text-lg leading-tight mb-1">{book.title}</h4>
                               <p className="text-[10px] font-sans uppercase tracking-widest opacity-50">{book.author}</p>
                            </div>
                         </div>
                       </Reveal>
                    ))}
                 </div>
                 
                 {/* Mobile Load More Button */}
                 {!showAllCollection && filteredCollection.length > 4 && (
                    <div className="flex justify-center mt-12 md:hidden">
                        <button 
                            onClick={() => setShowAllCollection(true)}
                            className="group flex items-center gap-2 text-xs font-sans uppercase tracking-widest hover:text-[#8C4B33] transition-colors interactive border-b border-[#2B2623]/20 pb-1"
                        >
                            View More <Plus size={12} className="transform group-hover:rotate-90 transition-transform"/>
                        </button>
                    </div>
                 )}
              </div>
           </div>
        </section>

        {/* --- 05. CINEMA (Film Reel) --- */}
        <section id="cinema" className="min-h-screen py-24 md:py-32 relative flex flex-col justify-center bg-[#1A1816] text-[#E8E6E1] overflow-hidden border-t border-[#E8E6E1]/5">
           
           {/* Decorative Background Elements */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8E6E1]/20 to-transparent"></div>
           <div className="absolute -left-20 top-40 w-96 h-96 bg-[#8C4B33] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>

           <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                 
                 {/* Header / Info Column */}
                 <div className="w-full md:w-1/3 flex flex-col justify-center z-20">
                    <Reveal>
                      <span className="text-[#8C4B33] font-sans text-xs font-bold uppercase tracking-[0.25em] mb-6 block">
                        04. Cinema Index
                      </span>
                      <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] mb-8">
                        Visual <br/>
                        <span className="italic opacity-50">Symphony.</span>
                      </h2>
                    </Reveal>
                    
                    <Reveal delay={200}>
                      <div className="pl-6 border-l border-[#E8E6E1]/20 space-y-6">
                        <p className="font-sans text-sm md:text-base leading-relaxed opacity-60 text-justify">
                           Cinema that prioritizes the unspoken. A curated selection of films where color grading, composition, and silence do the heavy lifting.
                        </p>
                        <button 
                           onClick={() => setShowCinemaIndex(true)}
                           className="group flex items-center gap-4 text-xs font-sans uppercase tracking-widest hover:text-[#8C4B33] transition-all duration-300 interactive"
                        >
                           <span className="border-b border-[#E8E6E1]/30 pb-1 group-hover:border-[#8C4B33]">Open Full Index</span>
                           <Play size={10} className="transform group-hover:translate-x-1 transition-transform" fill="currentColor"/>
                        </button>
                      </div>
                    </Reveal>
                 </div>

                 {/* Reel / Gallery Column */}
                 <div className="w-full md:w-2/3 min-w-0 relative">
                    
                    {/* Desktop Navigation Controls */}
                    <div className="hidden md:flex justify-end gap-4 mb-8 pr-16 relative z-30">
                        <button 
                            onClick={() => scrollCinema('left')}
                            className="w-12 h-12 rounded-full border border-[#E8E6E1]/20 flex items-center justify-center hover:bg-[#E8E6E1] hover:text-[#1A1816] transition-all duration-300 interactive group backdrop-blur-sm"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scrollCinema('right')}
                            className="w-12 h-12 rounded-full border border-[#E8E6E1]/20 flex items-center justify-center hover:bg-[#E8E6E1] hover:text-[#1A1816] transition-all duration-300 interactive group backdrop-blur-sm"
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    <Reveal delay={300}>
                      <div 
                        ref={cinemaScrollRef}
                        className="flex gap-6 overflow-x-auto pb-12 pt-4 w-full hide-scrollbar snap-x scroll-smooth"
                      >
                         {CINEMA_COLLECTION.map((film) => (
                             <div 
                                key={film.id} 
                                className="relative shrink-0 w-[260px] md:w-[300px] group cursor-pointer interactive snap-start"
                                onClick={() => setSelectedFilm(film)}
                             >
                                <div className="aspect-[2/3] bg-[#000] relative overflow-hidden mb-6 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
                                   <div className="absolute inset-0 bg-[#2B2623] z-0"></div>
                                   <img 
                                      src={film.image} 
                                      alt={film.title} 
                                      className="w-full h-full object-cover transition-all duration-700 ease-out relative z-10"
                                   />
                                   
                                   <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 bg-gradient-to-b from-black/40 via-transparent to-black/80">
                                      <div className="self-end w-8 h-8 rounded-full bg-[#E8E6E1] text-[#1A1816] flex items-center justify-center">
                                         <Play size={12} fill="currentColor" className="ml-0.5"/>
                                      </div>
                                      <p className="font-serif italic text-lg leading-tight text-[#E8E6E1] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">"{film.quote}"</p>
                                   </div>
                                </div>

                                <div className="space-y-1">
                                   <h4 className="font-serif text-xl md:text-2xl text-[#E8E6E1] group-hover:text-[#8C4B33] transition-colors duration-300">{film.title}</h4>
                                   <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest opacity-40">
                                      <span>{film.director}</span>
                                      <span>{film.year}</span>
                                   </div>
                                </div>
                             </div>
                         ))}
                         {/* Spacer for end of scroll */}
                         <div className="shrink-0 w-8 md:w-16"></div>
                      </div>
                    </Reveal>
                 </div>

              </div>
           </div>
        </section>

        {/* --- 06. FOOTER --- */}
        <section className="py-32 px-6 md:px-20 bg-[#E8E6E1] text-[#2B2623] relative">
           <div className="max-w-4xl mx-auto border border-[#2B2623] p-12 md:p-24 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E8E6E1] px-6">
                 <Mail size={32} className="text-[#2B2623]" strokeWidth={1} />
              </div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">The Sunday Letters</h2>
                <p className="font-sans text-sm md:text-base opacity-60 max-w-lg mx-auto mb-10">
                   A weekly dispatch from the mountains. Coffee recipes, book recommendations, and quiet thoughts.
                </p>
                
                {/* Email Form */}
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-0 max-w-md mx-auto border-b border-[#2B2623] transition-opacity duration-300">
                   <input 
                      type="email" 
                      value={email}
                      onChange={(e) => {
                         setEmail(e.target.value);
                         if (submitStatus === 'error') setSubmitStatus('idle');
                      }}
                      placeholder="Enter your email" 
                      disabled={submitting || submitStatus === 'success'}
                      className="flex-1 bg-transparent py-4 px-2 focus:outline-none font-serif placeholder:italic text-center md:text-left interactive text-base disabled:opacity-50"
                   />
                   <button 
                      type="submit"
                      disabled={submitting || submitStatus === 'success'}
                      className="py-4 px-6 font-sans text-xs font-bold uppercase tracking-widest hover:text-[#8C4B33] interactive disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                      {submitting ? 'Sending...' : submitStatus === 'success' ? 'Joined' : 'Send'}
                   </button>
                </form>
                
                {/* Feedback Messages */}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs mt-4 font-sans uppercase tracking-widest animate-pulse">
                     Please enter a valid email address.
                  </p>
                )}
                {submitStatus === 'success' && (
                  <p className="text-[#8C4B33] text-xs mt-4 font-sans uppercase tracking-widest">
                     Welcome to the solitude.
                  </p>
                )}

              </Reveal>
           </div>
           <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans uppercase tracking-widest opacity-40">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                <span>© 2024 Ekshit Madan</span>
                <span className="hidden md:inline">•</span>
                <span>Designed, gifted, supported by <a href="https://mxsstudio.edgentiq.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C4B33] interactive underline decoration-1 underline-offset-2">MxS Studio</a> ❤️</span>
              </div>
              <div className="flex gap-8 mt-4 md:mt-0">
                 <a href="https://www.instagram.com/brownboy.reader" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C4B33] flex items-center gap-2 interactive"><Instagram size={12}/> Instagram</a>
                 <a href="mailto:ekshitmadan@gmail.com" className="hover:text-[#8C4B33] interactive">Email</a>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}