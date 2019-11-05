import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 0;
const symbolSequence = '+-*';
const symbolSeqLength = symbolSequence.length();

/* eslint no-eval: 0 */
const calculateAnswer = (expression) => String(eval(expression));

const generateGameData = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const symbol = symbolSequence[games.generateRandNumber(symbolSeqLength, minGenValue)];
    const gameCondition = `${firstRandNumber} ${symbol} ${secondRandNumber}`;
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(games.rules.calc, generateGameData);

export default runGame;
