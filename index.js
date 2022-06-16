let first_name = document.getElementById("firstName");
let last_name = document.getElementById("lastName");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let form = document.getElementById("form");
let errorElements = document.getElementsByClassName("noshow");
let regex = RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(regex.test(email.children[0].value));

  if (first_name.children[0].value === "") {
    first_name.children[0].placeholder = "";
    first_name.children[0].classList.add("error");
    first_name.children[1].classList.remove("noshow");
    first_name.children[2].classList.remove("noshow");
  } else {
    first_name.children[0].classList.remove("error");
    first_name.children[1].classList.add("noshow");
    first_name.children[2].classList.add("noshow");
  }

  if (last_name.children[0].value === "") {
    last_name.children[0].placeholder = "";
    last_name.children[0].classList.add("error");
    last_name.children[1].classList.remove("noshow");
    last_name.children[2].classList.remove("noshow");
  } else {
    last_name.children[0].classList.remove("error");
    last_name.children[1].classList.add("noshow");
    last_name.children[2].classList.add("noshow");
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
