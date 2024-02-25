let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number /*= Math.abs(Math.random() * 360);*/

  
btn.onclick = function () {
  /*container.style.transform = "rotate("+361+"deg)";*/
  let number = Math.abs(Math.random() * 25);
  container.style.transform = "rotate("+ number + "deg)";
  
    
  
    /*document.getElementById("spin").disabled = true;*/
  /*prompt ablakba jelenjen meg a kiforgatott ajándék*/
  /*Kiiratás függvénnyel hívd meg a prompt ablakos függvényt!*/ 
  console.log(number);
};
if (number < 22.5) {
  nyeremeny = prompt("Nyereményed 10% kedvezmény egy termék árából!");
}
/*
const rotationValues = [
  { minDegree: 0, maxDegree: 22.5, value: 1 },
  { minDegree: 22.6, maxDegree: 67.5, value: 2 },
  { minDegree: 67.6, maxDegree: 112.5, value: 3 },
  { minDegree: 112.6, maxDegree: 157.5, value: 4 },
  { minDegree: 157.5, maxDegree: 202.5, value: 5 },
  { minDegree: 202.6, maxDegree: 247.5, value: 6 },
  { minDegree: 247.6, maxDegree: 292.5, value: 7 },
  { minDegree: 292.6, maxDegree: 337.5, value: 8 },
  { minDegree: 337.6, maxDegree: 360, value: 1 },
];
*/

/*(number = 338), 5 < i > 22, 5;*/