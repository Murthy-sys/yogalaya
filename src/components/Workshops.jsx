import { Arrow } from "./Arrow";

export function Workshops({ workshops, whatsappUrl }) {
  return <section className="workshops" id="workshops">
    <div className="workshops-heading" data-reveal><p className="eyebrow">Focused practice</p><h2>Workshops to go<br /><em>deeper.</em></h2><p>Small, attentive sessions that create space to explore a practice beyond the rhythm of a regular class.</p><a className="text-link dark" href={whatsappUrl} target="_blank" rel="noreferrer">Ask about upcoming dates <Arrow /></a></div>
    <div className="workshop-grid" aria-label="Workshop topics">{workshops.map((workshop, index) => <article className="workshop-card" key={workshop} data-reveal style={{ "--reveal-index": index }}><div className="workshop-content"><span className="workshop-number">{String(index + 1).padStart(2, "0")}</span><h3>{workshop}</h3><div className="workshop-footer"><small>Workshop</small><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Enquire about ${workshop}`}><Arrow /></a></div></div></article>)}</div>
  </section>;
}
