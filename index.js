let first_name = document.getElementById("firstName");
let last_name = document.getElementById("lastName");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let form = document.getElementById("form");
let errorElements = document.getElementsByClassName("noshow");
let regex = RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (first_name.children[0].value === "") {
    first_name.children[0].placeholder = "";
    first_name.children[0].classList.add("error");
    first_name.children[1].classList.remove("noshow");
    first_name.children[2].classList.remove("noshow");
  }

  if (last_name.children[0].value === "") {
    last_name.children[0].placeholder = "";
    last_name.children[0].classList.add("error");
    last_name.children[1].classList.remove("noshow");
    last_name.children[2].classList.remove("noshow");
  }

  if (email.children[0].value === "") {
    email.children[0].placeholder = "";
    email.children[0].classList.add("error");
    email.children[1].classList.remove("noshow");
    email.children[2].classList.remove("noshow");
  }

  if (password.children[0].value === "") {
    password.children[0].placeholder = "";
    password.children[0].classList.add("error");
    password.children[1].classList.remove("noshow");
    password.children[2].classList.remove("noshow");
  }
});
