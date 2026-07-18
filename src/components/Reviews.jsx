import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import { reviewsSectionContent } from "../constants/testimonialConstants";

export function Reviews({ testimonials, testimonial, expanded, dragging, dragOffset, onSelect, onToggleExpanded, onTouchStart, onTouchMove, onTouchCancel, justdialReviewsUrl }) {
  const [visibleIndex, setVisibleIndex] = useState(testimonial);
  const [turn, setTurn] = useState(null);
  const timers = useRef([]);
  const activeReview = testimonials[visibleIndex];

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);
  useEffect(() => {
    if (!turn && testimonial !== visibleIndex) setVisibleIndex(testimonial);
  }, [testimonial, turn, visibleIndex]);

  const closeExpandedReview = () => {
    if (expanded) onToggleExpanded();
  };

  const requestPage = (index) => {
    if (turn || index === visibleIndex || index < 0 || index >= testimonials.length) return;
    const direction = index < visibleIndex ? "backward" : "forward";
    setTurn({ direction, from: visibleIndex, to: index });
    closeExpandedReview();
    timers.current.push(window.setTimeout(() => {
      setVisibleIndex(index);
      onSelect(index);
    }, 620));
    timers.current.push(window.setTimeout(() => setTurn(null), 1320));
  };

  const handleTouchEnd = () => {
    const destination = dragOffset > 46 ? visibleIndex - 1 : dragOffset < -46 ? visibleIndex + 1 : visibleIndex;
    onTouchCancel();
    if (destination !== visibleIndex) requestPage(destination);
  };

  const outgoingReview = turn ? testimonials[turn.from] : activeReview;
  const incomingReview = turn ? testimonials[turn.to] : activeReview;

  const reviewContent = (review, isInteractive = false) => <>
    <div className="paper-review-top"><span>{String(testimonials.indexOf(review) + 1).padStart(2, "0")}</span>{review.featured && <small>Featured review</small>}</div>
    <span className="paper-review-mark" aria-hidden="true">“</span>
    <blockquote className={isInteractive && expanded ? "is-expanded" : "is-clamped"}>{review.quote}</blockquote>
    {isInteractive && <button className="paper-review-more" type="button" onClick={onToggleExpanded} aria-expanded={expanded}>{expanded ? "Show less" : "Read full review"}</button>}
    <div className="paper-review-author"><strong>{review.name}</strong></div>
  </>;

  return <section className="reviews" id="reviews" data-reveal>
    <div className="reviews-heading">
      <p className="eyebrow">{reviewsSectionContent.eyebrow}</p>
      <h2>{reviewsSectionContent.title}<br /><em>{reviewsSectionContent.emphasizedTitle}</em></h2>
      <p>{reviewsSectionContent.description}</p>
      <a className="reviews-heading-link" href={justdialReviewsUrl} target="_blank" rel="noreferrer">See all reviews <Arrow /></a>
    </div>

    <div className="paper-testimonial-wrap">
      <div
        className={`paper-testimonial ${dragging ? "is-dragging" : ""}`}
        aria-live="polite"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        <article className="paper-review-page paper-review-current" style={{ "--paper-drag": `${dragOffset}px` }}>
          {reviewContent(activeReview, true)}
        </article>

        {turn && <div className={`paper-turn paper-turn-${turn.direction}`} aria-hidden="true">
          <article className="paper-turn-face paper-turn-front">{reviewContent(outgoingReview)}</article>
          <article className="paper-turn-face paper-turn-back">{reviewContent(incomingReview)}</article>
          <span className="paper-turn-highlight" />
        </div>}

        <span className={`paper-cast-shadow ${turn ? `is-active is-${turn.direction}` : ""}`} aria-hidden="true" />
      </div>

      <div className="paper-review-controls">
        <button type="button" onClick={() => requestPage(visibleIndex - 1)} disabled={visibleIndex === 0 || Boolean(turn)} aria-label="Previous testimonial"><span aria-hidden="true">←</span></button>
        <button type="button" onClick={() => requestPage(visibleIndex + 1)} disabled={visibleIndex === testimonials.length - 1 || Boolean(turn)} aria-label="Next testimonial"><span aria-hidden="true">→</span></button>
      </div>
    </div>
  </section>;
}
