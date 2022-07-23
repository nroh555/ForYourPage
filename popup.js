document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("rick");
    y.addEventListener("click", openIndex);
 });
 
 function openIndex() {
  chrome.tabs.create({active: true, url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"});
 }