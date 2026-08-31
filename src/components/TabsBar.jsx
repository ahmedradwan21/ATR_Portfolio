export default function TabsBar({ openFiles, activeFile, onTabClick, onTabClose, fileIcons }) {
  return (
    <div className="tabs-bar">
      {openFiles.map((file) => (
        <div
          key={file}
          className={`tab ${activeFile === file ? 'active' : ''}`}
          onClick={() => onTabClick(file)}
        >
          <span className="tab-icon">{fileIcons[file] || '📄'}</span>
          <span className="tab-name">{file}</span>
          <span className="tab-close" onClick={(e) => onTabClose(file, e)}>×</span>
        </div>
      ))}
    </div>
  );
}
