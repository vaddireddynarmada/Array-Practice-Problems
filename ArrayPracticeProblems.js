//Generates 10 Random 3 Digit number.
let Random;
console.log("10 Random 3 Digit number")
for(i=0;i<10;i++){
    Random=Math.floor(Math.random() *900)+100;
    console.log(Random);
}
//Store this random numbers into a array.
let arrayOfRandomNumbers = [];
for (i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 900 + 100);
    arrayOfRandomNumbers.push(randomNumber);
}
console.log(arrayOfRandomNumbers);
//find the 2nd largest and the 2nd smallest element without sorting the array.
largest=arrayOfRandomNumbers[0];
secondlargest=arrayOfRandomNumbers[0];
secondSmallest=arrayOfRandomNumbers[0];
for(i=0;i<=10;i++){
    if(arrayOfRandomNumbers[i] > largest){
    sec_largest=(largest);
		largest=(arrayOfRandomNumbers[i]);
    }
    if(arrayOfRandomNumbers[i]>secondlargest && arrayOfRandomNumbers[i] != largest){
 secondlargest=(arrayOfRandomNumbers[i]);
    }
}
console.log("Second Largest "+secondlargest);
for(i=0;i<=10;i++){
    if(arrayOfRandomNumbers[i] < largest){
        secondSmallest=(largest);
		largest=(arrayOfRandomNumbers[i]);
    }
    if(arrayOfRandomNumbers[i]<secondSmallest && arrayOfRandomNumbers[i] != largest){
        secondSmallest=(arrayOfRandomNumbers[i]);
    }
}
console.log("secondSmallest "+secondSmallest);