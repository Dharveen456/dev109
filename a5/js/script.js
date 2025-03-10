document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const timerElement = document.getElementById("timer");
    let currentIndex = 0;
    const intervalTime = 4000;
    let slideInterval;
    let timeLeft = intervalTime / 1000;
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, intervalTime);
        startCountdown();
    }
    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }
    document.getElementById("next").addEventListener("click", function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    });

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetTimer();
    });
    function resetTimer() {
        clearInterval(slideInterval);
        clearInterval(countdownInterval);
        timeLeft = intervalTime / 1000;
        updateTimer();
        startSlideshow();
    }

    function updateTimer() {
        timerElement.textContent = timeLeft;
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
