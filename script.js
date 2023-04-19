// Variables globales
let operand1 = null;
let operand2 = null;
let operator = null;

const screenResult = document.getElementById("result");
const screenOperand = document.getElementById("operand");

// Funciones de la calculadora
function clearScreen() {
	screenResult.innerText = "0";
	screenOperand.innerText = "";
	operand1 = null;
	operand2 = null;
	operator = null;
}

function updateScreen(value) {
	screenResult.innerText = value;
}


function appendToScreen(value) {
	if (screenResult.innerText === "0") {
		screenResult.innerText = value;
	} else {
		screenResult.innerText += value;
	}
}

function setOperand() {
	operand1 = parseFloat(screenResult.innerText);
	screenOperand.innerText = operand1;
	screenResult.innerText =  "";
}

function calculate() {
	operand2 = parseFloat(screenResult.innerText);

	if (operator === "+") {
		updateScreen(operand1 + operand2);
	} else if (operator === "-") {
		updateScreen(operand1 - operand2);
	} else if (operator === "x") {
		updateScreen(operand1 * operand2);
	}else if(operator ==="%"){
		updateScreen(operand1 * operand2 / 100)
	} else if (operator === "÷") {
		if (operand2 === 0) {
			updateScreen("Error");
		} else {
			updateScreen(operand1 / operand2);
		}
	}

	operand1 = parseFloat(screenResult.innerText);
	operand2 = null;
	operator = null;
	screenOperand.innerText = ``;
}


// Eventos de botones
document.getElementById("clear").addEventListener("click", clearScreen);

document.getElementById("plus-minus").addEventListener("click", function () {
	updateScreen(parseFloat(screenResult.innerText) * -1);
});

document.getElementById("percent").addEventListener("click", function () {
	setOperand();
	screenOperand.innerText= operand1 + "%";
	operator = "%";
});

document.getElementById("add").addEventListener("click", function () {
	setOperand();
	screenOperand.innerText= operand1 + "+";
	operator = "+";
});

document.getElementById("subtract").addEventListener("click", function () {
	setOperand();
	screenOperand.innerText= operand1 + "-";
	operator = "-";
});

document.getElementById("multiply").addEventListener("click", function () {
	setOperand();
	screenOperand.innerText= operand1 + "*";
	operator = "x";
});

document.getElementById("divide").addEventListener("click", function () {

	setOperand();
	screenOperand.innerText= operand1 + "÷";
	operator = "÷";
});

document.getElementById("equals").addEventListener("click", calculate);

document.getElementById("dot").addEventListener("click", function () {
	if (!screenResult.innerText.includes(".")) {
		screenResult.innerText += ".";
	}
});

document.querySelectorAll(".number").forEach(function (element) {
	element.addEventListener("click", function () {
		appendToScreen(element.innerText);
	});
});
