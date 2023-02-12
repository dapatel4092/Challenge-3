// Assignment code here
var generateBtn = document.querySelector("#generate");
var displayPassword = document.querySelector("#display");
var passwordLength = document.querySelector("#password-length");
var uppercaseCharacter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseCharacter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var number

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  var pLength = parseInt(prompt("Enter valid Password Length (8-128)"))
  if( pLength < 8 || pLength < 128 || isNaN(pLength)){
    return "does not meet criteria"
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
