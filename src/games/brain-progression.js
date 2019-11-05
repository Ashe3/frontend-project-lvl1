import * as games from '../index';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 1;
const gamerule = 'What number is missing in the progression?\n';

const generateGameData = () => {
    const lostVal = games.generateRandNumber(progressionCount - 1, minGenValue);
    const difference = games.generateRandNumber(maxDifferenceValue, minGenValue);
    let currValue = games.generateRandNumber(maxGenValue, minGenValue);
    let gameCondition = '';
    let correctAnswer;

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostVal) {
            gameCondition += '.. ';
            correctAnswer = String(currValue);
        } else {
            gameCondition += `${currValue} `;
        }
        currValue += difference;
    }

    return {
        gameCondition,
        correctAnswer,
    };
};

const runGame = games.game(gamerule, generateGameData);

export default runGame;
