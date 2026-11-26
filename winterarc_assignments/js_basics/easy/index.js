const bag = {}; //defining an empty obj
let fruit = "banana"; // a variable named fruit contains banana 

bag.apple = 3 // appending key => apple using .apple with the bag object and giving it a value 3 
bag[fruit] = 5 // appending "key => [fruit - variable] that contains banana" and giving it a value 5 
 
 //hence in the first appending .apple using dot notation and giving a value pair 3 
 //in the second appending using braces and giving a value pair 5


 let ans = Object.keys(bag);


 for ( let i = 0; i < ans.length; i ++) {
    let result = ans[i];
    console.log(result, bag[result]);
 }