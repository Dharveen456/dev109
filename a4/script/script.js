document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function (event) {
    if (!validateForm()) event.preventDefault();
  });
});

function validateForm() {
  let errorMessages = "";
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phonenumber = document.getElementById("phonenumber").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value;
  const zipcode = document.getElementById("zipcode").value.trim();
  const errormessage = document.getElementById("errormessage");

  errorMessages += (firstname === "" || firstname.length > 20) ? "First name is required and cannot exceed 20 characters.<br>" : "";
  errorMessages += (!/^[A-Za-z]+$/.test(firstname)) ? "First name must contain only alphabetic characters.<br>" : "";
  errorMessages += (lastname === "" || lastname.length > 20) ? "Last name is required and cannot exceed 20 characters.<br>" : "";
  errorMessages += (!/^[A-Za-z]+$/.test(lastname)) ? "Last name must contain only alphabetic characters.<br>" : "";

  const atpos = email.indexOf("@"), dotpos = email.lastIndexOf(".");
  errorMessages += (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) ? "Invalid email format.<br>" : "";
  errorMessages += (isNaN(phonenumber) || phonenumber.length > 15 || phonenumber === "") ? "Invalid phone number.<br>" : "";
  errorMessages += (username === "" || username.length > 12) ? "Username is required and cannot exceed 12 characters.<br>" : "";
  errorMessages += (password === "" || password.length < 7) ? "Password is required and must be at least 7 characters.<br>" : "";
  errorMessages += (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/.test(password)) ? "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.<br>" : "";
  errorMessages += (address === "") ? "Address is required.<br>" : "";
  errorMessages += (city === "") ? "City is required.<br>" : "";
  errorMessages += (country === "USA" && (zipcode === "" || zipcode.length > 5)) ? "Zipcode is required for those in the USA and cannot exceed 5 digits.<br>" : "";

  errormessage.innerHTML = errorMessages;

  return errorMessages === ""; // ✅ If no errors, form submits
}
