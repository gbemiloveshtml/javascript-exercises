const reverseString = function(string) {
    let array = string.split("")
    let reversal = array.reverse()
    let reversedString = reversal.join('')
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
