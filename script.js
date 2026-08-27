/* ==========================================================================
   S.N. MOURYA - PORTFOLIO INTERACTIVE LOGIC (JAVASCRIPT)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initNavigation();
  renderSkills();
  renderDsaTopics();
  renderProjects();
  renderEducationAndCertifications();
  initContactForm();
  initModals();
});

/* --------------------------------------------------------------------------
   1. Dynamic Typing Effect
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typedRoleElement = document.getElementById('typed-role');
  if (!typedRoleElement) return;

  const roles = [
    "Java Full Stack Developer",
    "Spring Boot & REST API Specialist (40+ APIs)",
    "React.js Frontend Architect",
    "Deterministic Rule Engines & Spring AI",
    "MySQL Database Query Optimizer (86% speedup)",
    "B.Tech CSE (AI & ML)"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 85;
  const deleteSpeed = 35;
  const delayBetweenRoles = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenRoles);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  type();
}

/* --------------------------------------------------------------------------
   2. Navigation & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Active section spy
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Render Skills & Filtering
   -------------------------------------------------------------------------- */
function renderSkills(filter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  const categories = portfolioData.skills;
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-category-card';

    const tagsHtml = cat.skills.map(s => `
      <span class="skill-tag">
        <span>⚡</span> ${s}
      </span>
    `).join('');

    card.innerHTML = `
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <h3 class="skill-cat-title">${cat.category}</h3>
      </div>
      <div class="skill-tags">
        ${tagsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   4. Render DSA Topics
   -------------------------------------------------------------------------- */
function renderDsaTopics() {
  const container = document.getElementById('dsa-container');
  if (!container) return;

  container.innerHTML = '';
  portfolioData.dsaTopics.forEach(topic => {
    const el = document.createElement('div');
    el.className = 'dsa-topic';
    el.innerHTML = `
      <span class="dsa-topic-icon">${topic.icon}</span>
      <span class="dsa-topic-name">${topic.name}</span>
    `;
    container.appendChild(el);
  });
}

/* --------------------------------------------------------------------------
   5. Render Projects
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = '';
  portfolioData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const techTags = project.tech.map(t => `<span class="badge badge-spring">${t}</span>`).join('');
    const bulletsHtml = project.bullets.map(b => `
      <li class="project-bullet">
        <span class="bullet-dot">▹</span>
        <span>${b}</span>
      </li>
    `).join('');

    const metricHighlight = project.id === 'healthcare-bot'
      ? `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.25rem;">
           <span class="badge badge-spring" style="font-size: 0.75rem;">🛡️ 99.2% Triage Accuracy</span>
           <span class="badge" style="font-size: 0.75rem;">⚡ 1.2s Load Time (67% Boost)</span>
         </div>`
      : `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.25rem;">
           <span class="badge badge-spring" style="font-size: 0.75rem;">📦 10,000+ Daily Shipments</span>
           <span class="badge" style="font-size: 0.75rem;">⚡ 120ms API Latency (85% Boost)</span>
         </div>`;

    card.innerHTML = `
      <div class="project-banner">
        <div class="banner-pattern"></div>
        <div class="project-badge-pill text-gradient-spring">🚀 ${project.badge}</div>
        <div style="font-size: 3.5rem; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));">
          ${project.id === 'healthcare-bot' ? '🩺' : '📦'}
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        ${metricHighlight}
        <p class="project-desc">${project.shortDesc}</p>
        
        <ul class="project-bullets">
          ${bulletsHtml}
        </ul>

        <div class="project-tech-stack">
          ${techTags}
        </div>

        <div class="project-actions">
          <button class="btn btn-primary btn-sm" onclick="openInteractiveDemo('${project.interactiveType}')" style="width: 100%; color: #fff;">
            <span>⚡</span> ${project.interactiveLabel}
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   6. Render Education & Certifications
   -------------------------------------------------------------------------- */
function renderEducationAndCertifications() {
  // Education
  const eduContainer = document.getElementById('education-container');
  if (eduContainer) {
    const edu = portfolioData.education[0];
    eduContainer.innerHTML = `
      <div class="card" style="border-left: 4px solid var(--accent-cyan);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #fff;">${edu.degree}</h3>
            <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem; margin-top: 0.25rem;">
              ${edu.institution}
            </p>
          </div>
          <span class="badge" style="font-size: 0.8rem;">${edu.period}</span>
        </div>
        
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 0.75rem;">
          📍 ${edu.location}
        </p>

        <div style="display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1rem;">
          🎓 ${edu.score}
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 0.85rem;">
          <span style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; display: block; margin-bottom: 0.4rem;">Core Computer Science Coursework:</span>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            <span class="badge" style="font-size: 0.75rem;">Data Structures &amp; Algorithms</span>
            <span class="badge" style="font-size: 0.75rem;">Object Oriented Programming</span>
            <span class="badge" style="font-size: 0.75rem;">DBMS &amp; SQL</span>
            <span class="badge" style="font-size: 0.75rem;">Operating Systems</span>
            <span class="badge" style="font-size: 0.75rem;">Computer Networks</span>
          </div>
        </div>
      </div>
    `;
  }

  // Certifications
  const certContainer = document.getElementById('certifications-container');
  if (certContainer) {
    certContainer.innerHTML = '';
    portfolioData.certifications.forEach(cert => {
      const item = document.createElement('div');
      item.className = 'cert-item';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <span style="font-size: 1.4rem;">${cert.icon}</span>
          <div class="cert-info">
            <h4>${cert.title}</h4>
            <span class="cert-issuer">${cert.issuer}</span>
          </div>
        </div>
        <span class="badge badge-spring" style="font-size: 0.75rem;">Verified</span>
      `;
      certContainer.appendChild(item);
    });
  }
}

/* --------------------------------------------------------------------------
   7. Interactive Modals & Features
   -------------------------------------------------------------------------- */
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.classList.remove('active');
  });
}

window.openInteractiveDemo = function(type) {
  if (type === 'chatbot') {
    const m = document.getElementById('chatbot-modal');
    if (m) m.classList.add('active');
  } else if (type === 'logistics-explorer' || type === 'api-explorer') {
    const m = document.getElementById('api-modal');
    if (m) m.classList.add('active');
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
};

window.switchHeroView = function(viewType) {
  const portraitWrapper = document.getElementById('hero-portrait-view');
  const codeCard = document.getElementById('hero-code-view');
  const portraitBtn = document.getElementById('tab-portrait-btn');
  const codeBtn = document.getElementById('tab-code-btn');

  if (viewType === 'portrait') {
    if (portraitWrapper) portraitWrapper.style.display = 'block';
    if (codeCard) codeCard.style.display = 'none';
    if (portraitBtn) {
      portraitBtn.style.background = 'rgba(6, 182, 212, 0.2)';
      portraitBtn.style.borderColor = 'var(--accent-cyan)';
      portraitBtn.style.color = '#fff';
    }
    if (codeBtn) {
      codeBtn.style.background = 'rgba(30, 41, 59, 0.6)';
      codeBtn.style.borderColor = 'var(--border-color)';
      codeBtn.style.color = 'var(--text-primary)';
    }
  } else if (viewType === 'code') {
    if (portraitWrapper) portraitWrapper.style.display = 'none';
    if (codeCard) codeCard.style.display = 'block';
    if (codeBtn) {
      codeBtn.style.background = 'rgba(6, 182, 212, 0.2)';
      codeBtn.style.borderColor = 'var(--accent-cyan)';
      codeBtn.style.color = '#fff';
    }
    if (portraitBtn) {
      portraitBtn.style.background = 'rgba(30, 41, 59, 0.6)';
      portraitBtn.style.borderColor = 'var(--border-color)';
      portraitBtn.style.color = 'var(--text-primary)';
    }
  }
};

/* --------------------------------------------------------------------------
   8. Live Demo 1: AI Health Triage Engine Simulation
   -------------------------------------------------------------------------- */
window.setTriageInput = function(text) {
  const input = document.getElementById('chat-input');
  if (input) {
    input.value = text;
    window.sendChatMessage();
  }
};

const triageRules = [
  {
    keywords: ["chest pain", "shortness of breath", "heart", "radiating", "unconscious", "stroke", "dizziness"],
    urgency: "EMERGENCY_RED_FLAG",
    urgencyScore: 98,
    cardClass: "triage-emergency",
    title: "🚨 EMERGENCY RED FLAG — Immediate Hospitalization",
    specialist: "Cardiologist / Emergency Trauma Center",
    otcRemedies: "Do NOT delay. Call 112 / 911 or visit the nearest emergency room. Keep patient in seated resting position.",
    jsonPayload: {
      triageLevel: "EMERGENCY_RED_FLAG",
      ruleMatched: "RULE_CARDIO_VASCULAR_RED_FLAG",
      confidence: "99.2%",
      requiresImmediateEscalation: true,
      emergencyContactTriggered: true,
      clinicianSpecialist: "Cardiology"
    }
  },
  {
    keywords: ["fever", "headache", "chills", "severe", "temperature", "vomiting", "stomach pain"],
    urgency: "URGENT_MEDICAL_ATTENTION",
    urgencyScore: 75,
    cardClass: "triage-urgent",
    title: "⚠️ URGENT MEDICAL ATTENTION — Consult within 24 Hours",
    specialist: "General Physician / Internal Medicine",
    otcRemedies: "Paracetamol (500mg) for fever reduction every 6h as needed, oral rehydration salts (ORS), and temperature monitoring.",
    jsonPayload: {
      triageLevel: "URGENT_MEDICAL_ATTENTION",
      ruleMatched: "RULE_HIGH_FEVER_PERSISTENT",
      confidence: "98.5%",
      requiresImmediateEscalation: false,
      recommendedConsultationWindow: "Within 24h",
      clinicianSpecialist: "General Medicine"
    }
  },
  {
    keywords: ["cold", "cough", "sneezing", "runny nose", "sore throat", "nasal", "mild"],
    urgency: "SELF_CARE_OTC",
    urgencyScore: 25,
    cardClass: "triage-selfcare",
    title: "✅ SELF-CARE & OTC REMEDIES — Low Urgency",
    specialist: "ENT Specialist (Optional if symptoms persist > 7 days)",
    otcRemedies: "Cetirizine (10mg once daily), warm saline gargle 3x/day, steam inhalation, and adequate hydration.",
    jsonPayload: {
      triageLevel: "SELF_CARE_OTC",
      ruleMatched: "RULE_UPPER_RESPIRATORY_COLD",
      confidence: "99.0%",
      requiresImmediateEscalation: false,
      clinicianSpecialist: "ENT / Home Care"
    }
  }
];

window.sendChatMessage = function() {
  const input = document.getElementById('chat-input');
  const messagesBox = document.getElementById('chat-messages');
  const resultBox = document.getElementById('triage-result-box');
  if (!input || !messagesBox) return;

  const userText = input.value.trim();
  if (!userText) return;

  // Add User Message
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble chat-user';
  userBubble.textContent = userText;
  messagesBox.appendChild(userBubble);
  input.value = '';
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Simulate Spring Boot Deterministic Rule Engine
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble chat-bot';
  typingIndicator.innerHTML = '<em>⚡ Spring Boot HealthRuleEngine &amp; Multi-provider AI evaluating symptoms...</em>';
  messagesBox.appendChild(typingIndicator);
  messagesBox.scrollTop = messagesBox.scrollHeight;

  setTimeout(() => {
    if (messagesBox.contains(typingIndicator)) {
      messagesBox.removeChild(typingIndicator);
    }
    
    // Evaluate rule
    const lower = userText.toLowerCase();
    let matchedRule = triageRules[2]; // default self care
    for (const rule of triageRules) {
      if (rule.keywords.some(k => lower.includes(k))) {
        matchedRule = rule;
        break;
      }
    }

    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble chat-bot';
    botBubble.innerHTML = `<strong>🩺 Deterministic Engine:</strong> Evaluated as <strong>${matchedRule.urgency}</strong> (Confidence: 99.2%). Recommended Action: ${matchedRule.title}`;
    messagesBox.appendChild(botBubble);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // Render result card below
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div class="triage-result-card ${matchedRule.cardClass}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h4 style="color: #fff; font-size: 0.95rem; font-weight: 700;">${matchedRule.title}</h4>
            <span class="badge badge-spring" style="font-size: 0.75rem;">Score: ${matchedRule.urgencyScore}/100</span>
          </div>
          <p style="font-size: 0.83rem; color: #cbd5e1; margin-bottom: 0.5rem;">
            <strong>👨‍⚕️ Referred Specialty:</strong> ${matchedRule.specialist}
          </p>
          <p style="font-size: 0.83rem; color: #cbd5e1; margin-bottom: 0.5rem;">
            <strong>💊 Structured Remedies &amp; Safety:</strong> ${matchedRule.otcRemedies}
          </p>
          <div style="font-size: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">
            OpenAPI 3.1 Swagger Output: <code>${JSON.stringify(matchedRule.jsonPayload)}</code>
          </div>
        </div>
      `;
    }
  }, 450);
};

/* --------------------------------------------------------------------------
   9. Live Demo 2: Courier Logistics & Real-Time Tracking Explorer
   -------------------------------------------------------------------------- */
window.switchLogisticsTab = function(tabName) {
  const views = {
    'tracker': document.getElementById('logistics-view-tracker'),
    'calc': document.getElementById('logistics-view-calc'),
    'api': document.getElementById('logistics-view-api')
  };

  const tabs = {
    'tracker': document.getElementById('logistics-tab-tracker'),
    'calc': document.getElementById('logistics-tab-calc'),
    'api': document.getElementById('logistics-tab-api')
  };

  for (const key in views) {
    if (views[key]) views[key].style.display = (key === tabName) ? 'block' : 'none';
    if (tabs[key]) tabs[key].classList.toggle('active', key === tabName);
  }
};

window.queryTrackingId = function() {
  const input = document.getElementById('tracking-input-id');
  const query = input ? input.value.trim() : 'TRK-BLR-88219';

  showToast(`⚡ WebSocket Synced: Package ${query} refreshed in 120ms`);
  
  const idDisplay = document.getElementById('track-detail-id');
  if (idDisplay) idDisplay.textContent = query || 'TRK-BLR-88219';
};

window.calculateShippingCost = function() {
  const weightInput = document.getElementById('calc-weight');
  const tierInput = document.getElementById('calc-tier');
  const fragileInput = document.getElementById('calc-fragile');
  const fareResult = document.getElementById('calc-result-fare');
  const slaResult = document.getElementById('calc-result-sla');

  if (!weightInput || !tierInput) return;

  const weight = parseFloat(weightInput.value) || 1;
  const tier = tierInput.value;
  const isFragile = fragileInput ? fragileInput.checked : false;

  let baseRate = 150;
  let perKgRate = 45;
  let multiplier = 1.0;
  let slaText = "3-4 Business Days";

  if (tier === 'EXPRESS') {
    multiplier = 1.5;
    slaText = "1-2 Business Days";
  } else if (tier === 'OVERNIGHT') {
    multiplier = 2.2;
    slaText = "Same Day (Priority Flight)";
  }

  let total = (baseRate + (weight * perKgRate)) * multiplier;
  if (isFragile) total += 100;

  if (fareResult) fareResult.textContent = `₹${total.toFixed(2)}`;
  if (slaResult) slaResult.textContent = slaText;
};

const apiMockData = {
  "TRACK_SHIPMENT": {
    status: 200,
    statusText: "OK",
    latency: "120ms (85% optimized)",
    endpoint: "GET /sc/track/TRK-BLR-88219",
    response: {
      trackingNumber: "TRK-BLR-88219",
      sender: "S.N. Mourya (Bengaluru)",
      recipient: "Tech Hub (Hyderabad)",
      currentStatus: "OUT_FOR_DELIVERY",
      milestones: [
        { step: 1, name: "Order Placed", date: "2026-08-25 09:30", completed: true },
        { step: 2, name: "In Transit (Bengaluru Sorting Hub)", date: "2026-08-25 15:45", completed: true },
        { step: 3, name: "Out for Delivery", date: "2026-08-26 08:30", completed: true },
        { step: 4, name: "Delivered", date: "Estimated 14:00", completed: false }
      ],
      assignedAgent: { agentId: "AGT-101", name: "Rahul Verma", rating: 9.4, vehicle: "KA-01-MJ-4412" },
      packageWeightKg: 5.0,
      packagingTier: "SafePacking (+Fragile Shield)",
      paymentStatus: "COMPLETED"
    }
  },
  "CALCULATE_RATE": {
    status: 200,
    statusText: "OK",
    latency: "95ms",
    endpoint: "POST /sc/calculate-rate",
    payload: { weightKg: 5.0, tier: "EXPRESS", isFragile: true, destinationPin: 560068 },
    response: {
      baseFare: 150.00,
      weightFee: 225.00,
      fragileCareSurcharge: 100.00,
      totalShippingCost: 475.00,
      estimatedDeliveryDays: 2,
      currency: "INR"
    }
  },
  "GET_FLEET": {
    status: 200,
    statusText: "OK",
    latency: "110ms",
    endpoint: "GET /dac/rating/8",
    response: [
      { agentId: "AGT-101", name: "Rahul Verma", phone: "+91 9876543210", vehicle: "KA-01-MJ-4412", rating: 9.4, isAvailable: true, activeHub: "Bengaluru Central" },
      { agentId: "AGT-104", name: "Amit Kumar", phone: "+91 9876501234", vehicle: "KA-04-TR-9981", rating: 8.8, isAvailable: true, activeHub: "Electronic City" }
    ]
  }
};

window.triggerApiRequest = function(apiType) {
  const resBox = document.getElementById('api-response-code');
  const statusBadge = document.getElementById('api-status-badge');
  const latencyBadge = document.getElementById('api-latency-badge');
  const endpointTitle = document.getElementById('api-current-endpoint');

  if (!resBox) return;

  const data = apiMockData[apiType];
  if (!data) return;

  if (endpointTitle) endpointTitle.textContent = data.endpoint;
  if (statusBadge) {
    statusBadge.textContent = `${data.status} ${data.statusText}`;
    statusBadge.className = data.status === 200 || data.status === 201 ? 'http-method http-post' : 'http-method http-delete';
  }
  if (latencyBadge) latencyBadge.textContent = `Latency: ${data.latency}`;

  resBox.textContent = "// Querying Spring Boot Logistics Controller (JPA + MySQL)...\n// Resolving waypoint routing and tracking history in 120ms...";

  setTimeout(() => {
    resBox.textContent = JSON.stringify(data.response, null, 2);
  }, 200);
};

/* --------------------------------------------------------------------------
   10. Contact Form & Copy Helpers
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
      showToast("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`Job Opportunity / Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Mourya,\n\n${message}\n\nFrom: ${name} (${email})`);
    
    showToast("✅ Message prepared! Opening your mail client...");
    setTimeout(() => {
      window.location.href = `mailto:s.n.mourya2005@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 800);
  });
}

window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 ${label} copied to clipboard!`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
};

function showToast(msg) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

window.openResumeModal = function() {
  const m = document.getElementById('resume-modal');
  if (m) m.classList.add('active');
};
