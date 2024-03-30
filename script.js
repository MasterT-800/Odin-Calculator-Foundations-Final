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

//Display button clicks on display class
const buttons = document.querySelectorAll('button');
const display = document.querySelector('p');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        if(button.innerText == 'clear'){
            return display.innerText = '';
            
        }
        if (button.innerText == '='){
            //Turn user input into an array so we can iterate over it
            let input = display.innerText.split('');
            let length = input.length;
            let x = 0;
            let y = 0;
            let operator;
            console.log(input);
            //Iterate over array to find x, y, and operator variables
            for (let i=0; i <= length; i++){
                if (input[i] == '+' ||
                    input[i] == '-' ||
                    input[i] == '*' ||
                    input[i] == '/'){
                        operator = input[i];
                        for(let j= i+1; j < length; j++){
                            if (input[j] == '+' ||
                                input[j] == '-' ||
                                input[j] == '*' ||
                                input[j] == '/'){
                                    x = operate(Number(x), operator, Number(y));
                                    console.log(x);
                                    operator = input[j];
                                    j++;
                                    y = 0;
                                }
                            y+= input[j];
                        }
                    break;
                    }
                x += input[i];
                console.log(x);
            }
            x = Number(x);
            y = Number(y);
            console.log(x);
            console.log(typeof(x));
            console.log(y);
            console.log(typeof(y));
            console.log(operator);
            let solution = operate(x, operator, y);
            solution = Math.round(solution * 100) / 100;
            if (solution == Infinity){
                solution = 'Stop trying to divide by 0!!!';
            }
            return display.innerText = solution;
        }
        
      display.innerText += (button.innerText);
    });
  });