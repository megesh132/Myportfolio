// Redirect to resume when 'Hire Me' button is clicked
document.querySelector('.hire-me-btn').addEventListener('click', function () {
    window.location.href = 'https://example.com/your-resume.pdf';
});
// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.image-container').addEventListener('touchstart', function () {
    this.classList.add('glow');
});

document.querySelector('.image-container').addEventListener('touchend', function () {
    this.classList.remove('glow');
});
// JavaScript for automatic sliding carousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].offsetWidth + 20; // Item width plus margin

function slideCarousel() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
        carouselContainer.style.transform = `translateX(0)`;
    } else {
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}

setInterval(slideCarousel, 2000); // Slide every 2 seconds
// Get the modal
var modal = document.getElementById("popupModal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Show the modal when the page loads
window.onload = function() {
  modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
