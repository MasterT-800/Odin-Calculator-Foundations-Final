//Basic math operator functions
function add(x, y){
    return (x + y);
};

function subtract(x, y){
    return (x - y);
};

function multiply(x, y){
    return (x * y);
};

function divide(x, y){
    return (x / y);
};

//Operate function that will take input and call back a basic math operator function
function operate(x, operator, y){
    switch(operator){
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return 'Please use a correct operator'
    }
}