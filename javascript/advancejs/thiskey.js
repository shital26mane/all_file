//   implicit binding   //
let emp={
    name:"shital",
    fun:function sam(){
        console.log(`hi my name is ${this.name}`);
    }
}
emp.fun()

//  explicit binding   //
function sam(){
    console.log(`hello i am`,this.name);
}
sam.call(emp)


// //   new binding     //
// function fun1(){
//     this.name=null
// }
// let a=new fun1()
// console.log(a)


// //     default binding    //
// function fun2(){
//     console.log(this)
// }
// fun2()