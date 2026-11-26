const obj = {name: "jpse", 
            age: 23, 
            gender: "male"

}



console.log(obj["name"]);





let arrOfObj = Object.keys(obj)

//console.log(arrOfObj);

for ( let i = 0; i < arrOfObj.length; i ++) {
    let soln = arrOfObj[i]
   //console.log(soln, obj[soln])
}