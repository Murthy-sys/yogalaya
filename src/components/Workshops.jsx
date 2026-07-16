import { Arrow } from "./Arrow";

export function Workshops({ workshops, whatsappUrl }) {
  return <section className="workshops" id="workshops">
    <div className="workshops-heading" data-reveal><p className="eyebrow">Focused practice</p><h2>Workshops to go<br /><em>deeper.</em></h2><p>Small, attentive sessions that create space to explore a practice beyond the rhythm of a regular class.</p><a className="text-link dark" href={whatsappUrl} target="_blank" rel="noreferrer">Ask about upcoming dates <Arrow /></a></div>
    <div className="workshop-grid" aria-label="Upcoming workshops">{workshops.map((workshop, index) => <article className="workshop-card" key={workshop.no} data-reveal style={{ "--reveal-index": index }}><div className="workshop-image"><img src={workshop.image} alt={`${workshop.title} at Suresh's Yogalaya`} loading="lazy" decoding="async" /><span>Upcoming</span></div><div className="workshop-content"><span className="workshop-number">{workshop.no}</span><h3>{workshop.title}</h3><p>{workshop.text}</p><div className="workshop-footer"><small>{workshop.meta}</small><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Enquire about ${workshop.title}`}><Arrow /></a></div></div></article>)}</div>
  </section>;
}
