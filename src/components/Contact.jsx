import { useRef, useState } from "react";
import { Arrow } from "./Arrow";
import { contactContent } from "../constants/contactConstants";
import { googleForm } from "../constants/googleFormConstants";

export function Contact({ programs, workshops, submitted, onSubmit, onReset }) {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const response = new URLSearchParams({
      [googleForm.fields.name]: formData.get("name"),
      [googleForm.fields.phone]: formData.get("phone"),
      [googleForm.fields.program]: formData.get("program"),
      [googleForm.fields.message]: formData.get("message"),
    });

    try {
      await fetch(googleForm.responseUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: response,
      });
      onSubmit();
    } catch {
      setSubmitError("We couldn’t send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitError("");
    onReset();
    requestAnimationFrame(() => formRef.current?.elements.name?.focus());
  };

  return <section className="contact" id="contact">
    <div className="contact-copy" data-reveal>
      <p className="eyebrow">{contactContent.eyebrow}</p>
      <h2>{contactContent.title}<br />{contactContent.titleLineTwo} <em>{contactContent.emphasizedTitle}</em></h2>
      <div className="contact-invocation">
        <strong>{contactContent.invocation[0]}</strong>
        <span lang="sa">{contactContent.invocation[1]}</span>
        {contactContent.invocation.slice(2).map((line) => <span key={line}>{line}</span>)}
      </div>
      <div className="contact-details">{contactContent.details.map((line) => <span key={line}>{line}</span>)}</div>
    </div>
    {submitted ? <div className="form-success" role="status"><span>Thank you.</span><h3>Your practice begins here.</h3><p>We’ll be in touch shortly to help choose your first session.</p><button type="button" onClick={handleReset}>Send another enquiry</button></div> : <form ref={formRef} className="is-visible" data-reveal data-reveal-delay="1" onSubmit={handleSubmit}><label>Name<input type="text" name="name" placeholder="Your name" required /></label><label>Phone<input type="tel" name="phone" placeholder="Your phone number" required /></label><label>I’m interested in<select name="program" defaultValue="" required><option value="" disabled>Choose a programme or workshop</option><optgroup label="Programmes">{programs.map(({ title }) => <option key={title}>{title}</option>)}</optgroup><optgroup label="Workshops">{workshops.map((workshop) => <option key={workshop}>{workshop}</option>)}</optgroup></select></label><label>Anything we should know?<textarea name="message" rows="3" placeholder="Tell us about your goals or experience" required /></label>{submitError && <p role="alert">{submitError}</p>}<button className="primary-button" type="submit" disabled={submitting}>{submitting ? "Sending…" : <>Begin your journey <Arrow /></>}</button></form>}
  </section>;
}
