

//  Const protects the data type not the data 
// Objects have no limit on what they can contain

// const person = {
//     name: "Nathan",
//     sayHi: "Hello my name is",
//     age: 22,
//     hieght:"6ft 1",
//     songs: ["That wont save us - agasint the current", "Weapon - agasint the current"]
// };

// let drinks = [["water",1],["pepsi",1],["coke",2]];
// console.log(drinks);
// console.log(drinks[0]);
// console.log(drinks[0][0]);

// person.name;
// console.log(person.name);
// console.log(person["name"]);


const weekendAlarm = {
    weekend: "No alarm needed",
    weekdayAlarm: "GET UP AT 7AM LAZY",
};

let day = "monday"
let alarm = "7 AM"

if ((day === "Saturday") || (day ==="Sunday")){
    console.log(weekendAlarm.weekend)
}
else{
    console.log(weekendAlarm.weekdayAlarm)
}

const favSongs = [
    "Weapon - agasint the current",
    "That wont save us - agasint the current",
    "Happy now - Kygo",
    "Church - Alison Wonderland",
    "Avicii - Levels"
];

//  Activtiy ONE OBJECTS ///////////

const person = {
    name: "Nathan",
    age: 22,
    hieght:"6ft 1",
    songs: ["That wont save us - agasint the current", "Weapon - agasint the current"],
    sayHi(){
        console.log(`Hello my name is ${person.name}`)
    }
};

console.log(person.sayHi());




//  Activtiy TWO OBJECTS /////////////


const pet = {
    petName: "Tim Tom",
    typeOfPet: "Cat",
    age: 17,
    color: "Black and white",
    eatAndDrink(){
        console.log(`${pet.petName} is eating Chicken and drinking water`)
    }
};

console.log(pet.eatAndDrink());


// Activty THREE OBJECTS ////////////////

let drinks = "coffee2"
let food = "pizza"

const coffeeShop = {
    branch: "Costa",
    drinks: ["coffee", 1, "coffee2", 2.4],
    food: ["pizza", 9.99, "burger", 12.99],
    drinksOrdered() {
        if (drinks === "coffee"){
            console.log(`Your drink order is ${coffeeShop.drinks[0]} total cost is £${coffeeShop.drinks[1]}`)}
        else {
            console.log(`your drink order is ${coffeeShop.drinks[2]} and the total cost is £${coffeeShop.drinks[3]}`)
        }
    },
    foodOrder(){
        if (food === "pizza"){
            console.log(`Your food order is ${coffeeShop.food[0]} total cost is £${coffeeShop.food[1]}`)}
        else {
            console.log(`your food order is ${coffeeShop.food[2]} and the total cost is £${coffeeShop.food[3]}`)
        }
    }
};

console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrder())