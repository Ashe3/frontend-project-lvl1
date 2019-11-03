import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 0;
const chooseSymbValue = 2;

const generateCondition = () => {
    const firstRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const secondRandNumber = games.generateRandNumber(maxGenValue, minGenValue);
    const symbol = '+-*'[games.generateRandNumber(chooseSymbValue, minGenValue)];
    return `${firstRandNumber} ${symbol} ${secondRandNumber}`;
};
/* eslint no-eval: 0 */
const calculateAnswer = (expression) => String(eval(expression));

const runGame = games.game(games.rules.calc, generateCondition, calculateAnswer);

export default runGame;
