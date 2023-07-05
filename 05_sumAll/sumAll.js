const sumAll = function(num1, num2) {
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let outNum = 0;

    for (let i = Math.min(num1, num2); i < Math.max(num1, num2)+1; i++) {
        outNum += i;
    }

    return outNum;



};

// Do not edit below this line
module.exports = sumAll;
