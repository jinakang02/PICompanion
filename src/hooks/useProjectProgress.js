import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const DEFAULTS = {
  projectName:    'My Improvement Project',
  completedItems: {},   // { "stepId__itemIndex": true }
  notes:          {},   // { "stepId": "text" }
  activePhaseId:  'understand',
};

export function useProjectProgress(userId) {
  const [data,    setData]    = useState(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const saveTimer = useRef(null);

  const docRef = userId ? doc(db, 'users', userId, 'projects', 'default') : null;

  // ── Load ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!docRef) { setLoading(false); return; }
    (async () => {
      try {
        const snap = await getDoc(docRef);
        if (snap.exists()) setData(d => ({ ...d, ...snap.data() }));
      } catch (e) { console.error('Load error:', e); }
      finally      { setLoading(false); }
    })();
  }, [userId]);

  // ── Save (debounced for notes, immediate for everything else) ─────────────
  const persist = useCallback(async (patch) => {
    if (!docRef) return;
    setSaving(true);
    try {
      const snap = await getDoc(docRef);
      const payload = { ...patch, updatedAt: serverTimestamp() };
      if (snap.exists()) await updateDoc(docRef, payload);
      else               await setDoc(docRef, { ...DEFAULTS, ...payload, createdAt: serverTimestamp() });
    } catch (e) { console.error('Save error:', e); }
    finally     { setSaving(false); }
  }, [docRef]);

  // ── Actions ───────────────────────────────────────────────────────────────
  const toggleItem = useCallback((stepId, idx) => {
    const key = `${stepId}__${idx}`;
    setData(d => {
      const next = { ...d, completedItems: { ...d.completedItems, [key]: !d.completedItems[key] } };
      persist({ completedItems: next.completedItems });
      return next;
    });
  }, [persist]);

  const updateNote = useCallback((stepId, text) => {
    setData(d => ({ ...d, notes: { ...d.notes, [stepId]: text } }));
    // Debounce saves so we don't hammer Firestore on every keystroke
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      setData(d => { persist({ notes: d.notes }); return d; });
    }, 1200);
  }, [persist]);

  const setActivePhase = useCallback((id) => {
    setData(d => ({ ...d, activePhaseId: id }));
    persist({ activePhaseId: id });
  }, [persist]);

  const setProjectName = useCallback((name) => {
    setData(d => ({ ...d, projectName: name }));
    persist({ projectName: name });
  }, [persist]);

  return { data, loading, saving, toggleItem, updateNote, setActivePhase, setProjectName };
}
