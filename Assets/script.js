// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  var confrimLength = (prompt("How many Characters do you want in your password? Choose between 8-128 Characters."));
  //if outside requirment
  while(confrimLength < 8 || confrimLength > 128) {
    alert("Password length must be between 8-128 characters long! Try again");
    var confrimLength = (prompt("How many Characters do you want in your password? Choose between 8-128 Characters."));
  };

  

}

 




// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
