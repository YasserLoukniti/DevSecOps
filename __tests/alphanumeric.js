
    module.exports.isAlphaNumeric = function check (userInput) {
    console.log(userInput);
    if(/^[a-zA-Z0-9]+$/.test(userInput)) {
    return 'true';
    }
    console.log("Please enter only numbers and letters. No special character!")
    return 'false';
    }
  
  
  

