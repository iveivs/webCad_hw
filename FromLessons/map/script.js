const quiz = new Map()
quiz.set('question', 'WTF ?')
quiz.set(1, 'variant 1')
quiz.set(2, 'variant 2')
quiz.set(3, 'variant 3')
quiz.set(4, 'variant 4')
quiz.set('correct', 3)
quiz.set(true, 'right answer')
quiz.set(false, 'wrong answer')

const question = quiz.get('question')


console.log(quiz);
console.log(question);

console.log(quiz.size);

