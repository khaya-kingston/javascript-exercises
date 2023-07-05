const reverseString = function(str) {
    
    i = str.length - 1;

    outStr = "";

    while (i > -1) {
        outStr += str[i];
        i--;
    }

    return outStr;


};

// Do not edit below this line
module.exports = reverseString;
