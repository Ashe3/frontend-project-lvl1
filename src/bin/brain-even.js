#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../index';

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise asnwer "no".\n');
const name = greetings();
const ERR_VAL = 1;

const game = (userName) => {
    const wrongAnswer = (answer) => {
        console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
        console.log(`Let's try again, ${userName}!\n`);
        return ERR_VAL;
    };

    for (let i = 0; i < 3; i += 1) {
        const number = Math.round(Math.random() * 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        if (number % 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!');
            } else {
                return wrongAnswer(answer);
            }
        } else if (number % 2 !== 0) {
            if (answer === 'no') {
                console.log('Correct!');
            } else {
                return wrongAnswer(answer);
            }
        } else {
            return wrongAnswer(answer);
        }
    }

    console.log(`Congratulations, ${userName}!\n`);
    return 0;
};

game(name);
