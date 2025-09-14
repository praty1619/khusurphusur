// Typewriter Effect
const text = "A Workshop Designed for Your Breath & Voice";
let i = 0;
const speed = 100; // Speed of typing

function typeWriter() {
    if (i < text.length) {
        document.getElementById("tagline").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    // Clear the content before starting the typewriter effect
    document.getElementById("tagline").textContent = "";
    typeWriter();
};

// Detect when the user scrolls to the second section and trigger the animation
function checkScroll() {
    const detailsSection = document.getElementById('details-section');
    const sectionPosition = detailsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.4;

    // If section is in view, add the 'active' class, otherwise remove it
    if (sectionPosition < screenPosition) {
        detailsSection.classList.add('active');
    } else {
        detailsSection.classList.remove('active'); // Remove the effect when scrolling away
    }
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle active class to show/hide nav links
});

// Add the scroll event listener
window.addEventListener('scroll', checkScroll);


document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("show-more-btn");
    const moreGallery = document.getElementById("fullGallery");
    const closeGalleryBtn = document.querySelector(".close");

    // Show hidden gallery
    showMoreBtn.addEventListener("click", () => {
        moreGallery.style.display = "block";
        document.body.style.overflow = "hidden"; // stop background scroll
    });

    // Close hidden gallery
    closeGalleryBtn.addEventListener("click", () => {
        moreGallery.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Lightbox (apply to ALL images)
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector("#lightbox .close");

    document.querySelectorAll(".grid-item img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const videoCards = document.querySelectorAll(".video-card");
    const lightbox = document.getElementById("videoLightbox");
    const lightboxVideo = document.getElementById("lightboxVideo");
    const videoSource = lightboxVideo.querySelector("source");
    const closeBtn = document.querySelector("#videoLightbox .close");

    // Open lightbox with video
    videoCards.forEach(card => {
        card.addEventListener("click", () => {
            const videoSrc = card.getAttribute("data-video");

            // update <source> inside <video>
            videoSource.src = videoSrc;
            lightboxVideo.load();      // reload the video
            lightboxVideo.play();      // start playback
            lightbox.style.display = "flex";
        });
    });

    // Close with button
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxVideo.pause();
        videoSource.src = "";      
        lightboxVideo.load();
    });

    // Close by clicking outside video
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightboxVideo.pause();
            videoSource.src = "";
            lightboxVideo.load();
        }
    });
});









