// Fixed, full-page aurora backdrop shared by every section.
export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* faint grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* drifting aurora blobs */}
      <div className="absolute -top-48 -left-40 h-[44rem] w-[44rem] rounded-full bg-violet/25 blur-[150px] animate-aurora" />
      <div className="absolute top-[22%] -right-48 h-[42rem] w-[42rem] rounded-full bg-electric/20 blur-[150px] animate-aurora-slow" />
      <div
        className="absolute bottom-[-10%] left-1/4 h-[40rem] w-[40rem] rounded-full bg-cyan/15 blur-[160px] animate-aurora"
        style={{ animationDelay: "-9s" }}
      />

      {/* grain + vignette */}
      <div className="absolute inset-0 noise" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-transparent to-ink/80" />
    </div>
  );
}
