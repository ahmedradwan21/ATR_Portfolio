export default function Sidebar({ activeFile, onFileClick }) {
	const folders = [
		{
			name: "ATR-PORTFOLIO",
			files: [{ id: "welcome", name: "README.md", icon: "📄" }],
		},
		{
			name: "SRC",
			files: [
				{ id: "about.jsx", name: "About.jsx", icon: "⚛️" },
				{ id: "journey.json", name: "Journey.json", icon: "📍" },
				{ id: "skills.md", name: "Skills.md", icon: "🛠️" },
				{ id: "projects", name: "Projects/", icon: "📁" },
				{ id: "experience.log", name: "Experience.log", icon: "📋" },
				{ id: "contact.env", name: "Contact.env", icon: "🔧" },
			],
		},
	];

	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<span className="sidebar-title">EXPLORER</span>
				<span className="sidebar-actions">⋯</span>
			</div>
			{folders.map((folder) => (
				<div key={folder.name} className="sidebar-folder">
					<div className="folder-header">
						<span className="folder-arrow">▾</span>
						<span className="folder-name">{folder.name}</span>
					</div>
					<div className="folder-files">
						{folder.files.map((file) => (
							<div
								key={file.id}
								className={`sidebar-file ${activeFile === file.id ? "active" : ""}`}
								onClick={() => onFileClick(file.id)}
							>
								<span className="file-icon">{file.icon}</span>
								<span className="file-name">{file.name}</span>
							</div>
						))}
					</div>
				</div>
			))}

			<div className="sidebar-section">
				<div className="folder-header">
					<span className="folder-arrow">▾</span>
					<span className="folder-name">OUTLINE</span>
				</div>
				<div className="outline-list">
					<div className="outline-item">📌 Profile Summary</div>
					<div className="outline-item">📌 Technical Skills</div>
					<div className="outline-item">📌 Featured Projects</div>
					<div className="outline-item">📌 Work Experience</div>
					<div className="outline-item">📌 Education</div>
				</div>
			</div>
		</div>
	);
}
