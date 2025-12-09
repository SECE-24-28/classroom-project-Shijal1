let mob={brand:"samsung",model:"galaxy",color:"black"};

console.log(mob);

mob.price=35000
console.log(mob);

//update
mob.price=45000
console.log(mob)

//----------------------------------------------------
console.log(mob.color)
console.log(mob)

let student={sna:"Praveen",age:19,demo:function()
    {
        console.log("Hi I am "+this.sna) //Praveen
    }
}
student.demo()
//---------------------------
let student2={sna:"Prabhu",age:19,samp:()=>
    {
        console.log("Hi I am "+this.sna) //undefind
    }
}
student2.samp()

let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith",age:18,sma:98,fee:false},
             {sna:"Surya",age:17,sma:30,fee:true}
          ]
//console.log(student)
student.forEach((stu)=>{
    console.log("Name: "+stu.sna+" Age: "+stu.age+" Score: "+stu.sma+" Fee Paid: "+stu.fee);
})

let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith",age:18,sma:98,fee:false},
             {sna:"Surya",age:17,sma:30,fee:true}
            ]

let newStu=student.map((stu)=>{
    return {na:stu.sna,ma:stu.sma+2}
})
console.log(newStu)