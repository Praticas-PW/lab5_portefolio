const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle()
});



var temp = 0;

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