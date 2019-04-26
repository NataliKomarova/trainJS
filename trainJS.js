function triangleCycle() {
    let str = '';
    for (let i = 0; i < 7; i++) {
        str += '#';
        console.log(str);
    }
}

//triangleCycle();

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

//FizzBuzz();

function FizzBuzzPro() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log('FizzBuzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

//FizzBuzzPro();

function chessBoard() {
    let str = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    str += '#';
                }
                else {
                    str += ' ';
                }
            } else {
                if (j % 2 == 0) {
                    str += ' ';
                }
                else {
                    str += '#';
                }
            }
        }
        str += '\n';
    }
    console.log(str);
}

//chessBoard();

function isEven(n) {
    if (Number.isInteger(n)) {
        if (n < 0) {
            n = -n;
        }
        if (n == 0) {
            return true;
        }
        else if (n == 1) {
            return false;
        }
        else {
            return isEven(n - 2);
        }
    } else return false;
}

//console.log(isEven(50));

function range(start, end) {
    let result = [];
    if (Number.isInteger(start) && Number.isInteger(end)) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    }
    return result;
}

//console.log(range(3, 13));

function sum(arrayForSum) {
    let result = 0;
    arrayForSum.forEach(element => {
        result += element;
    });
    return result;
}

//console.log(sum(range(6, 13)));

function reverseArray(directOderArray) {
    let reverseOrderArray = [];
    for (let i = directOderArray.length - 1; i >= 0; i--) {
        reverseOrderArray[directOderArray.length - 1 - i] = directOderArray[i];
    }
    return reverseOrderArray;
}

//console.log(reverseArray(range(6, 13)));

function reverseArrayInPlace(arrayToReverse) {
    for (let i = 0, j = arrayToReverse.length - 1; i < arrayToReverse.length / 2, j >= arrayToReverse.length / 2; i++ , j--) {
        let container = arrayToReverse[i];
        arrayToReverse[i] = arrayToReverse[j];
        arrayToReverse[j] = container;
    }
    return arrayToReverse;
}

//console.log(reverseArrayInPlace(range(1, 9)));

function arrayToList(array) {
    let list = { next: null };
    for (let i = array.length - 1; i >= 0; i--) {
        list.value = array[i];
        list = { next: list };
    }
    list = list.next;
    return list;
}

// let newList = arrayToList(range(1, 9));
// while (newList) {
//     console.log(newList.value);
//     newList = newList.next;
// }

function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.next;
    }
    return array;
}

//console.log(listToArray(arrayToList(range(1, 9))));

function prepend(list, elem) {
    //let newList = elem;
    elem.next = list;
    return elem;
}

// let newList = arrayToList(range(1, 9));
//  let newElem = arrayToList(range(1, 1));
// newList = prepend(newList, newElem);
// while (newList) {
//     console.log(newList.value);
//     newList = newList.next;
// }

function nth(list, index) {
    if (!list) {
        return undefined;
    }
    if (index == 0) {
        return list;
    }
    return nth(list.next, index - 1);
}

//  let newList = arrayToList(range(1, 3));
//  console.log(nth(newList, 1));

function deepEqual(firstElem, secondElem) {
    if (firstElem === secondElem) {
        return true;
    } else
    if (typeof (firstElem) === "object" && firstElem && typeof (secondElem) === "object" && secondElem) {
            if(Object.keys(firstElem).length != Object.keys(secondElem).length)
                return false;
            for(var element in firstElem)
                if (!secondElem.hasOwnProperty(element) || !deepEqual(firstElem[element], secondElem[element]))
                    return false;
    }
    else
        return false;
    return true;
}

 console.log(deepEqual([5, 6, 7], [5, 6, 0]));
//console.log(deepEqual({'1': 1, '2': {'f':3}}, {'1': 1, '2': {'f':2}}));