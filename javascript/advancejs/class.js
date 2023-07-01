class student{
    constructor(firstname,lastname,result){
        this.firstname=firstname,
        this.lastname=lastname,
        this.result=result
    }

    showData(){
        console.log(this.firstname,this.lastname,this.result)
    }
}

let std1=new student("shital","mane","pass")
std1.showData()