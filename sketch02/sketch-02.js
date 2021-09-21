const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const settings = {
    dimensions: [1080, 1080],
    animate: true,
};

const sketch = ({context, width, height}) => {
    let agents = [];

    for (let i = 0; i < 40; i++) {
        let x = random.range(0, width);
        let y = random.range(0, height);

        agents.push(new Agent(x, y));
    }

    return ({context, width, height}) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];

            for (let j = i + 1; j < agents.length; j++) {
                const other = agents[j];

                const dist = agent.pos.getDistance(other.pos);

                if (dist > 200) {
                    continue;
                }
                // When distance is 0 we want line width to be 12 and when distance is 200 we want line to be 1
                context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);

                context.beginPath();
                context.moveTo(agent.pos.x, agent.pos.y);
                context.lineTo(other.pos.x, other.pos.y);
                context.stroke();
            }
        }

        agents.forEach(agent => {
            agent.bounce(width, height);
            agent.update();
            agent.draw(context);
        });
    };
};

canvasSketch(sketch, settings);


class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance(theOtherVector) {
        const dx = this.x - theOtherVector.x;
        const dy = this.y - theOtherVector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}


class Agent {
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.velocity = new Vector(random.range(-1, 1), random.range(-1, 1));
        this.radius = random.range(4, 12);
    }

    bounce(width, height) {
        if (this.pos.x <= 0 || this.pos.x >= width) {
            this.velocity.x *= -1;
        }

        if (this.pos.y <= 0 || this.pos.y >= height) {
            this.velocity.y *= -1;
        }
    }

    update() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    draw(context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);

        context.lineWidth = 4;

        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.restore();
    }
}