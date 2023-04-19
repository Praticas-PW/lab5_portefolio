var finalResult = 0;

var temp_a = 0;
var temp_b = 0;

var arrayPos = 0;

var digitNumber = 0;

let build_arrayA = new Array(10); 




function finalResult(){
    finalResult = 10;
}


function buildNumber(number){
    result = 0;
    for (let x = 0; x < build_arrayA.length; x++) {
        if(x = digitNumber){
            result += build_arrayA[x];
        }else{
            result += build_arrayA[x]*(10^digitNumber-1);
        }
    }

    temp_a = result;
}



function resetArrayPosAndDigitNumber(){
    digitNumber = 0;    
    arrayPos = 0;
}


function addNumber(number){
    build_arrayA[arrayPos] = number;
    arrayPos++;
}


function ola(){
    cnt++;
    alert(cnt);
}

function PLUSS(){
    finalResult = 10;
}

function MINUS(){
    finalResult = 10;
}