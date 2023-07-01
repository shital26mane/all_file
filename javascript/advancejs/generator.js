function* functionemp(){
    yield"shital"
    yield"mansi"
    yield"snika"
    yield"pragati"
}
let obj=functionemp()
{
    for(o of obj)
    console.log(o);
}