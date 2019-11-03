import * as games from '../index';

const maxGenValue = 250;
const minGenValue = 1;

const generateCondition = () => games.generateRandNumber(maxGenValue, minGenValue);

const calculateAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runGame = games.game(games.rules.even, generateCondition, calculateAnswer);

export default runGame;
