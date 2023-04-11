//range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
let repeatedNumbers = [];
for(i = 1; i <= 100; i++){
    if(i % 11 == 0){
        repeatedNumbers.push(i);
    }
}
console.log("Repeated numbers from 1 to 100 are :"+ arrayOfRepeatedNumbers);
