document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after to be added to the account

    event.preventDefault();
    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("pin-number").value;
    const totalAmount = document.getElementById("total-amount").innerText;
    if (pinNumber === "1234") {
      let newAmount = parseInt(addMoneyInput) + parseInt(totalAmount);
      document.getElementById("total-amount").innerText = newAmount;
    } else {
      alert("Faild to add money! Try again");
    }
  });
