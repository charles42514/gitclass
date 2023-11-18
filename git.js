const firstName = "charles"
const job = " developer "
const level = " senior "
const node = 28
const ppd = 5000
const expression = `mr ${firstName} will earn ${node*ppd} this November`
const sentence = "mr " + firstName + " is an awesome " + level +  job
console.log(sentence)
const newSentence = `mr ${firstName} is an awesome ${level} ${job}`
console.log(newSentence)
console.log(`
GoMyCode
React Js 
Node Js
mongo Db
`)
// console.log(expression)
// const age = 17
// const InecChecker = (age<18) ? console.log("You are not eligible to vote") : console.log("You are eligible to vote")
// console.log(InecChecker)
// const age = 65
// const OzoneTicketting = (age<20) ? console.log("Ticket is 5000") : console.log("Ticket is 20000");
// console.log(OzoneTicketting);
// const age = 70
// const silverBird = (age>=1 && age<=10 ) ? console.log("Ticket is free") :
                //    (age>=11 && age<=20) ? console.log("Ticket is 2000") :
                //    (age>=21 && age<=30) ? console.log("Ticket is 5000") :
                //    (age>=31 && age<=50) ? console.log("Ticket is 10000"):
                //    console.log("Ticket is 1000");
// const age = 10000
// const parliative = (age>=1 && age<=10 ) ? console.log("parliative is 5000") :
//                    (age>=11 && age<=20) ? console.log("Parliative is 10000") :
//                    (age>=21 && age<=36) ? console.log("Parliative is 20000") :
//                    (age>=37 && age<=55) ? console.log("Parliative is 50000") :
//                    (age>=56 && age<=70) ? console.log("Parliative is 70000") :
//                    console.log("Parliative is 100000");
// const sayHello = (name)=>{
    // return `hello, ${name}`;
    // console
// }
// const profit = (cp, sp) => {
//     return sp - cp;
// }
// console.log(profit(10000, 50000));

// const percentageProfit = (cp, sp) => {
//     return (sp - cp)/cp * 100;
// }
// console.log(percentageProfit(10000, 50000));

const cube = (number) => {
    return number**3
}
console.log(cube(12));

const cubePro = number => number**3
console.log(cubePro(12));