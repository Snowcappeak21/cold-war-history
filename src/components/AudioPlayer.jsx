import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ title, audioFile }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => setDuration(audio.duration || 0);
    const handleTime = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('timeupdate', handleTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('timeupdate', handleTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isDragging]);

  function togglePlay() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }

  function formatTime(t) {
    if (!t || isNaN(t)) return '00:00';
    const m = Math.floor(t / 60).toString().padStart(2, '0');
    const s = Math.floor(t % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function handleScrub(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = x * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  }

  function handleScrubStart(e) {
    setIsDragging(true);
    handleScrub(e);

    function onMove(ev) { handleScrub(ev); }
    function onUp() {
      setIsDragging(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-[#1a1611] border border-[#2a2520] rounded-lg p-5 max-w-lg">
      <audio ref={audioRef} src={audioFile} preload="metadata" />

      {/* Title bar */}
      <div
        className="text-xs tracking-[0.15em] uppercase text-muted mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {title}
      </div>

      {/* Reel deck */}
      <div className="flex items-center justify-center gap-8 mb-4">
        {/* Left reel */}
        <div className="relative w-14 h-14">
          <div
            className={`w-full h-full rounded-full border-2 border-[#3a3530] flex items-center justify-center ${isPlaying ? 'reel-spinning' : ''}`}
          >
            <div className="w-3 h-3 rounded-full bg-[#3a3530]" />
            <div className="absolute inset-2 rounded-full border border-[#2a2520]" />
            {/* Spokes */}
            <div className="absolute w-[1px] h-full bg-[#2a2520] left-1/2" />
            <div className="absolute w-full h-[1px] bg-[#2a2520] top-1/2" />
          </div>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full border border-amber/40 flex items-center justify-center hover:border-amber transition-colors cursor-pointer"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="1" width="3.5" height="12" fill="#D4A574" />
              <rect x="8.5" y="1" width="3.5" height="12" fill="#D4A574" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="#D4A574" />
            </svg>
          )}
        </button>

        {/* Right reel */}
        <div className="relative w-14 h-14">
          <div
            className={`w-full h-full rounded-full border-2 border-[#3a3530] flex items-center justify-center ${isPlaying ? 'reel-spinning' : ''}`}
          >
            <div className="w-3 h-3 rounded-full bg-[#3a3530]" />
            <div className="absolute inset-2 rounded-full border border-[#2a2520]" />
            <div className="absolute w-[1px] h-full bg-[#2a2520] left-1/2" />
            <div className="absolute w-full h-[1px] bg-[#2a2520] top-1/2" />
          </div>
        </div>
      </div>

      {/* Scrubber */}
      <div
        className="relative h-2 bg-[#2a2520] rounded-full cursor-pointer mb-3 group"
        onMouseDown={handleScrubStart}
      >
        <div
          className="absolute top-0 left-0 h-full bg-amber rounded-full transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>

      {/* Timestamp */}
      <div
        className="flex justify-between text-xs text-muted"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
