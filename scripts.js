// Select gallery images and lightbox elements
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");
lightboxImg.addEventListener("click", (e) => e.stopPropagation());
document.getElementById('lightbox-caption').addEventListener("click", (e) => e.stopPropagation());
prev.addEventListener("click", (e) => e.stopPropagation());
next.addEventListener("click", (e) => e.stopPropagation());


let index = 0;

// Show image in lightbox
function showImage() {
    lightboxImg.classList.remove('loaded');
    lightboxImg.src = images[index].dataset.full || images[index].src;
    lightboxCaption.textContent = images[index].alt;
    lightboxImg.onload = () => {
        lightboxImg.classList.add('loaded');
    };
}

// Open lightbox on thumbnail click
images.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Click on gallery image → open lightbox
images.forEach((img, i) => {
img.addEventListener("click", () => {
    index = i;
    showImage();
    lightbox.style.display = "flex";
});
});

// Arrow navigation
prev.addEventListener("click", e => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length;
    showImage();
});

next.addEventListener("click", e => {
    e.stopPropagation();
    index = (index + 1) % images.length;
    showImage();
});

// Navigate to previous image
prev.addEventListener("click", (e) => {
e.stopPropagation();
index = (index - 1 + images.length) % images.length;
showImage();
});

// Navigate to next image
next.addEventListener("click", (e) => {
e.stopPropagation();
index = (index + 1) % images.length;
showImage();
});

// Stop lightbox closing when clicking image or caption
lightboxImg.addEventListener("click", e => e.stopPropagation());
lightboxCaption.addEventListener("click", e => e.stopPropagation());
prev.addEventListener("click", e => e.stopPropagation());
next.addEventListener("click", e => e.stopPropagation());

// Close lightbox when clicking outside image
lightbox.addEventListener("click", () => {
lightbox.style.display = "none";
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
if (lightbox.style.display !== "flex") return;

if (e.key === "ArrowRight") next.click();
if (e.key === "ArrowLeft") prev.click();
if (e.key === "Escape") lightbox.style.display = "none";
});
