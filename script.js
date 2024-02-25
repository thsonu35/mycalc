let lastInputIsOperator = false;

function calculationfunction(value) {
    const inpscreen = document.getElementById("result");

    if (lastInputIsOperator && isOperator(value)) {
        return;
    }

    inpscreen.value += value;

    const correctedInput = correctInput(inpscreen.value);
    inpscreen.value = correctedInput;

    lastInputIsOperator = isOperator(value);
}

function reset() {
    const inpscreen = document.getElementById("result");
    inpscreen.value = '';
    lastInputIsOperator = false;
}

function calculationresult() {
    const inpscreen = document.getElementById("result");
    try {
        const correctedInput = correctInput(inpscreen.value);
        inpscreen.value = eval(correctedInput);
    } catch (error) {
        inpscreen.value = 'Error';
    }

    lastInputIsOperator = false;
}

function del() {
    const inpscreen = document.getElementById("result");
    const currentValue = inpscreen.value;
    inpscreen.value = currentValue.slice(0, -1);

    lastInputIsOperator = isOperator(inpscreen.value.slice(-1));
}

function isOperator(value) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
}

function correctInput(input) {
    const correctedInput = input.replace(/--/g, '+');
    return correctedInput;
}
