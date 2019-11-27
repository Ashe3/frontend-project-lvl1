import game from '../index';
import generateRandNumber from '../utils';

const maxGeneratedValue = 250;
const minGeneratedValue = 0;
const operations = '+-*';
const gameRule = 'What is the result of the expression?';

const calculateAnswer = (operand1, operand2, operation) => {
    let result;
    switch (operation) {
    case '+':
        result = operand1 + operand2;
        break;
    case '-':
        result = operand1 - operand2;
        break;
    case '*':
        result = operand1 * operand2;
        break;
    default:
        return null;
    }

    return result;
};

const generateGameData = () => {
    const random1 = generateRandNumber(minGeneratedValue, maxGeneratedValue);
    const random2 = generateRandNumber(maxGeneratedValue, maxGeneratedValue);
    const operation = operations[generateRandNumber(operations.length - 1, minGeneratedValue)];
    const gameCondition = `${random1} ${operation} ${random2}`;
    const correctAnswer = String(calculateAnswer(random1, random2, operation));

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
