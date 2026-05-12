import { useEffect } from 'react';

export default function LampLight() {
  useEffect(() => {
    const root = document.getElementById('root');

    function handleMouseMove(e) {
      root.style.setProperty('--mouse-x', `${e.clientX}px`);
      root.style.setProperty('--mouse-y', `${e.clientY}px`);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="lamp-light" />;
}
