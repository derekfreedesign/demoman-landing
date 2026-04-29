/* eslint-disable */
// Demoman landing-page primitives. Forked from the design system website kit
// and extended with Discord branding, social icons, and form-field controls.

const A = "assets";

function PixelBracket({ side = "left", color = "var(--dm-red)", scale = 1 }) {
  const flip = side === "right" ? { transform: `scaleX(-1) scale(${scale})`, transformOrigin: "center" } : { transform: `scale(${scale})`, transformOrigin: "center" };
  return (
    <span style={{ display: "inline-block", width: 12, height: 14, position: "relative", ...flip }}>
      <span style={{ position: "absolute", left: 0, top: 0, width: 4, height: 14, background: color }} />
      <span style={{ position: "absolute", left: 0, top: 0, width: 12, height: 4, background: color }} />
    </span>
  );
}

function Wordmark({ size = 28 }) {
  return (
    <img
      src={`${A}/logo-small-capsule.png`}
      alt="Demoman"
      style={{ height: size, imageRendering: "pixelated", display: "block" }}
    />
  );
}

function Btn({ variant = "primary", size = "md", children, icon, iconLeft, onClick, href, style, disabled = false, target, fullWidth = false }) {
  const base = {
    fontFamily: '"Press Start 2P", monospace',
    WebkitFontSmoothing: "none",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    border: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: 2,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    transition: "transform 80ms linear, box-shadow 80ms linear, background 80ms linear",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.55 : 1,
  };
  const sizes = {
    sm: { fontSize: 7,  padding: "10px 14px 8px" },
    md: { fontSize: 9,  padding: "13px 22px 11px" },
    lg: { fontSize: 11, padding: "18px 30px 14px" },
    xl: { fontSize: 13, padding: "22px 38px 16px" },
  };
  const variants = {
    primary: { background: "var(--dm-yellow)", color: "#14181D", boxShadow: "0 4px 0 0 #E0B300" },
    discord: { background: "#5865F2", color: "#FFF", boxShadow: "0 4px 0 0 #3C45A5" },
    danger:  { background: "var(--dm-red)",    color: "#FFF",     boxShadow: "0 4px 0 0 #B71C1C" },
    ghost:   { background: "transparent", color: "var(--dm-fg-1)", border: "2px solid var(--dm-border-strong)", boxShadow: "none" },
    locked:  { background: "var(--dm-bg-2)", color: "var(--dm-fg-3)", border: "2px solid var(--dm-border)", boxShadow: "none" },
  };
  const v = variants[variant];
  const compressedShadow = variant === "primary" ? "0 2px 0 0 #E0B300"
    : variant === "discord" ? "0 2px 0 0 #3C45A5"
    : variant === "danger" ? "0 2px 0 0 #B71C1C"
    : "none";

  const handlers = disabled ? {} : {
    onMouseDown: (e) => { e.currentTarget.style.transform = "translateY(2px)"; e.currentTarget.style.boxShadow = compressedShadow; },
    onMouseUp:   (e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = v.boxShadow || ""; },
    onMouseLeave:(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = v.boxShadow || ""; },
  };

  const inner = (
    <>
      {iconLeft && <span style={{ display: "inline-flex", alignItems: "center" }}>{iconLeft}</span>}
      <span>{children}</span>
      {icon && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 800, fontSize: "0.85em" }}>{icon}</span>}
    </>
  );

  const styled = { ...base, ...sizes[size], ...v, ...style };
  if (href && !disabled) {
    return <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} style={styled} {...handlers}>{inner}</a>;
  }
  return <button onClick={disabled ? undefined : onClick} disabled={disabled} style={styled} {...handlers}>{inner}</button>;
}

function Eyebrow({ children, color = "var(--dm-yellow)", style }) {
  return (
    <div style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontWeight: 700, fontSize: 12, letterSpacing: "0.14em",
      textTransform: "uppercase", color, display: "inline-flex", alignItems: "center", gap: 8,
      whiteSpace: "nowrap",
      ...style,
    }}>
      <PixelBracket side="left" color={color} />
      <span>{children}</span>
      <PixelBracket side="right" color={color} />
    </div>
  );
}

function Display({ children, size = 44, color = "var(--dm-fg-1)", style }) {
  return (
    <h1 style={{
      fontFamily: '"Press Start 2P", monospace',
      WebkitFontSmoothing: "none",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      fontSize: size,
      lineHeight: 1.25,
      margin: 0,
      color,
      ...style,
    }}>{children}</h1>
  );
}

function SubDisplay({ children, size = 22, style, as = "h2" }) {
  const Tag = as;
  return (
    <Tag style={{
      fontFamily: '"Press Start 2P", monospace',
      WebkitFontSmoothing: "none",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      fontSize: size,
      lineHeight: 1.4,
      margin: 0,
      color: "var(--dm-fg-1)",
      ...style,
    }}>{children}</Tag>
  );
}

function HazardTape({ height = 8, color = "var(--dm-yellow)" }) {
  return (
    <div style={{
      height,
      background: `repeating-linear-gradient(45deg, ${color} 0 16px, #14181D 16px 32px)`,
    }} />
  );
}

function Badge({ children, variant = "ghost", style }) {
  const v = {
    yellow: { background: "var(--dm-yellow)", color: "#14181D" },
    red:    { background: "var(--dm-red)",    color: "#FFF" },
    ghost:  { background: "var(--dm-bg-3)",   color: "var(--dm-fg-2)", border: "1px solid var(--dm-border)" },
    out:    { background: "transparent",      color: "var(--dm-yellow)", border: "1px solid var(--dm-yellow)" },
    success:{ background: "rgba(74,222,128,.15)", color: "var(--dm-success)", border: "1px solid rgba(74,222,128,.4)" },
    pulse:  { background: "rgba(229,57,53,.18)", color: "var(--dm-red-hi)", border: "1px solid rgba(229,57,53,.5)" },
  }[variant];
  return (
    <span style={{
      fontFamily: '"JetBrains Mono", monospace', fontWeight: 700, fontSize: 11,
      letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 10px",
      borderRadius: 2, display: "inline-flex", alignItems: "center", gap: 6,
      ...v, ...style,
    }}>{children}</span>
  );
}

function PulseDot({ color = "var(--dm-red)" }) {
  return (
    <>
      <style>{`@keyframes dm-pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }`}</style>
      <span style={{
        display: "inline-block", width: 8, height: 8, background: color,
        animation: "dm-pulse 1.2s ease-in-out infinite",
      }} />
    </>
  );
}

// ── Lucide-stroked socials ─────────────────────────────────────────────────
// 1.75px stroke, 24x24, currentColor — matches design-system fallback note.
function Icon({ children, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
      {children}
    </svg>
  );
}

const DiscordIcon = ({ size = 22 }) => (
  // Stylized Discord glyph — geometric, paired with type. Filled because Discord brand IS the shape.
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.27 5.33A16.4 16.4 0 0 0 15.4 4l-.2.4a14.86 14.86 0 0 0-6.4 0L8.6 4a16.4 16.4 0 0 0-3.87 1.33C2.31 9.04 1.65 12.66 1.98 16.23a16.5 16.5 0 0 0 5.05 2.55c.4-.55.77-1.13 1.08-1.74-.6-.22-1.18-.5-1.73-.83.15-.1.3-.22.43-.32a11.79 11.79 0 0 0 10.38 0c.14.1.28.21.43.32-.55.34-1.13.61-1.73.83.31.61.67 1.19 1.08 1.74a16.43 16.43 0 0 0 5.05-2.55c.4-4.2-.66-7.78-2.75-10.9zM8.52 14.05c-.99 0-1.8-.92-1.8-2.05s.79-2.05 1.8-2.05c1.01 0 1.81.92 1.8 2.05 0 1.13-.79 2.05-1.8 2.05zm6.96 0c-.99 0-1.8-.92-1.8-2.05s.79-2.05 1.8-2.05c1.01 0 1.81.92 1.8 2.05 0 1.13-.79 2.05-1.8 2.05z"/>
  </svg>
);
const SteamIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="15" cy="9" r="2.4" />
    <circle cx="8.5" cy="15" r="1.6" />
    <line x1="13" y1="11" x2="9.6" y2="14.2" />
  </Icon>
);
const TiktokIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 4c0 2.5 2 4.5 4.5 4.5" />
  </Icon>
);
const InstagramIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <rect x="3.5" y="3.5" width="17" height="17" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </Icon>
);
const FacebookIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <path d="M14 8h2.5V4.5h-2.5a3.5 3.5 0 0 0-3.5 3.5v2H8v3h2.5v8H14v-8h2.5l.5-3H14V8z" />
  </Icon>
);
const XIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
  </Icon>
);
const MailIcon = ({ size = 22 }) => (
  <Icon size={size}>
    <rect x="3" y="5" width="18" height="14" />
    <polyline points="3,5 12,13 21,5" />
  </Icon>
);
const ArrowRight = ({ size = 16 }) => (
  <Icon size={size}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14,6 20,12 14,18" />
  </Icon>
);
const LockIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <rect x="5" y="11" width="14" height="9" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Icon>
);

Object.assign(window, {
  PixelBracket, Wordmark, Btn, Eyebrow, Display, SubDisplay, HazardTape, Badge, PulseDot,
  DiscordIcon, SteamIcon, TiktokIcon, InstagramIcon, FacebookIcon, XIcon, MailIcon, ArrowRight, LockIcon,
});
