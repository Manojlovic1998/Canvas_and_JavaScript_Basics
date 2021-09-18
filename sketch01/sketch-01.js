const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Position of the drawing axis
    const xPosition = width * 0.5;
    const yPosition = height * 0.5;
    // Dimension of the object
    const w = width * 0.3;
    const h = height * 0.3;

    // Transforming and Rotating
    context.save();
    context.translate(xPosition, yPosition);
    context.rotate(0.3);

    context.fillStyle = 'black';
    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    context.fill();
    context.restore();
  };
};

canvasSketch(sketch, settings);
