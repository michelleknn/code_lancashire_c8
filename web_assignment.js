console.log("hello world")

/////////////// CREATING VARIABLES (like creating a memory) /////////////// 

let number1 = 20
    /* let = keyword; number1 = variable (you name yourself. 
    it can be anything as long as it complies with the rules of 
    Javasript's syntax; =20 = value */

number1 = 50
    // "let" allows you to change the value later. so this will change it 

const number2 = 30
    /* the keyword const means constant so when you create a 
    variable with const you cannot change the value down the 
    road, it will show as error */

console.log(number1) //this prints the results in console
console.log(number2)

/////////////// OPERATORS /////////////// 

/////arithmatic operators (numbers)
let sum = number1 + number2 + number2 + 10
let sub = number2 - number1 - 10
let mul = number1 * number2
let div = number2 / number1 // '/' = division operator
let remainder = number2 % number1 // '%' = remainder of the division
    /*useful for when you need some logic dependent on it being either 
    odd or even number */

    //to print the results in one line 
console.log(sum, sub, mul, div, remainder)

/////conditional operators (true/false; '==' to compare if its the same values)
let price = 100
let orderedBefore = false
let shouldGetDiscount = price > 50 && !orderedBefore
    // the addition of '!' before a boolean value, it flips it so if it was true it will be false 
    // '&&' means only if both coditions are met 
if(shouldGetDiscount == true)
{
    console.log("You get a discount, i get a discount, EVERYONE GETS A DISCOUNT")
}





/////String operators 
let message1 = "You got a discount of "
let discount = 10
console.log(message1 + 10 + "%")
    // if you want to join strings with space between them just add (+ "  " +)
console.log(`You got a discount of ${discount} %`)
    /* to sub in a variable in the final print out, you the following template 
    syntax where inside the bracket you frame the message in BACK TICK (between
    the left shift key and z key) and use ${VariableName} */

/////////////// CREATING OBJECTS /////////////// 
// object {}
// arrays [] 

let item = {
    name: "Laptop",
    price: "10000",
    stock: 10,
    specifications:{
        ram: "32GB",
        storage: "1TB"
    },
    available_colours: ['black', 'silver', 'white', 'gold'] //** This starts counting from 0 (e.g., white is the 2nd element)
}
    //this creates ONE object just with multiple attributes 

console.log(item)

//// accessing object properties 
console.log(item.price)
    //goal: within the item just fetch me the price of it 
console.log(item.specifications.storage)
    //add the attribute after the full stop to fetch it

const colors = ['black', 'white', 'silver', 'gold']

console.log("length of array", colors.length)
console.log(item.available_colours[3])


