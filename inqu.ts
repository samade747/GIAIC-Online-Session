// // import inquirer from 'inquirer';

// // const input1 = await inquirer.prompt([
// //     {
// //         name: 'name',
// //         message: 'What is your name?',
// //         type: 'input',
// //     },
    
// // ]);

// // const input2 = await inquirer.prompt([
// //     {
// //         name: 'age',
// //         message: 'What is your age?',
// //         type: 'number',
// //     },
// // ])
// // let total = input1.age + 5;
// // console.log(`Hello ${input1.name}, you will be ${total} in 5 years.`)

// // // operators 



// // import inquirer from "inquirer"

// // const input1 = await inquirer.prompt({
// //     name:"num 1",
// //     type:"number",
// //     message  :"enter your  first number:",
// // });
// // const input2 = await inquirer.prompt({
// //     name:"num 2",
// //     type:"number",
// //     message :"enter your second number:",
// // })
// // let total: number = input1.num1 + input2.num2;
// // console.log("total:" + total)


// // import inquirer from "inquirer"

// // const answer = await inquirer.prompt({
// //     name:"num 1",
// //     type:"number",
// //     message  :"enter your  first number:",
// // });
// // const answer1 = await inquirer.prompt({
// //     name:"num 2",
// //     type:"number",
// //     message :"enter your second number:",
// // })

// // const answer2 = await inquirer.prompt({
// //   name: "operator",
// //   type: "list",
// //   message: "Choose an operator:",
// //   choices: ["+", "-", "*", "/"],    
// // })



// // import inquirer from "inquirer"
// // import chalk from "chalk"

// // const answer = await inquirer.prompt({
// //     name:"userAnswer",
// //     type:"string",
// //     message: "what is the capital of france:"
// // });
// // function quiz(question:string, correctAnswr:string){
// //     if(answer.userAnswer === correctAnswr.toLowerCase()){
// //         console.log(chalk.green("correct"));
// //     }else{
// //         console.log(chalk.red("wrong"));
// //     }
// // }

// // quiz("what is the capital of france:","parais")




// // import inquirer from "inquirer";
// // import chalk from "chalk";


// // inquirer.prompt({
// //     name: "userAnswer",
// //     type: "input",
// //     message: "What is the capital of France?",
// // }).then((answer) => {
    
// //     quiz(answer.userAnswer, "paris");
// // });

// // // Function to evaluate the answer
// // function quiz(userAnswer: string, correctAnswer: string) {
// //     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
// //         console.log(chalk.green("Correct!"));
// //     } else {
// //         console.log(chalk.red("Wrong!"));
// //     }
// // }


// import inquirer from "inquirer";
// import chalk from "chalk";

// async function promptUser() {
//     const answer = await inquirer.prompt({
//         name: "userAnswer",
//         type: "input", 
//         message: "What is the capital of France?",
//     });

//     quiz(answer.userAnswer, "paris");
// }

// function quiz(userAnswer: string, correctAnswer: string) {
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         console.log(chalk.green("Correct!"));
//     } else {
//         console.log(chalk.red("Wrong!"));
//     }
// }


// // promptUser();



// import inquirer from "inquirer";
// import chalk from "chalk";

// // Function to start the quiz
// function startQuiz() {
//     inquirer.prompt({
//         name: "userAnswer",
//         type: "input",
//         message: "What is the capital of France?",
//     }).then((answer) => {
//         quiz(answer.userAnswer, "paris");
//     });
// }

// // Function to evaluate the answer
// function quiz(userAnswer: string, correctAnswer: string) {
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         console.log(chalk.green("Correct!"));
//     } else {
//         console.log(chalk.red("Wrong!"));
//     }
// }


// startQuiz();
