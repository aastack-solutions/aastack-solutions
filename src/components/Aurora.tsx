// Fixed, full-page backdrop. A clean near-white canvas with a single, very
// faint blue wash near the top so the page feels light and uncluttered.
export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-x-0 top-0 h-[36rem]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(31,127,214,0.08), transparent 70%)",
        }}
      />
    </div>
  );
}
