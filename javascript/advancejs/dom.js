
//____dom get methods____//

//1] inner text   //
// let inrtext=document.getElementById('head').innerText="hello everyone";
// console.log(inrtext);
// document.getElementById('head').style.backgroundColor="yellow"

//2] inner html  //
// let inrhtml=document.getElementsByClassName('container')
// inrhtml.inerHTML="<h1>my name is shital</h1>"
// console.log(inrhtml);

//3]  get atribute   //
// let getatr=document.getElementById("head").getAttribute('name')
// console.log(getatr);

//4] get attributenode  //
// let atrnd=document.getElementById("head").getAttributeNode('name')
// console.log(atrnd);

//5] attribute  //
// let atr=document.getElementById('container').attributes[0]; 
// let atr=document.getElementById('container').attributes[1].name; 
// console.log(atr);

//...........................//

//  append child  //
let list=document.getElementById('list')

let li=document.createElement('li')
console.log(li);

let litxnode=document.createTextNode("hi...")
li.appendChild(litxnode)

list.appendChild(li)
console.log(li);

list.removeChild(li);
console.log(li);

 forword  //
function forword(){
    history.forward;
}

backword  //
function backword(){
    history.back;
}



 