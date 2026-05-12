import { useState, useEffect, useRef } from 'react';

export default function TypewriterHeading({ number, title }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= title.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [started, title]);

  return (
    <div ref={ref} className="mb-8">
      <span
        className="font-mono text-sm tracking-[0.2em] uppercase text-amber"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {number} ·
      </span>
      <h2
        className="text-3xl md:text-4xl mt-2 text-cream leading-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
      >
        {started ? title.slice(0, visibleChars) : '\u00A0'}
        {started && !done && <span className="typewriter-cursor" />}
      </h2>
    </div>
  );
}
