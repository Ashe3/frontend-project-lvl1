import game from '../index';
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
    let currentValue = progressionStartValue;
    const correctAnswer = String(currentValue + difference * lostValueIndex);
    let gameCondition = '';

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostValueIndex) {
            gameCondition = `${gameCondition} ..`;
        } else {
            gameCondition = `${gameCondition} ${currentValue}`;
        }
        currentValue += difference;
    }

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
