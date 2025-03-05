document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    if (!validateForm()) event.preventDefault();
  });
});

function validateForm() {
  let valid = true;
  const fields = ["firstname", "lastname", "email", "phonenumber", "username", "password", "address", "city", "zipcode"];
  fields.forEach(id => document.getElementById(id + "error").innerHTML = "");
  
  const firstname = document.getElementById("firstname").value.trim();
  if (firstname === "" || firstname.length > 20) {
    document.getElementById("firstnameerror").innerHTML = "First name is required and cannot exceed 20 characters.";
    valid = false;
  }
  if (!/^[A-Za-z]+$/.test(firstname)) {
    document.getElementById("firstnameerror").innerHTML = "First name must contain only alphabetic characters.";
    valid = false;
  }
  
  const lastname = document.getElementById("lastname").value.trim();
  if (lastname === "" || lastname.length > 20) {
    document.getElementById("lastnameerror").innerHTML = "Last name is required and cannot exceed 20 characters.";
    valid = false;
  }
  if (!/^[A-Za-z]+$/.test(lastname)) {
    document.getElementById("lastnameerror").innerHTML = "Last name must contain only alphabetic characters.";
    valid = false;
  }
  
  const email = document.getElementById("email").value.trim();
  const atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("emailerror").innerHTML = "Invalid email format.";
    valid = false;
  }
  
  const phonenumber = document.getElementById("phonenumber").value.trim();
  if (isNaN(phonenumber) || phonenumber.length > 15 || phonenumber === "") {
    document.getElementById("phonenumbererror").innerHTML = "Invalid phone number.";
    valid = false;
  }
  
  const username = document.getElementById("username").value.trim();
  if (username === "" || username.length > 12) {
    document.getElementById("usernameerror").innerHTML = "Username is required and cannot exceed 12 characters.";
    valid = false;
  }
  
  const password = document.getElementById("password").value;
  if (password === "" || password.length > 7) {
    document.getElementById("passworderror").innerHTML = "Password is required and must be less than 8 characters.";
    valid = false;
  }
  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/.test(password)) {
    document.getElementById("passworderror").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    valid = false;
  }
  
  const address = document.getElementById("address").value.trim();
  if (address === "") {
    document.getElementById("addresserror").innerHTML = "Address is required.";
    valid = false;
  }
  
  const city = document.getElementById("city").value.trim();
  if (city === "") {
    document.getElementById("cityerror").innerHTML = "City is required.";
    valid = false;
  }
  
  const country = document.getElementById("country").value;
  const zipcode = document.getElementById("zipcode").value.trim();
  if (country === "USA" && (zipcode === "" || zipcode.length > 5)) {
    document.getElementById("zipcodeerror").innerHTML = "Zipcode is required for those in the USA and cannot exceed 5 digits.";
    valid = false;
  }
  
  return valid;
}
