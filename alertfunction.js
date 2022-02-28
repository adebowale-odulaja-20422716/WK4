function clickFunc() {
    var element = document.getElementById('txtInput');
    if(element.value == ""){
        alert('Please fill the text filed.');
        return;    
    }
    alert(element.value);
    element.value = '';
    //variable_name_to_set_val_for_div.firstChild.nodeValue = element.value;
}

function myLoadFunction() {
    var element = document.getElementById('button');
    element.addEventListener('click', clickFunc);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);