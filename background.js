chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.active == true) {
chrome.scripting.executeScript({
    func: textReplacer,
    target: { tabId }

})
    }
})

function textReplacer() {
    var elements = document.getElementsByTagName('*');
    console.log(document);

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        
    
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text.replace(/Football/gi, 'Basketball');
    
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

