import * as games from '../index';

games.headline();
console.log(`${games.rules.even}`);

const name = games.greeting();

const generateCondition = () => games.generateRandNumber();

const calculateAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const checkVal = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
        return true;
    }
    return false;
};

games.game(name, generateCondition, calculateAnswer, checkVal);
