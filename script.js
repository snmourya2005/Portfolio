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
    "Spring Boot & REST API Specialist",
    "React.js Frontend Architect",
    "MySQL Database Designer",
    "B.Tech CSE (AI & ML)"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 40;
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
        <p class="project-desc">${project.shortDesc}</p>
        
        <ul class="project-bullets">
          ${bulletsHtml}
        </ul>

        <div class="project-tech-stack">
          ${techTags}
        </div>

        <div class="project-actions">
          <button class="btn btn-primary btn-sm" onclick="openInteractiveDemo('${project.interactiveType}')">
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
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #fff;">${edu.degree}</h3>
          <span class="badge" style="font-size: 0.8rem;">${edu.period}</span>
        </div>
        <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.25rem;">
          ${edu.institution}
        </p>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 0.75rem;">
          📍 ${edu.location}
        </p>
        <div style="display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 8px; font-size: 0.9rem;">
          🎓 ${edu.score}
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
  // Close modals when clicking overlay
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
    document.getElementById('chatbot-modal').classList.add('active');
  } else if (type === 'logistics-explorer' || type === 'api-explorer') {
    document.getElementById('api-modal').classList.add('active');
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
   8. AI Healthcare Assistant Chatbot Simulation
   -------------------------------------------------------------------------- */
const botResponses = {
  "hello": "Hello! I am the AI Health Triage Engine powered by Spring Boot, NLP Symptom Extractor & Java Rule Engine. Describe your symptoms (e.g., 'crushing chest pain', 'severe fever', 'mild cold & runny nose').",
  "hi": "Hi there! I assess symptoms deterministically to evaluate triage urgency (Emergency Red Flag, Urgent, Self-Care). What are you feeling?",
  "chest pain": "🚨 [EMERGENCY_RED_FLAG] Immediate medical attention required! Crushing chest pain / shortness of breath detected. Please call 112 / 911 or visit the nearest Emergency Room immediately. Referred Specialty: Cardiology.",
  "fever": "⚠️ [URGENT_MEDICAL_ATTENTION] For high or persistent fever with headache: Recommended OTC: Paracetamol (500mg) for fever reduction, maintain active hydration. Consult a General Physician within 24 hours.",
  "cold": "✅ [SELF_CARE_OTC] Mild cold & nasal congestion: Cetirizine 10mg once daily, saline nasal spray, steam inhalation, and adequate rest. Referred Specialty: ENT.",
  "headache": "⚠️ [URGENT / ROUTINE] Throbbing headache: Rest in a dark, quiet room, stay hydrated. If accompanied by sudden numbness or vision blur, seek immediate emergency evaluation.",
  "appointment": "🗓️ Specialist Booking: Direct referral available for General Physician, ENT, and Cardiology via POST /api/assessment/book-specialist.",
  "default": "✅ [HEALTH EVALUATION] Evaluated through Spring Boot Java Rule Engine. Please monitor symptoms closely, maintain hydration, and consult a certified healthcare practitioner if symptoms persist."
};

window.sendChatMessage = function() {
  const input = document.getElementById('chat-input');
  const messagesBox = document.getElementById('chat-messages');
  if (!input || !messagesBox) return;

  const userText = input.value.trim();
  if (!userText) return;

  // Add User Message
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble chat-user';
  userBubble.textContent = userText;
  messagesBox.appendChild(userBubble);
  input.value = '';

  // Scroll down
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Simulate Spring Boot REST API Processing delay
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble chat-bot';
  typingIndicator.innerHTML = '<em>Spring Boot Rule Engine &amp; AI Triage evaluating symptoms...</em>';
  messagesBox.appendChild(typingIndicator);
  messagesBox.scrollTop = messagesBox.scrollHeight;

  setTimeout(() => {
    messagesBox.removeChild(typingIndicator);
    
    // Find matching response
    const lower = userText.toLowerCase();
    let reply = botResponses.default;
    for (const key in botResponses) {
      if (lower.includes(key)) {
        reply = botResponses[key];
        break;
      }
    }

    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble chat-bot';
    botBubble.innerHTML = `<strong>🩺 Triage Engine:</strong> ${reply}`;
    messagesBox.appendChild(botBubble);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }, 500);
};

/* --------------------------------------------------------------------------
   9. E-Commerce REST API Explorer Mock
   -------------------------------------------------------------------------- */
const apiMockData = {
  "GET_PRODUCTS": {
    status: 200,
    statusText: "OK",
    latency: "34ms",
    endpoint: "GET /api/v1/products",
    response: [
      { id: 101, name: "Mechanical Gaming Keyboard", category: "Electronics", price: 2999.00, stock: 45 },
      { id: 102, name: "Ergonomic Desk Chair", category: "Furniture", price: 8499.00, stock: 12 },
      { id: 103, name: "Wireless Noise Cancelling Headphones", category: "Audio", price: 4999.00, stock: 28 }
    ]
  },
  "POST_CART": {
    status: 201,
    statusText: "Created",
    latency: "42ms",
    endpoint: "POST /api/v1/cart/items",
    payload: { productId: 101, quantity: 1, userId: "USR_9821" },
    response: {
      message: "Item successfully added to active cart",
      cartId: "CRT-884920",
      totalItems: 1,
      subtotal: 2999.00,
      currency: "INR"
    }
  },
  "POST_ORDER": {
    status: 200,
    statusText: "OK",
    latency: "68ms",
    endpoint: "POST /api/v1/orders/checkout",
    payload: { cartId: "CRT-884920", paymentMethod: "UPI_OR_CARD", shippingAddressId: "ADDR_01" },
    response: {
      orderId: "ORD-2026-9921",
      status: "CONFIRMED",
      orderDate: "2026-08-26T00:15:00Z",
      trackingNumber: "TRK_IN_8827192",
      paymentStatus: "SUCCESS",
      amountPaid: 2999.00
    }
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

  resBox.textContent = "// Executing Spring Boot Controller via Axios client...\n// Querying database schema...";

  setTimeout(() => {
    resBox.textContent = JSON.stringify(data.response, null, 2);
  }, 250);
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

    // Direct mailto fallback link triggering
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Mourya,\n\n${message}\n\nFrom: ${name} (${email})`);
    
    showToast("✅ Message prepared! Opening your mail client...");
    setTimeout(() => {
      window.location.href = `mailto:s.n.mourya2005@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    }, 1000);
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
  document.getElementById('resume-modal').classList.add('active');
};
