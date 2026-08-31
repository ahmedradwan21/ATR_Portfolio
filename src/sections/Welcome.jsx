import { profile } from '../data/portfolio';

export default function Welcome() {
  return (
    <div className="welcome-screen">
      <div className="welcome-logo">[ATR]</div>
      <h1 className="welcome-title">{profile.name}</h1>
      <h2 className="welcome-subtitle">{profile.title}</h2>
      <p className="welcome-desc">{profile.subtitle}</p>
      <div className="welcome-stats">
        <div className="welcome-stat">
          <span className="stat-val">6+</span>
          <span className="stat-lbl">Projects</span>
        </div>
        <div className="welcome-stat">
          <span className="stat-val">3+</span>
          <span className="stat-lbl">Years</span>
        </div>
        <div className="welcome-stat">
          <span className="stat-val">AI</span>
          <span className="stat-lbl">Integrated</span>
        </div>
        <div className="welcome-stat">
          <span className="stat-val">RT</span>
          <span className="stat-lbl">Real-time</span>
        </div>
      </div>
      <div className="welcome-actions">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          LinkedIn
        </a>
        <a href={profile.cv} download className="btn btn-outline">
          Download CV
        </a>
      </div>
      <div className="welcome-hint">
        <span>💡 Tip: Open the Terminal below and type </span>
        <code>help</code>
        <span> to explore, or click files in the sidebar.</span>
      </div>
    </div>
  );
}
