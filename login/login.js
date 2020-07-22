var password = document.forms["form"]["psw"];
var username = document.forms["form"]["username"];
var name_err = document.getElementById("name_err");
var password_err = document.getElementById("pass_err");

function validated() {
  if (username.value.length < 1) {
    username.styleborder = "1px solid red";
    name_err.style.display = "block";
    username.focus();
    return false;
  }
  if (password.value.length < 9) {
    password.styleborder = "1px solid red";
    password_err.style.display = "block";
    password.focus();
    return false;
  }
}
