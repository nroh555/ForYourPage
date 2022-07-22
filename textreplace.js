var texts = document.querySelectorAll('h1, h2, h33, h4, h5, p, li, td, caption, span, a');

for (var i = 0; i < texts.length; i++){
    if (text[i].innerHTML.includes(' ')){
        text[i].innerHTML = text[i].innerHTML.replace(' ', ' honk ')
    }
}