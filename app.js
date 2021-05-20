const r = document.querySelector('#r');
const g = document.querySelector('#g');
const b = document.querySelector('#b');
const colorBox = document.querySelector('.color__box');
const rgb = document.querySelector('.rgb');

const color = () => {
  const rgb = `${r.value},${g.value},${b.value}`;
  return rgb;
};

const changeColor = () => {
  let boxColor = color();
  colorBox.style.backgroundColor = `rgb(${boxColor})`;
  rgb.innerHTML = `rgb(${boxColor})`;
};

r.addEventListener('change', changeColor);
g.addEventListener('change', changeColor);
b.addEventListener('change', changeColor);
