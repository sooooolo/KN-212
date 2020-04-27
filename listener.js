function clickerf() {
    window.location = "#servscroll";
 }
document.getElementById("serviceli").addEventListener("click", clickerf);
function clickers() {
    window.location = "#roomscroll";
 }
document.getElementById("Accomodation").addEventListener("click", clickers);
function clickerth() {
    window.location = "#mealscroll";
 }
document.getElementById("Dinning").addEventListener("click", clickerth);
function clickerfour() {
    window.location = "#actscroll";
 }
document.getElementById("Attractions").addEventListener("click", clickerfour);
function clickerfive() {
    window.location = "#contactscroll";
 }
document.getElementById("Contact").addEventListener("click", clickerfive);

function ColorChange( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
} 

document.getElementById("res_id").addEventListener("mouseenter", ColorChange, false)
document.getElementById("meal_id").addEventListener("mouseenter", ColorChange, false)
document.getElementById("lake_id").addEventListener("mouseenter", ColorChange, false)
document.getElementById("act_id").addEventListener("mouseenter", ColorChange, false)
document.getElementById("arb_id").addEventListener("mouseenter", ColorChange, false)
document.getElementById("spa_id").addEventListener("mouseenter", ColorChange, false)

const nameid = document.getElementById('name');
const surnameid = document.getElementById('surname');
const inid = document.getElementById('indate');
const outid = document.getElementById('outdate');
const numid = document.getElementById('number');
const emailid = document.getElementById('email');
const phoneid = document.getElementById('phone');

nameid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
nameid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

surnameid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
surnameid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

inid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
inid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

outid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
outid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

numid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
numid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

emailid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
emailid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

phoneid.addEventListener('focusin', (event) => {
  event.target.style.background = '#f0e7c5';    
});
phoneid.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});
