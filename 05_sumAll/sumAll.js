const sumAll = function(low, high) {
    if (!(typeof(low) === 'number' && typeof(high) === 'number') || low < 0 || high < 0)
        return 'ERROR';
    var sum = 0;
    for (var i = Math.min(low, high); i <= Math.max(low, high); i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
