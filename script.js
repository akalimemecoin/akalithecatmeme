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
video.addEventListener("ended", () => {
    setTimeout(() => {
        video.play();
    }, 3000); // 10-second delay before replaying
});

// Start playing when the page loads
video.play();