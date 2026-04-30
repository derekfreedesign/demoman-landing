/* eslint-disable */
// TopNav + Hero. Discord-first; wishlist locked as "Coming Soon".

function TopNav({ discordHref }) {
  const mob = useIsMobile();
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", gap: mob ? 12 : 24,
      background: "rgba(11,13,16,0.92)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--dm-border)",
      padding: mob ? "12px 16px" : "14px 40px",
    }}>
      <a href="mailto:marketing@unframedgames.com" style={{ display: "flex", alignItems: "center", borderBottom: "none" }}>
        <img src="assets/UFG_Logo_White.png" alt="Unframed Games" style={{ height: mob ? 22 : 30, display: "block" }} />
      </a>
      <div style={{ flex: 1 }} />
      {!mob && (
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dm-fg-3)", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <PulseDot color="var(--dm-red)" />
          Pre-Alpha · 2026
        </span>
      )}
      <Btn size="sm" variant="discord" href={discordHref} target="_blank" iconLeft={<DiscordIcon size={16} />}>
        {mob ? "Discord" : "Join Discord"}
      </Btn>
    </nav>
  );
}

const HEADLINES = {
  blow: { line1: "BLOW IT", line2: "ALL UP." },
  rubble: { line1: "MAKE", line2: "RUBBLE." },
  oops: { line1: "OOPS,", line2: "I BROKE", line3: "THE WORLD." },
};

function Hero({ headline, showBadges, discordHref, heroBody, eyebrow, heroScroll }) {
  const mob = useIsMobile();
  const h = HEADLINES[headline] || HEADLINES.blow;
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--dm-border)" }}>
      {/* Backdrop image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(assets/library-hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "saturate(1.05)",
      }} />
      {/* Hazard-tape vignette pattern as subtle corner accent */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(11,13,16,0.45) 0%, rgba(11,13,16,0.35) 35%, rgba(11,13,16,0.85) 80%, rgba(11,13,16,0.98) 100%)",
      }} />
      {/* Pixel grid overlay (very subtle) */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", padding: mob ? "52px 20px 44px" : "100px 40px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>{eyebrow}</Eyebrow>

        <img
          src="assets/demoman-logo-transparent.png"
          alt="Demoman"
          style={{
            display: "block",
            marginTop: 12,
            marginBottom: 0,
            width: "100%",
            maxWidth: mob ? 300 : 576,
            height: "auto",
            imageRendering: "pixelated",
            filter: "drop-shadow(0 6px 0 #14181D) drop-shadow(0 12px 32px rgba(0,0,0,0.6))",
          }}
        />

        <p style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: mob ? 14 : 18, lineHeight: 1.6,
          color: "var(--dm-fg-1)", maxWidth: 620, marginTop: 16, marginBottom: mob ? 24 : 36,
          fontWeight: 500,
        }}>
          {heroBody}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Btn variant="discord" size={mob ? "md" : "lg"} href={discordHref} target="_blank" iconLeft={<DiscordIcon size={mob ? 16 : 22} />} icon="→">
            Join the Discord
          </Btn>
          <Btn variant="locked" size={mob ? "md" : "lg"} disabled iconLeft={<LockIcon size={mob ? 14 : 18} />}>
            Wishlist on Steam Soon
          </Btn>
        </div>

        {showBadges && (
          <div style={{ display: "flex", gap: 8, marginTop: mob ? 24 : 36, flexWrap: "wrap" }}>
            <Badge variant="pulse"><PulseDot color="var(--dm-red-hi)" /> Pre-Alpha</Badge>
            <Badge variant="ghost">Survival Shooter</Badge>
            <Badge variant="ghost">Steam · PC</Badge>
            <Badge variant="ghost">Made in Unreal</Badge>
            <Badge variant="ghost">Great on Steam Deck</Badge>
          </div>
        )}

        <div style={{
          marginTop: mob ? 36 : 56, fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11, color: "var(--dm-fg-3)", letterSpacing: "0.16em", textTransform: "uppercase",
          display: "inline-flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--dm-fg-3)" }} />
          {heroScroll}
          <span style={{ color: "var(--dm-yellow)" }}>↓</span>
        </div>
      </div>

      <HazardTape />
    </section>
  );
}

Object.assign(window, { TopNav, Hero });
