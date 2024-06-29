const container = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-grid");
let pixel;

function createGrid(x) {
    let pixelWidth,
        pixelHeight = 0.0;
    pixelWidth = container.clientWidth / x;
    pixelHeight = container.clientHeight / x;

    // Populate grid with x pixels
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            let newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            newPixel.style.width = pixelWidth + "px";
            newPixel.style.height = pixelHeight + "px";
            container.appendChild(newPixel);
        }
    }

    pixel = document.querySelectorAll(".pixel");

    // Add event listener to all pixels in grid
    pixel.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        });
    });
}

createGrid(setSize());

function clearGrid() {
    pixel.forEach((pixel) => {
        pixel.remove();
    });
    console.log("Grid has been cleared");
}

clearButton.addEventListener("click", () => {
    clearGrid();
    createGrid(setSize());
    console.log(`New grid has been created`);
});

function setSize(x) {
    do {
        x = prompt("Please enter a grid size: ");
    } while (x > 100 || x < 1);

    return x;
}
