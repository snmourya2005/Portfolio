/* ==========================================================================
   S.N. MOURYA - RESUME DATA STORE (VERBATIM SYNC WITH CURRENT RESUME)
   ========================================================================== */

const portfolioData = {
  personal: {
    name: "S.N. MOURYA",
    role: "Java Full Stack Developer | Spring Boot, Microservices, React.js & AI Integration",
    location: "Bengaluru, India (Open to Relocate)",
    phone: "+91 8688610728",
    email: "s.n.mourya2005@gmail.com",
    github: "https://github.com/snmourya2005",
    linkedin: "https://www.linkedin.com/in/mourya-sn-1011792b6/",
    leetcode: "https://leetcode.com/u/ytUtdYUYwr/",
    portfolioUrl: "https://portfolio-mocha-theta-14.vercel.app/",
    profileSummary: "Versatile Java Full Stack Developer (B.Tech in CSE – AI & ML, 2022–2026, ALTS, Anantapur; CGPA: 7.57, First Class with Distinction) with hands-on expertise building enterprise full-stack web applications and microservices using Java, Spring Boot, React.js, and SQL, alongside modern Generative AI / LLM integration (Spring AI, OpenAI & Gemini APIs). Strong grasp of Core Java (OOP, Collections Framework, Multithreading, Streams API) with practical skills in REST API architecture, Hibernate/JPA, and secure JWT authorization. Strong foundation in Data Structures & Algorithms on LeetCode, combined with 8 months of software development internship experience from JSpiders Bengaluru, with a proven track record of shipping production-grade full-stack and AI-augmented applications.",
    stats: [
      { number: "90+", label: "REST APIs Built & Validated (Postman)" },
      { number: "2+", label: "Enterprise Full-Stack & AI Systems" },
      { number: "7.57", label: "CGPA (First Class with Distinction)" },
      { number: "100%", label: "Deterministic Fallback Circuit Breaker" }
    ]
  },

  skills: [
    {
      category: "Core Java & OOP",
      icon: "☕",
      skills: [
        "Java (Core Java)",
        "OOP Principles: Inheritance, Polymorphism, Abstraction, Encapsulation",
        "Collections Framework",
        "Multithreading & Concurrency",
        "Exception Handling",
        "Java 8 Streams API",
        "Generics"
      ]
    },
    {
      category: "Backend & Microservices",
      icon: "⚙️",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "RESTful APIs",
        "Microservices Architecture",
        "Hibernate ORM",
        "Spring Data JPA",
        "Spring Security",
        "JWT (JSON Web Tokens)",
        "OpenAPI 3.1 / Swagger",
        "Postman"
      ]
    },
    {
      category: "AI & LLM Integration (Java)",
      icon: "🧠",
      skills: [
        "Spring AI",
        "OpenAI & Gemini API Integration",
        "Prompt Engineering (ExcelR Certified)",
        "RAG Architecture",
        "Vector Embeddings",
        "Multi-Provider AI Abstraction",
        "JSON/POJO Structured Output Parsing",
        "Deterministic Fallbacks"
      ]
    },
    {
      category: "Frontend & UI Development",
      icon: "⚛️",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Axios",
        "Client-Server Data Binding",
        "Webhooks",
        "CORS Configuration"
      ]
    },
    {
      category: "Databases & Storage",
      icon: "🗄️",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Oracle SQL",
        "Relational Schema Normalization",
        "Complex SQL Queries",
        "ACID Transactions",
        "MongoDB"
      ]
    },
    {
      category: "Cloud, DevOps & Testing",
      icon: "🛠️",
      skills: [
        "Docker Containerization",
        "Microsoft Azure Cloud Basics",
        "Git & GitHub",
        "Maven",
        "JUnit 5",
        "Mockito",
        "Agile/Scrum Methodologies"
      ]
    }
  ],

  dsaTopics: [
    { name: "Arrays & Strings", icon: "📊" },
    { name: "Linked Lists", icon: "🔗" },
    { name: "Stacks & Queues", icon: "🥞" },
    { name: "Hashing & HashMaps", icon: "🔑" },
    { name: "Sets & Two Pointers", icon: "🎯" },
    { name: "Searching & Sorting", icon: "🔍" },
    { name: "Trees & Graphs", icon: "🌳" },
    { name: "Recursion & Big-O", icon: "🔄" }
  ],

  projects: [
    {
      id: "healthcare-bot",
      title: "AI Health Triage & Symptom Assessment Platform",
      demoName: "AH Live Demo",
      liveUrl: "https://ai-health-checker-frontend.vercel.app/",
      badge: "Enterprise Full Stack & AI-Integrated",
      tech: ["Spring Boot", "React.js", "Spring AI / LLM APIs (OpenAI, Gemini)", "Java Rule Engine", "OpenAPI 3.1", "Docker", "Spring Security", "JWT"],
      shortDesc: "Architected an enterprise-grade AI health triage platform integrating Spring AI with OpenAI & Gemini APIs for natural language symptom extraction and multi-provider AI abstraction.",
      bullets: [
        "Architected an enterprise-grade AI health triage platform integrating Spring AI with OpenAI & Gemini APIs for natural language symptom extraction and multi-provider AI abstraction.",
        "Implemented a high-precision deterministic Java Rule Engine that validates LLM responses, eliminates clinical hallucinations, and classifies triage urgency (Emergency Red Flag, Urgent, Self-Care).",
        "Engineered a 100% offline fallback circuit breaker in Java with Jakarta @Valid request validation and interactive OpenAPI 3.1 Swagger documentation, ensuring zero downtime during API timeouts.",
        "Developed a responsive React.js UI with dynamic triage cards, structured home care guidance, and specialist referral routing; containerized the multi-tier application using Docker."
      ],
      interactiveType: "chatbot",
      interactiveLabel: "⚡ Launch Interactive Simulator"
    },
    {
      id: "courier-logistics",
      title: "Courier Logistics & Shipment Tracking System",
      demoName: "CL Live Demo",
      liveUrl: "https://logistics-courier-front-end.vercel.app/",
      badge: "Enterprise Full Stack Logistics",
      tech: ["Spring Boot", "React.js", "MySQL", "Hibernate/JPA", "RESTful APIs", "Axios", "Docker", "Git", "JUnit 5"],
      shortDesc: "Developed a full-stack logistics platform featuring dynamic shipping rate calculations, multi-step consignment booking wizard, and client CRM management.",
      bullets: [
        "Developed a full-stack logistics platform featuring dynamic shipping rate calculations, multi-step consignment booking wizard, and client CRM management.",
        "Implemented 40+ secure RESTful APIs in Spring Boot managing consignments, warehouse transit hubs, delivery fleet assignment, and automated billing settlements.",
        "Built real-time package tracking UI in React.js with interactive visual milestone steppers and printable consignment waybills.",
        "Designed normalized MySQL relational schema using Spring Data JPA with entity relationships for packages, tracking history waypoints, and delivery agents."
      ],
      interactiveType: "logistics-explorer",
      interactiveLabel: "⚡ Launch Interactive Simulator"
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "JSpiders",
      location: "BTM Bengaluru",
      period: "January 2026 – August 2026",
      highlights: [
        "Developed full-stack web applications using React.js and Spring Boot as part of a collaborative Agile development team.",
        "Constructed, documented, and validated 90+ REST APIs using Postman; connected backend endpoints with frontend components end-to-end.",
        "Resolved CORS configuration errors, API connectivity bottlenecks, and managed SQL database transactions to support core application workflows.",
        "Participated in sprint reviews and code refactoring; utilized Git for collaborative version control and authored unit tests using JUnit 5."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering (AI & ML)",
      institution: "ALTS, Anantapur (Anantha Lakshmi Institute of Technology and Sciences)",
      location: "Anantapur",
      period: "2022 – 2026",
      score: "CGPA: 7.57 (First Class with Distinction, 0 Active Backlogs)"
    }
  ],

  certifications: [
    {
      title: "Java Full Stack Development Certification",
      issuer: "Udemy / JSpiders",
      icon: "📜"
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "ExcelR",
      icon: "💡"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills Academy",
      icon: "🤖"
    },
    {
      title: "Participant, Smart India Hackathon — Rapid Prototyping",
      issuer: "Smart India Hackathon",
      icon: "🏆"
    }
  ]
};
