import { journey } from '../data/portfolio';

export default function Journey() {
  return (
    <div className="section-content journey-section">
      <div className="code-header">
        <span className="code-comment">// Journey.json — Career Timeline</span>
      </div>
      <div className="timeline">
        {journey.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
