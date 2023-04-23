
document.getElementById('actual_date').innerHTML =Date();



function insert(input){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + input;
}


function clr(){
    document.getElementById('result').innerHTML = "";
}

function calc(){
    var expression = document.getElementById('result').innerHTML;
    if(expression){
        document.getElementById('result').innerHTML = eval(expression);
    }
}

function invert(){
    var expression = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "-(" + expression + ")";
}

function backSpace(){
    var expression = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = expression.substring(0, expression.length-1);
}



document.getElementById('benficaButtom').onclick = function(){

    document.getElementById('phraseOverImage').innerHTML = document.getElementById('textBox').value;

    document.getElementById('textBox').value = "";


}


document.getElementById('nameButtom').onclick = function(){

 
    document.getElementById('inputedName1').innerHTML = document.getElementById('nameTextBox').value;
    document.getElementById('inputedName2').innerHTML = document.getElementById('nameTextBox').value;
    document.getElementById('inputedName3').innerHTML = document.getElementById('nameTextBox').value;
    document.getElementById('inputedName4').innerHTML = document.getElementById('nameTextBox').value;


    document.getElementById('nameTextBox').value = "";
}


// // // const hdr = document.querySelector('body.hdr');
// // // const toggle = document.getElementById('toggle');
// // // toggle.onclick = function(){
// // //     toggle.classList.toggle('active');
// // //     hdr.classList.toggle('active');
// // // }
