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
