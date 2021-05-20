const r = document.querySelector("#r");
const g = document.querySelector("#g");
const b = document.querySelector("#b");
console.log(r.value);

r.addEventListener("change", () => {
  console.log(r.value);
  console.log(g.value);
  console.log(b.value);
});
