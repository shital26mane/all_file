
let emp={
    [Symbol.iterator]:function(){
        count=0;
        let sam={
            next:function(){
                count++;

                if(count==1){
                    return{value:"shital",done:false}
                }
                else if(count==2){
                    return{value:"sanika",done:false}
                }
                else if(count==3){
                    return{value:"mansi",done:false}
                }
                else{
                    return{value:"abc",done:true}
                }
            }
        }
        return sam;
    }
}
        for(e of emp){
            console.log(e);
        }





