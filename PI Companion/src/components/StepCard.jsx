import { useState } from 'react';

export default function StepCard({ step, num, accent, completedItems, note, onToggle, onNote }) {
  const [open, setOpen]       = useState(true);
  const [wikiOpen, setWikiOpen] = useState(false);

  const total = step.checklistItems.length;
  const done  = step.checklistItems.filter((_, i) => completedItems[`${step.id}__${i}`]).length;
  const pct   = total ? Math.round((done / total) * 100) : 0;
  const allDone = done === total;

  return (
    <div className={`step-card ${allDone ? 'step-card--done' : ''}`}>

      {/* ── Header (click to collapse) ── */}
      <div className="step-head" onClick={() => setOpen(o => !o)}>
        <div className="step-num" style={{ background: allDone ? '#16A34A' : accent }}>
          {allDone ? '✓' : num}
        </div>
        <div className="step-head-body">
          <span className="step-title">{step.title}</span>
          <div className="step-mini-row">
            <div className="step-mini-track">
              <div className="step-mini-fill"
                style={{ width: `${pct}%`, background: allDone ? '#16A34A' : accent }} />
            </div>
            <span className="step-mini-count">{done}/{total}</span>
          </div>
        </div>
        <span className="step-caret">{open ? '▲' : '▼'}</span>
      </div>

      {/* ── Body ── */}
      {open && (
        <div className="step-body">
          <p className="step-desc">{step.description}</p>

          {/* Wiki links */}
          {step.wikiLinks?.length > 0 && (
            <div className="wiki-section">
              <button
                className="wiki-toggle"
                style={{ color: accent, borderColor: accent }}
                onClick={() => setWikiOpen(o => !o)}
              >
                <span>📖</span>
                {wikiOpen ? 'Hide' : 'Show'} wiki resources ({step.wikiLinks.length})
              </button>
              {wikiOpen && (
                <div className="wiki-links">
                  {step.wikiLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wiki-link"
                    >
                      <span className="wiki-link-label">{link.label}</span>
                      <span className="wiki-link-arrow">↗</span>
                    </a>
                  ))}
                  <p className="wiki-hint">
                    Replace the placeholder URLs in <code>src/data/phases.js</code> with your real wiki links.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Checklist */}
          <div className="checklist">
            <p className="section-label">CHECKLIST</p>
            {step.checklistItems.map((item, i) => {
              const checked = !!completedItems[`${step.id}__${i}`];
              return (
                <label key={i} className={`check-row ${checked ? 'check-row--done' : ''}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(i)}
                    className="check-input"
                  />
                  <span className="check-text">{item}</span>
                </label>
              );
            })}
          </div>

          {/* Notes */}
          <div className="notes">
            <p className="section-label">NOTES</p>
            <textarea
              className="notes-area"
              rows={3}
              placeholder="Add your notes, decisions, or observations for this step…"
              value={note}
              onChange={e => onNote(e.target.value)}
            />
            <p className="notes-hint">Saved automatically as you type</p>
          </div>

          {/* All-done banner */}
          {allDone && (
            <div className="done-banner">
              🎉 All items complete — great progress!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
