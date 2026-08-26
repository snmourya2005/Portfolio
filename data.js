/* ==========================================================================
   S.N. MOURYA - RESUME DATA STORE
   ========================================================================== */

const portfolioData = {
  personal: {
    name: "S.N. MOURYA",
    role: "Java Full Stack Developer",
    location: "Bengaluru, India (Open to Relocate)",
    phone: "+91 8688610728",
    email: "s.n.mourya2005@gmail.com",
    github: "https://github.com/snmourya2005",
    linkedin: "https://www.linkedin.com/in/mourya-sn-1011792b6/",
    leetcode: "https://leetcode.com/u/ytUtdYUYwr/",
    profileSummary: "Aspiring Java Full Stack Developer with hands-on experience building full-stack web applications using React.js, Spring Boot, and MySQL. Strong grasp of core Java (OOP, Collections, Exception Handling, Multithreading) with practical skills in REST API design, frontend-backend integration, and resolving CORS/API issues. Strong foundation in Data Structures & Algorithms and a track record of shipping working full-stack projects.",
    stats: [
      { number: "40+", label: "REST APIs Built & Tested" },
      { number: "2+", label: "Full Stack Projects Shipped" },
      { number: "75.5%", label: "B.Tech CSE Aggregate" },
      { number: "100%", label: "Frontend-Backend Integration" }
    ]
  },

  skills: [
    {
      category: "Backend & Core Java",
      icon: "☕",
      skills: ["Java", "Spring Boot", "REST APIs", "Hibernate / JPA", "OOP Principles", "Collections Framework", "Exception Handling", "Multithreading", "String Handling", "Java 8 Streams", "MVC Architecture"]
    },
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Axios", "Responsive UI", "DOM Manipulation", "State Management"]
    },
    {
      category: "Databases & Cloud",
      icon: "🗄️",
      skills: ["MySQL", "Oracle SQL", "Database Normalization", "AWS (Basics)", "CRUD Operations", "Relational Modeling"]
    },
    {
      category: "Developer Tools & Methodologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman (40+ APIs)", "Maven", "Docker", "OpenAPI / Swagger", "Agile / Scrum", "CORS Configuration"]
    }
  ],

  dsaTopics: [
    { name: "Arrays & Strings", icon: "📊" },
    { name: "Linked Lists", icon: "🔗" },
    { name: "Stacks & Queues", icon: "🥞" },
    { name: "Hashing & HashMaps", icon: "🔑" },
    { name: "Sets & Collections", icon: "📦" },
    { name: "Searching & Sorting", icon: "🔍" },
    { name: "Recursion & Backtracking", icon: "🔄" },
    { name: "Object Oriented Design", icon: "📐" }
  ],

  projects: [
    {
      id: "healthcare-bot",
      title: "AI Healthcare Assistant (Chatbot-Based)",
      badge: "Featured AI Project",
      tech: ["Spring Boot", "React.js", "MySQL", "REST APIs", "Chatbot Logic"],
      shortDesc: "An intelligent healthcare triage chatbot delivering instant preliminary medical guidance and reducing page load friction.",
      bullets: [
        "Built a chatbot delivering basic healthcare guidance based on user input, improving self-triage accessibility for end users.",
        "Developed backend services using Spring Boot and integrated REST APIs for real-time query handling.",
        "Designed a responsive React.js UI, improving user interaction and reducing page load friction."
      ],
      interactiveType: "chatbot",
      interactiveLabel: "Test Live Chatbot Demo"
    },
    {
      id: "ecommerce-app",
      title: "E-Commerce Web Application",
      badge: "Full-Stack Enterprise",
      tech: ["Spring Boot", "React.js", "MySQL", "Axios", "Hibernate/JPA", "REST APIs"],
      shortDesc: "End-to-end e-commerce platform supporting product listings, dynamic cart management, and multi-step order checkout.",
      bullets: [
        "Developed a full-stack application supporting product listing, cart, and order management for end-to-end shopping workflows.",
        "Implemented REST APIs for CRUD operations using Spring Boot, covering 10+ endpoints across product, cart, and order modules.",
        "Integrated frontend with backend using Axios and managed a normalized SQL database schema."
      ],
      interactiveType: "api-explorer",
      interactiveLabel: "Explore REST API Endpoints"
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "JSpiders",
      location: "BTM Layout, Bengaluru",
      period: "Internship",
      highlights: [
        "Developed full-stack applications using React.js and Spring Boot as part of a collaborative development team.",
        "Built and tested 40+ REST APIs using Postman; handled frontend-backend integration end to end.",
        "Resolved CORS and API connectivity issues, and worked with SQL databases to support application data needs."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "Anantha Lakshmi Institute of Technology and Sciences",
      location: "Anantapur",
      period: "2022 – 2026",
      score: "Aggregate: 75.5%"
    }
  ],

  certifications: [
    {
      title: "Java Full Stack Development Certification",
      issuer: "Udemy",
      icon: "📜"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills Academy",
      icon: "🤖"
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "ExcelR",
      icon: "💡"
    },
    {
      title: "Participant, Smart India Hackathon (SIH)",
      issuer: "Government of India / MoE",
      icon: "🏆"
    }
  ]
};
