const palindromes = function (str) {
    const regexIsLetter = /[a-zA-Z0-9]/;
    let letters = str.split("").filter(char => regexIsLetter.test(char)).join("").toLowerCase();
    let i = 0, j = letters.length-1;
    while (i < j) {
        if (letters[i] !== letters[j]) return false;
        i++; j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
