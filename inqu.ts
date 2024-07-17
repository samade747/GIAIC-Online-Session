// import inquirer from 'inquirer';

// const input1 = await inquirer.prompt([
//     {
//         name: 'name',
//         message: 'What is your name?',
//         type: 'input',
//     },
    
// ]);

// const input2 = await inquirer.prompt([
//     {
//         name: 'age',
//         message: 'What is your age?',
//         type: 'number',
//     },
// ])
// let total = input1.age + 5;
// console.log(`Hello ${input1.name}, you will be ${total} in 5 years.`)

// // operators 



// import inquirer from "inquirer"

// const input1 = await inquirer.prompt({
//     name:"num 1",
//     type:"number",
//     message  :"enter your  first number:",
// });
// const input2 = await inquirer.prompt({
//     name:"num 2",
//     type:"number",
//     message :"enter your second number:",
// })
// let total: number = input1.num1 + input2.num2;
// console.log("total:" + total)


import inquirer from "inquirer"

const answer = await inquirer.prompt({
    name:"num 1",
    type:"number",
    message  :"enter your  first number:",
});
const answer1 = await inquirer.prompt({
    name:"num 2",
    type:"number",
    message :"enter your second number:",
})

const answer2 = await inquirer.prompt({
  name: "operator",
  type: "list",
  message: "Choose an operator:",
  choices: ["+", "-", "*", "/"],    
})

