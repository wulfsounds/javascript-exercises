function removeFromArray(arr){
    let temp = [];
    for (let i = 1; i < arguments.length; i++) {
        temp.push(arguments[i]);
        arr = arguments[0].filter(function(value) {
            return ( value !== temp[i - 1]) ;
        });
    }
    return arr;
}

removeFromArray([1, 2, 3, 4], 3); //Passed!
removeFromArray([1, 2, 3, 4], 3, 2); //Passed!
removeFromArray([1, 2, 3, 4], 7, "tacos"); //Passed!
removeFromArray([1, 2, 3, 4], 7, 2); // Passed!
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); // Passed!
removeFromArray(["hey", 2, 3, "ho"], "hey", 3); // Passed!
removeFromArray([1, 2, 3], "1", 3); // Passed!

// Do not edit below this line
module.exports = removeFromArray;
