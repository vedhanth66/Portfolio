export const personalInfo = {
  name: "Vedhanth M",
  title: "B.Tech CSE 2nd Year",
  tagline: "Student @MIT | IBM certified Data Scientist | Meta certified Full stack developer | IEEE Student member | Researcher",
  bio: "I am a Computer Science undergraduate at MIT Bengaluru bridging the gap between advanced research and scalable software engineering. My work spans the full computing stack—from architecting full-stack web platforms to publishing IEEE research on efficient deep learning. I don’t just write code; I design systems and build projects end-to-end with clean logic and clear intent. Whether optimizing algorithms, exploring model compression, or crafting intuitive UIs, I’m driven by the challenge of turning complex technical ideas into fast, reliable, and production-ready software.",
  email: "vedhanthmanju@gmail.com",
  github: "https://github.com/vedhanth66",
  linkedin: "https://www.linkedin.com/in/vedhanth-m-703131300/",
  scholar: "https://scholar.google.com/citations?user=hoIjSQgAAAAJ&hl=en",
  resumeLink: "#"
};

export const currentFocus = [
  { label: "Working on", value: "Researching Adaptive Rank Pruning and its variations, and implementing this compression framework on Graph Neural Networks (GNNs)." },
  { label: "Learning", value: "Diving into Graph Neural Networks, core Machine Learning concepts, practical Image Processing workflows, and Computer Vision" },
  { label: "Aiming for", value: "Seeking Software Engineering Internships and R&D roles in high-impact, real-world environments." }
];

export const projects = [
  {
    id: 1,
    title: "GlideSight",
    description: "GlideSight is an advanced runway detection system developed for the 48-hour Honeywell Hackathon, where it was recognized as a Top 10 project. This system leverages deep learning and computer vision to enhance aviation safety by accurately identifying and analyzing airport runways from aerial imagery.",
    techStack: ["yolo", "FastAPI ", "Python", "UNET", "OpenCV", "tensor", "TensorFlow", "Matplotlib", "gradio", "Computer vision"],
    highlights: [
      "Accurate Runway Segmentation: Utilizes a UNet deep learning model with a ResNet34 backbone, implemented in PyTorch, to perform precise semantic segmentation of runways.",
      "Geometric Analysis: Employs computer vision techniques with OpenCV to process the model's output, identifying the runway's contours and calculating the precise coordinates of its left edge, right edge, and centerline.",
      "Interactive Analytics Dashboard: Features a comprehensive and user-friendly dashboard built with Gradio. This interface allows users to upload an image and receive a detailed analysis",
      "Real-time Feedback: The system provides immediate visual and quantitative feedback, making it a valuable tool for analysis and validation."
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: "Shree Kara Kalagruha: A Full-Stack A/V Content Platform for Artists",
    description: "Shree Kara Studios is a comprehensive audio/visual content management system that provides a platform for artists to upload, manage, and showcase their creative work. The platform features a sleek and intuitive interface that allows users to seamlessly upload and categorize their content, including images, videos, poems, and music. The frontend is built with React and features a dynamic and engaging user experience, while the backend is powered by a robust Python-based API that ensures secure and efficient content management.",
    techStack: ["React", "React Router", "Axios", "CSS", "Python", "FastAPI", "MongoDB", "JWT (JSON Web Tokens)", "JavaScript", "Django", "Express.js", "Node.js"],
    highlights: [
      "Secure Authentication: The platform features a secure authentication system that allows artists to create an account and log in to manage their content.",
      "A/V Content Uploads: The platform supports a wide range of audio/visual content, including images, videos, poems, and music.",
      "Content Management: The platform provides a comprehensive content management system that allows artists to edit, delete, and categorize their content.",
      "Public-Facing Gallery: The platform features a public-facing gallery where artists can showcase their work to a wider audience.",
      "Target-Based Filtering: The platform allows users to filter content by target, making it easy to find specific types of content."
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "Real-time Chess Platform",
    description: "Real-Time Multiplayer Chess Game | Full Stack Project Designed and developed a full-stack real-time multiplayer chess game with dynamic player connection, game state management, and spectator mode.",
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "Socket.IO"],
    highlights: [
      "Real-time gameplay using Socket.IO for seamless peer-to-peer connection.",
      "Supports multiplayer logic with automatic player role assignment (White, Black, Spectator).",
      "Displays live game status updates like Check, Checkmate, Draw.",
      "Spectator mode with real-time board updates and game state tracking.",
      "Intuitive and responsive chessboard UI built with HTML, CSS, and client-side JavaScript.",
      "Backend handled via Node.js and Express to manage sockets, game states, and player connections."
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: "Little Lemon UI/UX Design",
    description: "In this project, I applied comprehensive UI/UX design methodologies to create a seamless user experience for Little Lemon",
    techStack: ["Figma"],
    highlights: [
      "Journey Map: Mapped out the user’s interactions, pain points, and motivations throughout their experience with the product.",
      "User Persona: Developed a detailed persona to represent the target audience, ensuring the design met their needs and goals.",
      "Wireframes: Created low-fidelity wireframes to lay the foundation for the layout and functionality.",
      "Prototypes: Designed interactive prototypes that enabled testing and refinement of the user interface before final development.",
      "This project emphasized user-centered design principles and iterative testing to create intuitive, user-friendly solutions."
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: true
  },
  {
    id: 5,
    title: "Spotify - clone",
    description: "A Spotify clone that dynamically updates songs and posters based on the music added to a local folder, integrated using JSON.",
    techStack: ["JavaScript", "HTML", "CSS", "JSON"],
    highlights: [
      "Functional buttons including Play, Pause, Seek Bar, and Volume Control.",
      "Real-time song updates: Songs and album covers are automatically updated when new files are added to the system’s music folder.",
      "A user-friendly interface with separate playlists for English, Hindi, Kannada, and Telugu songs.",
      "Built using HTML, CSS, JavaScript, and JSON integration, no external API required.",
      "It is completely responsive. Looks stunning on all screen sizes"
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: false
  },
  {
    id: 6,
    title: "Weather App",
    description: "Built a Weather App that provides real-time weather updates using an external API.",
    techStack: ["JavaScript", "HTML", "CSS", "API"],
    highlights: [
      "Users can search for the weather by city name.",
      "Integrated a weather API to fetch current conditions, temperature, humidity, and weather forecasts.",
      "Clean and responsive UI for easy viewing on both desktop and mobile devices.",
      "Error handling for invalid inputs (e.g., city not found).",
      "Used JavaScript to manage API requests and dynamically display weather data."
    ],
    github: "https://github.com/vedhanth66?tab=repositories",
    demo: null,
    featured: false
  }
];

export const research = [
  {
    id: 1,
    title: "Adaptive Rank Pruning: Dynamic Low-Rank Model Merging and Compression for Efficient AI Deployment",
    authors: "Vedhanth M, Dr. S. Mahadevi, Dr. Anil Kumar",
    venue: "IEEE Access",
    year: 2025,
    summary: "This work introduces Adaptive Rank Pruning (ARP), a unified framework that merges multiple task-specific models and applies dynamic, layer-wise compression using a variance-thresholding criterion to optimize deployment. The method achieves up to 2.5x model size reduction with minimal accuracy loss, outperforming state-of-the-art baselines like LoRA and QLoRA in inference latency and energy efficiency on edge hardware.",
    tags : [
    "Accuracy",
    "Adaptive rank pruning",
    "Compression ratios",
    "Constrained settings",
    "Fine-tuned models",
    "Large pre-trained models",
    "Low-rank approximation",
    "Model compression",
    "Model merging",
    "Neural networks",
    "Resource demands",
    "Singular value decomposition",
    "Stability",
    "Trade-offs",
    "Variance thresholds",
    "Parameter-Efficient Fine-Tuning (PEFT)",
    "Edge deployment"
],
    paperLink: "https://ieeexplore.ieee.org/abstract/document/11199315",
    citations: 0
  }
];

export const researchStats = {
  publications: 2,
  publicationsreviewed: 10,
  citations: 0,
  hIndex: 0
};

export const experience = [
  {
    id: 1,
    role: "Founding Full Stack Developer",
    organization: "Shree Kara Kalagruha",
    duration: "Jun 2025 - present",
    responsibilities: [
      "Developed the official website for Shree Kara Kalagruha, a creative cinematography and arts company.",
      "Began from a blank canvas and has grown into a full-stack content platform",
      "I continue to manage and expand."
    ]
  }
];

export const skills = {
  languages: [
    "C", "C++", "Python", "JavaScript", "Java", "SQL", "Swift",
    "HTML", "CSS", "MATLAB"
  ],

  frameworks: [
    "React", "Node.js", "Express", "Django", "FastAPI",
    "Next.js", "React Native", "Socket.IO",
    "React Router", "Axios"
  ],

  databases: [
    "MongoDB", "MySQL"
  ],

  tools: [
    "Git", "GitHub", "VS Code", "Figma", "Simulink",
    "NumPy", "Pandas", "Matplotlib", "Seaborn"
  ],

  concepts: [
    "Data Structures", "Algorithms", "OOP", "System Design",
    "REST APIs", "UI/UX Design", "Data Engineering", "API Development"
  ],

  aiml: [
    "PyTorch", "TensorFlow", "scikit-learn", "NLP",
    "Computer Vision", "Transformers", "LLMs",
    "OpenCV", "YOLO", "U-Net", "CUDA",
    "Deep Learning", "Machine Learning"
  ]
};

export const achievements = [
  {
    id: 1,
    title: "Honeywell SDG Hackathon - Finished in top 10",
    description: "Led team to top 10 place among 100+ teams with runway detection"
  },
  {
    id: 2,
    title: "University top ranker",
    description: "Outstanding academic performer - CGPA: 9.19"
  },
  {
    id: 3,
    title: "Research publication",
    description: "Multiple papers are accepted at top journals and conferences"
  },
  {
    id: 4,
    title: "Sports",
    description: "State-level basketball and Intra-state badminton player"
  }
];
