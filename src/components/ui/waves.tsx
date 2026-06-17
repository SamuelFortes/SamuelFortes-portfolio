export default function Waves() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="52%" stopColor="#A21CAF" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        {/* Back layer — diagonal, sits higher, more transparent */}
        <path
          d="M0,900 L0,600 C200,520 420,380 660,300 C860,235 1060,210 1260,130 C1350,95 1400,60 1440,40 L1440,900 Z"
          fill="url(#wave-gradient)"
          opacity="0.35"
        />
        {/* Front layer — diagonal, lower edge, more opaque */}
        <path
          d="M0,900 L0,750 C180,700 380,610 620,560 C820,518 1020,500 1220,430 C1340,390 1400,360 1440,330 L1440,900 Z"
          fill="url(#wave-gradient)"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
