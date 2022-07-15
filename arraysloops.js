
let coffeeOrder = [
    "caramel",
    "cream",
    "toffee"

]

console.log(coffeeOrder)
console.log(coffeeOrder[2])

coffeeOrder[1] = "Vanilla"

console.log(coffeeOrder[1])

console.log(coffeeOrder.length)

let favDrink = [
    "Dr Pepper",
    "Vimto",
    "Fanta fruit twist"
]

console.log(favDrink[0]);
console.log(favDrink[1]);
console.log(favDrink[2]);

for (let i = 0; i < favDrink.length; i++){
    console.log(favDrink[i]);
}

let cards = ["diamond", "spade", "heart", "club"];
let currentCard = "club";

while(currentCard != "spade"){
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);

//  Activtiy ONE ARRAYS ////////////////////

let favSongs = [
    "Weapon - agasint the current",
    "That wont save us - agasint the current",
    "Happy now - Kygo"
];

console.log(favSongs)

favSongs.push("Honey sweet - Blossoms","Insomnia - Daya");

console.log(favSongs)

favSongs.pop()

console.log(favSongs)

//  Activtiy TWO ARRAYS ////////////////

favSongs.shift();

console.log(favSongs)

//  Activity ONE LOOPS //////////////////

let faveSongs = [
    "Weapon - agasint the current",
    "That wont save us - agasint the current",
    "Happy now - Kygo",
    "Church - Alison Wonderland",
    "Avicii - Levels"
];

faveSongs.push("Someone that loves you -  HONNE", "Moth - Georgia Twinn")

console.log(faveSongs)

let i = 0

while (i < faveSongs.length) {
    console.log(faveSongs[i]);
    i++;
}
console.log(faveSongs)


//  Activtiy TWO LOOPS //////////////



// function randomInteger(min, max) {
//     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }

const rndInt = Math.floor(Math.random() * 50) + 1
    console.log(rndInt)

//  Activtiy THREE LOOPS /////////////

let count = 9
while (count >= 0) {
    console.log(count);
    count -= 1;
}

// Activtiy FOUR LOOPS ///////////////

let movies = [
    "Godzilla",
    "Lord of the rings",
    "Ghostbusters",
    "star wards",
]

// for(let i = 0; i < movies.length; i++){ 
//     if (movies[3] = "Ghostbusters") console.log("yeah is Ghostbusters")
//     else console.log("boo we want ghostbusters");{

//     }
// console.log(movies[i]);
//     }

for(let i = 0; i < movies.length; i++){ 
    console.log(movies[i]);
    }

if(movies[2] == "Ghostbusters"){
    console.log("Yeah its Ghostbusters");
}
else{
    console.log("Boo we want Ghostbusters")
}

//  Actvity FIVE LOOPS //////////////////


let num = 0;
let countt = 0;

while(countt <= 6) {
    num = Math.ceil(Math.random() * 30)
    
    if(num % 7 == 0) {
        console.log(`${num} number is divisable by 7`)
    } else {
        console.log(`${num} number is not divisable by 7`)
    }

    countt++;
}

//  Activtiy SIX LOOPS //////////////


let bobsFollowers = [
    "Michelle",
    "Chris",
    "Nathan",
    "Fiona"]
    
    
let hannahsFollowers = [
    "Nathan",
    "Fiona",
    "Sophie",
    "Billy"]
    
    for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < hannahsFollowers.length; j++){
        if(bobsFollowers[i] == hannahsFollowers[j]) {
        console.log(bobsFollowers[i]);
        }
    }
    }


//  Activity SEVEN LOOPS ///////////


// Example

let result = '';
let ii = 0;

do {ii = ii + 1; result = result + ii;
} while (ii < 5);

console.log(result);
// expected result: "12345"
