function logAnswer() {
    console.log('The Answer is ?????? of course! If you got that right, giver yourself ${points} points.')
}

console.log('What is the capital of Peru?')

const questionTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('Cancelling...')
})