/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */



 const encryptPhoneNumber = (number) => {
    //Holds our new cipher string
    let cipher = "";
    //Loops through the string
    for (let i = 0; i < number.length; i++){
      //if i is < 7 to get the first 6 digits
      //check to make sure the - is not turned into *
      //Adds to cipher
      (i < 7 && number[i] != "-") ? cipher += "*" : cipher += number[i];
    }
    //Return our new string
    return cipher;
  };

module.exports.encryptPhoneNumber = encryptPhoneNumber;
