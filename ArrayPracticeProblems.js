//sort the array and then find the 2nd largest and the 2nd smallest element.

let arrayOfRandomNumbers = [];
for(i = 0; i <= 10; i++){
    randomNumber = Math.floor(Math.random() * 899 + 100);
    arrayOfRandomNumbers.push(randomNumber);
}
arrayOfRandomNumbers.sort();
console.log("Random Numbers : " +arrayOfRandomNumbers);
console.log("Second largest element is " + arrayOfRandomNumbers[9]);
console.log("Second smallest element is " + arrayOfRandomNumbers[1]);