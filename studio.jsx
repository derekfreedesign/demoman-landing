/* eslint-disable */
// About Unframed Games — three founder cards. Bios are stubbed; user said
// "stub plausible bios and I'll edit". Marked as DRAFT in the section header.

const FOUNDERS = [
  { name: "Aaron Kaminer", role: "Co-Founder · Developer", photo: "assets/bio-aaron.jpg", tag: "01" },
  { name: "Dave Schoneveld", role: "Co-Founder · Developer", photo: "assets/bio-dave.jpg", tag: "02" },
  { name: "Derek Free", role: "Co-Founder · Developer", photo: "assets/bio-derek.jpg", tag: "03" },
];

function FounderCard({ f, bio }) {
  return (
    <article style={{
      background: "var(--dm-bg-2)",
      border: "1px solid var(--dm-border)",
      boxShadow: "0 4px 0 0 rgba(0,0,0,0.5), 0 16px 40px -16px rgba(0,0,0,0.6)",
      display: "flex", flexDirection: "column",
      transition: "transform 100ms linear",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
    >
      {/* Photo with hazard-tape bottom strip */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "var(--dm-bg-0)" }}>
        <div style={{
          width: "100%", height: "100%",
          backgroundImage: `url(${f.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "grayscale(0.15) contrast(1.05)",
        }} />
        {/* Bottom hazard tape */}
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          height: 6,
          background: "repeating-linear-gradient(45deg, var(--dm-yellow) 0 12px, #14181D 12px 24px)",
        }} />
      </div>

      <div style={{ padding: "22px 24px 26px" }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 11,
          letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dm-yellow)",
          marginBottom: 6,
        }}>{f.role}</div>
        <SubDisplay size={13} style={{ marginBottom: 14 }}>{f.name}</SubDisplay>
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, lineHeight: 1.65, color: "var(--dm-fg-2)", margin: 0 }}>
          {bio}
        </p>
      </div>
    </article>
  );
}

function StudioAbout({ eyebrow, studioHeading, studioBody1, studioBody2, bio01, bio02, bio03 }) {
  const bios = [bio01, bio02, bio03];
  return (
    <section id="studio" style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SubDisplay size={24} style={{ marginTop: 28, marginBottom: 28 }}>
          {studioHeading}
        </SubDisplay>
        <div style={{ maxWidth: 760 }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 16, lineHeight: 1.7, color: "var(--dm-fg-2)", margin: 0 }}>
            <strong style={{ color: "var(--dm-fg-1)" }}>Unframed Games</strong>{studioBody1}
          </p>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 14, lineHeight: 1.7, color: "var(--dm-fg-3)", marginTop: 14, marginBottom: 0 }}>
            {studioBody2}
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {FOUNDERS.map((f, i) => <FounderCard key={f.name} f={f} bio={bios[i]} />)}
      </div>

    </section>
  );
}

Object.assign(window, { StudioAbout });
