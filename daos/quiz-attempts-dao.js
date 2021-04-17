const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberCorrect = 0
    questions.forEach(question => question.answer === question.correct ? numberCorrect ++ : numberCorrect)
    return 100 * numberCorrect/questions.length
}

const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel.find({quiz: quizId}).populate('quiz', 'title _id')

const createAttempt = (qid, attempt) =>
    quizAttemptsModel.create({quiz: qid, answers: attempt, score: scoreQuiz(attempt)})

module.exports = {
    scoreQuiz,
    findAttemptsForQuiz,
    createAttempt
}