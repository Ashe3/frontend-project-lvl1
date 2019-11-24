import game from '../index';
import generateRandNumber from '../utils';

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
    const random1 = generateRandNumber(minGenValue, maxGenValue);
    const random2 = generateRandNumber(maxGenValue, maxGenValue);
    const operation = operations[generateRandNumber(operations.length - 1, minGenValue)];
    const gameCondition = `${random1} ${operation} ${random2}`;
    const correctAnswer = String(calculateAnswer(random1, random2, operation));

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
