import { Arrow } from "./Arrow";

export function Programs({ programs }) {
  return <section className="programs" id="programs">
    <div className="section-heading" data-reveal><p className="eyebrow">Ways to practise</p><h2>A practice for<br /><em>every season.</em></h2></div>
    <div className="program-list" data-reveal data-reveal-delay="1">{programs.map((program) => <article className="program-card" key={program.no}><span className="program-number">{program.no}</span><div><h3>{program.title}</h3><p>{program.text}</p></div><p className="program-meta">{program.meta}</p><a href="#contact" aria-label={`Enquire about ${program.title}`}><Arrow /></a></article>)}</div>
  </section>;
}
