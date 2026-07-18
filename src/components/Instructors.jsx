import { Arrow } from "./Arrow";

const values = [
  ["01", "Experience with humility", "Long practice, shared in simple and practical language."],
  ["02", "Individual attention", "Respectful guidance shaped around the person in front of them."],
  ["03", "Practice for life", "Tools for strength, steadiness and awareness beyond the mat."],
];

export function Instructors() {
  return <section className="instructor" id="instructor">
    <div className="instructor-image" data-reveal><img src="/assets/meet-instructors-adiyogi-transparent.png" alt="Yogalaya instructors seated together in meditation within an Adiyogi-inspired form" loading="lazy" decoding="async" /></div>
    <div className="instructor-copy" data-reveal data-reveal-delay="1"><p className="eyebrow">About the instructors</p><h2>Meet <em>our instructors.</em></h2><p className="instructor-lead">Our instructors guide students toward a steadier relationship with movement, breath and awareness.</p><p>Their teaching is grounded in patient observation and clear explanation. Rather than asking every body to fit the same pose, they help each student understand the purpose of the practice and find an approach that feels sustainable.</p><div className="instructor-values">{values.map(([number, title, description]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div><a className="text-link dark" href="#/about-suresh">Know about us <Arrow /></a></div>
  </section>;
}
