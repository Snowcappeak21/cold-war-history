import { useEffect, useRef } from 'react';

export default function ParallaxMap() {
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const offset = window.scrollY * 0.12;
        ref.current.style.backgroundPositionY = `${-offset}px`;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: "url('/images/hero-map.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        opacity: 0.35,
      }}
    />
  );
}
