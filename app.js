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

const changeHex = () => {
  let rgb = color();
  console.log(rgb);
  rgbArray = rgb.split(',');
  console.log(rgbArray);
  for (let i = 0; i < rgbArray.length; i++) {
    let hex = Number(rgbArray[i].toString(16));
    console.log(hex);
    console.log(rgbArray[i]);
  }
};

changeHex();
