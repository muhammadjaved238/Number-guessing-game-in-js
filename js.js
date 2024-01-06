let userNum= parseInt( prompt("enter the number"))
let randomNum= Math.floor(Math.random()*10 +1);
console.log(randomNum);
document.write(randomNum);
if(userNum===randomNum){
     console.log("the number is found")
}
else{
     console.log("number is not found")
}