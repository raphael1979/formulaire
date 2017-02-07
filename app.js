var email = document.getElementById("email");

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Nous voudrions une adresse e-mail.");
  } else {
    email.setCustomValidity("");
  }
});