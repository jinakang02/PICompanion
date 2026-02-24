function phaseStats(phase, completedItems) {
  const keys = phase.steps.flatMap(s => s.checklistItems.map((_, i) => `${s.id}__${i}`));
  const done  = keys.filter(k => completedItems[k]).length;
  return { done, total: keys.length, pct: keys.length ? Math.round((done / keys.length) * 100) : 0 };
}

export default function Sidebar({ phases, activeId, onSelect, completedItems }) {
  return (
    <nav className="sidebar">
      <p className="sidebar-label">PHASES</p>
      {phases.map((phase, i) => {
        const { done, total, pct } = phaseStats(phase, completedItems);
        const active   = phase.id === activeId;
        const complete = pct === 100;
        return (
          <button
            key={phase.id}
            className={`phase-btn ${active ? 'phase-btn--active' : ''} ${complete ? 'phase-btn--done' : ''}`}
            onClick={() => onSelect(phase.id)}
            style={{ '--accent': phase.accent }}
          >
            <span className="phase-num">{i + 1}</span>
            <div className="phase-btn-body">
              <div className="phase-btn-top">
                <span className="phase-icon">{phase.icon}</span>
                <span className="phase-name">{phase.label}</span>
                {complete && <span className="phase-check">✓</span>}
              </div>
              <div className="phase-mini-row">
                <div className="phase-mini-track">
                  <div className="phase-mini-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="phase-mini-count">{done}/{total}</span>
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
