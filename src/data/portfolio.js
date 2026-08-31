export const profile = {
  name: "Ahmed Tarek Radwan",
  handle: "ATR",
  title: "Backend Software Engineer",
  subtitle: "Node.js / Express | Django REST | Real-time Systems",
  location: "Egypt",
  phone: "+201114246786",
  email: "ahmed.tarek.radwan23@gmail.com",
  status: "Available for opportunities",
  summary: `Backend Software Engineer with production experience building RESTful APIs and real-time systems (Socket.IO) using Node.js/Express, with additional hands-on experience in Python/Django. Comfortable owning a feature end-to-end — from data modeling to API design, authentication, and deployment. Currently deepening expertise in TypeScript and NestJS to bring services closer to production-grade, scalable architecture. Looking to join a backend team building products that reach real users.`,
  github: "https://github.com/ahmedradwan21",
  linkedin: "https://linkedin.com/in/ahmed-tarek-radw",
  cv: "/Ahmed_Tarek_Radwan_CV.pdf"
};

export const skills = {
  "Languages": [
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 88 },
    { name: "TypeScript", level: 65 }
  ],
  "Backend Core": [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "Django / DRF", level: 85 },
    { name: "NestJS", level: 55 },
    { name: "RESTful API Design", level: 92 },
    { name: "Socket.IO", level: 85 },
    { name: "Middleware Design", level: 88 }
  ],
  "Databases": [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "SQLite", level: 78 }
  ],
  "Auth & Security": [
    { name: "JWT Authentication", level: 90 },
    { name: "Role-Based Access Control", level: 85 }
  ],
  "DevOps & Tooling": [
    { name: "Docker", level: 80 },
    { name: "Git / GitHub", level: 90 },
    { name: "CI/CD (GitHub Actions)", level: 70 },
    { name: "Postman", level: 88 },
    { name: "Swagger / OpenAPI", level: 85 }
  ],
  "AI Integration": [
    { name: "TensorFlow", level: 72 },
    { name: "OpenCV", level: 68 },
    { name: "Pytesseract (OCR)", level: 75 }
  ]
};

export const projects = [
  {
    id: "blood-donation",
    title: "Blood Donation Locator",
    type: "Graduation Project (Distinction) — Team Lead",
    description: "Full-stack platform with AI-powered OCR and real-time APIs for blood donation matching. Led the team, dividing work across mobile, AI/OCR, and backend workstreams.",
    highlights: [
      "Owned the backend/API layer: Blood Donation matching API (Django)",
      "Built OCR processing API (Flask + OpenCV + Pytesseract)",
      "Integrated chatbot API for patient support",
      "Packaged in a Flutter mobile app with released builds",
      "Graduated with Distinction"
    ],
    tech: ["Django", "Flask", "Flutter", "OpenCV", "Pytesseract", "AI"],
    github: "https://github.com/ahmedradwan21",
    live: null,
    endpoints: [
      { method: "POST", path: "/api/match", desc: "Match blood donors with patients" },
      { method: "POST", path: "/api/ocr", desc: "Extract CBC values from report images" },
      { method: "POST", path: "/api/chatbot", desc: "Patient support chatbot" }
    ],
    architecture: [
      { layer: "Client", items: ["Flutter Mobile App"] },
      { layer: "API Gateway", items: ["Django REST", "Flask OCR Service"] },
      { layer: "AI/ML", items: ["OpenCV", "Pytesseract", "TensorFlow"] },
      { layer: "Database", items: ["PostgreSQL"] }
    ]
  },
  {
    id: "ocr-api",
    title: "OCR API — Medical CBC Report Reader",
    type: "Healthcare AI API",
    description: "Deployed a REST API that extracts WBC, RBC, Platelet Count, and Hemoglobin values from uploaded CBC report images using OCR and computer vision, then returns a patient status evaluation.",
    highlights: [
      "Image preprocessing pipeline for medical documents",
      "OCR extraction with confidence scoring",
      "Dockerized deployment for scalability",
      "Patient status evaluation algorithm"
    ],
    tech: ["Django REST", "OpenCV", "Pytesseract", "Docker"],
    github: "https://github.com/ahmedradwan21",
    live: null,
    endpoints: [
      { method: "POST", path: "/api/ocr/upload", desc: "Upload CBC report image" },
      { method: "GET", path: "/api/ocr/results/{id}", desc: "Get extraction results" }
    ],
    architecture: [
      { layer: "Client", items: ["Web/Mobile Client"] },
      { layer: "API", items: ["Django REST"] },
      { layer: "Processing", items: ["OpenCV", "Pytesseract"] },
      { layer: "Storage", items: ["File System / S3"] }
    ]
  },
  {
    id: "green-world",
    title: "Green World ATR",
    type: "AI-Powered Full-Stack App",
    description: "Full-stack web application with an AI-powered plant classification module that identifies plant species from uploaded images with 85%+ accuracy.",
    highlights: [
      "Integrated TensorFlow-based ML model into Django backend",
      "Designed POST /api/classify endpoint with image preprocessing",
      "Model inference and result serialization pipeline",
      "Responsive frontend with progress indicators and dynamic results"
    ],
    tech: ["Django", "Python", "TensorFlow", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ahmedradwan21/Green_World_ATR",
    live: null,
    endpoints: [
      { method: "POST", path: "/api/classify", desc: "Classify plant species from image" }
    ],
    architecture: [
      { layer: "Client", items: ["HTML/CSS/JS Frontend"] },
      { layer: "Backend", items: ["Django"] },
      { layer: "ML Model", items: ["TensorFlow", "Image Preprocessing"] },
      { layer: "Storage", items: ["SQLite / PostgreSQL"] }
    ]
  },
  {
    id: "blog-management",
    title: "Blog Management System",
    type: "Team Lead — Multi-user Platform",
    description: "Led a team of developers to build a multi-user blogging platform with drafting, publishing, commenting, tagging, and category management.",
    highlights: [
      "Company/writer workflow with join requests and approve/reject access control",
      "Full REST API covering blogs, companies, categories, and users",
      "Role-based permissions and content moderation",
      "Bootstrap-based responsive admin dashboard"
    ],
    tech: ["Django", "Django REST Framework", "Bootstrap"],
    github: "https://github.com/ahmedradwan21",
    live: null,
    endpoints: [
      { method: "GET", path: "/api/blogs", desc: "List all blog posts" },
      { method: "POST", path: "/api/blogs", desc: "Create new blog post" },
      { method: "POST", path: "/api/companies/join", desc: "Request to join company" }
    ],
    architecture: [
      { layer: "Client", items: ["Bootstrap Frontend"] },
      { layer: "API", items: ["Django REST Framework"] },
      { layer: "Auth", items: ["JWT", "RBAC"] },
      { layer: "Database", items: ["PostgreSQL"] }
    ]
  },
  {
    id: "covid-management",
    title: "Covid Management System",
    type: "Healthcare Dashboard",
    description: "Full-stack web dashboard for tracking and managing COVID-19 patient records, with role-based access control, reporting features, and AI-based image analysis.",
    highlights: [
      "AI-based image analysis for patient status evaluation",
      "OTP-based email verification for secure registration",
      "Role-based access control for medical staff",
      "Reporting and analytics dashboard"
    ],
    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "AI Image Analysis"],
    github: "https://github.com/ahmedradwan21",
    live: null,
    endpoints: [
      { method: "POST", path: "/api/patients", desc: "Register new patient" },
      { method: "POST", path: "/api/analyze", desc: "AI image analysis" },
      { method: "POST", path: "/api/auth/otp", desc: "OTP verification" }
    ],
    architecture: [
      { layer: "Client", items: ["Bootstrap Dashboard"] },
      { layer: "Backend", items: ["Django"] },
      { layer: "AI", items: ["Image Analysis Model"] },
      { layer: "Database", items: ["PostgreSQL"] }
    ]
  },
  {
    id: "atr-social",
    title: "ATR Social",
    type: "Social Media App",
    description: "Social media application with feed, follow/unfollow, likes/comments, and a connection-suggestion system.",
    highlights: [
      "News feed algorithm with post ranking",
      "Follow/unfollow system with notifications",
      "Like and comment system",
      "Connection suggestion algorithm based on mutual friends"
    ],
    tech: ["Django", "JavaScript", "Bootstrap"],
    github: "https://github.com/ahmedradwan21",
    live: null,
    endpoints: [
      { method: "GET", path: "/api/feed", desc: "Get user feed" },
      { method: "POST", path: "/api/follow", desc: "Follow a user" },
      { method: "GET", path: "/api/suggestions", desc: "Connection suggestions" }
    ],
    architecture: [
      { layer: "Client", items: ["JavaScript Frontend"] },
      { layer: "Backend", items: ["Django"] },
      { layer: "Features", items: ["Feed Algorithm", "Social Graph"] },
      { layer: "Database", items: ["PostgreSQL"] }
    ]
  }
];

export const experience = [
  {
    period: "Mar 2026 – Present",
    company: "Self-employed — Remote",
    role: "Freelance Backend Developer",
    description: "Delivering backend REST APIs for freelance clients using Node.js/Express, covering database design, authentication, and API documentation. Collaborating directly with clients to gather requirements, define scope, and deliver features on deadline."
  },
  {
    period: "Feb 2025 – Mar 2026",
    company: "Egyptian Armed Forces — Egypt",
    role: "Military Service",
    description: "Administrative role handling time-sensitive documentation and task execution within a structured, high-pressure environment. Built discipline and reliability in managing critical responsibilities under strict deadlines and protocols."
  },
  {
    period: "Aug 2024 – Jan 2025",
    company: "Actus Go — Remote — Jordan",
    role: "Backend Developer (Part-time)",
    description: "Built and maintained Node.js/Express REST APIs powering the gamification engine of a pre-launch shopping platform — serving challenges, rewards, and coupon discovery for mobile and web users. Partnered with the front-end team to define API contracts and data structures."
  },
  {
    period: "May 2024 – Oct 2024",
    company: "Dragons Bootcamp LLC — Remote — US",
    role: "Software Engineer (Full-time)",
    description: "Built core backend features for an internal Node.js/Express LMS platform used by students and instructors, including task management and lecture content delivery. Designed and implemented a real-time chat and notification system using Socket.IO, with per-user preference controls and persistent storage. Built a real-time lecture progress tracking system. Implemented authentication and role-based access control, and integrated third-party services through REST APIs. Contributed to sprint planning, Swagger API documentation, and peer code reviews."
  },
  {
    period: "Feb 2024 – Apr 2024",
    company: "Dragons Bootcamp LLC — Remote — US",
    role: "Back-End Developer (Internship)",
    description: "Developed Django REST Framework endpoints under senior engineer mentorship. Participated in code reviews and contributed to the test suite for assigned features."
  },
  {
    period: "Aug 2023 – Jan 2024",
    company: "Dragons Bootcamp LLC — Remote — US",
    role: "Trainee",
    description: "Completed structured backend training covering Python, Django, SQL, and Git. Delivered a fully functional e-commerce REST API as the program's capstone project."
  }
];

export const education = {
  period: "2020 – 2024",
  institution: "Egyptian E-Learning University (EELU)",
  degree: "Bachelor of Information Technology",
  faculty: "Faculty of Computers & Information",
  description: `Relevant Coursework: Database Systems, Software Engineering, Computer Networks, Data Structures & Algorithms, Object-Oriented Programming. Graduation Project: Blood Donation Locator Application (Distinction) — Full-stack platform with AI-powered OCR and real-time APIs. Focused academic track on backend architecture, API design, and database management.`,
  project: "Blood Donation Locator (Distinction)"
};

export const journey = [
  {
    year: "2020",
    title: "University Beginnings",
    description: "Started Bachelor of Information Technology at EELU. First exposure to programming, databases, and software engineering fundamentals."
  },
  {
    year: "2021",
    title: "Foundation Building",
    description: "Deepened understanding of data structures, algorithms, and object-oriented programming. Started building small console and web applications."
  },
  {
    year: "2022",
    title: "Web Development Discovery",
    description: "Learned HTML, CSS, JavaScript, and Python. Built first full-stack projects and discovered passion for backend development and server-side logic."
  },
  {
    year: "2023 Aug",
    title: "Dragons Bootcamp — Trainee",
    description: "Joined structured backend training covering Python, Django, SQL, and Git. Delivered a fully functional e-commerce REST API as capstone."
  },
  {
    year: "2024 Feb",
    title: "Internship — Django REST",
    description: "Promoted to internship. Developed Django REST Framework endpoints under senior mentorship. Participated in code reviews and testing."
  },
  {
    year: "2024 May",
    title: "Software Engineer — Real-time Systems",
    description: "Built Node.js/Express LMS platform with Socket.IO real-time chat, notifications, and lecture progress tracking. Implemented RBAC and Swagger docs."
  },
  {
    year: "2024 Aug",
    title: "Actus Go — Gamification APIs",
    description: "Part-time backend role building Node.js/Express REST APIs for shopping platform gamification engine — challenges, rewards, and coupon discovery."
  },
  {
    year: "2024",
    title: "Graduation with Distinction",
    description: "Graduated with Blood Donation Locator project (Distinction). Led team across mobile, AI/OCR, and backend workstreams."
  },
  {
    year: "2025 Feb",
    title: "Military Service",
    description: "Administrative role in Egyptian Armed Forces. Built discipline and reliability in high-pressure, deadline-driven environments."
  },
  {
    year: "2026 Mar",
    title: "Freelance Backend Developer",
    description: "Delivering production REST APIs for clients worldwide using Node.js/Express. Covering database design, authentication, and API documentation."
  },
  {
    year: "Present",
    title: "Continuous Growth",
    description: "Deepening expertise in TypeScript and NestJS. Building scalable, production-grade architectures. Contributing to open-source and personal projects."
  }
];

export const aiResponses = {
  greetings: [
    "Welcome to ATR Backend Ops Terminal v3.0! I am your AI assistant. Ask me anything about Ahmed's backend expertise.",
    "Hello! I am the ATR AI Agent. I can tell you about Ahmed's experience with Node.js, Django, Socket.IO, and more.",
    "Hi there! Ask me about Ahmed's real-time systems, API design, or AI integration projects."
  ],
  skills: `Ahmed specializes in backend development with Node.js/Express and Django REST Framework. He's proficient in real-time systems (Socket.IO), database design (PostgreSQL, MongoDB, MySQL), and API documentation (Swagger/OpenAPI). He's also experienced in AI integration (TensorFlow, OpenCV, OCR) and DevOps basics (Docker, CI/CD). Currently learning TypeScript and NestJS.`,
  experience: `Ahmed has progressed from trainee to software engineer to freelance developer. Key highlights: (1) Built real-time chat & notification systems with Socket.IO at Dragons Bootcamp, (2) Developed gamification engine APIs at Actus Go, (3) Led graduation project (Blood Donation Locator) with AI-powered OCR — graduated with Distinction.`,
  projects: `Ahmed's flagship projects include: (1) Blood Donation Locator — AI-powered OCR + real-time matching (Distinction), (2) Green World ATR — TensorFlow plant classification with 85%+ accuracy, (3) OCR API — Medical CBC report reader using OpenCV + Pytesseract, (4) ATR Social — Full social media backend with feed algorithm, (5) Covid Management — Healthcare dashboard with AI image analysis.`,
  education: `Ahmed holds a Bachelor of Information Technology from Egyptian E-Learning University (EELU), Faculty of Computers & Information (2020-2024). Graduated with Distinction for his Blood Donation Locator project. Relevant coursework: Database Systems, Software Engineering, Computer Networks, Data Structures & Algorithms, OOP.`,
  contact: `You can reach Ahmed via email (ahmed.tarek.radwan23@gmail.com), phone (+201114246786), GitHub (@ahmedradwan21), or LinkedIn. He's currently available for backend engineering opportunities and freelance projects.`,
  realtime: `Ahmed has strong experience with real-time systems using Socket.IO. At Dragons Bootcamp, he built: (1) Real-time chat system with per-user preference controls, (2) Notification system with persistent storage, (3) Live lecture progress tracking that updates as learners move through content.`,
  ai: `Ahmed integrates AI/ML into backend systems. Examples: (1) Blood Donation Locator — OCR API using OpenCV + Pytesseract to extract CBC values from medical reports, (2) Green World ATR — TensorFlow model for plant species classification with 85%+ accuracy, (3) Covid Management — AI image analysis for patient status evaluation.`,
  default: `That's an interesting question! Ahmed is a backend engineer passionate about building scalable APIs, real-time systems, and AI-integrated applications. He has production experience with Node.js/Express, Django, Socket.IO, and Docker. Feel free to ask about his skills, projects, experience, or education!`
};
