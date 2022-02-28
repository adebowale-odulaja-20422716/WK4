function headerModifier(){
    var element = document.getElementById('myHeader');
    element.firstChild.nodeValue = 'Welcome to Java Script.';
    
    var element1 = document.getElementById('myParag');
    element1.firstChild.nodeValue = 'New Paragraph';
}
document.addEventListener('DOMContentLoaded', headerModifier);