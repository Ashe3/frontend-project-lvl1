import getGame from '../index';
import generateRandNumber from '../utils';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 0;
const progressionStartValue = generateRandNumber(minGenValue, maxGenValue);
const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const lostValueIndex = generateRandNumber(minGenValue, progressionCount - 1);
  const difference = generateRandNumber(minGenValue + 1, maxDifferenceValue);
  const progression = [];
  const correctAnswer = String(progressionStartValue + difference * lostValueIndex);

  for (let i = 0; i < progressionCount; i += 1) {
    if (i === lostValueIndex) {
      progression.push('..');
    } else {
      progression.push(progressionStartValue + difference * i);
    }
  }

  return {
    gameCondition: progression.join(' '),
    correctAnswer,
  };
};

export default () => getGame(gameRule, generateGameData);
