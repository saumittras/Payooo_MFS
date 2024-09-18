// console.log("Button Clicking file added");

// search for me: from submit reloading the page

// document.getElementById().addEventListiner('click',fun)

// step-1 set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    //step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); //  vajal to begainers
    console.log("login Button Clicked");

    // step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
