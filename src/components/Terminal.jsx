import { useState, useEffect, useRef, useCallback } from 'react';
import { profile, skills, projects, experience, aiResponses } from '../data/portfolio';

const BOOT_SEQUENCE = [
  'Booting ATR Backend Ops Terminal v3.0...',
  '[ OK ] Loading kernel modules...',
  '[ OK ] Mounting filesystems...',
  '[ OK ] Initializing network interfaces...',
  '[ OK ] Starting Docker daemon...',
  '[ OK ] Connecting to atr-backend-cluster...',
  '[ OK ] Authenticating with JWT...',
  '[ OK ] Connection established.',
  '',
  'Welcome to ATR Backend Ops Terminal.',
  'Type "help" to see available commands.',
  'Type "connect-ai" to chat with ATR AI Agent.',
  'Type "exit" to leave terminal mode.',
  ''
];

export default function Terminal({ onClose }) {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [aiMode, setAiMode] = useState(false);
  const [booting, setBooting] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const bootIndex = useRef(0);
  const intervalRef = useRef(null);

  // Typewriter boot effect - runs once on mount
  useEffect(() => {
    if (!booting) return;
    bootIndex.current = 0;
    setBootLines([]);

    intervalRef.current = setInterval(() => {
      if (bootIndex.current < BOOT_SEQUENCE.length) {
        setBootLines(prev => [...prev, BOOT_SEQUENCE[bootIndex.current]]);
        bootIndex.current++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setBooting(false);
      }
    }, 250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, bootLines, input]);

  // Focus input
  useEffect(() => {
    if (!booting && inputRef.current) {
      inputRef.current.focus();
    }
  }, [booting, lines]);

  const addLine = useCallback((text, type = 'output') => {
    setLines(prev => [...prev, { text, type, id: Date.now() + Math.random() }]);
  }, []);

  const getPrompt = () => aiMode ? 'atr-ai@assistant:~$ ' : 'atr@backend:~$ ';

  const formatSkills = () => {
    let out = '';
    Object.entries(skills).forEach(([category, items]) => {
      out += `\n[ ${category} ]\n`;
      out += `${'─'.repeat(60)}\n`;
      items.forEach(s => {
        const bar = '█'.repeat(Math.round(s.level / 10)) + '░'.repeat(10 - Math.round(s.level / 10));
        out += `  ${s.name.padEnd(22)} [${bar}] ${s.level}%\n`;
      });
    });
    return out;
  };

  const formatExperience = () => {
    let out = '';
    experience.forEach((exp, i) => {
      out += `\n[${i + 1}] ${exp.period}\n`;
      out += `    Company:  ${exp.company}\n`;
      out += `    Role:     ${exp.role}\n`;
      out += `    ${exp.description}\n`;
    });
    return out;
  };

  const formatProjects = (projectId = null) => {
    if (projectId) {
      const p = projects.find(pr => pr.id === projectId || pr.title.toLowerCase().includes(projectId.toLowerCase()));
      if (!p) return `Project "${projectId}" not found. Type "projects" to list all.`;
      let out = `\n[ ${p.title} ]\n`;
      out += `${'═'.repeat(60)}\n`;
      out += `Type:    ${p.type}\n`;
      out += `Tech:    ${p.tech.join(', ')}\n`;
      out += `\nDescription:\n  ${p.description}\n\n`;
      out += `Highlights:\n`;
      p.highlights.forEach(h => out += `  • ${h}\n`);
      out += `\nEndpoints:\n`;
      if (p.endpoints) {
        p.endpoints.forEach(e => out += `  ${e.method.padEnd(6)} ${e.path.padEnd(30)} ${e.desc}\n`);
      }
      out += `\nGitHub: ${p.github}\n`;
      return out;
    }
    let out = '\nAvailable Projects (as Docker Containers):\n';
    out += `${'─'.repeat(60)}\n`;
    out += `  CONTAINER ID   NAME                STATUS          PORTS\n`;
    projects.forEach((p, i) => {
      const id = `atr_${p.id.substring(0, 8)}`;
      out += `  ${id.padEnd(14)} ${p.title.substring(0, 18).padEnd(18)} Up ${(i+1)*3} days    300${i}/tcp\n`;
    });
    out += `\nType "projects <id>" for details. Example: "projects blood-donation"`;
    return out;
  };

  const dockerPs = () => {
    let out = '\nCONTAINER ID   IMAGE                    STATUS          PORTS\n';
    out += `${'─'.repeat(70)}\n`;
    projects.forEach((p, i) => {
      const id = `atr_${p.id.substring(0, 8)}`;
      out += `${id.padEnd(14)} atr/${p.id}:latest         Up ${(i+1)*3} days    0.0.0.0:300${i}->300${i}/tcp\n`;
    });
    out += `\nType "docker logs <container>" for project details.`;
    return out;
  };

  const dockerLogs = (containerId) => {
    if (!containerId) return 'Usage: docker logs <container_id>';
    const p = projects.find(pr => containerId.includes(pr.id.substring(0, 8)) || pr.id === containerId);
    if (!p) return `Container "${containerId}" not found.`;
    let out = `\n[${new Date().toISOString()}] Starting ${p.title}...\n`;
    out += `[${new Date().toISOString()}] Database connected: PostgreSQL\n`;
    out += `[${new Date().toISOString()}] Server listening on port 3000\n`;
    out += `[${new Date().toISOString()}] Swagger docs available at /api/docs\n`;
    out += `[${new Date().toISOString()}] ${p.endpoints?.length || 0} endpoints registered\n`;
    out += `[${new Date().toISOString()}] AI model loaded: ${p.tech.includes('TensorFlow') ? 'TensorFlow' : 'N/A'}\n`;
    out += `[${new Date().toISOString()}] Container healthy ✓\n`;
    return out;
  };

  const systemctlStatus = (service) => {
    if (!service) service = 'api';
    return `\n● atr-${service}.service - ATR Backend API Service\n` +
           `   Loaded: loaded (/etc/systemd/system/atr-${service}.service; enabled)\n` +
           `   Active: active (running) since Mon 2026-08-17 09:00:00 UTC; 3 days ago\n` +
           `   Memory: 256M\n` +
           `   CPU: 12%\n` +
           `   Requests/sec: 1,247\n` +
           `   Uptime: 99.9%\n`;
  };

  const apiDocs = () => {
    let out = '\n[ API Documentation — Swagger/OpenAPI ]\n';
    out += `${'═'.repeat(60)}\n`;
    projects.forEach(p => {
      out += `\n${p.title}:\n`;
      if (p.endpoints) {
        p.endpoints.forEach(e => {
          out += `  ${e.method.padEnd(6)} ${e.path.padEnd(35)} ${e.desc}\n`;
        });
      }
    });
    return out;
  };

  const getAiResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    }
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) return aiResponses.skills;
    if (lower.includes('experience') || lower.includes('work') || lower.includes('job')) return aiResponses.experience;
    if (lower.includes('project')) return aiResponses.projects;
    if (lower.includes('education') || lower.includes('degree') || lower.includes('university')) return aiResponses.education;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return aiResponses.contact;
    if (lower.includes('real-time') || lower.includes('socket') || lower.includes('websocket')) return aiResponses.realtime;
    if (lower.includes('ai') || lower.includes('ml') || lower.includes('tensorflow') || lower.includes('ocr')) return aiResponses.ai;
    if (lower.includes('node') || lower.includes('express')) return 'Ahmed has production experience with Node.js and Express.js. He built real-time LMS platforms with Socket.IO, gamification engines, and REST APIs. He also uses TypeScript and is learning NestJS for scalable architectures.';
    if (lower.includes('django') || lower.includes('python')) return 'Ahmed is proficient in Django and Django REST Framework. He has built AI-integrated APIs (Green World, OCR API, Blood Donation), multi-user platforms (Blog Management, ATR Social), and healthcare dashboards (Covid Management). All with PostgreSQL/MySQL backends.';
    if (lower.includes('docker') || lower.includes('devops')) return 'Ahmed uses Docker for containerization, GitHub Actions for CI/CD basics, and Swagger/OpenAPI for API documentation. He is comfortable deploying and maintaining backend services.';
    if (lower.includes('database') || lower.includes('sql') || lower.includes('postgres') || lower.includes('mongo')) return 'Ahmed works with PostgreSQL (primary), MongoDB, MySQL, and SQLite. He designs schemas, writes optimized queries, and handles migrations in Django and Node.js projects.';
    return aiResponses.default;
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    addLine(`${getPrompt()}${trimmed}`, 'input');

    if (aiMode) {
      if (trimmed === 'exit-ai') {
        setAiMode(false);
        addLine('Disconnected from ATR AI Assistant.', 'system');
        addLine('Returned to command mode.', 'system');
      } else {
        const response = getAiResponse(trimmed);
        setTimeout(() => {
          addLine(`ATR-AI: ${response}`, 'ai');
        }, 600);
      }
      return;
    }

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    switch (command) {
      case 'help':
        addLine(`
╔══════════════════════════════════════════════════════════════╗
║           ATR Backend Ops Terminal v3.0 Commands             ║
╠══════════════════════════════════════════════════════════════╣
  help                          Show this help message
  whoami                        Display developer profile
  skills                        Show technical skills matrix
  experience                    Show work experience
  projects [id]                 List projects or show details
  docker ps                     List running containers (projects)
  docker logs <id>              Show project logs
  systemctl status [service]    Show service status
  api-docs                      Show API documentation (Swagger)
  connect-ai                    Connect to ATR AI Agent
  clear                         Clear terminal screen
  exit                          Close terminal panel

  Navigation: ↑ / ↓ (history)
╚══════════════════════════════════════════════════════════════╝`, 'output');
        break;

      case 'whoami':
        addLine(`
┌─────────────────────────────────────────────────────────────┐
│  [ Profile ]                                                │
├─────────────────────────────────────────────────────────────┤
  Name:      ${profile.name}
  Handle:    ${profile.handle}
  Title:     ${profile.title}
  Subtitle:  ${profile.subtitle}
  Location:  ${profile.location}
  Email:     ${profile.email}
  Phone:     ${profile.phone}
  Status:    ${profile.status}
├─────────────────────────────────────────────────────────────┤
  ${profile.summary}
├─────────────────────────────────────────────────────────────┤
  GitHub:    ${profile.github}
  LinkedIn:  ${profile.linkedin}
└─────────────────────────────────────────────────────────────┘`, 'output');
        break;

      case 'skills':
        addLine(formatSkills(), 'output');
        break;

      case 'experience':
        addLine(formatExperience(), 'output');
        break;

      case 'projects':
        addLine(formatProjects(arg || null), 'output');
        break;

      case 'docker':
        if (arg.startsWith('ps')) {
          addLine(dockerPs(), 'output');
        } else if (arg.startsWith('logs')) {
          const containerId = arg.replace('logs', '').trim();
          addLine(dockerLogs(containerId), 'output');
        } else {
          addLine('Docker commands: ps, logs <container>', 'output');
        }
        break;

      case 'systemctl':
        if (arg.startsWith('status')) {
          const service = arg.replace('status', '').trim();
          addLine(systemctlStatus(service), 'output');
        } else {
          addLine('Usage: systemctl status [service]', 'output');
        }
        break;

      case 'api-docs':
        addLine(apiDocs(), 'output');
        break;

      case 'connect-ai':
        addLine('Connecting to ATR AI Assistant...', 'system');
        setTimeout(() => {
          addLine('Connection established via WebSocket.', 'system');
          addLine('You are now in AI Chat Mode. Type "exit-ai" to return.', 'system');
          setAiMode(true);
        }, 800);
        break;

      case 'clear':
        setLines([]);
        break;

      case 'exit':
        onClose();
        break;

      default:
        addLine(`Command not found: ${command}. Type "help" for available commands.`, 'error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? -1 : Math.min(history.length - 1, historyIndex + 1);
      if (newIndex === history.length - 1 && historyIndex === history.length - 1) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex] || '');
      }
    }
  };

  return (
    <div className="terminal-panel">
      <div className="terminal-panel-header">
        <div className="terminal-panel-tabs">
          <span className="terminal-tab active">TERMINAL</span>
          <span className="terminal-tab">OUTPUT</span>
          <span className="terminal-tab">DEBUG CONSOLE</span>
        </div>
        <div className="terminal-panel-actions">
          <span onClick={onClose}>✕</span>
        </div>
      </div>
      <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
        {booting ? (
          <>
            {bootLines.map((line, i) => (
              <div key={i} className={`terminal-line ${line && line.startsWith('[ OK ]') ? 'success' : 'boot'}`}>
                {line}
              </div>
            ))}
            <div className="terminal-cursor-line">
              <span className="terminal-prompt">{getPrompt()}</span>
              <span className="terminal-cursor">_</span>
            </div>
          </>
        ) : (
          <>
            {lines.map((line) => (
              <div key={line.id} className={`terminal-line ${line.type}`}>
                {line.type === 'input' ? (
                  <span>{line.text}</span>
                ) : line.type === 'ai' ? (
                  <span className="ai-response">{line.text}</span>
                ) : (
                  <pre className="terminal-pre">{line.text}</pre>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="terminal-input-line">
              <span className="terminal-prompt">{getPrompt()}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
