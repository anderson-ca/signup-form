let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorElements = document.getElementsByClassName("noshow");
let regex = RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(regex.test(email.children[0].value));

  if (firstName.children[0].value === "") {
    firstName.children[0].placeholder = "";
    firstName.children[0].classList.add("error");
    firstName.children[1].classList.remove("noshow");
    firstName.children[2].classList.remove("noshow");
  } else {
    firstName.children[0].classList.remove("error");
    firstName.children[1].classList.add("noshow");
    firstName.children[2].classList.add("noshow");
  }

  if (last_name.children[0].value === "") {
    lastName.children[0].placeholder = "";
    lastName.children[0].classList.add("error");
    lastName.children[1].classList.remove("noshow");
    lastName.children[2].classList.remove("noshow");
  } else {
    lastName.children[0].classList.remove("error");
    lastName.children[1].classList.add("noshow");
    lastName.children[2].classList.add("noshow");
  }

  if (email.children[0].value === "") {
    email.children[0].placeholder = "";
    email.children[0].classList.add("error");
    email.children[1].classList.remove("noshow");
    email.children[2].classList.remove("noshow");
    email.children[3].classList.add("noshow");
  } else if (!regex.test(email.children[0].value)) {
    email.children[0].classList.add("error");
    email.children[1].classList.remove("noshow");
    email.children[2].classList.add("noshow");
    email.children[3].classList.remove("noshow");
  } else {
    email.children[0].classList.remove("error");
    email.children[1].classList.add("noshow");
    email.children[2].classList.add("noshow");
    email.children[3].classList.add("noshow");
  }

  if (password.children[0].value === "") {
    password.children[0].placeholder = "";
    password.children[0].classList.add("error");
    password.children[1].classList.remove("noshow");
    password.children[2].classList.remove("noshow");
  } else {
    password.children[0].classList.remove("error");
    password.children[1].classList.add("noshow");
    password.children[2].classList.add("noshow");
  }
});
