import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { Instructors } from "./components/Instructors";
import { TeachingApproach } from "./components/TeachingApproach";
import { Workshops } from "./components/Workshops";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Location } from "./components/Location";

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
    quote: `Before my first meeting with Suresh I really didn’t know what to expect from a yoga class as my only reference point were a few classes taken in the US. I wasn’t even sure if I wanted to commit to a daily yoga practice. But when I met Suresh, his confidence and conviction in what he does shined through and I knew right away I was going to be in good hands.

The journey is being wonderfully challenging and empowering. I think we don’t know where we really stand physically and spiritually or even what’s possible for us until we put ourselves to work. And the sessions at Yogalay are certainly hard work. It is not easy to realize what your current limits are. However, I love Suresh’s gentle approach and the quiet atmosphere at his yoga studio which makes for the perfect place to grow at your own pace. I am beyond happy to see that the impact of what happens on the yoga mat stays with me far beyond the session. It’s only been a few weeks, but I am already experiencing myself in a new light. I am really thankful to Suresh for helping me believe that progress is possible if I apply myself to it and for reminding me that everything will come in due time. Thank you, Suresh, for your support in this journey! The work you do doesn’t go unseen!`,
    name: "Paula",
    detail: "Google review",
  },
  {
    quote: `I came to know about Yogalaya from Facebook. I have been practicing yoga for the last six months, and my perception of yoga has completely changed. I was under the impression that yoga was only physical activity. Slowly, I realized from Yoga Master Suresh—who reiterates during training sessions—that yoga is a union of body and mind.

Suresh’s in-depth knowledge, rich experience, and command of yoga are clearly visible in every aspect of training. He pays close attention to every individual, understands their needs, trains accordingly, and modifies the approach without losing the essence of yoga—making sure goals are met.

Whenever a new asana or technique is taught, he explains its benefits. This improves a trainee’s yoga knowledge and motivates us to practice continuously. His slow and steady approach, with a long-term vision, is truly appreciable. He is very friendly and approachable, and answers every question with patience. These are his assets and make him different.

One of my favorite quotes from him is: “Any vehicle needs maintenance; likewise, the human body also needs regular maintenance, which can be achieved with regular practice of yoga.”

I would highly recommend Yogalaya and Suresh Master to anyone who wants to train, practice, and experience yoga. All the very best, and thank you for the valuable training provided so far!

Positive: Communication, Quality, Professionalism.`,
    name: "Ram",
    detail: "Google review",
  },
  {
    quote: `Embarking on a three-month journey with yoga has been a transformative experience. When I started, I was a bit skeptical about what yoga could offer, but it quickly became a cherished part of my daily routine.

I’ve had severe migraine pain for seven years, but through consistent yoga practice, I’ve been able to reduce it significantly. Yoga has helped me manage stress, relax my body, and find a sense of calm, which has been crucial in decreasing the frequency and intensity of my migraines.

Over the past three months, I’ve noticed significant improvements in my physical health. My flexibility has increased considerably; poses that once seemed impossible now feel comfortable and natural. My strength, particularly in my core and upper body, has also improved, which has positively impacted other physical activities I engage in.

One of the most surprising aspects of this journey has been the mental and emotional benefits. Yoga has taught me the importance of mindfulness and being present in the moment. The practice has become a form of moving meditation, helping me calm my mind and reduce stress. I find myself more patient and less reactive in challenging situations. The breathing techniques learned in yoga have also been invaluable, providing tools to manage anxiety and improve focus.

Yoga has toned my body, revealing strength and balance. The poses have not only sculpted my muscles, but also enhanced my flexibility and posture, creating a well-rounded transformation.

In just three months, yoga has brought a sense of bliss into my life that I didn’t know was possible. It has taught me that true happiness comes from within, through connection, mindfulness, and self-awareness. This experience has been nothing short of transformative, and I am excited to continue this journey, knowing that each practice brings me closer to this blissful state.

Since practicing with Suresh and Keerthi, I have noticed significant improvements in my physical health, including increased flexibility and strength. The mental and emotional benefits have been equally profound, with a noticeable reduction in stress and an enhanced sense of well-being. Their teaching incorporates not just physical asanas, but also pranayama, meditation, and yoga philosophy, providing a comprehensive approach to wellness. An experienced teacher like Suresh Master brings authenticity to the practice, staying true to the roots of yoga and ensuring that students receive a genuine experience.

I highly suggest trying yoga if you’re looking for a natural way to improve your physical and mental well-being. Yoga helps in finding balance, reducing stress, and fostering a deep sense of inner peace. Give it a try—you might find it becomes a vital part of your life. Overall, it was an eye-opening experience that introduced me to the benefits of yoga.`,
    name: "Spandana",
    detail: "Google review",
  },
];

const workshops = [
  "Yoga for Weight Management",
  "Yoga for Mental Balance",
  "Yoga for Life Management",
  "Yoga for Stress Management",
  "Yoga for Relationship Management",
  "Yoga for Right Parenting",
  "Yoga for Psychosomatic Issues",
  "Yoga for Breath Management",
  "Yoga for Emotional Stability",
  "Meditation",
  "Workshop on Asana",
  "Workshop on Pranayama",
  "Workshop on Mental Focus",
  "How to Control Mind and Thought Process",
  "Cleansing Techniques / Kriyas",
  "Alignment Issues",
  "Purpose of Life",
  "Pre-Preparation for Marriage",
  "How to Handle Life After Retirement",
  "Yoga for Spinal Issues",
];

const faqs = [
  { question: "I am completely new to yoga. Can I join?", answer: "Yes. Beginners are welcome, and every practice is introduced progressively with clear guidance and thoughtful modifications." },
  { question: "What should I bring to my first class?", answer: "Wear comfortable clothing and bring a yoga mat and water bottle. If you have an injury or health concern, please tell us before class begins." },
  { question: "Are classes suitable for people with pain or limited mobility?", answer: "Therapeutic and individual sessions can be adapted around mobility, recovery and everyday wellbeing. Contact us first so we can understand your needs." },
  { question: "How do I reserve a class or workshop?", answer: "Send us a WhatsApp message with the class or workshop you are interested in. We will confirm the schedule and availability directly." },
  { question: "Where is Suresh’s Yogalaya located?", answer: "We are on MeeSeva Road in Ramnagar, opposite the MeeSeva office, Anantapur, Andhra Pradesh 515004." },
  { question: "What is the difference between yoga and gym?", answer: "We are not just a physical body visible to the eyes. We are body, mind, emotions, breath, energy and consciousness. Yoga itself means union: helping all these dimensions function as one unit, with no friction or the least possible friction. It is up to you whether to work only on the physical body, or to work across many dimensions and explore the fullest potential of your life." },
];

const whatsappUrl = "https://wa.me/919000382815?text=Namaste%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20Suresh%27s%20Yogalaya.";
const justdialReviewsUrl = "https://share.google/iUKOW55UqZQT2GuQ4";

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
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Suresh · +91 90003 82815</a>
        <a href="tel:+919686570032">Gayatri Keerthi · +91 96865 70032</a>
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
            <img src="/assets/suresh-profile-ceremony.png" alt="Suresh being honoured at an International Yoga Day event" decoding="async" />
            <div><strong>23</strong><span>Years of self<br />practice</span></div>
          </div>
          <div className="about-suresh-intro instructor-profile-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">About the founder</p>
            <h1>Meet<br /><em>Mr. Suresh</em></h1>
            <p className="about-suresh-lead">Founder & Master Trainer, Suresh’s Yogalaya</p>
            <p>Suresh is a dedicated Yoga Teacher, Martial Artist and State-Level Judo Player, committed to help people achieve holistic health through the timeless wisdom of yoga.</p>
            <p>His yoga journey began at the age of 13 with a deep passion for self-practice. Over the years, this passion evolved into a lifelong mission to inspire individuals to lead healthier, happier and more balanced lives.</p>
            <p>While pursuing his B.Tech, with his outstanding yoga demonstration, he earned the opportunity to teach yoga to the Head of the Institution. This boosted his confidence and became stepping stone for his career.</p>
            <p>To deepen his knowledge, he got trained at one of the oldest yoga institutes The Yoga Institute, Mumbai. Also, he refined his skills at Bharath Thakur Artistic Yoga. During his career, he has conducted personalized yoga sessions for celebrities and workshops for clients like RDT, HPCL and Union Bank employees etc.</p>
            <p>Suresh has worked with children, teenagers, adults, senior citizens, fitness enthusiasts, professionals and individuals dealing with stress, anxiety, hyperactivity and lifestyle-related challenges.</p>
            <p>Out of his passion for yoga and from his own experiences he has innovated few techniques which are unique, cannot be imitated. Hence his teaching approach is outstanding which combines traditional yogic principles with practical techniques, making it accessible and beneficial for everyone.</p>
            <p>Inspired by his spiritual journey and a deep connection with nature, Suresh moved from Mumbai to Anantapur and founded Suresh’s Yogalaya. Today, the institute offers both offline and online programs.</p>
            <p>“Suresh believes through yoga one can move from animal nature to human nature and further to divine nature. With consistent effort one can experience something beyond body and mind, helps to move towards consciousness/Bliss.”</p>
            <a className="primary-button" href="/#contact">Begin your practice <Arrow /></a>
          </div>
        </section>
        <section className="about-suresh-hero instructor-profile instructor-profile-gayatri">
          <div className="about-suresh-intro instructor-profile-copy" data-reveal data-reveal-delay="1">
            <p className="eyebrow">Instructor 02</p>
            <h1>Meet<br /><em>Gayathri Keerthi</em></h1>
            <p className="about-suresh-lead">Yoga Instructor <span aria-hidden="true">|</span> M.Sc. in Yoga</p>
            <p>Gayatri is a passionate Yoga Instructor at Suresh Yogalaya whose journey into yoga began through her search for balance and well-being. Before entering the field of yoga, she worked as an IT Professional, where she experienced the challenges of managing a demanding career alongside family life.</p>
            <p>While looking for ways to support her child’s growth and improve her own physical and mental well-being, she discovered Suresh Yogalaya. Yoga transformed her life by helping her develop better physical health, mental clarity, emotional balance, and a deeper understanding of the connection between body, mind, and inner energy.</p>
            <p>Inspired by this transformation, Gayatri pursued her Master’s Degree (M.Sc.) in Yoga, making yoga not just a profession but a lifelong path of learning and service.</p>
            <p>Today, as a Yoga Instructor at Suresh Yogalaya, she is committed to helping people of all ages experience the benefits of yoga through personalized guidance and compassionate teaching. She believes that yoga is a powerful tool for overcoming the challenges of modern life and cultivating a healthier, more balanced life.</p>
            <div className="about-suresh-highlights" aria-label="Gayatri Keerti teaching highlights">
              <span>M.Sc. in Yoga</span>
              <span>Attentive student guidance</span>
              <span>Part of the Yogalaya teaching team</span>
            </div>
            <a className="primary-button" href="/#contact">Begin your practice <Arrow /></a>
          </div>
          <div className="about-suresh-portrait instructor-portrait" data-reveal>
            <img src="/assets/gayatri-keerti-profile-ceremony.png" alt="Gayatri Keerti being honoured at an International Yoga Day event" loading="lazy" decoding="async" />
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
        <Hero />

        <Programs programs={programs} />

        <Instructors />

        <TeachingApproach />

        <Workshops workshops={workshops} whatsappUrl={whatsappUrl} />

        <Reviews
          testimonials={testimonials}
          testimonial={testimonial}
          expanded={reviewExpanded}
          dragging={reviewDragging}
          dragOffset={reviewDragOffset}
          justdialReviewsUrl={justdialReviewsUrl}
          onSelect={selectReview}
          onToggleExpanded={() => setReviewExpanded((expanded) => !expanded)}
          onTouchStart={(event) => { reviewTouchStart.current = event.touches[0].clientX; setReviewDragging(true); }}
          onTouchMove={(event) => {
            if (reviewTouchStart.current === null) return;
            const offset = event.touches[0].clientX - reviewTouchStart.current;
            const atBoundary = (testimonial === 0 && offset > 0) || (testimonial === testimonials.length - 1 && offset < 0);
            setReviewDragOffset(Math.max(-110, Math.min(110, offset * (atBoundary ? .28 : 1))));
          }}
          onTouchEnd={handleReviewTouchEnd}
          onTouchCancel={() => { reviewTouchStart.current = null; setReviewDragging(false); setReviewDragOffset(0); }}
        />
        {false && <section className="reviews" id="reviews" data-reveal>
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
            <a className="all-reviews-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews<Arrow /></a>
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
            <a className="mobile-all-reviews-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews<Arrow /></a>
          </div>
        </section>}

        <Faq faqs={faqs} openFaq={openFaq} onToggle={(index) => setOpenFaq(openFaq === index ? -1 : index)} />

        <Contact programs={programs} workshops={workshops} submitted={submitted} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} onReset={() => setSubmitted(false)} />

        <Location />
      </main>

      <FloatingWhatsApp hidden={footerVisible} />
      <SiteFooter footerRef={footerRef} />
    </div>
  );
}
