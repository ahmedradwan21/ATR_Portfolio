import { experience, education } from '../data/portfolio';

export default function Experience() {
  return (
    <div className="section-content experience-section">
      <div className="code-header">
        <span className="code-comment">// Experience.log — Work History</span>
      </div>
      <div className="experience-grid">
        <div className="experience-column">
          <h3 className="exp-subtitle">💼 Professional Experience</h3>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-period">{exp.period}</div>
                <h4 className="experience-role">{exp.role}</h4>
                <div className="experience-company">{exp.company}</div>
                <p className="experience-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-column">
          <h3 className="exp-subtitle">🎓 Education</h3>
          <div className="education-card">
            <div className="education-period">{education.period}</div>
            <h4 className="education-degree">{education.degree}</h4>
            <div className="education-institution">{education.institution}</div>
            <div className="education-faculty">{education.faculty}</div>
            <p className="education-desc">{education.description}</p>
            <div className="education-project">
              <span className="proj-label">Graduation Project:</span>
              <span className="proj-name">{education.project}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
