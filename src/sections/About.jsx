import { profile } from '../data/portfolio';

export default function About() {
  return (
    <div className="section-content about-section">
      <div className="code-header">
        <span className="code-comment">// About.jsx — Developer Profile</span>
      </div>
      <div className="about-grid">
        <div className="about-left">
          <div className="code-block">
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}</div>
            <div className="code-line">  <span className="code-prop">name</span>: <span className="code-string">"{profile.name}"</span>,</div>
            <div className="code-line">  <span className="code-prop">title</span>: <span className="code-string">"{profile.title}"</span>,</div>
            <div className="code-line">  <span className="code-prop">location</span>: <span className="code-string">"{profile.location}"</span>,</div>
            <div className="code-line">  <span className="code-prop">email</span>: <span className="code-string">"{profile.email}"</span>,</div>
            <div className="code-line">  <span className="code-prop">phone</span>: <span className="code-string">"{profile.phone}"</span>,</div>
            <div className="code-line">  <span className="code-prop">status</span>: <span className="code-string">"{profile.status}"</span>,</div>
            <div className="code-line">  <span className="code-prop">github</span>: <span className="code-string">"{profile.github}"</span>,</div>
            <div className="code-line">  <span className="code-prop">linkedin</span>: <span className="code-string">"{profile.linkedin}"</span>,</div>
            <div className="code-line">{'}'};</div>
          </div>
          <div className="about-summary">
            <h3>Professional Summary</h3>
            <p>{profile.summary}</p>
          </div>
        </div>
        <div className="about-right">
          <div className="info-card">
            <h3>Quick Info</h3>
            <div className="info-row">
              <span className="info-key">Name</span>
              <span className="info-val">{profile.name}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Title</span>
              <span className="info-val">{profile.title}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Location</span>
              <span className="info-val">{profile.location}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Status</span>
              <span className="info-val status">{profile.status}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Email</span>
              <span className="info-val">{profile.email}</span>
            </div>
            <div className="info-row">
              <span className="info-key">Phone</span>
              <span className="info-val">{profile.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
