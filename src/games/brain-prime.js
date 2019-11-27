import game from '../index';
import generateRandNumber from '../utils';

const maxGenValue = 250;
const minGenValue = 1;
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0 || number < 2) {
        return false;
    }
    const limit = Math.floor(Math.sqrt(number));
    for (let divider = 3; divider <= limit; divider += 1) {
        if (number % divider === 0) {
            return false;
        }
    }

    return true;
};

const generateGameData = () => {
    const question = generateRandNumber(minGenValue, maxGenValue);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return {
        gameCondition: question,
        correctAnswer,
    };
};

export default () => game(gameRule, generateGameData);
