// const excerciseTimeMins = 40

// // let message = ''


// const message = excerciseTimeMins < 30 ? 'You Need to try harder!'
//     : excerciseTimeMins < 60 ? 'Doing good!'
// good: ' : 'Excellent!'

// console.log(message)



// Ternary Operator Challenge
const playerGuess = 3;
const correctAnswer = 6;

const message =
  playerGuess === correctAnswer
    ? "Exactly right!"
    : playerGuess < correctAnswer
    ? "Too low!"
    : "Too high!";

console.log(message);
