//password characters Array
var numeric = ['1','2','3','4','5','6','7','8','9'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','"','#','$','%','&','’','(',')','*','+','=','@','?'];

//Variable Declaration
var confrimLength = "";
var confrimNumericCharacters;
var confirmUpperCase;
var confirmLowerCase;
var confrimSpecailCharacters;

// Assignment Codes
var generateBtn = document.querySelector("#generate");
function generatePassword () { 
 //Validate length 8-128

 var confrimLength = (prompt("The Characters of your password needs to be between 8-128."));
 //if outside requirment
 while(confrimLength < 8 || confrimLength > 128) {
   alert("The length must be between 8-128 character.Try again!");
   var confrimLength = (prompt("The Characters of your passsword needs to be between 8-128."));
 };
 //User comfirms to have a numeric,uppercase,lowercase and special characters.

var confrimNumericCharacters = confirm ("Click OK to confirm if you would like to include numeric characters");
var confirmUpperCase = confirm ("Click OK to confirm if you would like to include Uppercase characters");
var confirmLowerCase = confirm ("Click OK to confirm if you would like to include lowercase characters");
var confrimSpecailCharacters = confirm ("Click OK to confirm if you would like to include special characters");
  //if answer is no
  while (confrimNumericCharacters === false && confirmUpperCase === false && confirmLowerCase === false && confrimSpecailCharacters === false) {
    alert ("You must choose at least one parameter");
    var confrimNumericCharacters = confirm ("Click OK to confirm if you would like to include numeric characters");
var confirmUpperCase = confirm ("Click OK to confirm if you would like to include Uppercase characters");
var confirmLowerCase = confirm ("Click OK to confirm if you would like to include lowercase characters");
var confrimSpecailCharacters = confirm ("Click OK to confirm if you would like to include special characters");
         
}
  //Password
  var passwordCharacters = []

  if (confrimNumericCharacters) {
    passwordCharacters = passwordCharacters.concat(numeric)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  }

  if (confrimSpecailCharacters) {
  passwordCharacters = passwordCharacters.concat(special)
  }

    // random password generated
    var randomPassword = ""

    for (var i = 0; i < confrimLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwrdCharacters.length)];
      
    }
//show password on page
  return randomPassword;
}


 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);