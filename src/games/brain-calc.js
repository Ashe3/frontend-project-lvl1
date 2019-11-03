import * as games from '../index';

const MAX_VAL = 250;
const MIN_VAL = 1;
const RMAX_VAL = 2;
const RMIN_VAL = 0;

const generateCondition = () => {
    const firstRandNumber = games.generateRandNumber(MAX_VAL, MIN_VAL);
    const secondRandNumber = games.generateRandNumber(MAX_VAL, MIN_VAL);
    const symbol = '+-*'[games.generateRandNumber(RMAX_VAL, RMIN_VAL)];
    return `${firstRandNumber} ${symbol} ${secondRandNumber}`;
};
/* eslint no-eval: 0 */
const calculateAnswer = (expression) => String(eval(expression));

games.game(games.rules.calc, generateCondition, calculateAnswer);
