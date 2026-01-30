const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.right");

let index = 0;

function showImage() {
    lightboxImg.src = images[index].dataset.full || images[index].src;
    lightboxCaption.textContent = images[index].alt;
}

images.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        showImage();
        lightbox.style.display = "flex";
    });
});

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

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

document.addEventListener("keydown", e => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "ArrowRight") next.click();
    if (e.key === "ArrowLeft") prev.click();
    if (e.key === "Escape") lightbox.style.display = "none";
});
