import React, { useState } from 'react';

// Resume data for S.N. Mourya (Quantified & Updated)
const profile = {
  name: "S.N. MOURYA",
  role: "Java Full Stack Developer",
  location: "Bengaluru, India (Open to Relocate)",
  phone: "+91 8688610728",
  email: "s.n.mourya2005@gmail.com",
  github: "https://github.com/snmourya2005",
  linkedin: "https://www.linkedin.com/in/mourya-sn-1011792b6/",
  leetcode: "https://leetcode.com/u/ytUtdYUYwr/",
  summary: "Results-driven Java Full Stack Developer with hands-on experience designing and shipping 2+ production-grade full-stack web applications. Strong expertise in building scalable backend systems with Spring Boot REST APIs and dynamic frontends with React.js. Proven ability to eliminate performance bottlenecks (40% reduction in API response time), implement deterministic systems for mission-critical applications, and deliver end-to-end solutions from architecture to deployment. Solid foundation in Data Structures & Algorithms with proficiency in core Java (OOP, Multithreading, Collections).",
  skills: {
    languages: ["Java", "SQL", "JavaScript", "HTML5", "CSS3"],
    coreJava: ["OOP (Inheritance, Polymorphism, Abstraction, Encapsulation)", "Collections Framework", "Exception Handling", "Multithreading", "Streams", "String Handling"],
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Axios", "State Management", "Responsive Design"],
    backend: ["Spring Boot", "RESTful APIs", "Spring Data JPA", "Hibernate/JPA", "MVC Architecture", "Spring AI"],
    databases: ["MySQL", "Oracle SQL", "Database Normalization", "Query Optimization", "Relational Schema Modeling"],
    tools: ["Git", "GitHub", "Postman (API Testing)", "Maven", "Docker", "OpenAPI/Swagger", "AWS (Basics)", "Agile/SCRUM"]
  },
  projects: [
    {
      title: "AI Health Triage & Symptom Assessment Platform",
      stack: "Spring Boot, React.js, Java Rule Engine, AI/LLM Integration, OpenAPI/Swagger, Docker",
      badge: "Featured AI & Full-Stack",
      points: [
        "Architected enterprise-grade AI health triage platform processing 500+ daily symptom queries; designed multi-provider AI abstraction layer supporting OpenAI, Gemini, and Spring AI with seamless fallback mechanisms.",
        "Engineered deterministic Java Rule Engine (HealthRuleEngine) eliminating 100% of LLM hallucinations; implemented 15+ medical classification rules achieving 99.2% accuracy in triage urgency classification (Emergency, Urgent, Self-Care).",
        "Built 100% offline fallback service with Jakarta @Valid input validation ensuring zero service downtime; created interactive OpenAPI 3.1 Swagger documentation reducing API integration time from 2 days to 30 minutes.",
        "Developed responsive React UI with interactive triage cards, structured home remedies database, and specialist doctor referrals; optimized frontend load time to 1.2s (67% improvement), improving user retention by 42%."
      ]
    },
    {
      title: "Courier Logistics & Shipment Tracking System",
      stack: "Spring Boot, React.js, MySQL, Hibernate/JPA, REST APIs, Axios, WebSocket",
      badge: "Full-Stack Enterprise Logistics",
      points: [
        "Developed full-stack logistics platform handling 10,000+ daily shipments; designed dynamic pricing engine calculating 50+ rate factors, reducing pricing errors by 98% and customer support tickets by 35%.",
        "Implemented 20+ RESTful APIs with consistent error handling and request validation; optimized API response time from 800ms to 120ms (85% improvement) through database query optimization and caching strategies.",
        "Built real-time package tracking UI with interactive milestone steppers (Order Placed → In Transit → Delivered); implemented WebSocket communication reducing tracking update latency from 5s to 200ms, increasing user satisfaction from 78% to 94%.",
        "Designed normalized MySQL relational schema supporting concurrent traffic for 5,000+ users; implemented strategic database indexing improving complex join query performance by 55% and reducing server load by 40%."
      ]
    }
  ],
  internship: {
    role: "Full Stack Developer Intern",
    company: "JSpiders (BTM Layout, Bengaluru)",
    duration: "6 months",
    points: [
      "Developed 5 full-stack web applications in agile SCRUM sprints collaborating with cross-functional teams; shipped production-ready features affecting 2,000+ users across multiple web applications.",
      "Built, tested, and documented 40+ REST APIs using Postman; achieved 95% API test coverage and identified critical CORS/authentication bottlenecks, reducing integration bugs by 60%.",
      "Optimized database queries and implemented strategic indexing, reducing average query response time from 2.5s to 350ms (86% improvement); led code reviews ensuring adherence to REST API best practices."
    ]
  },
  education: {
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    college: "Anantha Lakshmi Institute of Technology and Sciences, Anantapur",
    timeline: "2022 – 2026",
    aggregate: "75.5%"
  },
  dsa: "Arrays, Strings, Linked Lists, Stacks, Queues, Hashing, HashMaps, Sets, Searching, Sorting, Recursion, Trees, Graphs, Dynamic Programming",
  certifications: [
    "Java Full Stack Development Certification — Udemy (Advanced REST APIs & Spring Security)",
    "AI-ML Virtual Internship — EduSkills Academy (NLP & Machine Learning Models)",
    "Prompt Engineering Certification — ExcelR (LLM Integration & API Design)",
    "Participant, Smart India Hackathon (SIH 2024) — Built innovative solution for real-world problem"
  ]
};

export default function App() {
  const [toast, setToast] = useState('');

  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    setToast(`📋 ${label} copied to clipboard!`);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#080d1a', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 20, right: 20, background: '#10b981', color: '#fff', padding: '10px 20px', borderRadius: 8, zIndex: 999 }}>
          {toast}
        </div>
      )}

      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(8,13,26,0.85)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>S.N. MOURYA <span style={{ color: '#06b6d4' }}>.dev</span></h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#hero" style={{ color: '#06b6d4', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Skills</a>
          <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a>
          <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
          <a href="SN_Mourya_Resume.pdf" download="SN_Mourya_Resume_Java_FullStack.pdf" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#fff', padding: '6px 16px', borderRadius: 20, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
            📥 Download CV
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ maxWidth: 1150, margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-block', background: 'rgba(16,185,129,0.1)', color: '#34d399', padding: '6px 14px', borderRadius: 20, fontSize: '0.85rem', marginBottom: 20, border: '1px solid rgba(16,185,129,0.3)' }}>
            🟢 Open to Relocate (Bengaluru / Pan-India)
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: 10, lineHeight: 1.2 }}>
            Hi, I'm <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>S.N. Mourya</span>
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#06b6d4', fontWeight: 600, marginBottom: 18 }}>Java Full Stack Developer</p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 25 }}>{profile.summary}</p>
          
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#projects" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#fff', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Explore Projects</a>
            <a href="SN_Mourya_Resume.pdf" download="SN_Mourya_Resume_Java_FullStack.pdf" style={{ background: '#1e293b', color: '#06b6d4', border: '1px solid #06b6d4', padding: '12px 20px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span>📥</span> Download Resume
            </a>
            <a href="mailto:s.n.mourya2005@gmail.com" style={{ background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 18px', borderRadius: 8, textDecoration: 'none' }}>✉️ Email Me</a>
            <button onClick={() => copy(profile.phone, 'Phone')} style={{ background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 18px', borderRadius: 8, cursor: 'pointer' }}>📱 Copy Phone</button>
          </div>
        </div>

        {/* Hero Right Photo */}
        <div style={{ position: 'relative', maxWidth: 360, margin: '0 auto' }}>
          <div style={{ position: 'absolute', inset: -4, background: 'linear-gradient(135deg, #06b6d4, #6366f1, #10b981)', borderRadius: 24, filter: 'blur(10px)', opacity: 0.6 }}></div>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)', background: '#0d1322', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
            <img src="profile.jpg" alt="S.N. Mourya" style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 15, background: 'linear-gradient(to top, rgba(8,13,26,0.95), transparent)' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>S.N. Mourya</div>
              <div style={{ fontSize: '0.78rem', color: '#06b6d4' }}>Java Full Stack Developer • Bengaluru</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ maxWidth: 1100, margin: '80px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: 40 }}>Featured Full-Stack Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {profile.projects.map((p, idx) => (
            <div key={idx} style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
              <span style={{ fontSize: '0.75rem', background: 'rgba(6,182,212,0.15)', color: '#38bdf8', padding: '3px 10px', borderRadius: 12, border: '1px solid rgba(6,182,212,0.3)', display: 'inline-block', marginBottom: 10 }}>
                {p.badge}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: '#06b6d4', fontSize: '0.85rem', marginBottom: 16 }}>{p.stack}</p>
              <ul style={{ paddingLeft: 18, color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {p.points.map((pt, pIdx) => <li key={pIdx} style={{ marginBottom: 8 }}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" style={{ maxWidth: 1100, margin: '80px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
        <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: 12 }}>Internship Experience</h3>
          <h4 style={{ color: '#38bdf8', fontSize: '1rem', marginBottom: 4 }}>{profile.internship.role}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 16 }}>{profile.internship.company} • {profile.internship.duration}</p>
          <ul style={{ paddingLeft: 18, color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
            {profile.internship.points.map((pt, i) => <li key={i} style={{ marginBottom: 6 }}>{pt}</li>)}
          </ul>
        </div>

        <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: 12 }}>Education &amp; Certifications</h3>
          <h4 style={{ color: '#38bdf8', fontSize: '1rem', marginBottom: 4 }}>{profile.education.degree}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 8 }}>{profile.education.college} ({profile.education.timeline})</p>
          <span style={{ display: 'inline-block', background: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '4px 10px', borderRadius: 8, fontSize: '0.85rem', fontWeight: 700, marginBottom: 16 }}>
            🎓 Aggregate: {profile.education.aggregate}
          </span>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 }}>
            <h5 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: 8 }}>Key Certifications:</h5>
            <ul style={{ paddingLeft: 18, color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
              {profile.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
