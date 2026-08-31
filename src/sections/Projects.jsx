import { useState } from 'react';
import { projects } from '../data/portfolio';

function SystemDesignDiagram({ architecture }) {
  return (
    <div className="system-design">
      <div className="sd-title">System Architecture</div>
      <div className="sd-flow">
        {architecture.map((layer, i) => (
          <div key={i} className="sd-layer">
            <div className="sd-layer-label">{layer.layer}</div>
            <div className="sd-layer-items">
              {layer.items.map((item, j) => (
                <div key={j} className="sd-item">{item}</div>
              ))}
            </div>
            {i < architecture.length - 1 && (
              <div className="sd-arrow">↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiPlayground({ project }) {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpoint = project.endpoints?.[selectedEndpoint];

  const handleTest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const mockResponses = {
        'blood-donation': {
          '/api/match': { status: 200, body: JSON.stringify({ match_id: "bd_7829", donor: { name: "Ahmed", blood_type: "O+" }, patient: { name: "Patient X", blood_type: "O+" }, hospital: "Cairo General", status: "matched" }, null, 2) },
          '/api/ocr': { status: 200, body: JSON.stringify({ wbc: 7.2, rbc: 4.8, platelet: 250, hemoglobin: 14.1, status: "normal", confidence: 0.94 }, null, 2) },
          '/api/chatbot': { status: 200, body: JSON.stringify({ response: "You can donate blood every 56 days. Your last donation was 60 days ago. You are eligible!", intent: "eligibility_check" }, null, 2) }
        },
        'ocr-api': {
          '/api/ocr/upload': { status: 201, body: JSON.stringify({ upload_id: "ocr_9921", status: "processing", estimated_time: "3s" }, null, 2) },
          '/api/ocr/results/{id}': { status: 200, body: JSON.stringify({ wbc: 6.5, rbc: 5.1, platelet: 300, hemoglobin: 13.8, status: "healthy", extracted_at: "2026-08-21T10:00:00Z" }, null, 2) }
        },
        'green-world': {
          '/api/classify': { status: 200, body: JSON.stringify({ species: "Ficus benjamina", confidence: 0.89, family: "Moraceae", care_tips: ["Indirect light", "Water weekly", "Humidity 60%"] }, null, 2) }
        },
        'blog-management': {
          '/api/blogs': { status: 200, body: JSON.stringify({ count: 42, results: [{ id: 1, title: "Getting Started with Django", author: "Ahmed", tags: ["django", "python"] }] }, null, 2) },
          '/api/blogs': { status: 201, body: JSON.stringify({ id: 43, title: "New Post", status: "draft", created_at: "2026-08-21T10:00:00Z" }, null, 2) },
          '/api/companies/join': { status: 200, body: JSON.stringify({ request_id: "req_123", company: "TechBlog Inc", status: "pending_approval" }, null, 2) }
        },
        'covid-management': {
          '/api/patients': { status: 201, body: JSON.stringify({ patient_id: "p_445", name: "John Doe", status: "stable", registered_at: "2026-08-21T10:00:00Z" }, null, 2) },
          '/api/analyze': { status: 200, body: JSON.stringify({ severity: "mild", confidence: 0.87, recommendation: "Home isolation, monitor symptoms" }, null, 2) },
          '/api/auth/otp': { status: 200, body: JSON.stringify({ verified: true, token: "jwt_xyz789", expires_in: 3600 }, null, 2) }
        },
        'atr-social': {
          '/api/feed': { status: 200, body: JSON.stringify({ posts: [{ id: 1, author: "Ahmed", content: "Hello world!", likes: 24, comments: 5 }] }, null, 2) },
          '/api/follow': { status: 200, body: JSON.stringify({ following: true, user_id: "u_99", mutual_friends: 12 }, null, 2) },
          '/api/suggestions': { status: 200, body: JSON.stringify({ suggestions: [{ name: "Sarah", mutual: 8 }, { name: "Omar", mutual: 5 }] }, null, 2) }
        }
      };

      const projMock = mockResponses[project.id];
      const res = projMock?.[endpoint?.path] || { status: 200, body: JSON.stringify({ message: "Success", timestamp: new Date().toISOString() }, null, 2) };
      setResponse(res);
    }, 800);
  };

  if (!project.endpoints || project.endpoints.length === 0) {
    return <div className="api-playground-empty">No public API endpoints available for this project.</div>;
  }

  return (
    <div className="api-playground">
      <div className="api-header">
        <span className="api-badge">🔌 API Playground</span>
        <span className="api-sub">Test endpoints with mock responses</span>
      </div>
      <div className="api-endpoints">
        {project.endpoints.map((ep, i) => (
          <button
            key={i}
            className={`api-endpoint-btn ${selectedEndpoint === i ? 'active' : ''}`}
            onClick={() => { setSelectedEndpoint(i); setResponse(null); }}
          >
            <span className={`api-method ${ep.method.toLowerCase()}`}>{ep.method}</span>
            <span className="api-path">{ep.path}</span>
          </button>
        ))}
      </div>
      {endpoint && (
        <div className="api-detail">
          <div className="api-desc">{endpoint.desc}</div>
          <div className="api-request">
            <label>Request Body (JSON)</label>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              placeholder={`Example request body for ${endpoint.path}...`}
              rows={4}
            />
            <button className="api-test-btn" onClick={handleTest} disabled={loading}>
              {loading ? '⏳ Sending...' : '▶ Send Request'}
            </button>
          </div>
          {response && (
            <div className="api-response">
              <div className="api-response-header">
                <span className={`api-status ${response.status < 300 ? 'ok' : 'error'}`}>
                  Status: {response.status}
                </span>
              </div>
              <pre className="api-response-body">{response.body}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [showApi, setShowApi] = useState(false);
  const [showArch, setShowArch] = useState(false);

  const project = projects[activeProject];

  return (
    <div className="section-content projects-section">
      <div className="code-header">
        <span className="code-comment">// Projects/ — Featured Work</span>
      </div>
      <div className="projects-layout">
        <div className="projects-sidebar">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-nav-item ${activeProject === i ? 'active' : ''}`}
              onClick={() => { setActiveProject(i); setShowApi(false); setShowArch(false); }}
            >
              <span className="project-nav-icon">📁</span>
              <div className="project-nav-info">
                <span className="project-nav-name">{p.title}</span>
                <span className="project-nav-type">{p.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="project-detail">
          <div className="project-header">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-actions">
              {project.endpoints && (
                <button className={`project-action-btn ${showApi ? 'active' : ''}`} onClick={() => setShowApi(!showApi)}>
                  🔌 API Playground
                </button>
              )}
              {project.architecture && (
                <button className={`project-action-btn ${showArch ? 'active' : ''}`} onClick={() => setShowArch(!showArch)}>
                  🏗️ System Design
                </button>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                🐙 GitHub
              </a>
            </div>
          </div>
          <p className="project-type-label">{project.type}</p>
          <p className="project-desc">{project.description}</p>

          <div className="project-highlights">
            {project.highlights.map((h, i) => (
              <div key={i} className="project-highlight">
                <span className="highlight-bullet">▹</span>
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          {showArch && project.architecture && (
            <SystemDesignDiagram architecture={project.architecture} />
          )}

          {showApi && project.endpoints && (
            <ApiPlayground project={project} />
          )}
        </div>
      </div>
    </div>
  );
}
