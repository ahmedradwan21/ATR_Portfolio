import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TabsBar from './TabsBar';
import StatusBar from './StatusBar';
import Terminal from './Terminal';
import Welcome from '../sections/Welcome';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const FILE_COMPONENTS = {
  'welcome': Welcome,
  'about.jsx': About,
  'journey.json': Journey,
  'skills.md': Skills,
  'projects': Projects,
  'experience.log': Experience,
  'contact.env': Contact,
};

const FILE_ICONS = {
  'welcome': '👋',
  'about.jsx': '⚛️',
  'journey.json': '📍',
  'skills.md': '🛠️',
  'projects': '📁',
  'experience.log': '💼',
  'contact.env': '📧',
};

export default function VSCodeLayout() {
  const [activeFile, setActiveFile] = useState('welcome');
  const [openFiles, setOpenFiles] = useState(['welcome']);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openFile = (fileId) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
    setActiveFile(fileId);
  };

  const closeFile = (fileId, e) => {
    e.stopPropagation();
    const newOpen = openFiles.filter(f => f !== fileId);
    setOpenFiles(newOpen);
    if (activeFile === fileId) {
      setActiveFile(newOpen.length > 0 ? newOpen[newOpen.length - 1] : 'welcome');
    }
  };

  const ActiveComponent = FILE_COMPONENTS[activeFile] || Welcome;

  return (
    <div className="vscode-layout">
      {/* Title Bar */}
      <div className="vscode-titlebar">
        <div className="titlebar-left">
          <span className="titlebar-icon">🍎</span>
          <span className="titlebar-menu">File</span>
          <span className="titlebar-menu">Edit</span>
          <span className="titlebar-menu">View</span>
          <span className="titlebar-menu">Go</span>
          <span className="titlebar-menu">Run</span>
          <span className="titlebar-menu">Terminal</span>
          <span className="titlebar-menu">Help</span>
        </div>
        <div className="titlebar-center">
          <span className="titlebar-filename">{activeFile} — ATR Portfolio</span>
        </div>
        <div className="titlebar-right">
          <span className="window-btn minimize">−</span>
          <span className="window-btn maximize">□</span>
          <span className="window-btn close">×</span>
        </div>
      </div>

      {/* Activity Bar + Sidebar + Editor */}
      <div className="vscode-body">
        {/* Activity Bar */}
        <div className="activity-bar">
          <div className={`activity-icon ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(!sidebarOpen)} title="Explorer">
            📂
          </div>
          <div className="activity-icon" title="Search">🔍</div>
          <div className="activity-icon" title="Source Control">🌿</div>
          <div className="activity-icon" title="Run and Debug">▶️</div>
          <div className="activity-icon" title="Extensions">🧩</div>
          <div className="activity-spacer"></div>
          <div className="activity-icon" title="Settings">⚙️</div>
          <div className="activity-icon" title="Account">👤</div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <Sidebar activeFile={activeFile} onFileClick={openFile} />
        )}

        {/* Editor Area */}
        <div className="editor-area">
          <TabsBar 
            openFiles={openFiles} 
            activeFile={activeFile} 
            onTabClick={setActiveFile}
            onTabClose={closeFile}
            fileIcons={FILE_ICONS}
          />
          <div className="editor-content">
            <div className="breadcrumb">
              <span className="breadcrumb-item">atr-portfolio</span>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-item">src</span>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-item">sections</span>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-item active">{activeFile}</span>
            </div>
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Terminal Panel */}
      {terminalOpen && (
        <Terminal onClose={() => setTerminalOpen(false)} />
      )}

      {/* Status Bar */}
      <StatusBar 
        activeFile={activeFile}
        terminalOpen={terminalOpen}
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
        currentTime={currentTime}
      />
    </div>
  );
}
