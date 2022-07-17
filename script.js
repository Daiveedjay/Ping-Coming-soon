"use strict";

let emailButton = document.querySelector(".email-button");
let email = document.querySelector("input[type=text]");
let errP = document.querySelector(".form-error");

emailButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    email.classList.remove("border-error");
    errP.classList.remove("form-error");
    return true;
  } else {
    email.classList.add("border-error");
    errP.classList.add("hidden");
    setTimeout(() => {
      email.classList.remove("border-error");
      errP.classList.remove("hidden");
    }, 3000);
    return false;
  }
});
