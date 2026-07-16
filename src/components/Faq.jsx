export function Faq({ faqs, openFaq, onToggle }) {
  return <section className="faq" id="faq">
    <div className="faq-heading" data-reveal><p className="eyebrow">Good to know</p><h2>Frequently asked<br /><em>questions.</em></h2><p>Still curious? Send us a WhatsApp message and we’ll be happy to help.</p></div>
    <div className="faq-list" data-reveal data-reveal-delay="1">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}><h3><button type="button" onClick={() => onToggle(index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{faq.question}</span><span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3><div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!isOpen}><div><p>{faq.answer}</p></div></div></article>; })}</div>
  </section>;
}
