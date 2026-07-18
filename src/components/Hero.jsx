import { Arrow } from "./Arrow";
import { heroContent, heroReflections } from "../constants/heroConstants";

export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy" data-reveal>
      <p className="eyebrow">{heroContent.eyebrow}</p>
      <p className="hero-compact-copy">{heroContent.compactCopy}</p>
      <h1>{heroContent.title}<br />{heroContent.titleLineTwo} <em>{heroContent.emphasizedTitle}</em></h1>
      <div className="hero-reflections" aria-label="Yoga reflections">
        {heroReflections.map(({ className, text }) => <p className={`hero-reflection ${className}`} key={className}>{text}</p>)}
      </div>
      <div className="hero-actions"><a className="primary-button" href="#contact">Begin your practice <Arrow /></a><a className="text-link" href="#programs">Explore programs</a></div>
    </div>
    <div className="hero-visual" data-reveal data-reveal-delay="1">
      <img src={heroContent.image} srcSet={heroContent.imageSrcSet} sizes={heroContent.imageSizes} width={heroContent.imageWidth} height={heroContent.imageHeight} alt={heroContent.imageAlt} fetchPriority="high" decoding="async" />
      <div className="hero-note"><span>01</span>{heroContent.note.map((line) => <span className="hero-note-text" key={line}>{line}<br /></span>)}</div>
    </div>
    <a className="scroll-note" href="#programs">Scroll to discover</a>
  </section>;
}
