module.exports = (app) => {
    // This app is waiting for a GET request based on the URL in the first param
    app.get('/can/be/anything', function (req, res) {
        res.send('Hello World')
    })

    const add = (req, res) => {
        const a = parseInt(req.params['paramA']);
        const b = parseInt(req.params['paramB']);
        // This should always be a string
        res.send(`${a+b}`);
    }

    // Notice the syntax here; the second parameter is an entire function
    app.get('/add/:paramA/:paramB', add)

    // We can also grab values from the query
    // The URL will be in this format: /subtract?x=somevalue&y=somevalue
    const subtract = (req, res) => {
        const x = parseInt(req.query['x'])
        const y = parseInt(req.query['y'])
        res.send(`${x-y}`)
    }

    app.get('/subtract', subtract)
}
