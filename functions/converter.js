function clickToDo() {
    //variables
    let number_typed;
    let result;
    let binary_decimal;
    let isBinary = false;
    let isDecimal = false;

    //dom
    number_typed = document.querySelector("#number_typed");  //take the number
    result = document.querySelector("#result");  //take the result
    binary_decimal = document.getElementsByName("binary_decimal");


    //to know which radio is selected
    for (let i = 0; i < 2; i++) {
        if (binary_decimal[i].checked) {

            if (binary_decimal[i].value == "binary") {
                isBinary = true;
            } else {
                isDecimal = true;
            }


        }
    }

    if (isBinary) {
        result.innerHTML = ""
        result.innerHTML = ("to decimal is: " + parseInt(number_typed.value, 2));   //write the result on the label
    } else if (isDecimal) {
        let num = number_typed.value;
        result.innerHTML = ""
        result.innerHTML = ("to binary is: " + Number(num).toString(2));
    }

}


