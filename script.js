// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
  
  // Auto-close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('navLinks');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  });
  
  // Scroll-to-top button logic
  const scrollBtn = document.getElementById("scrollToTopBtn");
  
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /*Typewriter Effect */
  const phrases = [
    "Computer Science Graduate",
    "Passionate Web Developer",
    "Problem Solver",
    "Tech Explorer",
    "Creative Coder"
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  const typewriter = document.getElementById("typewriter-text");
  
  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const visibleText = currentPhrase.slice(0, currentCharIndex + 1);
    typewriter.textContent = visibleText;
    currentCharIndex++;
  
    if (currentCharIndex < currentPhrase.length) {
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000); // pause before erasing
    }
  }
  
  function erase() {
    const currentPhrase = phrases[currentPhraseIndex];
    const visibleText = currentPhrase.slice(0, currentCharIndex - 1);
    typewriter.textContent = visibleText;
    currentCharIndex--;
  
    if (currentCharIndex > 0) {
      setTimeout(erase, 50);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }
  
  // Start typing after page loads
  window.addEventListener("DOMContentLoaded", () => {
    type();
  });
  