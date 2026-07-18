import { teachingApproachCards, teachingApproachContent } from "../constants/teachingApproachConstants";

export function TeachingApproach() {
  return <section className="about-suresh-story home-teaching-approach" id="teaching-approach"><div className="about-story-heading"><p className="eyebrow">{teachingApproachContent.eyebrow}</p><h2>{teachingApproachContent.title}<br /><em>{teachingApproachContent.emphasizedTitle}</em></h2><p className="about-story-source">{teachingApproachContent.source}</p></div><div className="about-story-cards">{teachingApproachCards.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
