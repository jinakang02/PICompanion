import { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useProjectProgress } from './hooks/useProjectProgress';
import { PHASES } from './data/phases';
import LoginScreen from './components/LoginScreen';
import Header      from './components/Header';
import Sidebar     from './components/Sidebar';
import PhaseView   from './components/PhaseView';
import './App.css';

export default function App() {
  const { user, authLoading, signIn, logOut } = useAuth();
  const {
    data, loading, saving,
    toggleItem, updateNote, setActivePhase, setProjectName,
  } = useProjectProgress(user?.uid);

  // Derive overall stats
  const allKeys = PHASES.flatMap(p => p.steps.flatMap(s =>
    s.checklistItems.map((_, i) => `${s.id}__${i}`)
  ));
  const totalItems   = allKeys.length;
  const doneCount    = allKeys.filter(k => data.completedItems[k]).length;
  const overallPct   = totalItems ? Math.round((doneCount / totalItems) * 100) : 0;

  const activePhase = PHASES.find(p => p.id === data.activePhaseId) || PHASES[0];

  if (authLoading) return <div className="splash"><span className="spinner" /></div>;
  if (!user)       return <LoginScreen onSignIn={signIn} />;

  return (
    <div className="app">
      <Header
        user={user}
        onLogOut={logOut}
        saving={saving}
        projectName={data.projectName}
        onRename={setProjectName}
        pct={overallPct}
        done={doneCount}
        total={totalItems}
      />
      <div className="layout">
        <Sidebar
          phases={PHASES}
          activeId={activePhase.id}
          onSelect={setActivePhase}
          completedItems={data.completedItems}
        />
        <main className="content">
          {loading
            ? <div className="loading">Loading your project…</div>
            : <PhaseView
                phase={activePhase}
                completedItems={data.completedItems}
                notes={data.notes}
                onToggle={toggleItem}
                onNote={updateNote}
              />
          }
        </main>
      </div>
    </div>
  );
}
