// Performance optimization: Use DOMContentLoaded instead of window.load for faster execution
document.addEventListener("DOMContentLoaded", function () {
  // Preloader functionality
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease-out";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }

  // Initialize scroll functionality
  if (typeof $.scrollIt !== "undefined") {
    $.scrollIt({
      topOffset: -50,
    });
  }

  // Typing animation functionality
  function typeText(message) {
    const textWrapper = document.querySelector(".ml11 .letters");
    if (!textWrapper) return;

    textWrapper.innerHTML = message;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    if (typeof anime !== "undefined") {
      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml11",
          opacity: 1,
          duration: 500,
          easing: "easeOutExpo",
        })
        .add({
          targets: ".ml11 .line",
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
        })
        .add({
          targets: ".ml11 .line",
          translateX: [
            0,
            document.querySelector(".ml11 .letters").getBoundingClientRect()
              .width + 10,
          ],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100,
        })
        .add({
          targets: ".ml11 .letter",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: "-=775",
          delay: (el, i) => 34 * (i + 1),
        })
        .add({
          targets: ".ml11",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
  }

  function loopTexts(texts) {
    if (!texts || texts.length === 0) return;

    for (let i = 0; i < texts.length; i++) {
      setTimeout(() => typeText(texts[i]), 4800 * i);
    }
    setTimeout(() => loopTexts(texts), 4800 * texts.length);
  }

  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse && typeof $.fn.collapse !== "undefined") {
        $(navbarCollapse).collapse("hide");
      }
    });
  });

  // Promo texts for typing animation
  const promoTexts = [
    "2 for 1 Pizza",
    "Happy Hour 2 for 1",
    "40k Burger",
    "30% Off Dinner Menu",
    "All Tacos 20k",
    "20K Sushi Saturday",
    "60K Vegan Buffet",
    "All You Can Eat Pancakes",
    "Free-Flow Cocktails",
    "55K Pasta Wednesday",
    "2 For 1 Beers",
    "60K Brunch",
    "Sunday Pizza Party",
    "2 for 1 Ramen",
    "50% Off Daily Baked",
  ];

  // Start typing animation
  loopTexts(promoTexts);

  // Add smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading optimization for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", function () {
        this.style.opacity = "1";
      });
      img.style.opacity = "0";
      img.style.transition = "opacity 0.3s ease-in";
    }
  });

  // Add intersection observer for lazy loading (if needed)
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll("img[data-src]");
    lazyImages.forEach((img) => imageObserver.observe(img));
  }
});

// Add error handling for external resources
window.addEventListener(
  "error",
  function (e) {
    console.warn("Resource failed to load:", e.target.src || e.target.href);
  },
  true
);
