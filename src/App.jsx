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
import { ProgramDetail } from "./components/ProgramDetail";
import { FloatingWhatsApp, SiteFooter, SiteNavigation } from "./components/SiteChrome";
import { AboutSuresh, PressArchiveFeature } from "./components/AboutSuresh";
import { programs } from "./constants/programConstants";
import { testimonials } from "./constants/testimonialConstants";
import { workshops } from "./constants/workshopConstants";
import { faqs } from "./constants/faqConstants";
import { justdialReviewsUrl, whatsappUrl } from "./constants/siteConstants";



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
  const getRoute = () => {
    if (window.location.hash === "#/about-suresh") return "about-suresh";
    if (window.location.hash.startsWith("#/program/")) return "program";
    return "home";
  };
  const [route, setRoute] = useState(getRoute);
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
      const nextRoute = getRoute();
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

  if (route === "program") {
    const slug = window.location.hash.replace("#/program/", "");
    const program = programs.find((item) => item.slug === slug);
    return (
      <div className="site-shell">
        <SiteNavigation menuOpen={menuOpen} scrolled={scrolled} onMenuToggle={() => setMenuOpen(!menuOpen)} onNavigate={closeMenu} />
        <ProgramDetail program={program} />
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

        <PressArchiveFeature />

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

        <Faq faqs={faqs} openFaq={openFaq} onToggle={(index) => setOpenFaq(openFaq === index ? -1 : index)} />

        <Contact programs={programs} workshops={workshops} submitted={submitted} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} onReset={() => setSubmitted(false)} />

        <Location />
      </main>

      <FloatingWhatsApp hidden={footerVisible} />
      <SiteFooter footerRef={footerRef} />
    </div>
  );
}
