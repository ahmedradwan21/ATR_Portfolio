import { useState, useEffect } from 'react';

export default function StatusBar({ activeFile, terminalOpen, onToggleTerminal, currentTime }) {
  const [gitBranch] = useState('main');
  const [commitCount] = useState(47);
  const [learning] = useState('TypeScript + NestJS');
  const [lastDeploy] = useState('2 days ago');

  return (
    <div className="status-bar">
      <div className="status-left">
        <span className="status-item branch" title="Git Branch">
          🌿 {gitBranch}*{commitCount}
        </span>
        <span className="status-item" title="Errors">
          ❌ 0
        </span>
        <span className="status-item" title="Warnings">
          ⚠️ 0
        </span>
        <span className="status-item learning" title="Currently Learning">
          📚 {learning}
        </span>
        <span className="status-item deploy" title="Last Deploy">
          🚀 {lastDeploy}
        </span>
      </div>
      <div className="status-right">
        <span className="status-item" onClick={onToggleTerminal} style={{cursor: 'pointer'}}>
          {terminalOpen ? '🔽' : '▶️'} Terminal
        </span>
        <span className="status-item">Ln 42, Col 7</span>
        <span className="status-item">UTF-8</span>
        <span className="status-item">JavaScript</span>
        <span className="status-item">🔔</span>
        <span className="status-item time">
          {currentTime.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}
        </span>
      </div>
    </div>
  );
}
