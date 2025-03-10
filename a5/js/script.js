document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const intervalTime = 4000;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.getElementById("next").addEventListener("click", function () {
        nextSlide();
        resetTimer();
    });

    document.getElementById("prev").addEventListener("click", function () {
        prevSlide();
        resetTimer();
    });

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    showSlide(currentIndex);
    startSlideshow();
});
