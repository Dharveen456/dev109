document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const phonenumber = document.getElementById("phonenumber");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const state = document.getElementById("state");
  const country = document.getElementById("country");
  const zipcode = document.getElementById("zipcode");
  const comments = document.getElementById("comments");
  const errormessage = document.getElementById("errormessage");
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let errorMessages = "";

    errorMessages += (firstname.value === "" || firstname.value.length > 20) ? "The firstname is required and cannot be greater than 20 characters<br>" : "";
    errorMessages += (!/^[A-Za-z]+$/.test(firstname.value)) ? "The firstname must only include alphabetic characters<br>" : "";
    errorMessages += (lastname.value === "" || lastname.value.length > 20) ? "The lastname is required and cannot be greater than 20 characters<br>" : "";
    errorMessages += (!/^[A-Za-z]+$/.test(lastname.value)) ? "The lastname must only include alphabetic characters<br>" : "";
    
    let atpos = email.value.indexOf("@"), dotpos = email.value.lastIndexOf(".");
    errorMessages += (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.value.length) ? "Invalid email<br>" : "";
    errorMessages += (isNaN(phonenumber.value) || phonenumber.value.length > 15 || phonenumber.value === "") ? "Invalid phone number<br>" : "";
    errorMessages += (username.value === "" || username.value.length > 12) ? "The username is required and cannot be greater than 12 characters<br>" : "";
    errorMessages += (password.value === "" || password.value.length < 7) ? "The password is required and must be at least 7 characters<br>" : "";
    errorMessages += (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/.test(password.value)) ? "The password should have at least one uppercase, one lowercase, one number, and one special character<br>" : "";
    errorMessages += (address.value === "") ? "Address is required<br>" : "";
    errorMessages += (city.value === "") ? "City is required<br>" : "";
    errorMessages += (country.value === "USA" && (zipcode.value === "" || zipcode.value.length > 5)) ? "Zipcode is required for those in the United States and cannot be more than 5 digits<br>" : "";

    errorMessages ? errormessage.innerHTML = errorMessages : alert("Form submitted successfully!");
  });
});
