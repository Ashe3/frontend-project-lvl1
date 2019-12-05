import getGame from '../index';
import generateRandNumber from '../utils';

const progressionLength = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 0;
const progressionStartValue = generateRandNumber(minGenValue, maxGenValue);
const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const lostValueIndex = generateRandNumber(minGenValue, progressionLength - 1);
  const difference = generateRandNumber(minGenValue + 1, maxDifferenceValue);
  const question = [];
  const correctAnswer = String(progressionStartValue + difference * lostValueIndex);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === lostValueIndex) {
      question.push('..');
    } else {
      question.push(progressionStartValue + difference * i);
    }
  }

  return {
    gameCondition: question.join(' '),
    correctAnswer,
  };
};

export default () => getGame(gameRule, generateGameData);
