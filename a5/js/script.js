document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const timerElement = document.getElementById("timer");
    const alt = document.getElementById("alt");
    let currentIndex = 0;
    const intervalTime = 4000;
    let slideInterval;
    let countdownInterval;
    let timeLeft = intervalTime / 1000;

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, intervalTime);
        startCountdown();
    }

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";

        // Fix for alt text display
        if (alt) {
            alt.textContent = slides[index].getAttribute("alt") || "No description available";
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    }

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);

    function resetTimer() {
        clearInterval(slideInterval);
        clearInterval(countdownInterval);
        timeLeft = intervalTime / 1000;
        updateTimer();
        startSlideshow();
    }

    function updateTimer() {
        if (timerElement) {
            timerElement.textContent = timeLeft;
        }
    }

    function startCountdown() {
        updateTimer();
        countdownInterval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft <= 0) clearInterval(countdownInterval);
        }, 1000);
    }

    showSlide(currentIndex);
    startSlideshow();
});
