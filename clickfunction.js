function headerFunc() {
    var element = document.getElementById('myHeader');
    element.firstChild.nodeValue = 'Welcome to Java Script.';    
}

function paragFunc() {
    var element = document.getElementById('myParag');
    element.firstChild.nodeValue = 'New Paragraph';
}

function myLoadFunction() {
    var element = document.getElementById('myHeader');
    element.addEventListener('click', headerFunc);

    var paragElement = document.getElementById('myParag');
    paragElement.addEventListener('click', paragFunc);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);