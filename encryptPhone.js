/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */



  function encryptPhoneNumber(number) {
    //Holds our new encrypted string
    let encrypted = "";
    //Loops through the string
    for (let i = 0; i < number.length; i++){
      //Checks if i is < 7 to get the first 6 digits
      //Also checks to make sure the - is not turned into *
      //Adds to encrypted
      (i < 7 && number[i] != "-") ? encrypted += "*" : encrypted += number[i];
    }
    //Return our new string
    return encrypted;
  };


//   module.exports = encryptPhoneNumber; 
export default encryptPhoneNumber;
console.log(encryptPhoneNumber("718-987-6543"));