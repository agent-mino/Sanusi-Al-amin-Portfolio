import { useCallback, useRef, useState } from 'react';
import { projects } from '../data/projects';
import '../styles/projectShowcase.css';

// Address-bar text: live site host, or the repo path when there is no live site.
function displayUrl(url) {
  if (!url) return 'github.com/agent-mino';
  try {
    const { host, pathname } = new URL(url);
    return `${host}${pathname}`.replace(/\/$/, '');
  } catch {
    return 'github.com/agent-mino';
  }
}

export default function ProjectShowcase() {
  // Stack order (front first) is kept separate from DOM order so cards don't
  // re-mount/re-order in the DOM on click, which would drop keyboard focus.
  const [order, setOrder] = useState(() => projects.map((project) => project.id));
  const buttonRefs = useRef({});
  const active = projects.find((project) => project.id === order[0]);

  const rotateToFront = useCallback((id) => {
    setOrder((prev) => {
      const index = prev.indexOf(id);
      if (index <= 0) return prev;
      return [id, ...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  }, []);

  // Arrow keys step through projects in their original order and move focus along.
  const onKeyDown = (event) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const current = projects.findIndex((project) => project.id === order[0]);
    const next = projects[(current + step + projects.length) % projects.length];
    rotateToFront(next.id);
    buttonRefs.current[next.id]?.focus();
  };

  return (
    <div className="project-showcase">
      <p className="project-showcase__hint">
        <span className="hint-pointer">Click a card or use arrow keys · hover the stack to fan it out</span>
        <span className="hint-touch">Tap a card to bring it forward</span>
      </p>

      {/* Persistent live region: the panel below remounts per project, which screen readers won't announce. */}
      <p className="sr-only" aria-live="polite">
        Showing {active.title}
      </p>

      <aside id="project-preview" className="preview-panel" key={active.id}>
        <div className="preview-panel__chrome">
          <span className="preview-panel__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="preview-panel__url">{displayUrl(active.liveUrl || active.repoUrl)}</span>
        </div>

        <figure className="preview-panel__media">
          <img
            className="preview-panel__image"
            src={active.image}
            alt={`${active.title} preview`}
            width="1440"
            height="810"
            decoding="async"
          />
          <span className="preview-panel__image-overlay" aria-hidden="true" />
        </figure>

        <div className="preview-panel__body">
          <p className="preview-panel__meta">
            <span>{active.year}</span>
            <span>{active.role}</span>
            {active.status && <span className="preview-panel__status">{active.status}</span>}
          </p>
          <h3 className="preview-panel__title">{active.title}</h3>
          <p className="preview-panel__description">{active.summary}</p>
          <ul className="preview-panel__highlights">
            {active.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Tech stack">
            {active.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="preview-panel__links">
            {active.liveUrl && (
              <a className="preview-panel__link" href={active.liveUrl} target="_blank" rel="noreferrer">
                Live site ↗
              </a>
            )}
            {active.repoUrl && (
              <a className="preview-panel__link" href={active.repoUrl} target="_blank" rel="noreferrer">
                Source code ↗
              </a>
            )}
          </div>
        </div>
      </aside>

      <div
        className="stack-container"
        style={{ '--total': projects.length }}
        role="group"
        aria-label="Projects"
        onKeyDown={onKeyDown}
      >
        {projects.map((card, number) => {
          const index = order.indexOf(card.id);
          return (
            <button
              key={card.id}
              ref={(el) => {
                buttonRefs.current[card.id] = el;
              }}
              type="button"
              className={`stack-card${index === 0 ? ' stack-card--active' : ''}`}
              style={{ '--index': index, '--total': projects.length }}
              onClick={() => rotateToFront(card.id)}
              aria-pressed={index === 0}
              aria-controls="project-preview"
            >
              <span className="stack-card__index">{String(number + 1).padStart(2, '0')}</span>
              <span className="stack-card__title">{card.title}</span>
              <span className="stack-card__stack">{card.stack.slice(0, 2).join(' · ')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
