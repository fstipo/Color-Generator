const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');
const colorBox = document.querySelector('.color__box');
const rgb = document.querySelector('.rgb');
const hex = document.querySelector('.hex');

const color = () => {
  const rgb = `${r.value},${g.value},${b.value}`;
  return rgb;
};

const changeColor = () => {
  let boxColor = color();
  colorBox.style.backgroundColor = `rgb(${boxColor})`;
  rgb.innerHTML = `rgb(${boxColor})`;
  let hexR = Number(r.value);
  let hexG = Number(g.value);
  let hexB = Number(b.value);
  const hexColor = `#${hexR.toString(16)}${hexG.toString(16)}${hexB.toString(
    16
  )}`;
  hex.innerHTML = hexColor;
};

r.addEventListener('change', changeColor);
g.addEventListener('change', changeColor);
b.addEventListener('change', changeColor);
