const container = document.querySelector(".grid-container");

function createGrid(x) {
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            let newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            container.appendChild(newPixel);
        }
    }
}
createGrid(16);

const pixel = document.querySelectorAll(".pixel");

pixel.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
    });
});
