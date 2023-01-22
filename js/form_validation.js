function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var password = document.forms["registrationForm"]["password"].value;
    if (username == "" || email == "" || password == "") {
      alert("All fields must be filled out");
      return false;
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
      alert("Not a valid e-mail address");
      return false;
    }
  }