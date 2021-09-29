// Code your solutions in this file
for (let age=30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
}

const gifts = [`sock`, `hat`, `book`];

function giveGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Here is your ${gifts[i]}`);
    }
    return gifts;
}

giveGifts(gifts);



function writeCards(names, event) {
    const realNames = []
    for (let i = 0; i < names.length; i++){
       realNames[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
  return realNames;
}

console.log(writeCards([`Jemmy`,'Phlegmy',`Lemmy`], `Snorgusplek`));

function countDown(x) {
    while (x >= 0) {
        console.log(x)
        x--;
    }
}

countDown(8);