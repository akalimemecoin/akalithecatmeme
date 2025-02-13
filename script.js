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

//serce GIF

function showHeart() {
    let heart = document.getElementById("heartGif");
    heart.style.display = "block"; // Show the GIF
}

function hideHeart() {
    document.getElementById("heartGif").style.display = "none"; // Hide the GIF
}

//serce on click
window.createFlyingHeart = function(event) { 
    const imageContainer = event.currentTarget;
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Get image position
    const rect = imageContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Set initial position
    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";
    heart.style.position = "absolute";
    heart.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(heart);

    // Animate the heart
    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.transform = "translate(-50%, -100px) scale(1.5)";
    }, 50);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 800);
};

//CONTACT ADDRESS COPYABLE 

function copyToClipboard() {
    const text = document.getElementById("contract-address").innerText;
    navigator.clipboard.writeText(text)
}

//COPIED ADDY CONFIRMATION

window.createFlyingGCheck = function(event) { 
    const imageContainer = event.currentTarget;
    const gcheck = document.createElement("span");
    gcheck.innerHTML = "✅";
    gcheck.classList.add("gcheck");

    // Get image position
    const rect = imageContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width -rect.width/4*3;
    const centerY = rect.top + rect.height / 2;

    // Set initial position
    gcheck.style.left = centerX + "px";
    gcheck.style.top = centerY + "px";
    gcheck.style.position = "absolute";
    gcheck.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(gcheck);

    // Animate the heart
    setTimeout(() => {
        gcheck.style.opacity = "0";
        gcheck.style.transform = "translate(-50%, -100px) scale(1.5)";
    }, 50);

    // Remove heart after animation
    setTimeout(() => {
        gcheck.remove();
    }, 800);
};