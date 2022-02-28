function clickFunc() {
    var element = document.getElementById('txtInput');
    if(element.value == ""){
        alert('Please fill the text filed.');
        return;
    }
    alert(element.value);
    element.value = '';
}

function divFunc() {
    var textElement = document.getElementById('txtInput');
    var divElement = document.getElementById('myDiv');
    if(textElement.value == ""){
        alert('Please fill the text filed.');
        return;
    }
    divElement.firstChild.nodeValue = textElement.value;
    textElement.value = '';
}

function myLoadFunction() {
    var element = document.getElementById('button');
    element.addEventListener('click', divFunc);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);