
//______asynchrnous function____//
function fun (a){
    a();
    console.log('this is fun function');
}
fun(fun1);
function fun1(){
    console.log('this is fun1 function');
}


//_____asynchronous function ex1______//
function fun2(b){
    setTimeout(b,3000)
    console.log('this is fun2 function');
}
fun2(fun3);
function fun3(){
    console.log('this is fun3 function');
}



