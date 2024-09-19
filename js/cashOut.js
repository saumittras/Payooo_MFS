document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    // prevent default cash out event
    event.preventDefault();

    const cashOutAmount = document.getElementById("input-cash-out").value;
    const cashOutPinNumber =
      document.getElementById("input-cash-out-pin").value;
    const currentBlance = document.getElementById("total-amount").innerText;
    console.log(currentBlance);
    console.log(cashOutAmount, cashOutPinNumber);
    if (cashOutPinNumber === "1234") {
      const newBlance = parseFloat(currentBlance) - cashOutAmount;
      console.log(newBlance);
      document.getElementById("total-amount").innerText = newBlance;
    } else {
      alert("Worng Pin Number!");
    }
  });
