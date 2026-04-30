/* eslint-disable */
// Social row, mailing-list signup, and footer.

const SOCIALS = [
  { label: "TikTok",    href: "https://tiktok.com/@unframedgames",    handle: "@unframedgames", Icon: TiktokIcon },
  { label: "Instagram", href: "https://instagram.com/unframedgames",  handle: "@unframedgames", Icon: InstagramIcon },
  { label: "Facebook",  href: "https://facebook.com/unframedgames",   handle: "@unframedgames", Icon: FacebookIcon },
  { label: "X",         href: "https://x.com/unframedgames",          handle: "@unframedgames", Icon: XIcon },
];

function SocialRow({ eyebrow, socialHeading, socialBody }) {
  const mob = useIsMobile();
  return (
    <section id="follow" style={{ background: "var(--dm-bg-1)", padding: mob ? "60px 20px" : "100px 40px", borderTop: "1px solid var(--dm-border)", borderBottom: "1px solid var(--dm-border)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: mob ? 32 : 48 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SubDisplay size={mob ? 18 : 24} style={{ marginTop: mob ? 20 : 28, marginBottom: mob ? 16 : 24 }}>
            {socialHeading}
          </SubDisplay>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: mob ? 14 : 16, lineHeight: 1.7, color: "var(--dm-fg-2)", margin: 0, maxWidth: 760 }}>
            {socialBody}
            <code style={{ marginLeft: 8, padding: "2px 8px", background: "var(--dm-bg-3)", border: "1px solid var(--dm-border)", color: "var(--dm-yellow)", borderRadius: 2 }}>@unframedgames</code>
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(4, 1fr)", gap: mob ? 12 : 16 }}>
          {SOCIALS.map(({ label, href, handle, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              background: "var(--dm-bg-2)",
              border: "1px solid var(--dm-border)",
              padding: "26px 24px",
              display: "flex", flexDirection: "column", gap: 16,
              textDecoration: "none",
              color: "var(--dm-fg-1)",
              boxShadow: "0 2px 0 0 rgba(0,0,0,0.5)",
              transition: "transform 100ms linear, box-shadow 100ms linear, border-color 100ms linear, color 100ms linear",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 0 0 var(--dm-yellow-lo)";
              e.currentTarget.style.borderColor = "var(--dm-yellow)";
              e.currentTarget.style.color = "var(--dm-yellow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 2px 0 0 rgba(0,0,0,0.5)";
              e.currentTarget.style.borderColor = "var(--dm-border)";
              e.currentTarget.style.color = "var(--dm-fg-1)";
            }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Icon size={28} />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 14, color: "var(--dm-fg-3)" }}>↗</span>
              </div>
              <div>
                <div style={{
                  fontFamily: '"Press Start 2P", monospace', WebkitFontSmoothing: "none",
                  fontSize: 13, letterSpacing: "0.02em", textTransform: "uppercase",
                  marginBottom: 6,
                }}>{label}</div>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
                  letterSpacing: "0.08em", color: "var(--dm-fg-3)",
                }}>{handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter({ eyebrow, newsletterHeading, newsletterBody }) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | invalid | sent

  const submit = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) { setStatus("invalid"); return; }
    // Open user's email client pre-filled to marketing@unframedgames.com
    const subject = encodeURIComponent("Mailing list — please add me");
    const body = encodeURIComponent(`Hi Unframed,\n\nPlease add this email to the Demoman mailing list:\n\n${email}\n\nThanks.`);
    window.location.href = `mailto:marketing@unframedgames.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="newsletter" style={{
      position: "relative", overflow: "hidden",
      padding: "120px 40px",
    }}>
      {/* Blurred screenshot backdrop */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(assets/page-background.png)`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: "blur(2px) saturate(1.05)",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,13,16,0.78), rgba(11,13,16,0.95))" }} />

      <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display size={44} style={{ margin: "20px 0 24px", whiteSpace: "pre-line" }}>
          {newsletterHeading}
        </Display>
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 16, color: "var(--dm-fg-2)", lineHeight: 1.7, marginBottom: 36, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
          {newsletterBody}
        </p>

        <form onSubmit={submit} style={{
          display: "flex", gap: 0, maxWidth: 580, margin: "0 auto",
          background: "var(--dm-bg-2)",
          border: `2px solid ${status === "invalid" ? "var(--dm-red)" : "var(--dm-border-strong)"}`,
          padding: 6,
          transition: "border-color 80ms linear",
        }}>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: 14, color: "var(--dm-fg-3)" }}>
            <MailIcon size={20} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
            placeholder="you@example.com"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              padding: "16px 14px",
              color: "var(--dm-fg-1)",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 16,
              letterSpacing: "0.02em",
            }}
          />
          <Btn variant="primary" size="md" icon="→" onClick={submit}>
            Subscribe
          </Btn>
        </form>

        <div style={{
          minHeight: 22, marginTop: 14,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: status === "invalid" ? "var(--dm-red-hi)"
              : status === "sent"    ? "var(--dm-success)"
              : "var(--dm-fg-3)",
        }}>
          {status === "invalid" && "// That doesn't look like an email. Try again."}
          {status === "sent"    && "// Charge armed. Check your email client to confirm."}
          {status === "idle"    && "// We send maybe one email a month. Maybe."}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const mob = useIsMobile();
  return (
    <>
      <HazardTape />
      <footer style={{ background: "var(--dm-bg-0)", padding: mob ? "40px 20px 24px" : "60px 40px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(4, 1fr)", gap: mob ? 32 : 40, marginBottom: mob ? 32 : 48 }}>
            <div>
              <a href="mailto:marketing@unframedgames.com" style={{ display: "inline-block", borderBottom: "none" }}>
                <img
                  src="assets/UFG_Logo_White.png"
                  alt="Unframed Games"
                  style={{ display: "block", width: "100%", maxWidth: 180 }}
                />
              </a>
            </div>

            <FooterCol h="Game" links={[
              { label: "Discord", href: "https://discord.gg/2FH6Yvuctz" },
              { label: "Wishlist · Soon", href: "#", muted: true },
            ]} />
            <FooterCol h="Contact" links={[
              { label: "marketing@unframedgames.com", href: "mailto:marketing@unframedgames.com", code: true },
            ]} />
            <FooterCol h="Social" links={SOCIALS.map(({ label, href }) => ({ label, href }))} />
          </div>

          <div style={{
            paddingTop: 24,
            borderTop: "1px solid var(--dm-border)",
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
            color: "var(--dm-fg-3)", letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            <span>© 2026 Unframed Games</span>
            <span>v0.0.1 · Pre-Alpha</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({ h, links }) {
  return (
    <div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 11,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "var(--dm-fg-1)", marginBottom: 16,
      }}>{h}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} style={{
              fontFamily: l.code ? '"JetBrains Mono", monospace' : '"JetBrains Mono", monospace',
              fontSize: l.code ? 12 : 13,
              color: l.muted ? "var(--dm-fg-4)" : "var(--dm-fg-2)",
              textDecoration: "none",
              wordBreak: "break-all",
              transition: "color 80ms linear",
            }}
            onMouseEnter={(e) => { if (!l.muted) e.currentTarget.style.color = "var(--dm-yellow)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = l.muted ? "var(--dm-fg-4)" : "var(--dm-fg-2)"; }}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { SocialRow, Newsletter, Footer });
