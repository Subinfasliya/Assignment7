
const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

// last character is operator
const lastCharacter = display.value.slice(-1)

// Multiple Numbers added into display
const addNumbers = (num) =>{
  display.value += num
}

 // Added Operators into Display
const addOperator = (operator) =>{
    // double pressed operator issue
    const lastOperator = display.value.slice(-1)
    console.log(lastOperator);
    
    // checking lastOperator include then return true(Boolean value)
    if("+-/*".includes(lastOperator)){
        return
    }  

    // Adding Operator into the Screen (Display) func
  display.value += operator
}

// Clear Button function
const clearDisplay = () =>{
    display.value = ''
}

// Calculation function
const calculate = () =>{
 const value = display.value;

 if(value === ""){
    return;
 }

//  Finding last characteris an Operator
const lastCharacter = value.slice(-1);


if("*-/+".includes(lastCharacter)){
    return;
}

    const result = eval(value)
    display.value = result
    
}

// square function
const square = () =>{
   const squareValue = display.value ** 2 
  display.value = squareValue
}

// Cube function
const cube = () =>{
    const cubeValue = display.value ** 3
    display.value = cubeValue
}

buttons.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        console.log(`clicked ${btn.textContent}`);
        const value = btn.textContent
    if(!isNaN(value)){
       addNumbers(value)
    }else if("+-/*".includes(value)){
        addOperator(value)
    }else if(value === "="){
        calculate()
    }else if (value === "C"){
        clearDisplay()
    }else if(value === "x²"){
        square()
    }else if(value === "x³"){
        cube()
    }else{
        alert("Please click a valid button")
    }
        
    })
})