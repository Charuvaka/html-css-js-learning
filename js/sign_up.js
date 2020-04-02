'use strict';
var users;

function validatePassword() {
    var password = document.getElementById("password").value;
    var digitPattern = /\d/g;
    var digitInPassword = password.match(digitPattern);
    if(password !== "" && password.length < 8) {
        alert("Password should contain minimum of 8 characters");
    } else if(password !== "" && digitInPassword == null) {
        alert("Password Should atleast contails one Digit")
    }
}

function confirmPassword() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if(password !== confirmpassword && confirmPassword !== "") {
        alert("Confirm Password is not the same as Password.. retry!");
    }
}
function validate() {
    var emailid = document.getElementById("emailid").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if(emailid == "") {
        alert("Plese Enter Email Id");
    }
    sign_up_or_login()
}
function sign_up_or_login(login) {
}