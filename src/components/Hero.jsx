import { Arrow } from "./Arrow";

export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy" data-reveal>
      <p className="eyebrow">A place for health & self transformation</p>
      <h1>Come home<br />to your <em>body.</em></h1>
      <p className="hero-intro">Traditional yoga taught with clarity, care and a deep respect for where you are today.</p>
      <div className="hero-actions"><a className="primary-button" href="#contact">Begin your practice <Arrow /></a><a className="text-link" href="#programs">Explore programs</a></div>
    </div>
    <div className="hero-visual" data-reveal data-reveal-delay="1">
      <img src="/assets/yoga-teacher-hero.jpg" alt="Yoga teacher seated in a calm, sunlit studio" fetchPriority="high" decoding="async" />
      <div className="hero-note"><span>01</span> Breath<br />Movement<br />Stillness</div>
    </div>
    <a className="scroll-note" href="#programs">Scroll to discover</a>
  </section>;
}
