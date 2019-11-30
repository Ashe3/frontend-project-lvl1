import getGame from '../index';
import generateRandNumber from '../utils';

const maxGeneratedValue = 250;
const minGeneratedValue = 2;
const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGCD = (arg1, arg2) => {
  if (arg2 === 0) {
    return arg1;
  }
  return calcGCD(arg2, arg1 % arg2);
};

const generateGameData = () => {
  const random1 = generateRandNumber(minGeneratedValue, maxGeneratedValue);
  const random2 = generateRandNumber(minGeneratedValue, maxGeneratedValue);
  const gameCondition = `${random1} ${random2}`;
  const correctAnswer = String(calcGCD(random1, random2));

  return {
    gameCondition,
    correctAnswer,
  };
};

export default () => getGame(gameRule, generateGameData);
