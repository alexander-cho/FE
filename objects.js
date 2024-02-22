let user = {
    name: "Alex",
    age: 23
};

// alert(user.name);

function sumOfTripledEvens(myArr) {
    let sum = 0
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] % 2 == 0) {
            const triple = myArr[i] * 3;
            sum += triple;
        }
    }
    return sum;
}

// console.log(sumOfTripledEvens([2, 4, 6, 8, 10]))


const arr = [1, 2, 3, 4, 5];

function addOne(num) {
    return num + 1;
}

// console.log(arr.map(addOne)); // [2, 3, 4, 5, 6]

function isOdd(num) {
    return num % 2 != 0;
}

// console.log(arr.filter(isOdd)); // [1, 3, 5]

total = 1;

// console.log(arr.reduce((total, currentItem) => total * currentItem, 1));


function palindromes(myStr) {
    removedSpaces = myStr.split(" ").join("");
    reversedString = "";
    for (let i = removedSpaces.length; i >=0; i--) {
        reversedString += removedSpaces.charAt(i);
    }
    return removedSpaces == reversedString;
}

console.log(palindromes("Rats live on no evil star".toLowerCase()));



