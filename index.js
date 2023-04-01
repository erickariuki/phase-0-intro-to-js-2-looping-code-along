// Code your solutions in this file
var namesArray = ["Guadalupe", "Ollie", "Aki"];
var event = "birthday"
var cards = [];

function writeCards(namesArray, event){
   
    for(var i = 0; i < namesArray.length; i++){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);

    }

    return cards;
}

function countDown(num) {
    while (num >= 0){
        console.log(num);
        num--;
    }
}

countDown(num)