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
  if (firstname.value==="null" || firstname.value==="" || firstname.value.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  

  });
});
