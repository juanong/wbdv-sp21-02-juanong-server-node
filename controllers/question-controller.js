const questionService = require('../services/questions-service')

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.json(questions))
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => {
                res.json(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params['quid']
        questionService.findQuestionById(questionId)
            .then(question => {
                res.json(question)
            })
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz)
    app.get('/api/questions/:quid', findQuestionById)
}