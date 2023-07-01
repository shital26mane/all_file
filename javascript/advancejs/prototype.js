let emp={
    name:"shital",
    fun: function ()
    {
        console.log("Hi i am" ,this.name);
    }
}
emp.fun();

let std={
    __proto__:emp,
    lname:"mane",
    fun1: function()
    {
        console.log("hello ",this.name,this.lname);
    }
}
std.fun1()

let a={
    __proto__:std, 
    b: function(){
        console.log("my name is:",this.name,this.lname)
    }  
}
a.b()


let employee={
    __proto__:emp,
    n:"mane",
    fun2:function(){
        console.log("hiiiiii.............",this.name,this.n)
    }
}
employee.fun2()