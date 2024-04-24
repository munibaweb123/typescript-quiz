import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([{
        name: "typescript",
        type: "list",
        message: "please select level?",
        choices: ["Basic", "intermediate", "advance"]
    }]);
if (quiz.typescript === "Basic") {
    let correctanswer = 0;
    let questions = 1;
    while (questions <= 10) {
        const q1 = await inquirer.prompt([{
                name: "firstQuestion",
                type: "list",
                message: "TypeScript is:",
                choices: ["A- A front-end web application framework",
                    "B- A superset of JavaScript",
                    "C- A cross-platform JavaScript run-time environment for executing JavaScript",
                    "D- A testing framework for JavaScript"]
            }]);
        if (q1.firstQuestion === "B- A superset of JavaScript") {
            console.log(`Correct Answer!`);
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q2 = await inquirer.prompt([{
                name: "secondQuestion",
                type: "list",
                message: `What we type before ${chalk.blue `Helloworld.ts`} to run the TypeScript compiler and compile Typescript file into java script file:`,
                choices: ["A- tsc",
                    "B- node",
                    "C- run",
                    "D- npm"]
            }]);
        if (q2.secondQuestion === "A- tsc") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q3 = await inquirer.prompt([{
                name: "thirdQuestion",
                type: "list",
                message: "What is the output of the following code:\n let a:any=true;\n let b:any=10;\n console.log(a+b) ",
                choices: ["A- 10",
                    "B- NaN",
                    "C- 11",
                    "D- true10"]
            }]);
        if (q3.thirdQuestion === "C- 11") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q4 = await inquirer.prompt([{
                name: "forthQuestion",
                type: "list",
                message: "What is the output of the following code:\n let message=\"Hello World\" \n console.log(message);",
                choices: ["A- message",
                    "B- Hello World",
                    "C- syntax error",
                    "D- none of the above"]
            }]);
        if (q4.forthQuestion === "B- Hello World") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q5 = await inquirer.prompt([{
                name: "fifthQuestion",
                type: "list",
                message: "Which of the following file extension is used by Typescript to store source code?",
                choices: ["A- .js",
                    "B- .tsc",
                    "C- .tsd",
                    "D- .ts"]
            }]);
        if (q5.fifthQuestion === "D- .ts") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q6 = await inquirer.prompt([{
                name: "sixthQuestion",
                type: "list",
                message: "Is typescript is strong typed",
                choices: ["true", "false"]
            }]);
        if (q6.sixthQuestion === "true") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q7 = await inquirer.prompt([{
                name: "seventhQuestion",
                type: "list",
                message: "Typescript is used to generate what type of code?",
                choices: ["A- C#",
                    "B- Java",
                    "C- JavaScript",
                    "D- C++"]
            }]);
        if (q7.seventhQuestion === "C- JavaScript") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q8 = await inquirer.prompt([{
                name: "eighthQuestion",
                type: "list",
                message: "Which type of error in this code?\n lett a:number=4;",
                choices: ["A- syntax error",
                    "B- type error",
                    "C- assignability error",
                    "D- none of the above"]
            }]);
        if (q8.eighthQuestion === "A- syntax error") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q9 = await inquirer.prompt([{
                name: "ninthQuestion",
                type: "list",
                message: "What will be the output of the following:\n let x=3;\nlet y=3;\nconsole.log(x**y) ",
                choices: ["A- 9",
                    "B- 27",
                    "C- 3",
                    "D- none of the above"]
            }]);
        if (q9.ninthQuestion === "B- 27") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
        const q10 = await inquirer.prompt([{
                name: "tenthQuestion",
                type: "list",
                message: "What will be the output of the following:\nconsole.log(x)\nx=5 ",
                choices: ["A- 5",
                    "B- undefined",
                    "C- error",
                    "D- none of the above"]
            }]);
        if (q10.tenthQuestion === "B- undefined") {
            console.log(chalk.green(`Correct Answer!`));
            correctanswer++;
            questions++;
        }
        else {
            console.log(chalk.red(`Wrong Answer!`));
            questions++;
        }
    }
    console.log(chalk.yellowBright(`In ${quiz.typescript} level you have ${correctanswer} correct answers! out of 10.`));
}
