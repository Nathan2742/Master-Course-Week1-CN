
// == Equal
// === Strict equal
// !== not equal
// !===strcit not equal

if (1 === "1"){
    console.log(true);
}
else {
    console.log(false);
}

// let place = "manc";
// let weather ="cloudy";

// if (place == "manc" && weather == "sunny"){
//     console.log("check again");
// }
// else if (place == "manc" && )

//  Activtiy ONE

let age = 21
let country = "UK"

if (age <17 && country == "UK"){
    console.log("Too Young")
} else {
    console.log ("Old Enough to serve")
}

// Activtiy TWO

let topping = "cheese";

switch(topping){
    case "cheese":
    console.log("This is my fave pizza topping");
    break;
case "chicken":
    console.log("I Dont mind Chicken on my pizza");
    break;
}

//  Activtiy THREE
let password = "password!";
let length = password.length;

console.log(length)

if (length === 7){
    console.log(`${password}`)
}
else{
    console.log("Password is to short")
}


// Activtiy FOUR

// let num = 21

// if (num % 2===0){
//     console.log("fizz")
// } 
// else (num % 2 ===0){
//     console.log("buzz")
// }
// COME BACK TO THISssssssssssssss


// Activtiy FIVE

let num = 21221

const isPalindrome = (num) => {
    // Finding the appropriate factor to extract the first digit
    let factor = 1;
    while (num / factor >= 10){
       factor *= 10;
    }
    while (num) {
    let first = Math.floor(num / factor);
    let last = num % 10;
       // If first and last digit not same return false
    if (first != last){
        return false;
    }
       // Removing the first and last digit from number
    num = Math.floor((num % factor) / 10);
       // Reducing factor by a factor of 2 as 2 digits are dropped
    factor = factor / 100;
    }
    return true;
};
console.log(isPalindrome(123241));
console.log(isPalindrome(12321));
console.log(isPalindrome(145232541));
console.log(isPalindrome(1231));

// Activtiy SIX

let time = 9
let placeOfWork = "Gym"
let townOfHome = "Wigan"

if (time == 9){
    console.log(`I am at my place of work the ${placeOfWork}`)
}
else if (time == 8){
    console.log("I am on my way to work")
}
else if(time == 7){
    console.log(`I am at home in ${townOfHome}`)
}
else{
    console.log("huh")
}

// Activtiy SEVEN

console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")

