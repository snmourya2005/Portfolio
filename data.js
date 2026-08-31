/* ==========================================================================
   S.N. MOURYA - RESUME DATA STORE (EXACT SYNC WITH LATEST RESUME)
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
      { number: "90+", label: "REST APIs Built & Tested (Postman)" },
      { number: "2+", label: "Production Full-Stack Projects" },
      { number: "7.57", label: "B.Tech Engineering CGPA" },
      { number: "100%", label: "Deterministic Java Rule Safety" }
    ]
  },

  skills: [
    {
      category: "Languages & Core Java",
      icon: "☕",
      skills: [
        "Java", "SQL", "JavaScript",
        "OOP (Inheritance, Polymorphism, Abstraction, Encapsulation)",
        "Collections Framework", "Exception Handling",
        "Multithreading", "String Handling", "Java 8 Streams"
      ]
    },
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Axios", "Responsive UI", "Component Lifecycle"]
    },
    {
      category: "Backend & Databases",
      icon: "🗄️",
      skills: ["Spring Boot", "REST APIs", "Hibernate/JPA", "Spring Data JPA", "MySQL", "Oracle SQL", "Relational Schema Design"]
    },
    {
      category: "Cloud, Security & Tools",
      icon: "🛠️",
      skills: [
        "Git", "GitHub", "Postman", "Maven", "Docker",
        "OpenAPI/Swagger", "Agile", "Microsoft Azure",
        "Microservices", "Spring Security", "JWT (JSON Web Tokens)", "JUnit 5"
      ]
    }
  ],

  dsaTopics: [
    { name: "Arrays", icon: "📊" },
    { name: "Strings", icon: "🔤" },
    { name: "Linked Lists", icon: "🔗" },
    { name: "Stacks", icon: "🥞" },
    { name: "Queues", icon: "🚶" },
    { name: "Hashing & HashMaps", icon: "🔑" },
    { name: "Sets", icon: "📦" },
    { name: "Searching & Sorting", icon: "🔍" },
    { name: "Recursion", icon: "🔄" }
  ],

  projects: [
    {
      id: "healthcare-bot",
      title: "AI Health Triage & Symptom Assessment Platform",
      badge: "AI & Full-Stack Platform",
      tech: ["Spring Boot", "React", "Java Rule Engine", "AI/LLM Integration", "OpenAPI/Swagger", "Docker", "SpringSecurity-JWT"],
      shortDesc: "Enterprise-grade AI health triage platform with natural language symptom extraction and multi-provider AI abstraction (OpenAI, Gemini, Spring AI).",
      bullets: [
        "Architected enterprise-grade AI health triage platform with natural language symptom extraction and multi-provider AI abstraction (OpenAI, Gemini, Spring AI).",
        "Implemented deterministic Java Rule Engine eliminating LLM hallucinations and classifying triage urgency (Emergency Red Flag, Urgent, Self-Care).",
        "Built 100% offline fallback service, Jakarta @Valid input validation, and interactive OpenAPI 3.1 Swagger documentation.",
        "Developed responsive React UI with interactive triage cards, structured home remedies, and specialist doctor referrals."
      ],
      interactiveType: "chatbot",
      interactiveLabel: "🚀 Test AH Live Demo"
    },
    {
      id: "courier-logistics",
      title: "Courier Logistics & Shipment Tracking System",
      badge: "Full-Stack Enterprise Logistics",
      tech: ["Spring Boot", "React.js", "MySQL", "Hibernate/JPA", "REST APIs", "Axios"],
      shortDesc: "Full-stack logistics platform with dynamic shipping rate calculations, multi-step shipment booking wizard, and customer CRM.",
      bullets: [
        "Developed full-stack logistics platform with dynamic shipping rate calculations, multi-step shipment booking wizard, and customer CRM.",
        "Implemented 40+ RESTful APIs managing consignments, warehouse routing hubs, delivery fleet assignment, and billing settlements.",
        "Built real-time package tracking UI with interactive visual milestone steppers and printable consignment receipts.",
        "Designed normalized MySQL relational schema using Spring Data JPA with entity relationships for packages, tracking history waypoints, and delivery agents."
      ],
      interactiveType: "logistics-explorer",
      interactiveLabel: "🚀 Test CL Live Demo"
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "JSpiders",
      location: "BTM Bengaluru",
      period: "January 2026 – August 2026",
      highlights: [
        "Developed full-stack applications using React.js and Spring Boot as part of a collaborative development team.",
        "Built and tested 90+ REST APIs using Postman; handled frontend-backend integration end to end.",
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
      score: "CGPA : 7.57"
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
      title: "Participant, Smart India Hackathon",
      issuer: "Smart India Hackathon",
      icon: "🏆"
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "ExcelR",
      icon: "💡"
    }
  ]
};
