import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

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
    quote: `As a practicing Advocate of the Hon’ble High Court, and as an individual who attaches utmost value to discipline, structure, and sincerity in every aspect of life, I deem it both my privilege and responsibility to place on record my personal experience with Suresh’s Yogalay. Having been associated with this institution for a considerable period, I have had the opportunity to observe, practice, and benefit from its unique blend of traditional yoga, meditation, and holistic wellness. It is with deep respect and genuine satisfaction that I set forth my impressions, in the hope that others too may find encouragement to embark upon this enriching journey.

I initially approached this institution with a simple objective—to improve my health, restore flexibility, and find a means of balancing the ever-increasing stress that comes with professional and personal responsibilities. However, over the course of my association with this Yogalay, I realized that it is not merely a place for physical exercise; rather, it is a well-conceived system of holistic development, guided with utmost commitment by Suresh Master and his team.

The training sessions are conducted with admirable regularity and discipline. Each session follows a scientific pattern, beginning with preparatory stretches, moving into carefully demonstrated asanas, and concluding with breathing techniques and relaxation. This systematic approach ensures that the practitioner benefits not only at a physical level but also attains peace of mind and clarity of thought.

What distinguishes Suresh’s Yogalay from other establishments is the personalized attention. Despite the number of students, Suresh Master and his team observe each participant with keen attention, correcting postures, suggesting modifications wherever required, and ensuring that no one feels left behind. His knowledge of yoga is not confined to mere demonstration of poses, but extends to explaining the underlying principles, the health benefits, and the precautions, thereby making the practice safe and effective for all.

In my personal experience, I have observed significant improvements in stamina, reduction of stress, a noticeable sense of balance in day-to-day life and inner calm, sharpened focus, and detachment from the constant distractions of daily life. The seamless integration of meditation with traditional asanas ensures that the benefits are holistic—while the body gains strength and flexibility, the mind attains clarity, balance, and peace. I also attained both mental health and spiritual well-being. Common issues such as fatigue, stiffness, and anxiety have reduced to level zero, and I find myself more productive and composed in both professional and personal domains.

I would also like to acknowledge the ethics and sincerity with which this institution functions. There is no commercial mindset, no shortcuts, and no compromise in standards. Instead, there is a genuine spirit of service, an intention to uplift the health and well-being of every participant, and a dedication that is rare to find in present times.

Therefore, it is my considered opinion, based on personal experience, that Suresh’s Yogalay deserves the highest appreciation. It stands as a beacon of authentic yoga practice in our region, and I would strongly recommend it to anyone who seeks true transformation—be it in health, mind, or spirit.`,
    name: "Parameswara Reddy M.",
    detail: "Advocate, High Court of Amaravathi",
    featured: true,
  },
  {
    quote: "Experiencing something new in my life. First of all, I thought of a Gym for bodybuilding but with a thought that being mentally strong is more important than physical fitness in the upcoming materialistic life I thought of joining the Yoga Institute. But here I got to know that we will experience both Physical fitness and Mental fitness with Yoga. The Institute will do 100% justification for this.",
    name: "Sai Teja K",
    detail: "29 July 2018",
  },
  {
    quote: "This is Rajasekhar, What Purpose your decided to join yoga classes, For your weight loss, stress relief, peacefulness, stability in life... Etc.. Here Suresh sir and Gayatri Mam will treat you as a kid and they will explain you clearly about yoga... Coming to my Experience 1. Yoga improved my Flexibility 2. Improved my mental health, boost immunity, reduced anxiety, improved my strength.. Etc. Finally yoga will make you mentally and physically fit...... I have faced so many Experiences in a short time. In my experiences mostly i liked one Word ‘CONTROL’..... If you don't have CONTROL on proper diet and sleep you will facing weight gain or weight loss problems. If you don't have CONTROL on anger or stability or stress management you will face lot of problems mentally and Physically. If your mind in your control.. You will achieve whatever you like. I'm sharing my experiences here due to it will helpful to few people atleast. Thank you very much to Suresh sir and Gayatri Mam you both made me Blissful.",
    name: "Kondreddy Rajasekhar Reddy",
    detail: "7 October 2022",
  },
  {
    quote: "I'm Hemanth, software engineer at Cognizant Technology Solutions. Doing yoga is quite a good experience. ‘Suresh Yoga Laya’ followed a systematic procedure, they introduce asanas based on our body flexibility. They explain importance of each and every asana. For me I felt good waking up early in the morning and making my body flexible. On Fridays we have a special two-hour session, Suresh sir will teach us about importance of yoga. Yoga is essential for our daily lives. I strongly suggest everyone to join Suresh Yoga Laya.",
    name: "User (Hemanth)",
    detail: "24 September 2022",
  },
  {
    quote: "Yogalay is the right place to tune your body mind and spirit in to one. Suresh is a great soul and he helps the students with a great motivation to learn. He is very honest teacher. I am very happy that I joined the class.",
    name: "Rajeswari M",
    detail: "12 April 2019",
  },
  {
    quote: "Balancing your mind and focus is very important for competitive exams here you can learn with best trainer, you can feel the difference with in a week.",
    name: "Akhil",
    detail: "9 March 2019",
  },
  {
    quote: "Truly transforming lives, it puts in lot of energy and consciousness into life, trains minds to master its own potential through sadhana (practice). Saliently, the guru (teacher) is so well versed with yoga that his teachings fructify the practice. Outdo your own infirmity. Learn, test and train yourself. P.S. — apt premises to perform yoga. The teacher also preaches a tinge of spirituality. Live life up to its full potential.",
    name: "Renuka Prasad",
    detail: "30 January 2019",
  },
  {
    quote: "This is the fantastic institute to learn yoga this institute gives 100% justification very good and polite teaching. I am completely satisfied for learning yoga in this best institute. Thank you.",
    name: "Trilokya",
    detail: "20 September 2018",
  },
  {
    quote: "Finally, my quest for a qualitative yoga training center ended after finding Yogalaya. Perfect place for the people who are passionate towards learning yoga.",
    name: "Archana Devi",
    detail: "26 July 2018",
  },
  {
    quote: "Everything about The Yogalaya Studio is worth experiencing! Fantastic instructor. The wide variety of classes offered. The healing, relaxing and energizing benefits of yoga practice. The warm and welcoming space of the studio itself.",
    name: "Revathi",
    detail: "5 June 2018",
  },
  {
    quote: "This a awesome place for training yoga's... Start your yoga career in this place... great master and good atmosphere.",
    name: "Jeevan Kumar",
    detail: "11 May 2018",
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
const justdialReviewsUrl = "https://www.justdial.com/Anantapur/Suresh-S-Yogalaya-Mee-Seva-Road-Opposite-To-Meeseva-Office-Walkable-Distance-From-Ramnagar-Subway-Ramnagar/9999P8554-8554-180322172514-Q6C5_BZDET";

function Arrow() {
  return <span aria-hidden="true" className="button-arrow">→</span>;
}

function SiteNavigation({ menuOpen, scrolled, onMenuToggle, onNavigate }) {
  const links = [['Instructors', 'instructor'], ['Programs', 'programs'], ['Workshops', 'workshops'], ['Contact', 'contact']];
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={onNavigate} aria-label="Suresh's Yogalaya home">
          <img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Book a class</a>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={onMenuToggle} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span>
        </button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={onNavigate}>{label}</a>)}
        </nav>
        <p>Health begins with attention.</p>
      </div>
    </>
  );
}

function FloatingWhatsApp({ hidden }) {
  return (
    <a className={`whatsapp-link ${hidden ? "is-hidden" : ""}`} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Suresh's Yogalaya on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.4-1.7A12.7 12.7 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.3 8.3 0 0 1-2.4-1.5 9.2 9.2 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.7-.4Z" /></svg>
    </a>
  );
}

function SiteFooter({ footerRef }) {
  return (
    <footer ref={footerRef}>
      <div className="footer-intro">
        <a className="footer-brand" href="#home"><img src="/assets/sureshs-yogalaya-logo.png" alt="Suresh's Yogalaya" loading="lazy" decoding="async" /></a>
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
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+91 90003 82815</a>
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

function AboutSuresh() {
  return (
    <div className="about-suresh-page">
      <main>
        <section className="about-suresh-hero instructor-profile instructor-profile-suresh">
          <div className="about-suresh-portrait instructor-portrait" data-reveal>
            <img src="/assets/suresh-profile.jpeg" alt="Yoga instructor Suresh at an International Yoga Day event" decoding="async" />
            <div><strong>20+</strong><span>Years devoted to<br />practice & teaching</span></div>
          </div>
          <div className="about-suresh-intro instructor-profile-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">Instructor 01</p>
            <h1><em>Suresh.</em></h1>
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
        <section className="about-suresh-hero instructor-profile instructor-profile-gayatri">
          <div className="about-suresh-intro instructor-profile-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">Instructor 02</p>
            <h1>Gayatri<br /><em>Keerti.</em></h1>
            <p className="about-suresh-lead">Gayatri Keerti is a yoga instructor at Suresh’s Yogalaya and an integral part of the studio’s teaching team.</p>
            <p>She works alongside Suresh in creating a welcoming space where students can approach yoga with attention, consistency and care.</p>
            <div className="about-suresh-highlights" aria-label="Gayatri Keerti teaching highlights">
              <span>Yoga instruction</span>
              <span>Attentive student guidance</span>
              <span>Part of the Yogalaya teaching team</span>
            </div>
            <a className="primary-button" href="/#contact">Begin your practice <Arrow /></a>
          </div>
          <div className="about-suresh-portrait instructor-portrait" data-reveal>
            <img src="/assets/gayatri-keerti-profile.jpeg" alt="Yoga instructor Gayatri Keerti at an International Yoga Day event" loading="lazy" decoding="async" />
            <div className="instructor-role-badge"><span>Yoga instructor<br />Suresh’s Yogalaya</span></div>
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
  const [reviewExpanded, setReviewExpanded] = useState(false);
  const [reviewDragOffset, setReviewDragOffset] = useState(0);
  const [reviewDragging, setReviewDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [footerVisible, setFooterVisible] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash === "#/about-suresh" ? "about-suresh" : "home");
  const footerRef = useRef(null);
  const reviewTouchStart = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onRouteChange = () => {
      const nextRoute = window.location.hash === "#/about-suresh" ? "about-suresh" : "home";
      const updateRoute = () => {
        flushSync(() => setRoute(nextRoute));
        window.scrollTo(0, 0);
      };
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (document.startViewTransition && !reduceMotion) document.startViewTransition(updateRoute);
      else updateRoute();
    };
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
  const selectReview = (index) => {
    setReviewExpanded(false);
    setTestimonial(Math.max(0, Math.min(testimonials.length - 1, index)));
  };
  const handleReviewTouchEnd = (event) => {
    if (reviewTouchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - reviewTouchStart.current;
    reviewTouchStart.current = null;
    setReviewDragging(false);
    setReviewDragOffset(0);
    if (Math.abs(distance) < 46) return;
    selectReview(testimonial + (distance < 0 ? 1 : -1));
  };

  if (route === "about-suresh") {
    return (
      <div className="site-shell">
        <SiteNavigation menuOpen={menuOpen} scrolled={scrolled} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavigate={closeMenu} />
        <AboutSuresh />
        <FloatingWhatsApp hidden={footerVisible} />
        <SiteFooter footerRef={footerRef} />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <SiteNavigation menuOpen={menuOpen} scrolled={scrolled} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavigate={closeMenu} />

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
            <img src="/assets/yoga-teacher-hero.jpg" alt="Yoga teacher seated in a calm, sunlit studio" fetchPriority="high" decoding="async" />
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
            <img src="/assets/yogalaya-instructors.jpg" alt="Yogalaya instructors seated together in meditation" loading="lazy" decoding="async" />
          </div>
          <div className="instructor-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">About the instructors</p>
            <h2>Meet <em>our instructors.</em></h2>
            <p className="instructor-lead">Our instructors guide students toward a steadier relationship with movement, breath and awareness.</p>
            <p>Their teaching is grounded in patient observation and clear explanation. Rather than asking every body to fit the same pose, they help each student understand the purpose of the practice and find an approach that feels sustainable.</p>
            <div className="instructor-values">
              <div><span>01</span><h3>Experience with humility</h3><p>Long practice, shared in simple and practical language.</p></div>
              <div><span>02</span><h3>Individual attention</h3><p>Respectful guidance shaped around the person in front of them.</p></div>
              <div><span>03</span><h3>Practice for life</h3><p>Tools for strength, steadiness and awareness beyond the mat.</p></div>
            </div>
            <a className="text-link dark" href="#/about-suresh">Know about us <Arrow /></a>
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
                  <img src={workshop.image} alt={`${workshop.title} at Suresh's Yogalaya`} loading="lazy" decoding="async" />
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
            {testimonials[testimonial].featured && <span className="featured-review-label">Featured review</span>}
            <span className="review-mark" aria-hidden="true">“</span>
            <blockquote className={reviewExpanded ? "is-expanded" : "is-clamped"} key={testimonial}>{testimonials[testimonial].quote}</blockquote>
            <button
              className="review-read-more"
              type="button"
              onClick={() => setReviewExpanded((expanded) => !expanded)}
              aria-expanded={reviewExpanded}
            >
              {reviewExpanded ? "Show less" : "Read full review"}
            </button>
            <div className="review-person" key={`person-${testimonial}`}><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].detail}</span></div>
            <div className="review-progress" aria-hidden="true"><span style={{ width: `${((testimonial + 1) / testimonials.length) * 100}%` }} /></div>
            <div className="testimonial-controls">
              <button onClick={() => { setReviewExpanded(false); setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length); }} aria-label="Previous review">←</button>
              <span>{String(testimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
              <button onClick={() => { setReviewExpanded(false); setTestimonial((testimonial + 1) % testimonials.length); }} aria-label="Next review">→</button>
            </div>
            <a className="all-reviews-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews on Justdial <Arrow /></a>
          </div>
          <div className="review-directory" aria-label="Choose a review">
            {testimonials.map((review, index) => (
              <button className={testimonial === index ? "is-active" : ""} onClick={() => { setReviewExpanded(false); setTestimonial(index); }} key={review.name} aria-pressed={testimonial === index}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{review.name}</strong><small>{review.detail}</small>
              </button>
            ))}
          </div>
          <div className="mobile-reviews" aria-label="Student reviews carousel">
            <div
              className="mobile-review-viewport"
              onTouchStart={(event) => { reviewTouchStart.current = event.touches[0].clientX; setReviewDragging(true); }}
              onTouchMove={(event) => {
                if (reviewTouchStart.current === null) return;
                const offset = event.touches[0].clientX - reviewTouchStart.current;
                const atBoundary = (testimonial === 0 && offset > 0) || (testimonial === testimonials.length - 1 && offset < 0);
                setReviewDragOffset(Math.max(-110, Math.min(110, offset * (atBoundary ? .28 : 1))));
              }}
              onTouchEnd={handleReviewTouchEnd}
              onTouchCancel={() => { reviewTouchStart.current = null; setReviewDragging(false); setReviewDragOffset(0); }}
            >
              <div className={`mobile-review-track ${reviewDragging ? "is-dragging" : ""}`} style={{ "--mobile-review-index": testimonial, "--mobile-review-drag": reviewDragOffset }}>
                {testimonials.map((review, index) => {
                  const active = testimonial === index;
                  return (
                    <article className={`mobile-review-card ${active ? "is-active" : ""}`} style={{ "--review-distance": index - testimonial }} key={`mobile-${review.name}`} aria-hidden={!active}>
                      <div className="mobile-review-card-top">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {review.featured && <small>Featured review</small>}
                      </div>
                      <span className="mobile-review-mark" aria-hidden="true">“</span>
                      <blockquote className={active && reviewExpanded ? "is-expanded" : "is-clamped"}>{review.quote}</blockquote>
                      {active && (
                        <button className="mobile-review-more" type="button" onClick={() => setReviewExpanded((expanded) => !expanded)} aria-expanded={reviewExpanded}>
                          {reviewExpanded ? "Show less" : "Read full review"}
                        </button>
                      )}
                      <footer className="mobile-review-author">
                        <strong>{review.name}</strong>
                        <span>{review.detail}</span>
                      </footer>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="mobile-review-controls">
              <button type="button" onClick={() => selectReview(testimonial - 1)} disabled={testimonial === 0} aria-label="Previous review">←</button>
              <div className="mobile-review-count"><strong>{String(testimonial + 1).padStart(2, "0")}</strong><span>/ {String(testimonials.length).padStart(2, "0")}</span></div>
              <button type="button" onClick={() => selectReview(testimonial + 1)} disabled={testimonial === testimonials.length - 1} aria-label="Next review">→</button>
            </div>
            <div className="mobile-review-progress" aria-hidden="true"><span style={{ width: `${((testimonial + 1) / testimonials.length) * 100}%` }} /></div>
            <a className="mobile-all-reviews-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews on Justdial <Arrow /></a>
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

      <FloatingWhatsApp hidden={footerVisible} />
      <SiteFooter footerRef={footerRef} />
    </div>
  );
}
