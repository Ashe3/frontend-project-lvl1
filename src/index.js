import readlineSync from 'readline-sync';

const repeatCount = 3;

const game = (gameRule, generateGameData) => {
    console.log(`\nWelcome to the Brain Games!\n${gameRule}\n`);
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    for (let i = 0; i < repeatCount; i += 1) {
        const { gameCondition, correctAnswer } = generateGameData();
        console.log(`Question: ${gameCondition}`);
        const userAsnwer = readlineSync.question('Your answer: ');

        if (!(userAsnwer === correctAnswer)) {
            console.log(`'${userAsnwer}' is wrong asnwer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!\n`);
            return; //exit
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!\n`);
};

export default game;
