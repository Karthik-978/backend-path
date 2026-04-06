contact=true;
email=true;
card_details=true;
if(contact && email && card_details){
    console.log("Purchase successful");
}   
else if(contact && email && !card_details){
    console.log("Please provide your card details to complete the purchase");
}

