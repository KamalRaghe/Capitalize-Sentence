const arr = [0,1,2,3,4]
const size = 2
const BigArray = []

for(let i = 0; i < arr.length; i += size){
    const subarray = (arr.slice(i, i + size))
    BigArray.push(subarray)
}

console.log(BigArray)