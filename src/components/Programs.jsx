import { Arrow } from "./Arrow";
import { programsSectionContent } from "../constants/programConstants";

export function Programs({ programs }) {
  return <section className="programs" id="programs">
    <div className="section-heading" data-reveal><p className="eyebrow">{programsSectionContent.eyebrow}</p><h2>{programsSectionContent.title}<br /><em>{programsSectionContent.emphasizedTitle}</em></h2></div>
    <div className="program-list" data-reveal data-reveal-delay="1">{programs.map((program) => <a className="program-card" href={`#/program/${program.slug}`} key={program.no} aria-label={`Learn more about ${program.title}`}><span className="program-number">{program.no}</span><div><h3>{program.title}</h3><p>{program.text}</p></div><p className="program-meta">{program.meta}</p><span className="program-arrow"><Arrow /></span></a>)}</div>
  </section>;
}
