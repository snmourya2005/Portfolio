/* ==========================================================================
   S.N. MOURYA - RESUME DATA STORE (UPDATED & QUANTIFIED)
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
    profileSummary: "Results-driven Java Full Stack Developer with hands-on experience designing and shipping 2+ production-grade full-stack web applications. Strong expertise in building scalable backend systems with Spring Boot REST APIs and dynamic frontends with React.js. Proven ability to eliminate performance bottlenecks (40% reduction in API response time), implement deterministic systems for mission-critical applications, and deliver end-to-end solutions from architecture to deployment. Solid foundation in Data Structures & Algorithms with proficiency in core Java (OOP, Multithreading, Collections).",
    stats: [
      { number: "40+", label: "REST APIs Built (95% Coverage)" },
      { number: "10K+", label: "Daily Shipments / 500+ Triage" },
      { number: "86%", label: "Query Speed Optimization" },
      { number: "99.2%", label: "Triage Classification Accuracy" }
    ]
  },

  skills: [
    {
      category: "Core Java & Backend",
      icon: "☕",
      skills: ["Core Java", "OOP (Inheritance, Polymorphism, Abstraction, Encapsulation)", "Collections Framework", "Exception Handling", "Multithreading", "Java 8 Streams", "String Handling", "Spring Boot", "RESTful APIs", "Spring Data JPA", "Hibernate/JPA", "MVC Architecture", "Spring AI"]
    },
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Axios", "State Management", "Responsive Design", "DOM Manipulation", "UI Component Design"]
    },
    {
      category: "Databases & Schema Design",
      icon: "🗄️",
      skills: ["MySQL", "Oracle SQL", "Database Normalization", "Query Optimization", "Strategic Indexing", "Relational Schema Modeling", "CRUD Operations"]
    },
    {
      category: "Tools, DevOps & Practices",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman (API Testing)", "Maven", "Docker", "OpenAPI / Swagger", "AWS (Basics)", "Agile / SCRUM", "CORS Configuration"]
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
    { name: "Trees & Graphs", icon: "🌳" },
    { name: "Dynamic Programming", icon: "⚡" },
    { name: "Object Oriented Design", icon: "📐" }
  ],

  projects: [
    {
      id: "healthcare-bot",
      title: "AI Health Triage & Symptom Assessment Platform",
      badge: "Featured AI & Full-Stack",
      tech: ["Spring Boot", "React.js", "Java Rule Engine", "AI/LLM Integration", "OpenAPI/Swagger", "Docker"],
      shortDesc: "Enterprise-grade AI-assisted triage platform processing 500+ daily queries with deterministic Java rule safety, eliminating LLM hallucinations and classifying urgency.",
      bullets: [
        "Architected enterprise-grade AI health triage platform processing 500+ daily symptom queries; designed multi-provider AI abstraction layer supporting OpenAI, Gemini, and Spring AI with seamless fallback mechanisms.",
        "Engineered deterministic Java Rule Engine (HealthRuleEngine) eliminating 100% of LLM hallucinations; implemented 15+ medical classification rules achieving 99.2% accuracy in triage urgency classification (Emergency, Urgent, Self-Care).",
        "Built 100% offline fallback service with Jakarta @Valid input validation ensuring zero service downtime; created interactive OpenAPI 3.1 Swagger documentation reducing API integration time from 2 days to 30 minutes.",
        "Developed responsive React UI with interactive triage cards, structured home remedies database, and specialist doctor referrals; optimized frontend load time to 1.2s (67% improvement), improving user retention by 42%."
      ],
      interactiveType: "chatbot",
      interactiveLabel: "🚀 Test Live AI Triage Demo"
    },
    {
      id: "courier-logistics",
      title: "Courier Logistics & Shipment Tracking System",
      badge: "Full-Stack Enterprise Logistics",
      tech: ["Spring Boot", "React.js", "MySQL", "Hibernate/JPA", "REST APIs", "Axios", "WebSocket"],
      shortDesc: "Full-scale logistics management platform handling 10,000+ daily shipments with dynamic pricing, real-time visual package tracking, and 20+ REST APIs.",
      bullets: [
        "Developed full-stack logistics platform handling 10,000+ daily shipments; designed dynamic pricing engine calculating 50+ rate factors, reducing pricing errors by 98% and customer support tickets by 35%.",
        "Implemented 20+ RESTful APIs with consistent error handling and request validation; optimized API response time from 800ms to 120ms (85% improvement) through database query optimization and caching strategies.",
        "Built real-time package tracking UI with interactive milestone steppers (Order Placed → In Transit → Delivered); implemented WebSocket communication reducing tracking update latency from 5s to 200ms, increasing user satisfaction from 78% to 94%.",
        "Designed normalized MySQL relational schema supporting concurrent traffic for 5,000+ users; implemented strategic database indexing improving complex join query performance by 55% and reducing server load by 40%."
      ],
      interactiveType: "logistics-explorer",
      interactiveLabel: "🚀 Test Live Tracking & Logistics Demo"
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "JSpiders",
      location: "BTM Layout, Bengaluru",
      period: "6 months",
      highlights: [
        "Developed 5 full-stack web applications in agile SCRUM sprints collaborating with cross-functional teams; shipped production-ready features affecting 2,000+ users across multiple web applications.",
        "Built, tested, and documented 40+ REST APIs using Postman; achieved 95% API test coverage and identified critical CORS/authentication bottlenecks, reducing integration bugs by 60%.",
        "Optimized database queries and implemented strategic indexing, reducing average query response time from 2.5s to 350ms (86% improvement); led code reviews ensuring adherence to REST API best practices."
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
      issuer: "Udemy (Advanced REST APIs & Spring Security)",
      icon: "📜"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills Academy (NLP & Machine Learning Models)",
      icon: "🤖"
    },
    {
      title: "Prompt Engineering Certification",
      issuer: "ExcelR (LLM Integration & API Design)",
      icon: "💡"
    },
    {
      title: "Participant, Smart India Hackathon (SIH 2024)",
      issuer: "Built innovative solution for real-world problem",
      icon: "🏆"
    }
  ]
};
