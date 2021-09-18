let canvas = document.getElementById("sketch");
let canvasContext = canvas.getContext("2d");


canvasContext.lineWidth = 4;
canvasContext.beginPath();
canvasContext.rect(100, 100, 400, 400);
canvasContext.stroke();



canvasContext.beginPath();
canvasContext.arc(300, 300, 100, 0, 2*Math.PI);
canvasContext.stroke();