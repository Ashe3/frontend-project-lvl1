import game from '../index';
import generateRandNumber from '../utils';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 1;
const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
    const lostValue = generateRandNumber(progressionCount - 1, minGenValue);
    const difference = generateRandNumber(minGenValue, maxDifferenceValue);
    let currerntValue = generateRandNumber(minGenValue, maxGenValue);
    const correctAnswer = String(currerntValue + difference * lostValue);
    let gameCondition = '';

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostValue) {
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
