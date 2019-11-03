import * as games from '../index';

const PROGRESS_COUNT = 10;
const MAX_DIFF = 9;
const MAX_VAL = 100;
const MIN_VAL = 1;
let answer;

const generateCondition = () => {
    const lostVal = games.generateRandNumber(PROGRESS_COUNT - 1, MIN_VAL);
    const difference = games.generateRandNumber(MAX_DIFF, MIN_VAL);
    let currValue = games.generateRandNumber(MAX_VAL, MIN_VAL);
    let progresion = '';

    for (let i = 0; i < PROGRESS_COUNT; i += 1) {
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

games.game(games.rules.progression, generateCondition, calculateAnswer);
