import { Arrow } from "./Arrow";
import { instructorContent, instructorValues } from "../constants/instructorConstants";

export function Instructors() {
  return <section className="instructor" id="instructor">
    <div className="instructor-image" data-reveal><img src={instructorContent.image} srcSet={instructorContent.imageSrcSet} sizes={instructorContent.imageSizes} width={instructorContent.imageWidth} height={instructorContent.imageHeight} alt={instructorContent.imageAlt} loading="lazy" decoding="async" /></div>
    <div className="instructor-copy" data-reveal data-reveal-delay="1"><p className="eyebrow">{instructorContent.eyebrow}</p><h2>{instructorContent.title} <em>{instructorContent.emphasizedTitle}</em></h2><p className="instructor-lead">{instructorContent.lead}</p><p>{instructorContent.description}</p><div className="instructor-values">{instructorValues.map(([number, title, description]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div><a className="text-link dark" href="#/about-suresh">{instructorContent.linkLabel} <Arrow /></a></div>
  </section>;
}
