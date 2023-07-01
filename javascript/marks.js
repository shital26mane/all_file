let maths=77
let english=60
let chem=95
let bio=67

let total=maths+english+chem+bio
let per=total/4

	console.log("total is: "+total)
	console.log("percentage is: "+per)

if(per>=35&&per<40){
	console.log("D grade")
}

else if(per>=40&&per<60){
	console.log("C grade")
}

else if(per>=60&&per<80){
	console.log("B grade")
}

else if(per>=80&&per<=100){
	console.log("A grade")
}

else if(per<35){
	console.log("you are fail")
}

else{
	console.log("enter valid marks")
}