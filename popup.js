document.addEventListener('DOMContentLoaded', () => {
   var rick = document.getElementById("rick");
   var speech = document.getElementById("btnSpeech1");
   var btn = document.getElementById("btnYeah");
   var onOff = document.getElementById("clickIt");


   rick.addEventListener("click", openIndex);
   speech.addEventListener("click", playSpeech);
   btn.addEventListener("click", playYeah);
   onOff.addEventListener("click", onOffAlert);


});

// All functions for buttons in popup
function openIndex() {
   chrome.tabs.create({ active: true, url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" });
}

function playSpeech() {
   chrome.tabs.create({ active: true, url: "https://www.youtube.com/watch?v=syPxMG-o0as" });
}

var audio = new Audio("./sounds/yeah.mp3");
function playYeah() {
   audio.play();
}

function onOffAlert() {
   const img = document.getElementById("icon");
   img.src = "images/stressed-emoji.png";
   alert("Fortunately, you cannot turn this off. It will stay on, and you will enjoy it. :)");
}


// Change Text - not working yet
document.addEventListener('DOMContentLoaded', () => {
   var btn = document.getElementsByClassName("change-text");
   btn.addEventListener("click", textReplacer);
});


