const repeatString = function(str, num) {

    if (num < 0) {
        return "ERROR";
    }

    let outString = "";

    for (let i = 0; i < num; i++) {
        outString += str;
    }

    return outString;

};

// Do not edit below this line
module.exports = repeatString;
