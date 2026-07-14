import { useEffect, useRef, useState } from "react";

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
  {
    quote: "I joined with stiffness and hesitation. The patient corrections and steady pace helped me feel stronger without ever feeling pushed.",
    name: "Lakshmi P.",
    detail: "Foundations student",
  },
  {
    quote: "The breathing practices have become part of my mornings. I feel calmer at work and much more aware of how I carry stress.",
    name: "Ravi Teja",
    detail: "Pranayama practice",
  },
  {
    quote: "Every session feels personal, even in a group. Suresh notices the small things and explains adjustments in a way that makes sense.",
    name: "Anusha M.",
    detail: "Regular practitioner",
  },
];

const workshops = [
  {
    no: "01",
    title: "Weekend Yoga Immersion",
    text: "A focused morning of classical asana, alignment and guided rest for students who want to deepen their foundations.",
    meta: "In person · All levels",
    image: "/assets/workshop-alignment.jpg",
  },
  {
    no: "02",
    title: "Restorative Yoga Reset",
    text: "A quiet supported practice using bolsters, blankets and guided rest to release effort and restore the nervous system.",
    meta: "Small group · 90 minutes",
    image: "/assets/workshop-restorative.jpg",
  },
  {
    no: "03",
    title: "Breath & Meditation",
    text: "An unhurried exploration of pranayama and meditation practices for steadiness, clarity and renewed energy.",
    meta: "All levels · 90 minutes",
    image: "/assets/workshop-breathwork.jpg",
  },
];

const faqs = [
  { question: "I am completely new to yoga. Can I join?", answer: "Yes. Beginners are welcome, and every practice is introduced progressively with clear guidance and thoughtful modifications." },
  { question: "What should I bring to my first class?", answer: "Wear comfortable clothing and bring a yoga mat and water bottle. If you have an injury or health concern, please tell us before class begins." },
  { question: "Are classes suitable for people with pain or limited mobility?", answer: "Therapeutic and individual sessions can be adapted around mobility, recovery and everyday wellbeing. Contact us first so we can understand your needs." },
  { question: "How do I reserve a class or workshop?", answer: "Send us a WhatsApp message with the class or workshop you are interested in. We will confirm the schedule and availability directly." },
  { question: "Where is Suresh’s Yogalaya located?", answer: "We are on MeeSeva Road in Ramnagar, opposite the MeeSeva office, Anantapur, Andhra Pradesh 515004." },
];

const whatsappUrl = "https://wa.me/919000382815?text=Namaste%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20Suresh%27s%20Yogalaya.";

function Arrow() {
  return <span aria-hidden="true" className="button-arrow">→</span>;
}

function AboutSuresh() {
  return (
    <div className="about-suresh-page">
      <header className="about-suresh-header">
        <a className="brand" href="#home" aria-label="Return to Suresh's Yogalaya home"><img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" /></a>
        <a className="about-back-link" href="#instructor">← Back to Yogalaya</a>
      </header>
      <main>
        <section className="about-suresh-hero">
          <div className="about-suresh-portrait">
            <img src="/assets/suresh-instructor.jpg" alt="Suresh seated in meditation" />
            <div><strong>20+</strong><span>Years devoted to<br />practice & teaching</span></div>
          </div>
          <div className="about-suresh-intro">
            <p className="eyebrow">The teacher behind Yogalaya</p>
            <h1>Teaching with<br /><em>attention.</em></h1>
            <p className="about-suresh-lead">Suresh is a yoga instructor with more than two decades of experience helping students build strength, steadiness and awareness through consistent practice.</p>
            <p>His classes bring together classical postures, breathwork and meditation in a way that is clear, respectful and grounded in everyday life. He believes progress begins by understanding the person—not by forcing the pose.</p>
            <div className="about-suresh-highlights" aria-label="Instructor teaching highlights">
              <span>Structured sessions</span>
              <span>Personal posture guidance</span>
              <span>Breathwork & meditation</span>
            </div>
            <a className="primary-button" href="/#contact">Begin your practice <Arrow /></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [footerVisible, setFooterVisible] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash === "#/about-suresh" ? "about-suresh" : "home");
  const footerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onRouteChange = () => setRoute(window.location.hash === "#/about-suresh" ? "about-suresh" : "home");
    window.addEventListener("hashchange", onRouteChange);
    return () => window.removeEventListener("hashchange", onRouteChange);
  }, []);

  useEffect(() => {
    if (route !== "home") return;
    const targetId = window.location.hash.slice(1);
    if (targetId && !targetId.startsWith("/")) requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
  }, [route]);

  useEffect(() => {
    if (!footerRef.current || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.02 });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [route]);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -7%" });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);

  const closeMenu = () => setMenuOpen(false);

  if (route === "about-suresh") return <AboutSuresh />;

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Suresh's Yogalaya home">
          <img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#instructor">Instructor</a>
          <a href="#programs">Programs</a>
          <a href="#workshops">Workshops</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Book a class</a>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {[['Instructor', 'instructor'], ['Programs', 'programs'], ['Workshops', 'workshops'], ['Contact', 'contact']].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <p>Health begins with attention.</p>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">A place for health & self transformation</p>
            <h1>Come home<br />to your <em>body.</em></h1>
            <p className="hero-intro">Traditional yoga taught with clarity, care and a deep respect for where you are today.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">Begin your practice <Arrow /></a>
              <a className="text-link" href="#programs">Explore programs</a>
            </div>
          </div>
          <div className="hero-visual" data-reveal data-reveal-delay="1">
            <img src="/assets/yoga-teacher-hero.png" alt="Yoga teacher seated in a calm, sunlit studio" />
            <div className="hero-note"><span>01</span> Breath<br />Movement<br />Stillness</div>
          </div>
          <a className="scroll-note" href="#programs">Scroll to discover</a>
        </section>

        <section className="programs" id="programs">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Ways to practise</p>
            <h2>A practice for<br /><em>every season.</em></h2>
          </div>
          <div className="program-list" data-reveal data-reveal-delay="1">
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

        <section className="instructor" id="instructor">
          <div className="instructor-image" data-reveal>
            <img src="/assets/suresh-instructor.jpg" alt="Suresh, yoga instructor at Suresh's Yogalaya, seated in meditation" />
            <div className="instructor-experience"><strong>20+</strong><span>Years of<br />practice & teaching</span></div>
          </div>
          <div className="instructor-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">About the instructor</p>
            <h2>Meet <em>Suresh.</em></h2>
            <p className="instructor-lead">For more than two decades, Suresh has guided students toward a steadier relationship with movement, breath and awareness.</p>
            <p>His teaching is grounded in patient observation and clear explanation. Rather than asking every body to fit the same pose, he helps each student understand the purpose of the practice and find an approach that feels sustainable.</p>
            <div className="instructor-values">
              <div><span>01</span><h3>Experience with humility</h3><p>Long practice, shared in simple and practical language.</p></div>
              <div><span>02</span><h3>Individual attention</h3><p>Respectful guidance shaped around the person in front of him.</p></div>
              <div><span>03</span><h3>Practice for life</h3><p>Tools for strength, steadiness and awareness beyond the mat.</p></div>
            </div>
            <a className="text-link dark" href="#/about-suresh">Know about me <Arrow /></a>
          </div>
        </section>

        <section className="about-suresh-story home-teaching-approach" id="teaching-approach">
          <div className="about-story-heading">
            <p className="eyebrow">How Suresh teaches</p>
            <h2>Care in every<br /><em>detail.</em></h2>
            <p className="about-story-source">These teaching qualities are drawn from a long-term student’s statement of experience with Suresh’s Yogalaya.</p>
          </div>
          <div className="about-story-cards">
            <article><span>/01</span><h3>Structured, disciplined sessions</h3><p>Classes follow a considered sequence: preparatory stretches, carefully demonstrated asanas, breathing techniques, relaxation and meditation.</p></article>
            <article><span>/02</span><h3>Personal attention</h3><p>Suresh and his team observe each participant closely, correct posture and suggest modifications so students can practise with confidence.</p></article>
            <article><span>/03</span><h3>Principles, benefits and precautions</h3><p>Teaching goes beyond demonstrating poses. Students are helped to understand why a practice is done, its intended benefits and the precautions that support safe, effective movement.</p></article>
            <article><span>/04</span><h3>A holistic approach</h3><p>Traditional yoga, breathwork and meditation are brought together to support strength, flexibility, calm, clarity and balance in everyday life.</p></article>
          </div>
        </section>

        <section className="workshops" id="workshops">
          <div className="workshops-heading" data-reveal>
            <p className="eyebrow">Focused practice</p>
            <h2>Workshops to go<br /><em>deeper.</em></h2>
            <p>Small, attentive sessions that create space to explore a practice beyond the rhythm of a regular class.</p>
            <a className="text-link dark" href={whatsappUrl} target="_blank" rel="noreferrer">Ask about upcoming dates <Arrow /></a>
          </div>
          <div className="workshop-grid" aria-label="Upcoming workshops">
            {workshops.map((workshop, index) => (
              <article className="workshop-card" key={workshop.no} data-reveal style={{ "--reveal-index": index }}>
                <div className="workshop-image">
                  <img src={workshop.image} alt={`${workshop.title} at Suresh's Yogalaya`} loading="lazy" />
                  <span>Upcoming</span>
                </div>
                <div className="workshop-content">
                  <span className="workshop-number">{workshop.no}</span>
                  <h3>{workshop.title}</h3>
                  <p>{workshop.text}</p>
                  <div className="workshop-footer"><small>{workshop.meta}</small><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Enquire about ${workshop.title}`}><Arrow /></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews" id="reviews" data-reveal>
          <div className="reviews-heading">
            <p className="eyebrow">Words from our community</p>
            <h2>Practice,<br /><em>in their words.</em></h2>
            <p>Reflections from students who have made Yogalaya part of their everyday lives.</p>
          </div>
          <div className="review-stage">
            <span className="review-mark" aria-hidden="true">“</span>
            <blockquote key={testimonial}>{testimonials[testimonial].quote}</blockquote>
            <div className="review-person" key={`person-${testimonial}`}><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].detail}</span></div>
            <div className="review-progress" aria-hidden="true"><span style={{ width: `${((testimonial + 1) / testimonials.length) * 100}%` }} /></div>
            <div className="testimonial-controls">
              <button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous review">←</button>
              <span>{String(testimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
              <button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next review">→</button>
            </div>
          </div>
          <div className="review-directory" aria-label="Choose a review">
            {testimonials.map((review, index) => (
              <button className={testimonial === index ? "is-active" : ""} onClick={() => setTestimonial(index)} key={review.name} aria-pressed={testimonial === index}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{review.name}</strong><small>{review.detail}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="faq-heading" data-reveal>
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked<br /><em>questions.</em></h2>
            <p>Still curious? Send us a WhatsApp message and we’ll be happy to help.</p>
          </div>
          <div className="faq-list" data-reveal data-reveal-delay="1">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                  <h3>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                      <span>{faq.question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                  </h3>
                  <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}><div><p>{faq.answer}</p></div></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">Your first step</p>
            <h2>Begin where<br />you <em>are.</em></h2>
            <p>Tell us a little about what you need. We’ll help you find a class that feels right for your body, schedule and experience.</p>
            <div className="contact-details"><span>Ramnagar, Anantapur</span><span>Mon–Sat · 6:00 AM–8:00 PM</span></div>
          </div>
          {submitted ? (
            <div className="form-success" role="status"><span>Thank you.</span><h3>Your practice begins here.</h3><p>We’ll be in touch shortly to help choose your first session.</p><button onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
          ) : (
            <form data-reveal data-reveal-delay="1" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Phone<input type="tel" name="phone" placeholder="Your phone number" required /></label>
              <label>I’m interested in<select name="program" defaultValue=""><option value="" disabled>Choose a program</option>{programs.map(({title}) => <option key={title}>{title}</option>)}</select></label>
              <label>Anything we should know?<textarea name="message" rows="3" placeholder="Tell us about your goals or experience" /></label>
              <button className="primary-button" type="submit">Begin your journey <Arrow /></button>
            </form>
          )}
        </section>

        <section className="location" id="location">
          <div className="location-map" data-reveal>
            <iframe
              title="Suresh's Yogalaya location on Google Maps"
              src="https://maps.google.com/maps?q=14.6724758,77.5895235&z=18&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">Visit the Yogalaya</p>
            <h2>Find your way<br /><em>to practice.</em></h2>
            <p>Suresh’s Yogalaya<br />MeeSeva Road, Ramnagar<br />Opposite MeeSeva office<br />Anantapur, Andhra Pradesh 515004</p>
            <a className="primary-button" href="https://maps.app.goo.gl/3gdoCaoVG5oW6FWSA?g_st=awb" target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a>
          </div>
        </section>
      </main>

      <a
        className={`whatsapp-link ${footerVisible ? "is-hidden" : ""}`}
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Suresh's Yogalaya on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.4-1.7A12.7 12.7 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.3 8.3 0 0 1-2.4-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.7-.4Z" />
        </svg>
      </a>

      <footer ref={footerRef}>
        <div className="footer-intro">
          <a className="footer-brand" href="#home"><img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" /></a>
          <p>A place for Health and self Transformation.</p>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <a href="#instructor">Instructor</a><a href="#programs">Programs</a><a href="#workshops">Workshops</a><a href="#faq">FAQs</a>
        </div>
        <div className="footer-col">
          <h3>Visit</h3>
          <p>MeeSeva Road, Ramnagar<br />Opposite MeeSeva office<br />Anantapur, AP 515004</p>
          <a href="https://maps.app.goo.gl/3gdoCaoVG5oW6FWSA?g_st=awb" target="_blank" rel="noreferrer">Get directions ↗</a>
        </div>
        <div className="footer-col footer-connect">
          <h3>Connect</h3>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">+91 90003 82815</a>
          <div className="social-links">
            <a href="https://www.instagram.com/sureshesapathi?igsh=bzJueWQwNGJtZjZ2" target="_blank" rel="noreferrer" aria-label="Suresh's Yogalaya on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="social-dot"/></svg>
            </a>
            <a href="https://youtube.com/@bruceleesuresh?si=euIyGGvrdOe0eABN" target="_blank" rel="noreferrer" aria-label="Suresh's Yogalaya on YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path d="m10 15.4 5-3.4-5-3.4v6.8Z" className="social-play"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Suresh’s Yogalaya</span>
          <span>Health · Awareness · Transformation</span>
          <a className="developer-credit" href="https://www.trimugo.in" target="_blank" rel="noreferrer" aria-label="Website developed by Trimugo">
            <span>Developed by</span><img src="/assets/trimugo-logo.png" alt="Trimugo — Smart Solutions. Real Results." />
          </a>
        </div>
      </footer>
    </div>
  );
}
