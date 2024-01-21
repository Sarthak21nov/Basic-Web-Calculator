let currentText = '';



// Number buttons using.value instead of .innerText because innerText is only used for changing the paragraphs.
document.querySelector('#textarea').value = currentText;
document.querySelector('#button1').onclick = function(){
    currentText = currentText + 1;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button2').onclick = function(){
    currentText = currentText + 2;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button3').onclick = function(){
    currentText = currentText + 3;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button4').onclick = function(){
    currentText = currentText + 4;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button5').onclick = function(){
    currentText = currentText + 5;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button6').onclick = function(){
    currentText = currentText + 6;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button7').onclick = function(){
    currentText = currentText + 7;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button8').onclick = function(){
    currentText = currentText + 8;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button9').onclick = function(){
    currentText = currentText + 9;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button11').onclick = function(){
    currentText = currentText + 0;
    document.querySelector('#textarea').value = currentText;
}





// Functions will start from here..
document.querySelector('#button10').onclick = function(){
    currentText = currentText + '*';
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button12').onclick = function(){
    currentText = currentText + '/';
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button13').onclick = function(){
    let result = eval(currentText);
    currentText = result;
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button14').onclick = function(){
    currentText = '';
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button15').onclick = function(){
    currentText = currentText + '+';
    document.querySelector('#textarea').value = currentText;
}
document.querySelector('#button16').onclick = function(){
    currentText = currentText + '-';
    document.querySelector('#textarea').value = currentText;
}