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



