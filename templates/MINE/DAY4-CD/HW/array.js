// let x=["array","string","mode"]
// x.splice(0,1)
// console.log(x)

// splices and replace the new elements
let y=["array","string","mode","horn"]
y.splice(0,2,"hand","job")
console.log(y)

// creates a new array from the removed elements
let newarray=y.slice(1,3)
console.log(newarray)

// adds at the end
y.push("last")
console.log(y)

// adds at the beginning
y.unshift("ohyeahhh")
console.log(y)

// removes specific index but leaves empty
delete y[2]
console.log(y)


// removes from the end
y.pop()
console.log(y)