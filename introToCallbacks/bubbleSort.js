const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {

}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}`, response => {
        if (response === 'yes') {
            callback(true);
        }
        else {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
            if (isGreaterThan) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                madeAnySwaps += 1;
                console.log(`${arr}`);
                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            } 
        });
    } else if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

// innerBubbleSortLoop([5,3,0], 0, 0, function() {
//     console.log("In outer bubble sort")
// })

