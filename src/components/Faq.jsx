import { faqSectionContent } from "../constants/faqConstants";

export function Faq({ faqs, openFaq, onToggle }) {
  return <section className="faq" id="faq">
    <div className="faq-heading" data-reveal><p className="eyebrow">{faqSectionContent.eyebrow}</p><h2>{faqSectionContent.title}<br /><em>{faqSectionContent.emphasizedTitle}</em></h2><p>{faqSectionContent.description}</p></div>
    <div className="faq-list" data-reveal data-reveal-delay="1">{faqs.map((faq, index) => { const isOpen = openFaq === index; const answers = Array.isArray(faq.answer) ? faq.answer : [faq.answer]; return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}><h3><button type="button" onClick={() => onToggle(index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{faq.question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3><div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}><div>{answers.map((answer) => <p key={answer}>{answer}</p>)}</div></div></article>; })}</div>
  </section>;
}
