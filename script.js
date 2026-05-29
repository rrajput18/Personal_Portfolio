/* ==========================================================================
   RAKSHIT RAJPUT PORTFOLIO JS - FIGMA DESIGN STACKED LAYOUT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Theme Management (Locked to Dark Mode)
  // ==========================================
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('data-theme', 'dark');

  // ==========================================
  // 2. Mobile Menu Navigation Dropdown
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileNavMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close mobile dropdown when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavMenu.classList.contains('active')) {
        mobileNavMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fa-solid fa-bars';
      }
    });
  });

  // ==========================================
  // 3. Typing Effect in Hero Section
  // ==========================================
  const typingSpan = document.querySelector('.typing-text');
  const phrases = [
    "BTech IT Student",
    "Software & Web Developer",
    "Data Analytics Enthusiast",
    "Java & Python Programmer"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingSpan.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingSpan.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typingSpan) {
    typeEffect();
  }

  // ==========================================
  // 4. Scroll Spy Navigation Highlight
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu .mobile-nav-link');
  
  function scrollSpy() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Clear active on desktop
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        // Clear active on mobile
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', scrollSpy);

  // ==========================================
  // 5. Scroll Reveal Animations (fade-in)
  // ==========================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // 6. Contact Form Enquiry Mail Handler (AJAX)
  // ==========================================
  const enquiryForm = document.getElementById('enquiry-form');
  const submitBtn = document.getElementById('submit-btn');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending Message... <i class="fa-solid fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      fetch("https://formsubmit.co/ajax/rakshitrajput006@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `Portfolio Enquiry: ${subject}`,
          message: message,
          _captcha: "false"
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("FormSubmit response failed.");
      })
      .then(data => {
        submitBtn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
        submitBtn.style.backgroundColor = '#10b981'; // Success Green
        submitBtn.style.borderColor = '#10b981';
        submitBtn.style.color = '#ffffff'; // High-contrast white text
        enquiryForm.reset();
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        submitBtn.innerHTML = 'Error! Try Again <i class="fa-solid fa-triangle-exclamation"></i>';
        submitBtn.style.backgroundColor = '#ef4444'; // Red
        submitBtn.style.borderColor = '#ef4444';
        submitBtn.style.color = '#ffffff'; // High-contrast white text
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = ''; // Reset color
        }, 3000);
      });
    });
  }

  // ==========================================
  // 7. Background Interactive Cursor Glow
  // ==========================================
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'bg-cursor-glow';
  const gridContainer = document.querySelector('.bg-grid-container');
  if (gridContainer) {
    gridContainer.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMouseActive = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMouseActive) {
        isMouseActive = true;
        cursorGlow.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
      isMouseActive = false;
    });

    // Smooth trailing animation using linear interpolation (lerp)
    function animateCursorGlow() {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      
      currentX += dx * 0.08;
      currentY += dy * 0.08;
      
      cursorGlow.style.transform = `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0)`;
      
      requestAnimationFrame(animateCursorGlow);
    }
    animateCursorGlow();
  }

});
