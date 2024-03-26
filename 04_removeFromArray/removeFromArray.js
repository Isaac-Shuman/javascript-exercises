const removeFromArray = function(array, ...args) {
    res = array;
    for (const arg of args)
    {   
        var index = res.indexOf(arg);
        while (index != -1) {
        res.splice(index, 1);
        index = res.indexOf(arg);
        }
    }
    return res;
};


// Do not edit below this line
module.exports = removeFromArray;
