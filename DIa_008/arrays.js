const numericArray = [];
const fizzBuzzArray = [];

function fillArray(numeroInicial, numeroFinal) {
    for (let index = numeroInicial; index <= numeroFinal; index++) {
        numericArray[index - numeroInicial] =  index;
    }
}

function fizzbuzzz() {
    numericArray.forEach(function(item, index) {
        let resulChk = '';
    if ((item % 3) + (item % 5) === 0) {
        resulChk = 'fizzbuzz';
    } else if ((item % 3) === 0) {
        resulChk = 'Fizz';
    } else if ((item % 5) === 0) {
        resulChk = 'Buzz';
    } else {
        resulChk = item ;
    }
    fizzBuzzArray[index] = resulChk;
    }

    )
}

fillArray(3, 16);
fizzbuzzz();

console.log(numericArray, fizzBuzzArray)