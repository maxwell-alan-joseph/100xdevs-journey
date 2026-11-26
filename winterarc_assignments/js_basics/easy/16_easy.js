//count even and odd number in an array 

let input = [1, 2, 3, 4, 5, 6]
let output = {even:0 , odd: 0 }

for (let i = 0; i < input.length; i++) {
    
    if (input[i] % 2 === 0) {
        output.even ++ ;
    } else {
        output.odd++;
    }
}


console.log(output)