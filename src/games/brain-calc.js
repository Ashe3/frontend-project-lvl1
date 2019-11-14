import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 0;
const operationSeq = '+-*';
const operationSeqLen = operationSeq.length;
const gamerule = 'What is the result of the expression?';

const calculateAnswer = (firstNumber, secondNumber, symbol) => {
    let result;
    switch (symbol) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    default:
        return null;
    }

    return result;
};

const generateGameData = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const symbol = operationSeq[games.generateRandNumber(operationSeqLen - 1, minGenValue)];
    const gameCondition = `${firstRandNumber} ${symbol} ${secondRandNumber}`;
    const correctAnswer = String(calculateAnswer(firstRandNumber, secondRandNumber, symbol));

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => games.game(gamerule, generateGameData);
