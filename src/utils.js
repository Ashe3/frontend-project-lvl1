const { random, round } = Math;

const generateRandNumber = (minValue, maxValue) => (
    round(random() * (maxValue - minValue) + minValue)
);

export default generateRandNumber;
