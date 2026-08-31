import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <div className="section-content skills-section">
      <div className="code-header">
        <span className="code-comment">// Skills.md — Technical Competencies</span>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">
              <span className="skills-bracket">[</span>
              {category}
              <span className="skills-bracket">]</span>
            </h3>
            <div className="skills-list">
              {items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
