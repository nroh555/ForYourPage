chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.active == true) {
        chrome.scripting.executeScript({
            func: textReplacer,
            target: { tabId }

        })
        chrome.scripting.executeScript({
            func: playSounds,
            target: { tabId }

        })
    }
})


// Replace text 
function textReplacer() {
    var elements = document.getElementsByTagName('*');
    console.log(document);

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace('.', ' on gawd 🙏. ');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                    // element.style.fontFamily = "Impact";
                }
            }
        }
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(' the ', ' da ');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace('e', '3');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                    // element.style.fontFamily = "Impact";
                }
            }
        }
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace('b', '🅱️');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                    // element.style.fontFamily = "Impact";
                }
            }
        }
    }
}
// document.getElementById("rick").onclick = function () {
//     location.href = "https://www.youtube.com/";
// };

var puns = ["Two artist had an art contest. It ended in a draw", "Why do we tell actors to break a leg? Because every play has a cast", "Why did the fish get high? Because it ate seaweed", "Why was the stadium so cold? Cause it had so many fans", "Rabbits love hip-hop.", "What did the buffalo say when his son left home? Bison"];

chrome.alarms.onAlarm.addListener(
    () => {
        random = Math.floor(Math.random() * 10); // 0 - 9
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "emoji-icon.png",
                title: "You got a joke",
                message: puns[random],
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "have_fun",
        {
            delayInMinutes: 0,
            periodInMinutes: 1
        }
    );
}
