let particles = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(20, 20, 30, 50); // efeito de rasto (fade)

  // cria partículas no rato
  particles.push(new Particle(mouseX, mouseY));

  // atualizar partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = 255;
    this.size = random(5, 15);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4;
  }

  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(random(100,255), random(100,255), 255, this.alpha);
    circle(this.x, this.y, this.size);
  }
}

function mousePressed() {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}