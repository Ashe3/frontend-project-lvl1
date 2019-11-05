import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;

const generateCondition = () => games.generateRandNumber(maxGenValue, minGenValue);

const calculateAnswer = (number) => (games.isEven(number) ? 'yes' : 'no');

const runGame = games.game(games.rules.even, generateCondition, calculateAnswer);

export default runGame;
