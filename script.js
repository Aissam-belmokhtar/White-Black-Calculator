// ANIMATION SECTION
  const HiddenInput = document.querySelectorAll("#intOperation")
  // const displayResult = document.getElementById("display_result")
  // displayResult.value = 0;
   HiddenInput.forEach(input => {
      input.classList.add("DisplayInput")
  })
  
function expandWhiteCalculator() {
  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")
  const nbrStyle = document.getElementById("nbrshidden")
  const allButtons = whiteCalc.querySelectorAll('button')
  const HiddenInput = document.querySelectorAll("#intOperation")
  const displayResult = document.getElementById("display_result")
  displayResult.value = 0
  // displayInput.innerHTML = `<input type="text" id="intOperation" onkeyup="CalculeWithInput()">`
  HiddenInput.forEach(input => {
      input.classList.remove("DisplayInput")
  })
  
 // displayInput.classList.remove("RBInp")
  allButtons.forEach(button => {

        button.classList.add('Btnexpanded');

    });
  nbrStyle.classList.add("nbrsexpanded")
  container.classList.add("expanded")
  whiteCalc.classList.add("expanded")
  blackCalc.classList.add("hidden")
}

function expandBlackCalculator() {
  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")
  const HiddenInput = document.querySelectorAll("#intOperation")
  // const displayResult = document.getElementById("display_result")
  // displayResult.value = 0;
   HiddenInput.forEach(input => {
      input.classList.remove("DisplayInput")
  })
  /*displayResult.forEach(div =>{
    div.innerHTML = ""

  })*/
  
  //displayBInput.classList.remove("RBInp")
  container.classList.add("expanded")
  blackCalc.classList.add("expanded")
  whiteCalc.classList.add("hidden")
  
}

function resetCalculators() {

  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")
  const HiddenInput = document.querySelectorAll("#intOperation")
  const displayResult = document.getElementById("display_result")
 // const displayBInput = document.getElementById("intBOperation")

  displayResult.innerHTML = ``
   HiddenInput.forEach(input => {
       input.classList.add("DisplayInput")
  })
  
 
  //displayInput.classList.add("RBInp")
  container.classList.remove("expanded")
  whiteCalc.classList.remove("expanded", "hidden")
  blackCalc.classList.remove("expanded", "hidden")
}

  document.addEventListener("click", (event) => {
  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")

  // Check if container is expanded and click is outside the calculators
  if (container.classList.contains("expanded")) {
    if (!event.target.closest(".white-Calculator") && !event.target.closest(".black-Calculator")) {
      resetCalculators()
    }
  }
})
// CALCULATION
function add(num1, num2) {
  return num1 + num2
}
function subtract(num1, num2) {
  return num1 - num2
}
function multiply(num1, num2) {
  return num1 * num2
}
function divide(num1, num2) {
  if (num2 == 0) {
    return "infinity"
  }
  return num1 / num2;
}
function modelo(num1, num2) {
  return num1 % num2;
}

function calculator() {
  const num1 = Number.parseInt(prompt("Enter first number:"))
  const operation = prompt("Enter operation (+, -, *, /):")
  const num2 = Number.parseInt(prompt("Enter second number:"))
  let result
  switch (operation) {
    case "+":
      result = add(num1, num2)
      break
    case "-":
      result = subtract(num1, num2)
      break
    case "x":
      result = multiply(num1, num2)
      break
    case "/":
      result = divide(num1, num2)
      break
    case "%":
      result = modelo(num1, num2)
      break
    default:
      ("invalid operation")
  }
  return `${num1} ${operation} ${num2} = ${result}`
}

//const resultAff = document.querySelector('result');
//resultAff.value = calculator();
let display = document.querySelectorAll("#intOperation")
//let display_Black = document.getElementsByClassName("BlackInp")
let displayResult = document.querySelectorAll("#display_result")
//display.value = 0;
//display_Black.value = 0;
//console.log(display.value);
function appendToDisplay(value) {
   display.forEach(input => {
    input.value += value;
   })
//  display.value += value;
 // display_Black.value += value;
  CalculeWithInput();
  console.log("white value : " + display.value);
// console.log("black value : " + display_Black.value);
}
//appendToDisplay();
function clearDisplay() {
  
  display.forEach(input => {
    input.value = "";
   })
  displayResult.forEach(div => {
    div.innerHTML = "";
   })
 // display.value = ""
  //displayResult.innerHTML = ""
}

function calculate() {
  // const expression = display.value;
  input_value = document.getElementById("intOperation");
  
  try {
    // Using eval for simplicity (be careful in real projects!)
    const result = safeEval(input_value.value)
    display.forEach(input =>{
      input.value = result
      console.log("the result is " + result)
    })
    //display.value = result
   // display_Black = result
    CalculeWithInput()
  }catch(error) {
    display.value = "Error"
  }
}
function safeEval(expression) {
  // Remove any characters that aren't numbers or operators
  const cleanExpression = expression.replace(/[^0-9+\-*/.()]/g, "")

  // Use Function constructor instead of eval for better security
  return new Function("return " + cleanExpression)()
}
//const buttomDisplay = document.getElementById('display_result');
//buttomDisplay.innerHTML ='0';
function CalculeWithInput() {
 // const buDisplay = document.getElementById("display_result")
  
  //const B_result =document.getElementsByClassName("Black_result")
  const inputValue = document.getElementById("intOperation")
  // Check if input is empty or contains only whitespace
  if (!inputValue.value.trim()) {

    //buDisplay.innerHTML = "0"
    displayResult.forEach(div => {
    div.innerHTML = "0";
   })
    return // Exit the function early
  }
  try{
    const result = safeEval(inputValue.value)
   // buDisplay.value = result ;
   displayResult.forEach(div => {
    div.innerHTML = result;
   })
    //buDisplay.innerHTML = result;
   
    
    //B_result.innerHTML = result;
    //console.log(B_result);
    console.log(result)
  } catch(error){
    console.log("Calculation error:", error.message)
  }
  //buDisplay.value = result;
   // console.log(buDisplay.value);
  // buDisplay.innerHTML = result;
}
function handleSpecialOperations(expression) {
  // Replace special symbols with JavaScript math functions
  return expression
    .replace(/√(\d+)/g, "Math.sqrt($1)") // √4 → Math.sqrt(4)
    .replace(/(\d+)²/g, "Math.pow($1,2)") // 4² → Math.pow(4,2)
    .replace(/(\d+)³/g, "Math.pow($1,3)") // 4³ → Math.pow(4,3)
    .replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)") // 2^3 → Math.pow(2,3)
    .replace(/π/g, "Math.PI") // π → Math.PI
    .replace(/(\d+)!/g, "factorial($1)") // 5! → factorial(5)
}

