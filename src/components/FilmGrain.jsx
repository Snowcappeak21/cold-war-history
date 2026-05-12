export default function FilmGrain() {
  return (
    <div className="film-grain">
      <div className="film-grain-inner">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>
      </div>
    </div>
  );
}
