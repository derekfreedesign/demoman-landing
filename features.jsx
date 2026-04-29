/* eslint-disable */
// Features (3-up pillars) and Screenshots gallery with thumbnail strip.

function FeatureRow({ eyebrow, featHeading, feat01Title, feat01Body, feat02Title, feat02Body, feat03Title, feat03Body, feat01Img, feat02Img, feat03Img }) {
  const items = [
    { tag: "01", title: feat01Title, body: feat01Body, img: feat01Img },
    { tag: "02", title: feat02Title, body: feat02Body, img: feat02Img },
    { tag: "03", title: feat03Title, body: feat03Body, img: feat03Img },
  ];
  const [lightbox, setLightbox] = React.useState(null);

  return (
    <section id="game" style={{ padding: "100px 40px 60px", maxWidth: 1280, margin: "0 auto" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SubDisplay size={24} style={{ margin: "28px 0 60px", maxWidth: 880 }}>
        {featHeading}
      </SubDisplay>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {items.map((it) => (
          <div key={it.tag} style={{
            background: "var(--dm-bg-2)",
            border: "1px solid var(--dm-border)",
            borderTop: "3px solid var(--dm-yellow)",
            boxShadow: "0 4px 0 0 rgba(0,0,0,0.5), 0 12px 32px -16px rgba(0,0,0,0.6)",
            transition: "transform 100ms linear",
            display: "flex", flexDirection: "column",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            {/* Thumbnail */}
            <div
              onClick={() => it.img && setLightbox(it.img)}
              style={{
                aspectRatio: "16/9",
                background: "var(--dm-bg-1)",
                border: "none",
                borderBottom: "1px solid var(--dm-border)",
                position: "relative",
                overflow: "hidden",
                cursor: it.img ? "zoom-in" : "default",
                flexShrink: 0,
              }}
            >
              {it.img ? (
                <div style={{
                  width: "100%", height: "100%",
                  backgroundImage: `url(${it.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    position: "absolute", left: 0, right: 0, top: 0, height: 4,
                    background: "repeating-linear-gradient(45deg, var(--dm-yellow) 0 8px, #14181D 8px 16px)",
                  }} />
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dm-fg-4)" }}>// Image</div>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', WebkitFontSmoothing: "none", fontSize: 9, color: "var(--dm-fg-3)", textTransform: "uppercase" }}>{it.tag}</div>
                  <div style={{
                    position: "absolute", left: 0, right: 0, bottom: 0, height: 4,
                    background: "repeating-linear-gradient(45deg, var(--dm-yellow) 0 8px, #14181D 8px 16px)",
                  }} />
                </div>
              )}
              {it.img && (
                <div style={{
                  position: "absolute", bottom: 8, right: 8,
                  background: "rgba(11,13,16,0.7)",
                  color: "var(--dm-fg-3)",
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                  padding: "3px 6px", letterSpacing: "0.08em",
                }}>⤢ expand</div>
              )}
            </div>

            <div style={{ padding: "24px 28px 28px" }}>
              <div style={{ fontFamily: '"Press Start 2P", monospace', WebkitFontSmoothing: "none", fontSize: 14, color: "var(--dm-yellow)", letterSpacing: "0.04em" }}>{it.tag}</div>
              <SubDisplay size={13} style={{ margin: "12px 0 14px" }}>{it.title}</SubDisplay>
              <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 14, lineHeight: 1.65, color: "var(--dm-fg-2)", margin: 0 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(11,13,16,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 40, cursor: "zoom-out",
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}>
            <img src={lightbox} style={{ maxWidth: "100%", maxHeight: "85vh", display: "block", boxShadow: "0 8px 0 0 rgba(0,0,0,0.6), 0 32px 80px rgba(0,0,0,0.8)" }} />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: -16, right: -16,
                width: 32, height: 32,
                background: "var(--dm-yellow)", color: "#14181D",
                border: "none", cursor: "pointer",
                fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 14,
              }}
            >✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

// 3 real shots + 3 placeholder slots. Placeholders are flat asphalt grey
// with hazard-tape strip + label per the design system.
function ScreenshotPlaceholder({ label }) {
  return (
    <div style={{
      width: "100%", height: "100%", position: "relative",
      background: "var(--dm-bg-2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", left: 0, right: 0, top: 0,
        height: 6,
        background: "repeating-linear-gradient(45deg, var(--dm-yellow) 0 12px, #14181D 12px 24px)",
      }} />
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
          fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--dm-fg-3)",
        }}>// Screenshot</div>
        <div style={{
          fontFamily: '"Press Start 2P", monospace', WebkitFontSmoothing: "none",
          fontSize: 11, letterSpacing: "0.02em", textTransform: "uppercase",
          color: "var(--dm-fg-2)", marginTop: 10,
        }}>{label}</div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
          color: "var(--dm-fg-4)", marginTop: 8, letterSpacing: "0.08em", textTransform: "uppercase",
        }}>Drop image here</div>
      </div>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        height: 6,
        background: "repeating-linear-gradient(45deg, var(--dm-yellow) 0 12px, #14181D 12px 24px)",
      }} />
    </div>
  );
}

function Screenshots({ eyebrow, shotsHeading }) {
  // 6 slots: 3 real + 3 placeholders so the user can drop in more
  const shots = [
    { src: "assets/screenshot-gameplay-1.png", label: "Mission 01" },
    { src: "assets/screenshot-gameplay-2.png", label: "Mission 02" },
    { src: "assets/screenshot-gameplay-3.png", label: "Mission 03" },
    { src: null, label: "Mission 04" },
    { src: null, label: "Sandbox" },
    { src: null, label: "Trailer Still" },
  ];
  const [active, setActive] = React.useState(0);
  const cur = shots[active];
  return (
    <section style={{ background: "var(--dm-bg-1)", padding: "80px 40px 100px", borderTop: "1px solid var(--dm-border)", borderBottom: "1px solid var(--dm-border)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <SubDisplay size={22} style={{ marginTop: 24 }}>{shotsHeading}</SubDisplay>
          </div>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--dm-fg-3)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {String(active + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
          </span>
        </div>

        {/* Hero shot */}
        <div style={{
          aspectRatio: "16/9",
          border: "1px solid var(--dm-border-strong)",
          boxShadow: "0 8px 0 0 rgba(0,0,0,0.55), 0 24px 64px -16px rgba(0,0,0,0.7)",
          overflow: "hidden",
          position: "relative",
        }}>
          {cur.src ? (
            <div style={{
              width: "100%", height: "100%",
              backgroundImage: `url(${cur.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
          ) : (
            <ScreenshotPlaceholder label={cur.label} />
          )}
          {/* Bottom caption strip */}
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            padding: "14px 20px",
            background: "linear-gradient(180deg, transparent, rgba(11,13,16,0.92))",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dm-fg-2)",
          }}>
            <span><span style={{ color: "var(--dm-yellow)" }}>{cur.label}</span> · captured in pre-alpha</span>
            <span style={{ color: "var(--dm-fg-3)" }}>not final · everything may explode</span>
          </div>
        </div>

        {/* Thumb strip */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${shots.length}, 1fr)`, gap: 10, marginTop: 14 }}>
          {shots.map((s, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              aspectRatio: "16/9",
              border: `2px solid ${active === i ? "var(--dm-yellow)" : "var(--dm-border)"}`,
              cursor: "pointer",
              opacity: active === i ? 1 : 0.6,
              transition: "opacity 100ms linear, border-color 100ms linear",
              overflow: "hidden",
              position: "relative",
            }}>
              {s.src ? (
                <div style={{
                  width: "100%", height: "100%",
                  backgroundImage: `url(${s.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} />
              ) : (
                <div style={{
                  width: "100%", height: "100%",
                  background: "var(--dm-bg-2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: '"JetBrains Mono", monospace', fontWeight: 700,
                  fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--dm-fg-3)",
                }}>+ Add</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { FeatureRow, Screenshots });
