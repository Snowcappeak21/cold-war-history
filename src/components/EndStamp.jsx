import { useEffect, useRef, useState } from 'react';

export default function EndStamp() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center py-20">
      <div
        ref={ref}
        className="px-5 py-2.5 border-2 border-amber text-amber uppercase tracking-[0.3em] text-sm transition-all duration-600 ease-out"
        style={{
          fontFamily: 'var(--font-mono)',
          transform: visible
            ? 'rotate(-4deg) scale(1)'
            : 'rotate(-4deg) scale(0.95)',
          opacity: visible ? 1 : 0,
          borderRadius: '2px',
        }}
      >
        End of File
      </div>
    </div>
  );
}
