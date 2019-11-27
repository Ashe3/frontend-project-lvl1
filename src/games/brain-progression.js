import game from '../index';
import generateRandNumber from '../utils';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 0;
const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
    const lostValueIndex = generateRandNumber(progressionCount - 1, minGenValue);
    const difference = generateRandNumber(minGenValue + 1, maxDifferenceValue);
    let currerntValue = generateRandNumber(minGenValue, maxGenValue);
    const correctAnswer = String(currerntValue + difference * lostValueIndex);
    let gameCondition = '';

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostValueIndex) {
            gameCondition = `${gameCondition} ..`;
        } else {
            gameCondition = `${gameCondition} ${currerntValue}`;
        }
        currerntValue += difference;
    }

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
