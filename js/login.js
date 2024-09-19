// console.log("Button Clicking file added");

// search for me: from submit reloading the page

// document.getElementById().addEventListiner('click',fun)

// step-1 set event handler
// document
//   .getElementById("button-login")
//   .addEventListener("click", function (event) {
//     //step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); //  vajal to begainers

//     // step-3: get the phone number and pin number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber, pinNumber);
//     // step 4: validate phone and pin
//     //this is temporary. You should do like this
//     if (phoneNumber === "6" && pinNumber === "1234") {
//       console.log("you are logged in");
//     } else {
//       alert("wrong passward");
//     }
//   });
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (phoneNumber === "6" && pinNumber === "1234") {
      console.log("You are loged in");
      window.location.href = "./home.js";
    } else {
      alert(" wrong Mobile and Pin Number");
    }
  });
