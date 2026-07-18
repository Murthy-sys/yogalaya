import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

export function Reviews({ testimonials, testimonial, expanded, dragging, dragOffset, onSelect, onToggleExpanded, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel, justdialReviewsUrl }) {
  const [visibleIndex, setVisibleIndex] = useState(testimonial);
  const [turn, setTurn] = useState(null);
  const [turnDirection, setTurnDirection] = useState("forward");
  const timers = useRef([]);
  const activeReview = testimonials[visibleIndex];

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  useEffect(() => {
    if (!turn && testimonial !== visibleIndex) setVisibleIndex(testimonial);
  }, [testimonial, turn, visibleIndex]);

  const requestPage = (index) => {
    if (turn || index === visibleIndex || index < 0 || index >= testimonials.length) return;
    const direction = index < visibleIndex ? "backward" : "forward";
    setTurnDirection(direction);
    setTurn({ direction, from: visibleIndex, to: index });
    setExpandedSafely(false);

    timers.current.push(window.setTimeout(() => {
      setVisibleIndex(index);
      onSelect(index);
    }, 390));
    timers.current.push(window.setTimeout(() => setTurn(null), 860));
  };

  const setExpandedSafely = (next) => {
    if (expanded !== next) onToggleExpanded();
  };

  const previous = () => requestPage(visibleIndex - 1);
  const next = () => requestPage(visibleIndex + 1);
  const turnReview = turn ? testimonials[turn.from] : activeReview;

  return <section className="reviews" id="reviews" data-reveal>
    <div className="reviews-heading">
      <p className="eyebrow">Words from our community</p>
      <h2>Practice,<br /><em>in their words.</em></h2>
      <p>Reflections from students who have made Yogalaya part of their everyday lives.</p>
      <a className="reviews-heading-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews <Arrow /></a>
    </div>

    <div className={`review-book ${turn ? `is-turning is-turning-${turn.direction}` : ""}`}>
      <div className="review-book-pages" aria-live="polite">
        <div className="review-book-page review-book-left">
          <span className="review-book-kicker">Community journal</span>
          <span className="review-book-mark" aria-hidden="true">“</span>
          <div className="review-book-person">
            <strong>{activeReview.name}</strong>
            <span>{activeReview.detail}</span>
          </div>
          <div className="review-book-index" aria-label="Choose a review">
            {testimonials.map((review, index) => <button className={visibleIndex === index ? "is-active" : ""} onClick={() => requestPage(index)} key={review.name} aria-pressed={visibleIndex === index} disabled={Boolean(turn)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{review.name}</strong>
            </button>)}
          </div>
        </div>

        <div className="review-book-page review-book-right">
          {activeReview.featured && <span className="featured-review-label">Featured review</span>}
          <blockquote className={expanded ? "is-expanded" : "is-clamped"}>{activeReview.quote}</blockquote>
          <button className="review-read-more" type="button" onClick={onToggleExpanded} aria-expanded={expanded}>{expanded ? "Show less" : "Read full review"}</button>
          <div className="review-book-footer">
            <div className="review-book-progress" aria-hidden="true"><span style={{ width: `${((visibleIndex + 1) / testimonials.length) * 100}%` }} /></div>
            <span className="review-turn-label">Turn page</span>
            <div className="testimonial-controls">
              <button type="button" onClick={previous} disabled={visibleIndex === 0 || Boolean(turn)} aria-label="Previous review">←</button>
              <span>{String(visibleIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
              <button type="button" onClick={next} disabled={visibleIndex === testimonials.length - 1 || Boolean(turn)} aria-label="Next review">→</button>
            </div>
          </div>
        </div>

        <div className="review-book-spine" aria-hidden="true" />
        {turn && <div className={`review-turning-sheet review-turning-sheet-${turn.direction}`} aria-hidden="true">
          <span className="review-book-mark">“</span>
          <blockquote>{turnReview.quote}</blockquote>
          <strong>{turnReview.name}</strong>
        </div>}
      </div>
    </div>

    <div className={`mobile-reviews page-turn-${turnDirection}`} aria-label="Student reviews carousel">
      <div className="mobile-review-viewport" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={(event) => { setTurnDirection(dragOffset > 0 ? "backward" : "forward"); onTouchEnd(event); }} onTouchCancel={onTouchCancel}>
        <div className={`mobile-review-track ${dragging ? "is-dragging" : ""}`} style={{ "--mobile-review-index": testimonial, "--mobile-review-drag": dragOffset }}>
          {testimonials.map((review, index) => {
            const active = testimonial === index;
            return <article className={`mobile-review-card ${active ? "is-active" : ""}`} style={{ "--review-distance": index - testimonial }} key={`mobile-${review.name}`} aria-hidden={!active}>
              <div className="mobile-review-card-top"><span>{String(index + 1).padStart(2, "0")}</span>{review.featured && <small>Featured review</small>}</div>
              <span className="mobile-review-mark" aria-hidden="true">“</span>
              <blockquote className={active && expanded ? "is-expanded" : "is-clamped"}>{review.quote}</blockquote>
              {active && <button className="mobile-review-more" type="button" onClick={onToggleExpanded} aria-expanded={expanded}>{expanded ? "Show less" : "Read full review"}</button>}
              <footer className="mobile-review-author"><strong>{review.name}</strong><span>{review.detail}</span></footer>
            </article>;
          })}
        </div>
      </div>
      <div className="mobile-review-controls">
        <button type="button" onClick={() => { setTurnDirection("backward"); onSelect(testimonial - 1); }} disabled={testimonial === 0} aria-label="Previous review">←</button>
        <div className="mobile-review-count"><strong>{String(testimonial + 1).padStart(2, "0")}</strong><span>/ {String(testimonials.length).padStart(2, "0")}</span></div>
        <button type="button" onClick={() => { setTurnDirection("forward"); onSelect(testimonial + 1); }} disabled={testimonial === testimonials.length - 1} aria-label="Next review">→</button>
      </div>
      <div className="mobile-review-progress" aria-hidden="true"><span style={{ width: `${((testimonial + 1) / testimonials.length) * 100}%` }} /></div>
      <a className="mobile-all-reviews-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews on Google <Arrow /></a>
    </div>
  </section>;
}
