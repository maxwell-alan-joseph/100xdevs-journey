//count even and odd number in an array 

let input = [1, 2, 3, 4, 5, 6]
let output = {even}
let key1 = "even"
let key2 = "odd"
let n1 = 0
let n2 = 0
for (let i = 0; i < input.length; i++) {
    
    if (input[i] % 2 == 0) {
        n1++;
    } else {
        n2++;
    }
}

output[key1] = n1;
output[key2] = n2;

console.log(output)