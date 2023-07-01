class emp{
    constructor(b){
        this.basic=b;
    }
    calculate(){
        let da,ra,pf,gp,np
        da=25/100*this.basic
        console.log("dearness allowance:"+da);

        ra=15/100*this.basic
        console.log("house rent:"+ra);

        pf=8.33/100*this.basic
        console.log("provident fund:"+pf);

        np=this.basic+da+ra
        console.log("net pay:"+np);
        
        gp=np-pf
        console.log("gross pay:"+gp)
    }
}
let e=new emp(20000)
e.calculate()