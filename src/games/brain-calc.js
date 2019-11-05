import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 0;
const symbolSequence = '+-*';
const symbolSeqLength = symbolSequence.length;

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

    return String(result);
};

const generateGameData = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const symbol = symbolSequence[games.generateRandNumber(symbolSeqLength - 1, minGenValue)];
    const gameCondition = `${firstRandNumber} ${symbol} ${secondRandNumber}`;
    const correctAnswer = calculateAnswer(firstRandNumber, secondRandNumber, symbol);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(games.rules.calc, generateGameData);

export default runGame;
