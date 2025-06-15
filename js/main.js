document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navbar = document.querySelector(".navbar");

  mobileMenuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    mobileMenuBtn.innerHTML = navbar.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".navbar ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll animations
  const animateElements = document.querySelectorAll("[data-animate]");

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animated");
      }
    });
  }

  // Initial check
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top button
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Add styles for scroll to top button
  const scrollToTopStyles = document.createElement("style");
  scrollToTopStyles.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--secondary-color);
            color: var(--dark-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background-color: var(--primary-color);
            color: var(--white);
        }
    `;
  document.head.appendChild(scrollToTopStyles);

  // Live chat widget (simulated)
  setTimeout(function () {
    const liveChat = document.createElement("div");
    liveChat.className = "live-chat-widget";
    liveChat.innerHTML = `
            <div class="live-chat-header">
                <h4>Need Legal Help?</h4>
                <button class="close-chat"><i class="fas fa-times"></i></button>
            </div>
            <div class="live-chat-body">
                <p>Chat with one of our legal experts now</p>
                <button class="btn start-chat">Start Chat</button>
            </div>
        `;
    document.body.appendChild(liveChat);

    // Add styles for live chat widget
    const liveChatStyles = document.createElement("style");
    liveChatStyles.textContent = `
            .live-chat-widget {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 300px;
                background-color: var(--white);
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                transform: translateY(20px);
                opacity: 0;
                animation: chatWidgetEnter 0.5s ease forwards 0.5s;
                overflow: hidden;
            }
            
            @keyframes chatWidgetEnter {
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            .live-chat-header {
                background-color: var(--primary-color);
                color: var(--white);
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .live-chat-header h4 {
                margin: 0;
                font-size: 1.1rem;
            }
            
            .close-chat {
                background: none;
                border: none;
                color: var(--white);
                font-size: 1rem;
                cursor: pointer;
            }
            
            .live-chat-body {
                padding: 20px;
                text-align: center;
            }
            
            .live-chat-body p {
                margin-bottom: 20px;
                color: var(--text-color);
            }
            
            .start-chat {
                background-color: var(--secondary-color);
                color: var(--dark-color);
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .start-chat:hover {
                background-color: var(--primary-color);
                color: var(--white);
            }
        `;
    document.head.appendChild(liveChatStyles);

    // Close chat widget
    document
      .querySelector(".close-chat")
      .addEventListener("click", function () {
        liveChat.style.display = "none";
      });
  }, 10000); // Show after 10 seconds
});
