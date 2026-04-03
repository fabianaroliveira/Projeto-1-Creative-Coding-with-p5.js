let img;
let input;

let slider;
let grayBtn, invertBtn, posterBtn;

let mode = "gray";

function setup() {
  createCanvas(500, 500);

  // Upload
  input = createFileInput(handleFile);
  input.position(20, height + 20);

  // Slider (intensidade)
  slider = createSlider(1, 10, 3);
  slider.position(20, height + 50);

  // Botões
  grayBtn = createButton("Preto e Branco");
  grayBtn.position(20, height + 80);
  grayBtn.mousePressed(() => mode = "gray");

  invertBtn = createButton("Inverter");
  invertBtn.position(160, height + 80);
  invertBtn.mousePressed(() => mode = "invert");

  posterBtn = createButton("Posterize");
  posterBtn.position(240, height + 80);
  posterBtn.mousePressed(() => mode = "poster");
}

function draw() {
  background(30);

  if (img) {
    image(img, 0, 0, width, height);

    let val = slider.value();

    if (mode === "gray") {
      filter(GRAY);
    } 
    else if (mode === "invert") {
      filter(INVERT);
    } 
    else if (mode === "poster") {
      filter(POSTERIZE, val);
    }

    // Info UI
    noStroke();
    fill(255);
    textSize(14);
    text("Modo: " + mode, 20, 20);
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data);
  }
}