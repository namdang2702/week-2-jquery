//Node needs to be installed.
//Open "Terminal" window.
//At the Terminal prompt type: node test
//Press "enter". 
//See result from the console logs.


// simple methods can go straight into the console.log
console.log("1.",!isNaN("age"))
console.log("2.",isNaN("123"))
console.log("3.",isNaN("Hopper") && isNaN("r"))
console.log("4.",isNaN("Hopper") && isNaN("123"))
console.log("5.",isNaN("Hopper") || isNaN("123"))

//         embedded javascript
//notice: the logic of any javascript can be checked but to get output showing in the terminal you need to use a console.log().

const rate = 5;

if ( isNaN(rate) ) {
    console.log ("You did not provide a number for the rate.");
} else if ( rate < 0 ) {
    console.log ("The rate may not be less than zero.");
} else if ( rate > 12 ) {
    console.log ("The rate may not be greater than 12.");
} else {
    console.log ("The rate is: " + rate + ".");
}


