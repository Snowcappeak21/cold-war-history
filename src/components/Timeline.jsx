import { useState, useEffect, useMemo } from 'react';
import content from '../content';

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const groups = useMemo(() => {
    const result = [];
    content.timeline.forEach((item) => {
      const last = result[result.length - 1];
      if (last && last[0].year === item.year) {
        last.push(item);
      } else {
        result.push([item]);
      }
    });
    return result;
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / docHeight));
      const idx = Math.round(progress * (groups.length - 1));
      setActiveIndex(idx);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [groups.length]);

  return (
    <div className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 hidden md:block">
      <div className="relative flex flex-col items-center">
        {groups.map((group, i) => {
          const isActive = i <= activeIndex;
          const isCurrent = i === activeIndex;
          const hasTwo = group.length > 1;

          return (
            <div key={`${group[0].year}-${i}`} className="relative">
              {i > 0 && (
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-5"
                  style={{
                    backgroundImage: isActive
                      ? 'repeating-linear-gradient(to bottom, #D4A574 0, #D4A574 3px, transparent 3px, transparent 6px)'
                      : 'repeating-linear-gradient(to bottom, #2a2520 0, #2a2520 3px, transparent 3px, transparent 6px)',
                  }}
                />
              )}

              <div className="relative flex items-center py-2.5">
                <div className="flex items-center gap-1.5">
                  {group.map((item, j) => (
                    <div
                      key={j}
                      className="w-2 h-2 rounded-full border transition-all duration-300"
                      style={{
                        borderColor: isActive ? '#D4A574' : '#2a2520',
                        backgroundColor:
                          item.type === 'world' && isActive
                            ? '#D4A574'
                            : 'transparent',
                        boxShadow: isCurrent
                          ? '0 0 10px rgba(212, 165, 116, 0.6)'
                          : 'none',
                        transform: isCurrent ? 'scale(1.4)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>

                <div
                  className="absolute whitespace-nowrap transition-all duration-300"
                  style={{
                    left: hasTwo ? '30px' : '20px',
                    opacity: isCurrent ? 1 : 0,
                    transform: isCurrent
                      ? 'translateX(0)'
                      : 'translateX(-4px)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: '#D4A574' }}
                  >
                    {group[0].year}
                  </span>
                  {hasTwo ? (
                    <div className="flex flex-col mt-0.5">
                      {group.map((item, j) => (
                        <span
                          key={j}
                          className="text-[10px] text-muted opacity-70 leading-tight"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] text-muted ml-2 opacity-70">
                      {group[0].label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div
          className="mt-4 flex flex-col gap-1"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span className="text-[9px] text-muted opacity-50">
              World event
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full border border-amber" />
            <span className="text-[9px] text-muted opacity-50">
              Robin's life
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
