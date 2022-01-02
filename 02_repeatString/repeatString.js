// Test in terminal using $ npm test exerciseName.spec.js

const number = Math.floor(Math.random() * 1000)

function repeatString(str, num) {
    let reString = '';
    if(num === -1) {
        return 'ERROR'
    }
    while(num > 0) {
        reString += str;
        num--;
    }
    return reString;
}

repeatString('hey', 3); // Passed.
repeatString('hey', 10); // Passed.
repeatString('hey', 1); // Passed.
repeatString('hey', 0); // Passed.
repeatString('hey', -1); // Passed.
repeatString('hey', number) //Passed.
repeatString('', 10) // Passed.

// Do not edit below this line
module.exports = repeatString;
