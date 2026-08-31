import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <div className="section-content contact-section">
      <div className="code-header">
        <span className="code-comment">// Contact.env — Get In Touch</span>
      </div>
      <div className="contact-content">
        <div className="contact-code">
          <div className="code-block">
            <div className="code-line"><span className="code-comment"># Environment Variables</span></div>
            <div className="code-line"><span className="code-prop">EMAIL</span>=<span className="code-string">"{profile.email}"</span></div>
            <div className="code-line"><span className="code-prop">PHONE</span>=<span className="code-string">"{profile.phone}"</span></div>
            <div className="code-line"><span className="code-prop">GITHUB</span>=<span className="code-string">"{profile.github}"</span></div>
            <div className="code-line"><span className="code-prop">LINKEDIN</span>=<span className="code-string">"{profile.linkedin}"</span></div>
            <div className="code-line"><span className="code-prop">STATUS</span>=<span className="code-string">"{profile.status}"</span></div>
            <div className="code-line"><span className="code-prop">LOCATION</span>=<span className="code-string">"{profile.location}"</span></div>
          </div>
        </div>
        <p className="contact-text">
          I am currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email</span>
            <span className="contact-val">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone}`} className="contact-card">
            <span className="contact-icon">📱</span>
            <span className="contact-label">Phone</span>
            <span className="contact-val">{profile.phone}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">🐙</span>
            <span className="contact-label">GitHub</span>
            <span className="contact-val">@ahmedradwan21</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">💼</span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-val">Ahmed Tarek Radwan</span>
          </a>
          <a href={profile.cv} download className="contact-card">
            <span className="contact-icon">📄</span>
            <span className="contact-label">Download CV</span>
            <span className="contact-val">PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
