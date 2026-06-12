export default function Waves() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: "clamp(180px, 48vh, 480px)" }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="52%" stopColor="#A21CAF" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        {/* Back layer — sits higher, more transparent */}
        <path
          d="M0,500 L0,190 C140,120 300,240 500,175 C700,110 870,225 1080,165 C1220,120 1340,180 1440,148 L1440,500 Z"
          fill="url(#wave-gradient)"
          opacity="0.35"
        />
        {/* Front layer — tighter curve, more opaque */}
        <path
          d="M0,500 L0,305 C160,258 330,328 530,292 C710,260 880,316 1070,283 C1220,257 1350,292 1440,268 L1440,500 Z"
          fill="url(#wave-gradient)"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
