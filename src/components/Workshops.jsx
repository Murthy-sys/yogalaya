import { Arrow } from "./Arrow";
import { workshopsSectionContent } from "../constants/workshopConstants";

export function Workshops({ workshops, whatsappUrl }) {
  return <section className="workshops" id="workshops">
    <div className="workshops-heading" data-reveal><p className="eyebrow">{workshopsSectionContent.eyebrow}</p><h2>{workshopsSectionContent.title}<br /><em>{workshopsSectionContent.emphasizedTitle}</em></h2><p>{workshopsSectionContent.description}</p><a className="text-link dark" href={whatsappUrl} target="_blank" rel="noreferrer">{workshopsSectionContent.linkLabel} <Arrow /></a></div>
    <div className="workshop-grid" aria-label="Workshop topics">{workshops.map((workshop, index) => <article className="workshop-card" key={workshop} data-reveal style={{ "--reveal-index": index }}><div className="workshop-content"><span className="workshop-number">{String(index + 1).padStart(2, "0")}</span><h3>{workshop}</h3><div className="workshop-footer"><small>Workshop</small><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Enquire about ${workshop}`}><Arrow /></a></div></div></article>)}</div>
  </section>;
}
