const prices = {pen: 10, book: 50, bag: 200};

let ans  = (Object.keys(prices));


const newObj = {};

for ( let i = 0; i < ans.length; i ++) {
   let doubled = prices[ans[i]] * 2 

    let key = ans[i];
    
    newObj[key] = doubled;
}

console.log(newObj );






//expected output => { pen: 20, book: 100, bag: 400}