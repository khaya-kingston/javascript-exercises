const removeFromArray = function(arr, ...toRem) {
    
    
    for (const remover of toRem) {
        remDex = arr.indexOf(remover);
        if (remDex === -1) {
            continue;
        } else {
            let out = arr.splice(remDex, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
