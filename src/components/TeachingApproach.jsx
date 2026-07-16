const cards = [
  ["/01", "Structured, disciplined sessions", "Classes follow a considered sequence: preparatory stretches, carefully demonstrated asanas, breathing techniques, relaxation and meditation."],
  ["/02", "Personal attention", "Suresh and his team observe each participant closely, correct posture and suggest modifications so students can practise with confidence."],
  ["/03", "Principles, benefits and precautions", "Teaching goes beyond demonstrating poses. Students are helped to understand why a practice is done, its intended benefits and the precautions that support safe, effective movement."],
  ["/04", "A holistic approach", "Traditional yoga, breathwork and meditation are brought together to support strength, flexibility, calm, clarity and balance in everyday life."],
];

export function TeachingApproach() {
  return <section className="about-suresh-story home-teaching-approach" id="teaching-approach"><div className="about-story-heading"><p className="eyebrow">How Suresh teaches</p><h2>Care in every<br /><em>detail.</em></h2><p className="about-story-source">These teaching qualities are drawn from a long-term student’s statement of experience with Suresh’s Yogalaya.</p></div><div className="about-story-cards">{cards.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
