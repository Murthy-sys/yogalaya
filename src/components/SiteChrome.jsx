import { gayatriWhatsappUrl, navigationLinks, whatsappUrl } from "../constants/siteConstants";

export function SiteNavigation({ menuOpen, scrolled, onMenuToggle, onNavigate }) {
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={onNavigate} aria-label="Suresh's Yogalaya home">
          <img src="/assets/sureshs-yogalaya-logo-128.webp" srcSet="/assets/sureshs-yogalaya-logo-128.webp 128w, /assets/sureshs-yogalaya-logo-256.webp 256w" sizes="(max-width: 760px) 54px, 70px" width="128" height="127" alt="Suresh's Yogalaya" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Book a class</a>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={onMenuToggle} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {navigationLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={onNavigate}>{label}</a>)}
        </nav>
        <p>Health begins with attention.</p>
      </div>
    </>
  );
}

export function FloatingWhatsApp({ hidden }) {
  return (
    <a className={`whatsapp-link ${hidden ? "is-hidden" : ""}`} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Suresh's Yogalaya on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.4-1.7A12.7 12.7 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.3 8.3 0 0 1-2.4-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.7-.4Z" /></svg>
    </a>
  );
}

export function SiteFooter({ footerRef }) {
  return (
    <footer ref={footerRef}>
      <div className="footer-intro">
        <a className="footer-brand" href="#home"><img src="/assets/sureshs-yogalaya-logo-128.webp" srcSet="/assets/sureshs-yogalaya-logo-128.webp 128w, /assets/sureshs-yogalaya-logo-256.webp 256w" sizes="96px" width="128" height="127" alt="Suresh's Yogalaya" loading="lazy" decoding="async" /></a>
        <p>A place for Health and self Transformation.</p>
      </div>
      <div className="footer-col">
        <h3>Explore</h3>
        <a href="#instructor">Instructors</a><a href="#programs">Programs</a><a href="#workshops">Workshops</a><a href="#faq">FAQs</a>
      </div>
      <div className="footer-col">
        <h3>Visit</h3>
        <p>MeeSeva Road, Ramnagar<br />Opposite MeeSeva office<br />Anantapur, AP 515004</p>
        <a href="https://maps.app.goo.gl/3gdoCaoVG5oW6FWSA?g_st=awb" target="_blank" rel="noreferrer">Get directions ↗</a>
      </div>
      <div className="footer-col footer-connect">
        <h3>Connect</h3>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Suresh · +91 90003 82815</a>
        <a href={gayatriWhatsappUrl} target="_blank" rel="noreferrer">Gayatri Keerthi · +91 96865 70032</a>
        <div className="social-links">
          <a href="https://www.instagram.com/sureshesapathi?igsh=bzJueWQwNGJtZjZ2" target="_blank" rel="noreferrer" aria-label="Suresh's Yogalaya on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="social-dot"/></svg></a>
          <a href="https://youtube.com/@bruceleesuresh?si=euIyGGvrdOe0eABN" target="_blank" rel="noreferrer" aria-label="Suresh's Yogalaya on YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path d="m10 15.4 5-3.4-5-3.4v6.8Z" className="social-play"/></svg></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Suresh’s Yogalaya</span><span>Health · Awareness · Transformation</span>
        <a className="developer-credit" href="https://www.trimugo.in" target="_blank" rel="noreferrer" aria-label="Website developed by Trimugo"><span>Developed by</span><img src="/assets/trimugo-logo.png" alt="Trimugo — Smart Solutions. Real Results." loading="lazy" decoding="async" /></a>
      </div>
    </footer>
  );
}
