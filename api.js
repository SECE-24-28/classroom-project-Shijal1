// javascript uses promises for handling asynchronous operations.
// 3 states of a promise
// a promise always has three states:
// 1.pending->promise working
// 2.fulfilled->promise successful
// 3.rejected->promise failed
let rs=fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
// console.log("data");
return rs.json();
}).then(user=>{
    console.log(user);
},2000);
console.log(rs);
console.log(user);
