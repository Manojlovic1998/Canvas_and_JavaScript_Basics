let canvas = document.getElementById("sketch");
let canvasContext = canvas.getContext("2d");


canvasContext.lineWidth = 4;
canvasContext.beginPath();
canvasContext.rect(100, 100, 400, 400);
// canvasContext.stroke();


canvasContext.beginPath();
canvasContext.arc(300, 300, 100, 0, 2 * Math.PI);
// canvasContext.stroke();


// Draw using loop
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let gap = 20;
        let width = 60;
        let height = 60;
        let xPosition = 100 + (width + gap) * i;
        let yPosition = 100 + (height + gap) * j;

        canvasContext.beginPath();
        canvasContext.rect(xPosition, yPosition, width, height);
        canvasContext.stroke();
        if (i > 0 && i < 4) {
            canvasContext.beginPath();
            canvasContext.rect(xPosition + 8, yPosition + 8, width - 16, height - 16);
            canvasContext.stroke();
        }
    }
}