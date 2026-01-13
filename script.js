document.addEventListener("DOMContentLoaded", () => {
    // Select all elements whose source or href might need adjusting
    const elements = document.querySelectorAll(
      "img, video, audio, source, track, object, embed, cur, link[rel*='icon'], link[rel='manifest']"
    );
  
    elements.forEach((el) => {
      // Decide which attribute to change (src or href)
      let attr = "src";
      if (el.tagName.toLowerCase() === "link") {
        attr = "href";
      }
  
      // Grab the original attribute value
      const originalValue = el.getAttribute(attr);
      // If there's a valid attribute, prepend "media/" to its value
      if (originalValue) {
        el.setAttribute(attr, "media/" + originalValue);
      }
    });
  });
  
  
  // --- Website 2 script functionality ---
  
  // If an element inside .image-container exists, scale it on page loadd
  window.addEventListener('load', () => {
    const catImage = document.querySelector('.hero-image-wrapper');
    if (catImage) {
      catImage.style.transform = 'scale(2.5)';
      catImage.style.transition = 'transform 1s ease';
      setTimeout(() => {
        catImage.style.transform = '';
      }, 1000);
    }
  });
  
  // If a video with id "myVideo" exists, add hover play/pause events
  /*      const myVideo = document.getElementById("myVideo");
  if (myVideo) {
    myVideo.addEventListener("mouseenter", () => {
      myVideo.play();
    });
    myVideo.addEventListener("mouseleave", () => {
      myVideo.pause();
      myVideo.currentTime = 0;
    });
    } */
  
  // If a question mark element exists, hide it on mouseenter
  const questionMark = document.querySelector(".question_mark");
  if (questionMark) {
    questionMark.addEventListener("mouseenter", () => {
      questionMark.classList.add("hidden");
    });
  }
  
  // Functions for showing and hiding the heart GIF
  function showHeart(event) {
    const heart = document.getElementById("heartGif");
    if (heart) {
      heart.style.display = "block";
    }
  }
  function hideHeart(event) {
    const heart = document.getElementById("heartGif");
    if (heart) {
      heart.style.display = "none";
    }
  }
  
  // Create a flying heart on click
  function createFlyingHeart(event) { 
    event.preventDefault();
    const imageContainer = event.target.closest('.akali3');
    if (!imageContainer) return;
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    const rect = imageContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;
    heart.style.position = "absolute";
    heart.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.style.opacity = "0";
      heart.style.transform = "translate(-50%, -100px) scale(1.5)";
    }, 50);
    setTimeout(() => {
      heart.remove();
    }, 800);
  }
  
  // Copy the contract address text to clipboard
  function copyToClipboard() {
    const text = document.getElementById("contract-address").innerText;
    navigator.clipboard.writeText(text);
  }
  
  // Show a flying check mark when the contract address is clicked
  function createFlyingGCheck(event) { 
    const imageContainer = event.currentTarget;
    const gcheck = document.createElement("span");
    gcheck.innerHTML = "✅";
    gcheck.classList.add("gcheck");
    const rect = imageContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width - (rect.width / 4 * 3);
    const centerY = rect.top + rect.height / 2;
    gcheck.style.left = centerX + "px";
    gcheck.style.top = centerY + "px";
    gcheck.style.position = "absolute";
    gcheck.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(gcheck);
    setTimeout(() => {
      gcheck.style.opacity = "0";
      gcheck.style.transform = "translate(-50%, -100px) scale(1.5)";
    }, 50);
    setTimeout(() => {
      gcheck.remove();
    }, 800);
  }
  
  // Smooth scroll to top function
  window.scrollToTop = function(event) {
    if (event) event.preventDefault();
    // Ensure both documentElement and body are targeted for different browsers
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
};


/* expanding pictures */

const images = document.querySelectorAll(".gallery img");
    
    // Create modal elements
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-img" src="" alt="Full Size Image" style="max-width: 90vw; max-height: 90vh; user-select: none; outline: none;">
        </div>
    `;
    document.body.appendChild(modal);
    
    const modalImg = modal.querySelector(".modal-img");
    const closeBtn = modal.querySelector(".close");
    
    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.style.filter = "none"; // Ensure no blue overlay
        });
    });
    
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Prevent blue highlight when clicking repeatedly
    modalImg.addEventListener("mousedown", function (e) {
        e.preventDefault();
    });

    /* nie kopiuj */
    document.querySelectorAll("img").forEach(img => {
      img.addEventListener("contextmenu", event => event.preventDefault());
  });

  /*timer */
  // Set your official launch date (adjust as needed)
var launchDate = new Date("2026-06-30T00:00:00").getTime();

// Update the countdown every 1 second
var timerInterval = setInterval(function() {
  var now = new Date().getTime();
  var distance = launchDate - now;

  // Calculate time units
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the timer element
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "LAUNCHED";
  }
}, 1000);
