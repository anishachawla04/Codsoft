const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let inputStr = "";

// Attach listeners using for loop
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const val = buttons[i].getAttribute("data-val");
    inputStr += val;
    screen.value = inputStr;
  });
}

// Clear logic with if-else
document.getElementById("clr").addEventListener("click", function () {
  if (inputStr.length > 0) {
    inputStr = "";
    screen.value = "";
  } else {
    screen.value = "Already clear";
  }
});

// Equals button
document.getElementById("equal").addEventListener("click", function () {
  if (inputStr.trim() === "") {
    screen.value = "Enter expression";
    return;
  }

  try {
    const output = eval(inputStr);
    if (isNaN(output)) {
      screen.value = "Error";
    } else {
      screen.value = output;
      inputStr = output.toString();
    }
  } catch (err) {
    screen.value = "Invalid";
    inputStr = "";
  }
});