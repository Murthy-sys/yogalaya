import { useEffect, useState } from "react";

const programs = [
  {
    no: "01",
    title: "Foundations of Yoga",
    text: "A considered introduction to asana, breath and alignment for a steady, confident practice.",
    meta: "Beginners · 60 minutes",
  },
  {
    no: "02",
    title: "Therapeutic Yoga",
    text: "Gentle, individual guidance shaped around mobility, recovery and everyday wellbeing.",
    meta: "Personal sessions · 45 minutes",
  },
  {
    no: "03",
    title: "Pranayama & Meditation",
    text: "Traditional breathwork and stillness practices to help settle the mind and restore energy.",
    meta: "All levels · 40 minutes",
  },
];

const testimonials = [
  {
    quote: "The practice is simple, deeply attentive and never rushed. I leave every class feeling lighter and more at home in my body.",
    name: "Meera R.",
    detail: "Practising since 2023",
  },
  {
    quote: "Suresh sir explains the purpose behind every movement. That understanding changed yoga from exercise into a daily way of living.",
    name: "Arun K.",
    detail: "Weekend batch",
  },
];

function Arrow() {
  return <span aria-hidden="true" className="button-arrow">→</span>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Suresh's Yogalaya home">
          <img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Our approach</a>
          <a href="#programs">Programs</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Book a class</a>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {[['Our approach', 'about'], ['Programs', 'programs'], ['Experience', 'experience'], ['Contact', 'contact']].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <p>Health begins with attention.</p>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">A place for health & self transformation</p>
            <h1>Come home<br />to your <em>body.</em></h1>
            <p className="hero-intro">Traditional yoga taught with clarity, care and a deep respect for where you are today.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">Begin your practice <Arrow /></a>
              <a className="text-link" href="#programs">Explore programs</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/yoga-teacher-hero.png" alt="Yoga teacher seated in a calm, sunlit studio" />
            <div className="hero-note"><span>01</span> Breath<br />Movement<br />Stillness</div>
          </div>
          <a className="scroll-note" href="#about">Scroll to discover</a>
        </section>

        <section className="manifesto" id="about">
          <div className="manifesto-label"><span></span><p>Our philosophy</p></div>
          <div className="manifesto-copy">
            <h2>Yoga is not about touching your toes. It is about what you learn on the way down.</h2>
            <div className="manifesto-detail">
              <p>At Suresh’s Yogalaya, each session is a quiet conversation between breath, body and awareness. We teach the foundations patiently, so your practice can support you beyond the mat.</p>
              <a className="text-link dark" href="#experience">Meet the Yogalaya <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="programs" id="programs">
          <div className="section-heading">
            <p className="eyebrow">Ways to practise</p>
            <h2>A practice for<br /><em>every season.</em></h2>
          </div>
          <div className="program-list">
            {programs.map((program) => (
              <article className="program-card" key={program.no}>
                <span className="program-number">{program.no}</span>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
                <p className="program-meta">{program.meta}</p>
                <a href="#contact" aria-label={`Enquire about ${program.title}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="experience-image">
            <img src="/assets/yoga-teacher-hero.png" alt="Natural yoga studio atmosphere" />
            <p>Presence over performance</p>
          </div>
          <div className="experience-copy">
            <p className="eyebrow">The Yogalaya experience</p>
            <h2>Ancient wisdom.<br /><em>Human teaching.</em></h2>
            <p>There is no pressure to perform here. Suresh’s teaching balances discipline with compassion—offering precise guidance, thoughtful modifications and enough space to listen inward.</p>
            <div className="principles">
              <div><span>01</span><h3>Personal attention</h3><p>Small groups and careful observation.</p></div>
              <div><span>02</span><h3>Rooted practice</h3><p>Classical methods, clearly explained.</p></div>
              <div><span>03</span><h3>Sustainable progress</h3><p>Consistency before intensity.</p></div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <p className="eyebrow">Words from our community</p>
          <blockquote>“{testimonials[testimonial].quote}”</blockquote>
          <div className="testimonial-footer">
            <div><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].detail}</span></div>
            <div className="testimonial-controls">
              <button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button>
              <span>{testimonial + 1} / {testimonials.length}</span>
              <button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Your first step</p>
            <h2>Begin where<br />you <em>are.</em></h2>
            <p>Tell us a little about what you need. We’ll help you find a class that feels right for your body, schedule and experience.</p>
            <div className="contact-details"><span>Hyderabad, Telangana</span><span>Mon–Sat · 6:00 AM–8:00 PM</span></div>
          </div>
          {submitted ? (
            <div className="form-success" role="status"><span>Thank you.</span><h3>Your practice begins here.</h3><p>We’ll be in touch shortly to help choose your first session.</p><button onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Phone<input type="tel" name="phone" placeholder="Your phone number" required /></label>
              <label>I’m interested in<select name="program" defaultValue=""><option value="" disabled>Choose a program</option>{programs.map(({title}) => <option key={title}>{title}</option>)}</select></label>
              <label>Anything we should know?<textarea name="message" rows="3" placeholder="Tell us about your goals or experience" /></label>
              <button className="primary-button" type="submit">Request a callback <Arrow /></button>
            </form>
          )}
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#home"><img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" /></a>
        <p>Yoga for a healthier body, a quieter mind and a more attentive life.</p>
        <div className="footer-links"><a href="#about">Approach</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 Suresh’s Yogalaya</span><span>Health · Awareness · Transformation</span></div>
      </footer>
    </div>
  );
}
