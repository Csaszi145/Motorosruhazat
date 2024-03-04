let container = document.querySelector(".container");
let start = document.getElementById("spin");
start.addEventListener("click", sors);
let number = Math.abs(Math.random() * 720);
let num = number;

  
function sors() {
  container.style.transform = "rotate(" + number + "deg)";
  setTimeout(() => {
    kiiratas()
  }, 5000);
  document.getElementById("spin").disabled = true; 
};

function kiiratas() {
  if (num < 22.5) {
    prompt("Nyereményed 10% kedvezmény egy termékünk árából!");
  } else if (num < 67.5) {
    prompt("Egy rendelés esetén elengedjük a szállítási költséget!");
  } else if (num < 112.5) {
    prompt("Nyereményed egy matrica!");
  } else if (num < 157.5) {
    prompt("Nyereményed 20% kedvezmény egy termékünk árából!");
  } else if (num < 202.5) {
    prompt("Sajnos nem nyertél!");
  } else if (num < 247.5) {
    prompt("Nyereményed egy motoros maszk!");
  } else if (num < 292.5) {
    prompt("Nyereményed egy kulcstartó!");
  } else if (num < 337.5) {
    prompt("Nyereményed egy plexi tisztító!");
  } else if (num < 382.5) {
    prompt("Nyereményed 10% kedvezmény egy termékünk árából!");
  } else if (num < 427.5) {
    prompt("Egy rendelés esetén elengedjük a szállítási költséget!");
  } else if (num < 472.5) {
    prompt("Nyereményed egy matrica!");
  } else if (num < 517.5) {
    prompt("Nyereményed 20% kedvezmény egy termékünk árából!");
  } else if (num < 562.5) {
    prompt("Sajnos nem nyertél!");
  } else if (num < 607.5) {
    prompt("Nyereményed egy motoros maszk!");
  } else if (num < 652.5) {
    prompt("Nyereményed egy kulcstartó!");
  } else if (num < 697.5) {
    prompt("Nyereményed egy plexi tisztító!");
  } else {
    prompt("Nyereményed 10% kedvezmény egy termékünk árából!");
  } 
};
console.log(number);
console.log(num);