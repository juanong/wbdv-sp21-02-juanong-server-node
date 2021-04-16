const questionsDao = require('../daos/questions-dao')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionsForQuiz = (quizId) =>
    questionsDao.findQuestionsForQuiz(quizId)

const findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
}
