// Rick roll
document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("rick");
    y.addEventListener("click", openIndex);
 });
 
 function openIndex() {
  chrome.tabs.create({active: true, url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"});
 }

// Motivational speech 1 - there is no passion
document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("btnSpeech1");
    y.addEventListener("click", playSpeech1);
 });
 
 function playSpeech1() {
  chrome.tabs.create({active: true, url: "https://www.youtube.com/watch?v=syPxMG-o0as"});
 }

 // Yeah! 
 document.addEventListener('DOMContentLoaded', () => {
    var btn = document.getElementById("btnYeah");
    btn.addEventListener("click", playYeah);
 });
var audio = new Audio("./sounds/yeah.mp3");
function playYeah() {
    console.log("test");
    audio.play();
}


document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("clickIt");
    y.addEventListener("click", openIndex1);
 });
 
 function openIndex1() {
    alert("~~~~~~~~~ Fortunately, you cannot turn this off ~~~~~~~~~          ~~~~~~~~~ It will stay on, and you will enjoy it. :) ~~~~~~~~~");
 }



