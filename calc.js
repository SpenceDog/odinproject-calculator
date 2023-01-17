var firstNum = null; //Global first variable in math problem.
var secondNum = null; //Global second variable in math problem.
var operatorSign = null; // Sets operation type.
var resultVal = null; // The result value.

function Operate(){ // This is going to do our calculations for us.
    if(firstNum != null && operatorSign != null){
        secondNum = document.getElementById('lower-number').value;
    }else{
        return 0;
    }


    if(operatorSign == '%'){
        resultVal = parseFloat(firstNum) / parseFloat(secondNum);
    }else if(operatorSign == '*'){
        resultVal = parseFloat(firstNum) * parseFloat(secondNum);
    }else if(operatorSign == '+'){
        resultVal = parseFloat(firstNum) + parseFloat(secondNum);
    }else{
        resultVal = parseFloat(firstNum) - parseFloat(secondNum);
    }

    resultVal = resultVal.toFixed(10); // Rounds our calculation to 10 places.

    document.getElementById('upper-number').value = ''; //Resets to zero.
    document.getElementById('lower-number').value = resultVal;

    firstNum = null; // Resets all of our values.
    secondNum = null;
    operatorSign = null;
    resultVal = null;
}

function writeNum(buttonVal){ // adds the specified field to the text box.
    var text = document.getElementById('lower-number');
    text.value += buttonVal;
}

function setVar(buttonVal){

    if(operatorSign != null){ // This little bit of kit runs a calculation if there are numbers already in the chamber.
        Operate();
    }

    operatorSign = buttonVal;
    firstNum = parseFloat(document.getElementById('lower-number').value);
    
    document.getElementById('upper-number').value = firstNum; // Moves the value up, and clears the text input.
    document.getElementById('lower-number').value = null;
}

function clearVal(){
    secondNum = null; // Clears just the second value & the operator.
    document.getElementById('lower-number').value = '';
}

function allClear(){
    document.getElementById('upper-number').value = ''; //Resets to zero.
    document.getElementById('lower-number').value = '';

    firstNum = null; // Resets all of our values.
    secondNum = null;
    operatorSign = null;
    resultVal = null;
}