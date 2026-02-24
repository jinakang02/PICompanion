import { useState, useRef, useEffect } from 'react';

export default function Header({ user, onLogOut, saving, projectName, onRename, pct, done, total }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(projectName);
  const inputRef = useRef(null);

  useEffect(() => { setVal(projectName); }, [projectName]);
  useEffect(() => { if (editing) inputRef.current?.select(); }, [editing]);

  const commit = () => {
    setEditing(false);
    const trimmed = val.trim();
    if (trimmed && trimmed !== projectName) onRename(trimmed);
    else setVal(projectName);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-mark">PI</div>
        {editing
          ? <input
              ref={inputRef}
              className="project-name-input"
              value={val}
              onChange={e => setVal(e.target.value)}
              onBlur={commit}
              onKeyDown={e => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') { setEditing(false); setVal(projectName); }}}
            />
          : <button className="project-name-btn" onClick={() => setEditing(true)} title="Click to rename">
              <span>{projectName}</span>
              <span className="pencil">✎</span>
            </button>
        }
      </div>

      <div className="header-progress">
        <div className="prog-text">{done} / {total} completed &mdash; {pct}%</div>
        <div className="prog-track"><div className="prog-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      <div className="header-right">
        {saving && <span className="saving">saving…</span>}
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'U')}&background=4F46E5&color=fff`}
            alt={user.displayName}
          />
          <div className="avatar-menu">
            <p className="menu-name">{user.displayName}</p>
            <p className="menu-email">{user.email}</p>
            <button className="menu-signout" onClick={onLogOut}>Sign out</button>
          </div>
        </div>
      </div>
    </header>
  );
}
