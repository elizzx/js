function minus() {
    return prompt("Number 1") - prompt("Number 2");
}

function plus() {
    return prompt("Number 1") + prompt("Number 2");
}

function divide() {
    return prompt("Number 1") / prompt("Number 2");
}

function multiply() {
    return prompt("Number 1") * prompt("Number 2");
}

doOperation()

function doOperation() {
    value1 = prompt("Number1")
    operator = prompt("Operator")
    value2 = prompt("Number2")
    switch (operator) {
        case "-":
            return alert(value1 - value2);
        case "+":
          return   alert(value1 + value2);
        case "/":
           return  alert(value1 / value2);
        case "*":
           return  alert(value1 * value2);
    }
}
