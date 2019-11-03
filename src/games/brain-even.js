import * as games from '../index';

const MAX_VAL = 250;
const MIN_VAL = 1;

const generateCondition = () => games.generateRandNumber(MAX_VAL, MIN_VAL);

const calculateAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

games.game(games.rules.even, generateCondition, calculateAnswer);
