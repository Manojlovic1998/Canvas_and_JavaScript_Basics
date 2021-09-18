const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};


const degToRad = (degrees) =>{
  return degrees / 180 * Math.PI;
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Position of the drawing axis
    const xPosition = width * 0.5;
    const yPosition = height * 0.5;
    // Dimension of the object
    const w = width * 0.01;
    const h = height * 0.1;

    const objNum = 12;
    const radius = width * 0.3;
    let x, y;

    for (let i = 0; i <= objNum; i++) {
      // Trigonometry
      const slice = degToRad(360 / objNum);
      const angle = slice * i;

      x = xPosition + radius * Math.sin(angle);
      y = yPosition + radius * Math.cos(angle);
      // Transforming and Rotating
      context.save();
      context.translate(x, y);
      context.rotate(-angle);

      context.fillStyle = 'black';
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
