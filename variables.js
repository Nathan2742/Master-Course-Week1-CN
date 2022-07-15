
console.log("All Around The World".charAt(8).toUpperCase());

let i = 10;
console.log(i)
i = i + 2;
console.log(i)
i += 2;
console.log(i)

let favouriteDrink ="coffee"
console.log(favouriteDrink)
console.log("My Fave Drink Is " + favouriteDrink)
console.log(`My Fave Drink Is ${favouriteDrink}`)

// Activity One

let name = "Nathan"
let age = 22
let faveColor = "Black"

console.log(`My name is ${name} I am ${age} years old, if you must know my fave color is ${faveColor}.`)

name = "Chrissy"
age = 26
faveColor = "Blue"

console.log(`My name is ${name} I am ${age} years old, if you must know my fave color is ${faveColor}.`)

//  Activity Two

let breakFast = "Toast"
let lunch = "Chicken toastie"
let dinner = "Pizza"

console.log(`Today I had ${breakFast} for my breakfast, ${lunch} for my lunch and ${dinner} for my dinner.`)

breakFast = "Cheese toast"
lunch = "Protien shake"
dinner = "Chicken and rice"

console.log(`Tomorrow I will have ${breakFast} for my breakfast, ${lunch} for my lunch and ${dinner} for my dinner.`)

//  Activity Three

let todayDate = new Date().getTime();
let birthday = new Date(23/10/1999).getTime();

let dateDifference = Math.floor((todayDate - birthday)/(1000 * 60 * 60 *24))

console.log(dateDifference)


// let Difference_In_Time = birthday.getTime() - todayDate.getTime();
// let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// console.log(Difference_In_Days)
//  COME BACK TO THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

//  Activity Four

let space1 = "x"
let space2 = "O"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "O"
let space8 = " "
let space9 = " "

console.log(`   |    |      `)
console.log(` ${space1} | ${space2}  | ${space3}    `)
console.log(`   |    |      `)
console.log(`------------`)
console.log(`   |    |      `)
console.log(` ${space4} | ${space5}  | ${space6}    `)
console.log(`   |    |     `)
console.log(`------------`)
console.log(`   |    |      `)
console.log(` ${space7} | ${space8}  | ${space9}    `)
console.log(`   |    |      `)