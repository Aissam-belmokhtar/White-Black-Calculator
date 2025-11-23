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
  return num1 / num2
}
function modelo(num1, num2) {
  return num1 % num2
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
      ;("invalid operation")
  }
  return `${num1} ${operation} ${num2} = ${result}`
}
//const resultAff = document.querySelector('result');
//resultAff.value = calculator();
const display = document.getElementById("intOperation")
//display.value = 0;
//console.log(display.value);
function appendToDisplay(value) {
  display.value += value
  CalculeWithInput()
  console.log(display.value)
}
//appendToDisplay();
function clearDisplay() {
  display.value = ""
}

function calculate() {
  // const expression = display.value;

  try {
    // Using eval for simplicity (be careful in real projects!)
    const result = eval(display.value)
    display.value = result
    CalculeWithInput()
  } catch (error) {
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
  const buDisplay = document.getElementById("display_result")
  const inputValue = document.getElementById("intOperation")
  // Check if input is empty or contains only whitespace
  if (!inputValue.value.trim()) {
    buDisplay.innerHTML = "0"
    return // Exit the function early
  }
  try {
    const result = eval(inputValue.value)
    buDisplay.innerHTML = result
  } catch (error) {
    console.log("Calculation error:", error.message)
  }
  //buDisplay.value = result;
  //console.log(buDisplay.value);
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

function expandWhiteCalculator() {
  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")
  const nbrStyle = document.getElementById("nbrshidden");
  const allButtons = whiteCalc.querySelectorAll('button')

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
 
  container.classList.add("expanded")
  blackCalc.classList.add("expanded")
  whiteCalc.classList.add("hidden")
}

function resetCalculators() {
  const container = document.getElementById("calculatorContainer")
  const whiteCalc = document.getElementById("whiteCalc")
  const blackCalc = document.getElementById("blackCalc")

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
