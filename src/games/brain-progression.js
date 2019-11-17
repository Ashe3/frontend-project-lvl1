import { generateRandNumber, game } from '../index';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 1;
const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
    const lostVal = generateRandNumber(progressionCount - 1, minGenValue);
    const difference = generateRandNumber(maxDifferenceValue, minGenValue);
    let currValue = generateRandNumber(maxGenValue, minGenValue);
    let gameCondition = '';
    let correctAnswer;

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostVal) {
            gameCondition = `${gameCondition} .. `;
            correctAnswer = String(currValue);
        } else {
            gameCondition = `${gameCondition} ${currValue} `;
        }
        currValue += difference;
    }

    return {
        gameCondition,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
