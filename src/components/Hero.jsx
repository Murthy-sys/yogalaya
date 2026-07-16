import { Arrow } from "./Arrow";

export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy" data-reveal>
      <p className="eyebrow">A place for health & self transformation</p>
      <h1>Come home<br />to your <em>body.</em></h1>
      <div className="hero-reflections" aria-label="Yoga reflections">
        <p className="hero-reflection hero-reflection-temple">If your body is a temple, your breath <span role="img" aria-label="lungs">🫁</span> will be your god.</p>
        <p className="hero-reflection hero-reflection-knowledge">Successful concentration is direct knowledge.</p>
        <p className="hero-reflection hero-reflection-effort">Success is immediate where efforts are intense.</p>
      </div>
      <div className="hero-actions"><a className="primary-button" href="#contact">Begin your practice <Arrow /></a><a className="text-link" href="#programs">Explore programs</a></div>
    </div>
    <div className="hero-visual" data-reveal data-reveal-delay="1">
      <img src="/assets/yoga-teacher-hero.jpg" alt="Yoga teacher seated in a calm, sunlit studio" fetchPriority="high" decoding="async" />
      <div className="hero-note"><span>01</span> Breath<br />Movement<br />Stillness</div>
    </div>
    <a className="scroll-note" href="#programs">Scroll to discover</a>
  </section>;
}
