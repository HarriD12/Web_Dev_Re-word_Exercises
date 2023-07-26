 
function fuel(){

    let price= cost.value || PetrolPrice;
    let amount= cost2.value || PetrolAmount;
    let total= PetrolPrice * PetrolAmount; // meant to calculate the total price 

    // output it and  creates the calculations to get the total amount 
    document.getElementById("cost").innerHTML = price;
    document.getElementById("cost2").innerHTML= amount;
    document.getElementById("dataTotal").innerHTML= total;
}


let price= inputPrice.value || PetrolPrice;
let amount= amountinput.value || PetrolAmount;

//sets each value as a default for both petrol and the amount 
const PetrolPrice= 1.72; 
const PetrolAmount= 0;