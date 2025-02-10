window.addEventListener('load', () => {
    const catImage = document.querySelector('.image-container img');
    
    // Apply scaling effect on page load
    catImage.style.transform = 'scale(2.8)';
    catImage.style.transition = 'transform 1s ease';

    // Revert to normal size after 1 second
    setTimeout(() => {
        catImage.style.transform = '';
    }, 1000);
});

const video = document.getElementById("myVideo");

// Play video when hovered
video.addEventListener("mouseenter", () => {
    video.play();
});

// Pause video when the mouse leaves
video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
});

const questionMark = document.querySelector(".question_mark");

questionMark.addEventListener("mouseenter", () => {
    questionMark.classList.add("hidden"); // Adds the 'hidden' class to make it disappear
});