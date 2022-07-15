

//  Const protects the data type not the data 
// Objects have no limit on what they can contain

const person = {
    name: "Nathan",
    age: 22,
    hieght:"6ft 1",
    songs: ["That wont save us - agasint the current", "Weapon - agasint the current"]
};

let drinks = [["water",1],["pepsi",1],["coke",2]];
console.log(drinks);
console.log(drinks[0]);
console.log(drinks[0][0]);

person.name;
console.log(person.name);
console.log(person["name"]);


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

