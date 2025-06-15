document.addEventListener("DOMContentLoaded", function () {
  // Hero Carousel
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const indicatorsContainer = carousel.querySelector(".carousel-indicators");

  let currentIndex = 0;
  let intervalId;
  const slideInterval = 5000; // 5 seconds

  // Create indicators
  carouselItems.forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = indicatorsContainer.querySelectorAll("span");

  // Initialize first slide
  carouselItems[0].classList.add("active");
  indicators[0].classList.add("active");

  // Start auto slide
  startAutoSlide();

  // Go to specific slide
  function goToSlide(index) {
    // Reset all items and indicators
    carouselItems.forEach((item) => item.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Set new active item and indicator
    currentIndex = index;
    carouselItems[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");

    // Reset auto slide timer
    resetAutoSlide();
  }

  // Next slide
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    goToSlide(nextIndex);
  }

  // Previous slide
  function prevSlide() {
    const prevIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    goToSlide(prevIndex);
  }

  // Start auto slide
  function startAutoSlide() {
    intervalId = setInterval(nextSlide, slideInterval);
  }

  // Reset auto slide timer
  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
  });

  carousel.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(intervalId);
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoSlide();
    },
    { passive: true }
  );

  function handleSwipe() {
    const difference = touchStartX - touchEndX;
    if (difference > 50) {
      // Swipe left - next slide
      nextSlide();
    } else if (difference < -50) {
      // Swipe right - previous slide
      prevSlide();
    }
  }
});
