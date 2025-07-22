const reverseString = function(string) {
    let input = [...string];
    let output = new Array(input.length).fill("");
    let i, j;
    for (i = 0, j = input.length; i < j; i++, j--) {
        output[i] = input[j];
        output[j] = input[i];
    }
    if (i === j) output[i] = input[i];
    return output.join("");
};

// Do not edit below this line
module.exports = reverseString;
