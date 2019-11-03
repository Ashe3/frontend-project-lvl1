import * as games from '../index';

const progressionCount = 10;
const maxDifferenceValue = 9;
const maxGenValue = 100;
const minGenValue = 1;
let answer;

const generateCondition = () => {
    const lostVal = games.generateRandNumber(progressionCount - 1, minGenValue);
    const difference = games.generateRandNumber(maxDifferenceValue, minGenValue);
    let currValue = games.generateRandNumber(maxGenValue, minGenValue);
    let progresion = '';

    for (let i = 0; i < progressionCount; i += 1) {
        if (i === lostVal) {
            progresion += '.. ';
            answer = String(currValue);
        } else {
            progresion += `${currValue} `;
        }
        currValue += difference;
    }

    return progresion;
};

const calculateAnswer = () => answer;

const runGame = games.game(games.rules.progression, generateCondition, calculateAnswer);

export default runGame;
