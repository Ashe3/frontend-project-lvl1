#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../index';

console.log('\nWelcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise asnwer "no".\n');
const name = greetings();
const ERR_VAL = 1;

const wrongAnswer = (answer, userName) => {
    console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
    console.log(`Let's try again, ${userName}!\n`);
    return ERR_VAL;
};
const generateRandNumber = () => Math.round(Math.random() * 100);

const checkVal = (number, answer) => {
    if (number % 2 === 0 && answer === 'yes') {
        return true;
    }
    if (number % 2 !== 0 && answer === 'no') {
        return true;
    }
    return false;
};

const game = (userName) => {
    for (let i = 0; i < 3; i += 1) {
        const number = generateRandNumber();
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');

        if (!checkVal(number, answer)) {
            return wrongAnswer(answer, userName);
        }

        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!\n`);
    return 0;
};

game(name);
