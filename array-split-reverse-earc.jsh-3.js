const arr = [1,2,3,4,5,6,7,8,9]

let count = 3
let splitArr: any = []
let newArr = []

for(let i = 0; i < arr.length + 1; i++) {
    if(i === count) {
        let chkArrSize = arr.slice(count)
        if(chkArrSize.length > 3) {
            count = count + 3
        } else {
            count = count + chkArrSize.length
        }
        let rArr = newArr.sort( (a, b) => b - a )
        splitArr.push(rArr)
        newArr = []
    } {
         newArr.push(arr[i])  
    }
}

let finalArr = []
for(let i = 0; i < splitArr.length; i ++){
    for(let j = 0; j < splitArr[i].length; j ++){
        finalArr.push(splitArr[i][j])
    }
}
console.log(finalArr)
