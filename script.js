var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.querySelector('button');

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', randomColors);

randomColors();  // On script load, generate two random colors

function setGradient() {
  body.style.background =
    'linear-gradient(to right, '
    + color1.value
    + ', '
    + color2.value
    + ')';

  css.textContent = body.style.background + ';';
}

function randomColors() {
  color1.value = newColor();
  do {                           // Ensures duplicates aren't possible
    color2.value = newColor();
  } while (color1.value === color2.value);
  setGradient();
}

function newColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
