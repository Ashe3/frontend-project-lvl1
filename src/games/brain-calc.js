import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 0;
const chooseSymbValue = 2;

/* eslint no-eval: 0 */
const calculateAnswer = (expression) => String(eval(expression));

const generateGameData = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const symbol = '+-*'[games.generateRandNumber(chooseSymbValue, minGenValue)];
    const gameCondition = `${firstRandNumber} ${symbol} ${secondRandNumber}`;
    const correctAnswer = calculateAnswer(gameCondition);

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(games.rules.calc, generateGameData);

export default runGame;
