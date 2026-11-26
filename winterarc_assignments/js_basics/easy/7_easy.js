//filter objects > 50 

const obj = { a: 20, b: 60, c: 40, d: 90 }

let ans = Object.keys(obj)
let newObj = {}

for (let i = 0; i < ans.length; i++) {
    let values = obj[ans[i]];
    let key = ans[i]
    if ( values > 50 ) {
        newObj[key] = values
    }
}

console.log(newObj)