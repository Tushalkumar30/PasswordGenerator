const passwordBox = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "&*#@!$%^()[]{}/|:;,.<>?-_=+~";
const number = "1234567890";
const allChars = upperCase + lowerCase + symbol + number;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];
    while( password.length < 10){
        password +=allChars[Math.floor(Math.random() *allChars.length)];
    }
    passwordBox.value = password;

}

// Function for copy
function copyPassword() {
    const passwordBox = document.getElementById("password");
    // Select the text inside the password input
    passwordBox.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    // Deselect the text
    window.getSelection().removeAllRanges();
    copied();
}
function copied(){
    alert("Copied");
}
