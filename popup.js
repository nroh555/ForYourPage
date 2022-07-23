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