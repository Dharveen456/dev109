document.addEventListener("DOMContentLoaded", function() {
  const submit = getElementById("submit");
  const firstname = getElementById("firstname");
  const lastname = getElementById("lastname");
  const email = getElementById("email");
  const phonenumber = getElementById("phonenumber");
  const username = getElementById("username");
  const password = getElementById("password");
  const address = getElementById("address");
  const city = getElementById("city");
  const state = getElementById("state");
  const country = getElementById("country");
  const zipcode = getElementById("zipcode");
  const comments = getElementById("comments");
  submit.addEventListener("click", function(){
    errorMessages += (firstname.value==="null" || firstname.value==="" || firstname.value.length > 20) ? "The firstname is required and cannot be greater than 20 characters<br>";
    errorMessages += (/^[A-Za-z]+$/.test(firstname.value)) ? "The firstname is must only include alphabetic characters<br>";
    errorMessages += (lastname.value==="null" || lastname.value==="" || lastname.value.length > 20) ? "The lastname is required and cannot be greater than 20 characters<br>";
    let atpos = email.value.indexOf("@");
    let dotpos = email.value.lastIndexOf(".");
    errorMessages += (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) ? "Invalid email<br>";
    errorMessages += (isNaN(phonenumber.value) || phonenumber.value.lenght >15 || phonenumber.value===null || phonenumber.value==="") ? "Invalid phone number<br>";
    errorMessages += (username.value==="null" || username.value==="" || username.value.length > 12) ? "The lastname is required and cannot be greater than 20 characters<br>";
});
