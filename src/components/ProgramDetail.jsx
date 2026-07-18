import { Arrow } from "./Arrow";

export function ProgramDetail({ program }) {
  if (!program) {
    return <main className="program-detail-page"><section className="program-detail-empty"><p className="eyebrow">Programme not found</p><h1>This practice could not be found.</h1><a className="text-link dark" href="#programs">View all programmes <Arrow /></a></section></main>;
  }

  return <main className="program-detail-page">
    <section className="program-detail-hero">
      <div className="program-detail-heading" data-reveal>
        <a className="program-back-link" href="#programs">← All programmes</a>
        <p className="eyebrow">{program.eyebrow}</p>
        <span className="program-detail-number">{program.no}</span>
        <h1>{program.title}</h1>
      </div>
      <div className="program-detail-copy" data-reveal data-reveal-delay="1">
        <p className="program-detail-lead">{program.intro}</p>
        {program.detailSection && <div className="program-detail-editorial"><h2>{program.detailSection.title}</h2>{program.detailSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
        {program.schedule && <div className="program-detail-schedule"><span>{program.classFormat}</span><strong>{program.schedule}</strong></div>}
        <div className="program-detail-points">{program.points.map((point, index) => <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><p>{point}</p></div>)}</div>
        <a className="primary-button" href="#contact">Enquire about this programme <Arrow /></a>
      </div>
    </section>
  </main>;
}
