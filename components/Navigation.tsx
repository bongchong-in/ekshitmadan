import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

interface SpineNavProps {
  scrollProgress: number;
}

export const SpineNav: React.FC<SpineNavProps> = ({ scrollProgress }) => (
  <div className="fixed left-0 top-0 h-full w-12 md:w-16 border-r border-[#2B2623]/10 z-40 flex flex-col items-center justify-between py-8 bg-[#E8E6E1] hidden md:flex transition-colors duration-700">
    <div className="text-[#2B2623] font-bold text-lg writing-vertical rotate-180">BBR.</div>
    <div className="flex-1 w-[1px] bg-[#2B2623]/10 my-8 relative">
      <div 
        className="absolute top-0 left-0 w-full bg-[#8C4B33] transition-all duration-100 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      ></div>
    </div>
    <div className="text-[#2B2623]/40 text-[10px] uppercase tracking-widest writing-vertical rotate-180">
      Est. 2024
    </div>
  </div>
);

interface MobileNavProps {
  isDark?: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isDark = false }) => (
  <div 
    className={`
      fixed top-0 left-0 w-full px-6 pt-6 pb-12 flex justify-between items-start z-50 md:hidden 
      transition-colors duration-1000 pointer-events-none
      ${isDark 
        ? 'text-[#E8E6E1] bg-gradient-to-b from-[#1A1816] via-[#1A1816]/90 to-transparent' 
        : 'text-[#2B2623] bg-gradient-to-b from-[#E8E6E1] via-[#E8E6E1]/90 to-transparent'}
    `}
  >
    <span className="font-serif font-bold text-lg pointer-events-auto">brownboy.reader</span>
    <MapPin size={16} className="mt-1 pointer-events-auto" />
  </div>
);

export const InkStampSeal: React.FC = () => (
  <a 
    href="https://wa.me/917017433036" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 interactive"
  >
    <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-[#2B2623] opacity-80"></div>
      <div className="absolute inset-1 rounded-full border border-dashed border-[#2B2623] opacity-40 animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute inset-2 bg-[#2B2623] rounded-full shadow-lg flex items-center justify-center">
         <MessageCircle className="text-[#E8E6E1] w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
      </div>
      <div className="absolute top-1 right-1 w-3 h-3 bg-[#8C4B33] rounded-full border-2 border-[#E8E6E1]"></div>
    </div>
  </a>
);