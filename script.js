const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const images = document.querySelectorAll(".container img");
let currentIndex = 0;

// Set animation delay for fade-in cards
document.querySelectorAll('.container > div').forEach((el, i) => {
  el.style.setProperty('--i', i);
});

// Open lightbox with zoom-in animation
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.style.animation = "none"; // Reset animation
    lightboxImg.offsetHeight; // Force reflow
    lightboxImg.src = img.src;
    lightboxImg.style.animation = "zoomIn 0.3s ease forwards";
    currentIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Show previous image with smooth transition
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxImage();
});

// Show next image with smooth transition
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxImage();
});

// Close lightbox on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Helper: update image with zoom-in effect
function updateLightboxImage() {
  lightboxImg.style.animation = "none"; // Reset animation
  lightboxImg.offsetHeight; // Force reflow
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.style.animation = "zoomIn 0.3s ease forwards";
}
