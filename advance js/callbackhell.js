let a={
    firstname:'shital',
    middlename:'Ramchandra',
    lastname:'mane'
}
let fn,mn,ln;
function detail(){
    setTimeout(() => {
        fn=a.firstname;
        console.log("first name:"+fn);

        setTimeout(() => {
            mn=a.middlename;
            console.log("middle name:"+mn);

            setTimeout(() => {
                ln=a.lastname
                console.log("last name:"+ln);
            }, 3000);
        }, 2000);
    }, 1000);   
}
detail();
