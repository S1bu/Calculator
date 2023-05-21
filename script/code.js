
let newline = true; //Boolean variable.Determine if the next thing the user types should be on a new line 
let value1;   //declared a variable (undefined)
let currentOperator;  //declared a variable (undefined)


//Event handler for when any digit button is pressed
// function name(parameter)
function digitBtnPressed(button){ 
    
    if(newline){//if new line true
        document.getElementById("inputBox").value = button;//display value in the input Box and assign it to button
        newline = false;//newline will be false/wont be newline
    } 
    
    else{
    // decalre variable currentValue and assign it to the value in the input box
    let currentValue = document.getElementById("inputBox").value;
    // the value in the input box will be added and assigned to new values
    document.getElementById("inputBox").value = currentValue + button;
}

/**********Using the decimal**************/
//         function inputDecimal(dot) {
// if (calculator.waitingForSecondOperand === true) {
//     calculator.displayValue = "0."
//   calculator.waitingForSecondOperand = false;
//   return
// }

// if (!calculator.displayValue.includes(dot)) {
//   calculator.displayValue += dot;
// }
// }
/************************************************/ 
    
}
//   when AC button is clicked
function btnACPressed(){ //
    document.getElementById("inputBox").value = 0;//value in input box must be zero
    newline = true;
}
// operator buttons
function operatorBtnPressed(operator){
    currentOperator = operator; //
    value1 = parseFloat(document.getElementById("inputBox").value); //value1 assigned to whatever is in the input box
    newline = true;//numbers start on a fresh screen
}
//Event handler for equals to button
function equalsBtnPressed(){
    let value2 = parseFloat(document.getElementById("inputBox").value);
    let finalTotal;
    
    switch(currentOperator){
            case"+"://if current operator is +
                finalTotal =  value1 + value2;//equal button is assinged to the 1st input values along with its additional operator(+)
                break;
            case"-"://if current operator is -
                finalTotal =  value1 - value2;//equal button is assinged to the 1st input values along with its subtract operator(-)
                break;
            case"/"://if current operator is /
                finalTotal =  value1 / value2;//equal button is assinged to the 1st input values along with its division operator(/)
                break;
            case"x"://if current operator is x
                finalTotal =  value1 * value2;//equal button is assinged to the 1st input values along with its multiply operator(*)
                break;   
                // case '.':
                // inputDecimal(value);         
                
            }


    document.getElementById("inputBox").value = finalTotal;//assign everything(sum) to finalTotal variabale

    value1 = 0;
    newline = true;
}

