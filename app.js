const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const form = document.getElementById("form");
var expr = /^(0|91)?[6-9][0-9]{9}$/;


// for signup 
var name = document.getElementById("uname");
  var email = document.getElementById('uemail');
  var number = document.getElementById('unumber');
  var pwd = document.getElementById('password');
  var cfm_pwd = document.getElementById('confirmPassword');


function validations() {
  

  if (!expr.test(number.value)) {
    alert("invalid mobile number.");
    return false;
  }


if (pwd.value !== cfm_pwd.value) {
	alert("Password is not matched");

	return false;  
	}
}

form.addEventListener('submit', (e)=>{

if (pwd.value !== cfm_pwd.value) {
e.preventDefault()
return false;
}

if (!expr.test(number.value)) {
e.preventDefault()
return false;
}
})
