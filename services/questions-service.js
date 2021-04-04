let questions = require('./questions.json')

const findQuestionsForQuiz = (quizID) =>
    questions.filter(question => question.quizId === quizID)

module.exports = {
    findQuestionsForQuiz
}