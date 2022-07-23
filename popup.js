document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("rick");
    y.addEventListener("click", openIndex);
 });
 
 function openIndex() {
  chrome.tabs.create({active: true, url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"});
 }


 
document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("clickIt");
    y.addEventListener("click", openIndex1);
 });
 
 function openIndex1() {
    alert("Hello..! It's my first chrome extension.");
 }

document.addEventListener('DOMContentLoaded', () => {
    var btn = document.getElementById("btnYeah");
    btn.addEventListener("click", playYeah);
 });
var audio = new Audio("./sounds/yeah.mp3");
function playYeah() {
    console.log("test");
    audio.play();
}

