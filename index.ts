#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber: number = Math.floor(Math.random() * 6 + 1);
let numTries: number = 3;
let correctGuess: boolean = false;

while (numTries > 0) {
    const answer = await inquirer.prompt([
        { message: "Lets guessed a number between 1 to 6 in 3 tries: ", type: "number", name: "userGuessNumber" },
    ]);

    if (!correctGuess) {
        if (answer.userGuessNumber === randomNumber) {
            console.log(chalk.red("Congratulation! You Guessed right Number."));
            correctGuess = true;
            break;
        } else {
            console.log(chalk.yellow("Oops! You Guessed the wrong Number."));
            if (answer.userGuessNumber > randomNumber) {
                console.log(chalk.blue("You guessed too high!"));
            } else {
                console.log(chalk.green("You guessed too low!"));
            }
            numTries--;
            console.log(chalk.cyanBright(`You have ${numTries === 0 ? 1 : numTries} try${numTries === 0 || numTries === 1 ? '' : 's'} left.`));
        }
    }
}

console.log(chalk.magenta("EXIT GAME"));
