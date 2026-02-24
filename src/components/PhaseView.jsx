import StepCard from './StepCard';

function phaseStats(phase, completedItems) {
  const keys = phase.steps.flatMap(s => s.checklistItems.map((_, i) => `${s.id}__${i}`));
  const done  = keys.filter(k => completedItems[k]).length;
  return { done, total: keys.length, pct: keys.length ? Math.round((done / keys.length) * 100) : 0 };
}

export default function PhaseView({ phase, completedItems, notes, onToggle, onNote }) {
  const { done, total, pct } = phaseStats(phase, completedItems);

  return (
    <div className="phase-view">
      {/* ── Phase banner ── */}
      <div className="phase-banner" style={{ '--accent': phase.accent, '--bg': phase.color }}>
        <div className="phase-banner-left">
          <div className="phase-banner-icon">{phase.icon}</div>
          <div>
            <div className="phase-banner-eyebrow">Phase</div>
            <h2 className="phase-banner-title">{phase.label}</h2>
            <p className="phase-banner-tag">{phase.tagline}</p>
          </div>
        </div>
        <div className="phase-banner-ring">
          <svg viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3.5"/>
            <circle cx="20" cy="20" r="17" fill="none" stroke={phase.accent} strokeWidth="3.5"
              strokeDasharray={`${(pct / 100) * 106.8} 106.8`}
              strokeDashoffset="26.7" strokeLinecap="round" />
          </svg>
          <span className="phase-ring-pct">{pct}%</span>
        </div>
      </div>

      {/* ── Phase description ── */}
      <p className="phase-desc">{phase.description}</p>

      {/* ── Overall phase progress bar ── */}
      <div className="phase-prog-wrap">
        <div className="phase-prog-track">
          <div className="phase-prog-fill" style={{ width: `${pct}%`, background: phase.accent }} />
        </div>
        <span className="phase-prog-label">{done} of {total} items complete</span>
      </div>

      {/* ── Steps ── */}
      <div className="steps">
        {phase.steps.map((step, idx) => (
          <StepCard
            key={step.id}
            step={step}
            num={idx + 1}
            accent={phase.accent}
            completedItems={completedItems}
            note={notes[step.id] || ''}
            onToggle={i => onToggle(step.id, i)}
            onNote={txt => onNote(step.id, txt)}
          />
        ))}
      </div>
    </div>
  );
}
