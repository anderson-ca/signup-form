let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let form = document.getElementById("form");
let regex = RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    firstName.classList.add("error");
    firstName.innerHTML = "<i class='material-icons'>error</i>";
  }

  if (lastName.value === "") {
    lastName.classList.add("error");
  }

  if (email.value === "") {
    email.classList.add("error");
  }

  if (password.value === "") {
    password.classList.add("error");
  }
});
