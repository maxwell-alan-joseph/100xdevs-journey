//count word occurences in an array 

let input = ["apple", "banana", "apple", "orange", "banana", "apple"];
let output = {}



for (let i = 0; i < input.length; i++) {
   let word = input [i]

   if(output[word] === undefined) {
    output[word] = 1;
   } else {
    output[word] ++;
   }
}

console.log(output)