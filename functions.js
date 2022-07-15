
const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();

const cashWithdrawal = (amount, accnum) => {
    console.log(`withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(2000, 23243423242)
cashWithdrawal(50, 345678)

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7,4)
console.log(addUp(5,5))
console.log(addUp(5,7))
console.log(addUp(30000,72222))


// Declaration
function square(number) {
    console.log(number * number)
}

square(5)

// Expression 

// const square = fucntion(number) {
//     return number * number;
// }

// square(5);


//  Activtiy ONE FUNCTIONS /////////////

// function factorial (n) {
//     if ((n === 0)  || (n === 1 )) {
//         console.log (1);
//     }
//     else {
//         console.log(n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

const factorial = (n) => {
    if ((n === 0)  || (n === 1 )) {
        console.log (1);
    }
    else {
        console.log(n * factorial(n-1));
    }
}

console.log(factorial(3))


//  Activity TWO FUNCTIONS ///////////////////


let orderCount = 0;

const takeOrder = (topping) => {
    console.log(`pizza with ${topping}`);
    orderCount++;
}

takeOrder("pineapple");
takeOrder("Chicken");
takeOrder("Extra Cheeese");
console.log(orderCount);

//  Activtiy THREE FUNCTIONS /////////////


let userPin = 1234;
let userId = 0001;
let userBalance = 500;
let loginFail = 0;

const dispenseCash = (enteredID, enteredPin, withdrawAmount) => {
    if (enteredID === userId) {
        if (enteredPin == userPin && loginFail < 4) {
            console.log("Pin correct. Loading.");
            if (withdrawAmount <= userBalance) {
                console.log(`Withdrawing £${withdrawAmount}.`);
                userBalance -= withdrawAmount;
                console.log(`Your new balance is £${userBalance}.`)
            } else {
                console.log("Not enough cash.");
            }
        } else if (enteredPin != userPin && loginFail < 3) {
            console.log("Pin incorrect. Try again.");
            loginFail++;
        } else {
            console.log("Tried too many times. Account locked.")
        }
    } else {
        console.log("User ID not recognised.")
    }
}

dispenseCash(0001, 1234, 200);