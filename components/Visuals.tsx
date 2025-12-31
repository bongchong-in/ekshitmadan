import React, { useEffect, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const Grain: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] mix-blend-multiply">
    <svg className='w-full h-full'>
      <filter id='noise'>
        <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noise)' />
    </svg>
  </div>
);

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || (target.closest && target.closest('.interactive')))) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed z-[200] pointer-events-none mix-blend-difference hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hovered ? 2.5 : 1})`,
        transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease'
      }}
    >
      <div className="w-4 h-4 bg-[#E8E6E1] rounded-full opacity-80 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
    </div>
  );
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useOnScreen(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};