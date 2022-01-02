function sumAll(i, j) {
    // Returns ERROR with non-number parameters; cc: Solution branch in JavaScript exercises.
    if(!Number.isInteger(i) || !Number.isInteger(j)) {
        return 'ERROR';
    }

    // Sums numbers within the range; Works with large numbers;
    let sum = 0;
    if(i < j) {

        while(i <= j) {
            if (i > 0) {
                sum += i;

                // Returns ERROR with negative numbers;
            } else if(i < 0) {
                return 'ERROR';
            }
            i++;
        }
        return sum;

    // Works with larger numbers first;
    } else if(i > j) {
        while(i >= j) {
            sum += i;
            i--;
        }
        return sum;

    // Returns ERROR with non-number parameters; pt. 1 & 2
    }    
}

sumAll(1, 4); // Passed!
sumAll(1, 4000); // Passed!
sumAll(123, 1); // Passed!
sumAll(-10, 4); // Passed!
sumAll(10, "90"); // Passed with condition..
sumAll(10, [90, 1]) // Passed!
// Do not edit below this line
module.exports = sumAll;