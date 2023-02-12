// Assignment code here
var generateBtn = document.querySelector("#generate");
var displayPassword = document.querySelector("#display");
var passwordLength = document.querySelector("#password-length");
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var pLength = parseInt(prompt("Enter valid Password Length (8-128)"))
  console.log(pLength)
  if (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    return "does not meet criteria"
  }

  var acceptUC = confirm("Do you like uppercase letters ?") // True or False
  var acceptLC = confirm("Do you like lowercase letters ?")
  var acceptNum = confirm("Do you like numbers ?")
  var acceptSym = confirm("Do you like symbols ?")
  var validCharacter = []
  console.log("test")
  if (acceptUC) {
    validCharacter = validCharacter.concat(uppercaseCharacter) // 1D array
    // validCharacter.push(uppercaseCharacter) // 2D array
  }
  if (acceptLC) {
    validCharacter = validCharacter.concat(lowercaseCharacter)

  }
  if (acceptNum) {
    validCharacter = validCharacter.concat(number)

  }
  if (acceptSym) {
    validCharacter = validCharacter.concat(symbols)

  }
  if (validCharacter.length === 0) {
    return "error not meeting criteria"
  }
  var password = ""
  for (let i = 1; i <= pLength; i++) { // Iterator starting value, until your termination conditon, increment i++ i=i+1
    var index = Math.floor(Math.random() * validCharacter.length) // 0 to 1
    password += validCharacter[index]
  }

  return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
