var prompt=require("prompt-sync")();
const maxlitre=100;
var givenlitre=prompt("Enter the litre you want to fill in the tank:");
if(givenlitre!=0){
    
if(givenlitre<maxlitre){
    console.log("You can fill the tank");
}
else if(givenlitre>maxlitre){
    console.log("You cannot fill the tank");
}
 else{
    console.log("Tank is full");
}
}else{
    console.log("You have entered 0 litre, so you cannot fill the tank");
}
console.log("Thank you for using our service");