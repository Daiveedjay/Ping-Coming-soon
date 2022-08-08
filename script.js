"use strict";

let emailButton = document.querySelector(".email-button");
let email = document.querySelector(".email-input");
let errP = document.querySelector(".error-message");

emailButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    errP.classList.add("form-correct");
    return true;
  } else {
    email.classList.add("error-border");
    errP.classList.add("error");
    errP.classList.remove("form-correct");
    setTimeout(() => {
      email.classList.remove("error-border");
      errP.classList.remove("error");
    }, 2000);
    return false;
  }
});
