import { generateRandNumber, game } from '../index';

const maxGenValue = 250;
const minGenValue = 0;
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
    const firstRandNumber = generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = generateRandNumber(maxGenValue, minGenValue);
    const symbol = operations[generateRandNumber(operations.length - 1, minGenValue)];
    const gameCondition = `${firstRandNumber} ${symbol} ${secondRandNumber}`;
    const correctAnswer = String(calculateAnswer(firstRandNumber, secondRandNumber, symbol));

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
