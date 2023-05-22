let sum = '';
// displays number in the input box
let result= document.getElementById("input");

//Display the number in output id
function inputNumber(number){
    result.value+=number;
}

// calculates input values
function evaluateSum(){
    result.value=eval(result.value).toFixed(2)
}

// delets everything
function clearSum() {
    result.value=sum;
}

//removes the last value in th array
function remove(){
    result.value = result.value.slice(0,-1);
}



// The video I watched to get an idea of what to do
// https://www.youtube.com/watch?v=1jAEyP9a1hg