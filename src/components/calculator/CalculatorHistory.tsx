'use client';

import { useState, useEffect } from 'react';
import type { HistoryEntry } from '@/lib/calculations/types';

const STORAGE_KEY = 'calculahoras_history';

export function CalculatorHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setHistory(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const removeEntry = (id: string) => {
    const updated = history.filter((e) => e.id !== id);
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-ink-500 hover:text-ink-700 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        Histórico ({history.length})
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          {history.slice(0, 10).map((entry) => (
            <div key={entry.id} className="flex items-center justify-between p-3 bg-surface-50 rounded-lg border border-surface-200 text-sm">
              <div>
                <p className="font-medium text-ink-800">{entry.entrada} → {entry.saida}</p>
                <p className="text-xs text-ink-500">{entry.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-brand-600">{entry.resultado}</span>
                <button
                  onClick={() => removeEntry(entry.id)}
                  className="text-ink-400 hover:text-red-500 transition-colors"
                  aria-label="Remover"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={clearHistory}
            className="text-xs text-red-500 hover:text-red-600 transition-colors"
          >
            Limpar histórico
          </button>
        </div>
      )}
    </div>
  );
}

export function saveToHistory(entry: Omit<HistoryEntry, 'id' | 'date'>) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const history: HistoryEntry[] = stored ? JSON.parse(stored) : [];
    const newEntry: HistoryEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('pt-BR'),
    };
    history.unshift(newEntry);
    if (history.length > 20) history.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch { /* ignore */ }
}
