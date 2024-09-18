const arr = 'kamal ahmed raghe'  
const size = 2
const BigArray = []

for(let word of arr.split(' ') ){
    const subarray = word[0].toUpperCase() + word.slice(1)
    BigArray.push(subarray)
}

console.log(BigArray.join(' '))