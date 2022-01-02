function reverseString(str) {
    let mirrorStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        mirrorStr += str[i];
    }
    return mirrorStr;
}

reverseString('hello'); // Passed.
reverseString('hello there'); // Passed.
reverseString('123! abc!'); // Passed.
reverseString(''); // Passed.

// Notes: The important thing to remember is the telling the program two variables are synonimous using '+='. 


// Do not edit below this line
module.exports = reverseString;
