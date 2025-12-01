// Mock data for portfolio - Replace with your actual data later

export const personalInfo = {
  name: "Vedhanth M",
  title: "B.Tech CSE 2nd Year",
  tagline: "Full-Stack Developer | AI/ML Enthusiast | Problem Solver",
  bio: "Passionate computer science student with a keen interest in building scalable web applications and exploring artificial intelligence. Currently focusing on full-stack development and machine learning projects. Always eager to learn new technologies and collaborate on innovative projects.",
  email: "vedhanth.m@example.com",
  github: "https://github.com/vedhanth",
  linkedin: "https://linkedin.com/in/vedhanth-m",
  scholar: "https://scholar.google.com/citations?user=example",
  resumeLink: "#"
};

export const currentFocus = [
  { label: "Working on", value: "Building scalable web applications with React & Node.js" },
  { label: "Learning", value: "Machine Learning, System Design, Cloud Architecture" },
  { label: "Aiming for", value: "SDE internships and research opportunities in AI/ML" }
];

export const projects = [
  {
    id: 1,
    title: "Real-Time Collaboration Platform",
    description: "A web-based collaborative workspace with live editing, video conferencing, and project management features.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB", "WebRTC"],
    highlights: [
      "Built real-time synchronization engine handling 1000+ concurrent users",
      "Implemented end-to-end encryption for secure communications",
      "Reduced latency by 40% through optimized WebSocket connections"
    ],
    github: "https://github.com/vedhanth/collab-platform",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Code Review Assistant",
    description: "Machine learning tool that analyzes code quality, suggests improvements, and detects potential bugs.",
    techStack: ["Python", "FastAPI", "PyTorch", "Transformers", "React"],
    highlights: [
      "Fine-tuned CodeBERT model achieving 87% accuracy in bug detection",
      "Integrated with GitHub Actions for automated code reviews",
      "Reduced review time by 60% for development teams"
    ],
    github: "https://github.com/vedhanth/code-assistant",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "Campus Event Management System",
    description: "Full-stack platform for organizing and managing college events with registration, ticketing, and analytics.",
    techStack: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
    highlights: [
      "Handles 5000+ student registrations with 99.9% uptime",
      "Built dynamic QR code-based check-in system",
      "Implemented real-time analytics dashboard for organizers"
    ],
    github: "https://github.com/vedhanth/event-system",
    demo: "https://events.example.com",
    featured: false
  },
  {
    id: 4,
    title: "Smart Study Planner",
    description: "AI-driven study schedule optimizer that adapts to learning patterns and exam deadlines.",
    techStack: ["React Native", "Node.js", "MongoDB", "TensorFlow.js"],
    highlights: [
      "Personalized study recommendations using ML algorithms",
      "Cross-platform mobile app with 10k+ downloads",
      "Improved study efficiency by 35% based on user feedback"
    ],
    github: "https://github.com/vedhanth/study-planner",
    demo: null,
    featured: false
  }
];

export const research = [
  {
    id: 1,
    title: "Efficient Model Compression Techniques for Edge Computing",
    authors: "Vedhanth M, Dr. Smith J, Dr. Brown K",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2024,
    summary: "Proposed novel pruning algorithm reducing model size by 70% while maintaining 95% accuracy for deployment on resource-constrained devices.",
    tags: ["Model Compression", "Edge Computing", "Deep Learning"],
    paperLink: "#",
    codeLink: "https://github.com/vedhanth/model-compression",
    citations: 12
  },
  {
    id: 2,
    title: "Attention-Based Sentiment Analysis for Code Review Comments",
    authors: "Vedhanth M, Dr. Johnson A",
    venue: "ACM Conference on Software Engineering",
    year: 2024,
    summary: "Developed transformer-based model for classifying developer sentiment in code reviews, achieving state-of-the-art F1 score of 0.89.",
    tags: ["NLP", "Sentiment Analysis", "Software Engineering"],
    paperLink: "#",
    codeLink: "https://github.com/vedhanth/sentiment-code-review",
    citations: 8
  }
];

export const researchStats = {
  publications: 2,
  citations: 20,
  hIndex: 2
};

export const experience = [
  {
    id: 1,
    role: "Software Engineering Intern",
    organization: "Tech Innovations Ltd.",
    duration: "Jun 2024 - Aug 2024",
    responsibilities: [
      "Developed microservices architecture handling 100k+ daily requests",
      "Optimized database queries reducing response time by 50%",
      "Collaborated with cross-functional team of 8 developers using Agile methodology"
    ]
  },
  {
    id: 2,
    role: "Research Assistant",
    organization: "University AI Lab",
    duration: "Jan 2024 - Present",
    responsibilities: [
      "Conducting research on efficient neural network architectures",
      "Published 2 papers in top-tier conferences",
      "Mentoring 3 junior students on ML projects"
    ]
  },
  {
    id: 3,
    role: "Technical Lead",
    organization: "College Coding Club",
    duration: "Aug 2023 - Present",
    responsibilities: [
      "Leading team of 15 students in organizing hackathons and workshops",
      "Conducted 20+ technical sessions on web development and algorithms",
      "Increased club membership by 200% through innovative initiatives"
    ]
  }
];

export const skills = {
  languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
  frameworks: ["React", "Node.js", "Express", "Django", "FastAPI", "Next.js", "React Native"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  tools: ["Git", "GitHub", "Docker", "AWS", "Linux", "VS Code", "Postman"],
  concepts: ["Data Structures", "Algorithms", "OOP", "System Design", "REST APIs", "Microservices"],
  aiml: ["PyTorch", "TensorFlow", "scikit-learn", "NLP", "Computer Vision", "Transformers"]
};

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon 2024 - Winner",
    description: "Led team to first place among 500+ teams with AI-powered healthcare solution"
  },
  {
    id: 2,
    title: "Google Summer of Code 2024",
    description: "Selected as GSoC contributor for open-source ML project"
  },
  {
    id: 3,
    title: "University Gold Medal",
    description: "Awarded for outstanding academic performance (CGPA: 9.5/10)"
  },
  {
    id: 4,
    title: "ACM ICPC Regionalist",
    description: "Qualified for regional round in competitive programming"
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect",
    description: "Professional certification in cloud architecture and deployment"
  },
  {
    id: 6,
    title: "Research Publication Award",
    description: "Best paper award at International ML Conference 2024"
  }
];
