const { random, round } = Math;

const generateRandNumber = (minVal, maxVal) => round(random() * (maxVal - minVal) + minVal);

export default generateRandNumber;
