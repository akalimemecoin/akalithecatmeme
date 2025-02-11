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

//video kotka onhover

// Play video when hovered
video.addEventListener("mouseenter", () => {
    video.play();
});

// Pause video when the mouse leaves
video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
});


//znikający pytajnik

const questionMark = document.querySelector(".question_mark");

questionMark.addEventListener("mouseenter", () => {
    questionMark.classList.add("hidden"); // Adds the 'hidden' class to make it disappear
});

//powrot na górę strony 
function scrollToTop(event) {
    event.preventDefault(); // Prevents the default jump behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

//serce

function showHeart() {
    let heart = document.getElementById("heartGif");
    heart.style.display = "block"; // Show the GIF
}

function hideHeart() {
    document.getElementById("heartGif").style.display = "none"; // Hide the GIF
}
