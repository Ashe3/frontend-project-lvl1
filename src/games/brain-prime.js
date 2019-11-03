import * as games from '../index';

const MAX_VAL = 250;
const MIN_VAL = 1;

const generateCondition = () => games.generateRandNumber(MAX_VAL, MIN_VAL);

const isPrime = (value) => {
    const iter = (number, divider) => {
        const halfValue = (value + 1) / 2;
        if (halfValue < number && divider === 1) {
            return true;
        }

        if (value % number === 0) {
            return false;
        }
        return iter(number + 1, divider);
    };
    if (value % 2 === 0 && value !== 2) {
        return false;
    }
    return iter(2, 1);
};

const calculateAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

games.game(games.rules.prime, generateCondition, calculateAnswer);
