/* 

Write a function that accepts a string as argument

the function should only capitalize every other letter in the string

return converted string

*/

function capitalizeEveryOther(myString) {
    let res = "";
    for (let i=0; i < myString.length; i++) {
        if (i % 2 == 1) {
            res += myString[i].toUpperCase();
        } else {
            res += myString[i];
        }
    }
    return res;
}

console.log(capitalizeEveryOther('hithisisalexspeakingnow'));