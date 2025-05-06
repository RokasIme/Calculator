const equationDOM = document.querySelector(".equation");
const buttonsDOM = document.querySelectorAll(".key");
const resultDOM = document.querySelector(".result");

for (const buttonDOM of buttonsDOM) {
  buttonDOM.addEventListener("click", () => {
    const buttonValue = buttonDOM.innerText;
    const currentEquationValue = equationDOM.innerText;
    let updateEquationValue = currentEquationValue;
    let result = resultDOM.innerText;

    switch (buttonValue) {
      case "C":
        updateEquationValue = "";
        result = 0;
        break;

      case "del":
        updateEquationValue = currentEquationValue.slice(0, -1);
        break;

      case "=":
        try {
          result = eval(updateEquationValue);
        } catch (error) {
          result = "Error";
        }
        break;

      case "%":
        updateEquationValue += "/100";
        try {
          result = eval(updateEquationValue);
        } catch (error) {
          result = "Error";
        }
        break;

      default:
        updateEquationValue += buttonValue;
        break;
    }

    resultDOM.innerText = result;
    equationDOM.innerText = updateEquationValue;
  });
}
