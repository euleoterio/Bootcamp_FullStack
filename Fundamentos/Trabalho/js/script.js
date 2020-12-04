window.addEventListener('load', start);

var redRange = document.querySelector('#redRange');
var greenRange = document.querySelector('#greenRange');
var blueRange = document.querySelector('#blueRange');

var redValue = document.querySelector('#redValue');
var greenValue = document.querySelector('#greenValue');
var blueValue = document.querySelector('#blueValue');

var colorResult = document.querySelector('.square');

function start() {
  redRange.value = 0;
  greenRange.value = 0;
  blueRange.value = 0;

  readValueColor();
  changeColor();

  redRange.addEventListener('change', changeColor);
  greenRange.addEventListener('change', changeColor);
  blueRange.addEventListener('change', changeColor);
}

function readValueColor() {
  redValue.value = redRange.value;
  greenValue.value = greenRange.value;
  blueValue.value = blueRange.value;
}

function changeColor() {
  readValueColor();
  colorResult.style.backgroundColor = `rgb(${redValue.value}, ${greenValue.value}, ${blueValue.value})`;
}
