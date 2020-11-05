const py = require('python-shell');

// require('../images/')

const options = {
    mode: 'text',
    pythonPath: 'C:\\Users\\ori\\AppData\\Local\\Programs\\Python\\Python36\\python.exe',
};

const getOptions = req => {
    options.args = [`${process.cwd()}/images/${req.user.username}/test.jpg`, req.user.username];

    return options;
}

export const run = (req, res) => {
    py.PythonShell.run(`${__dirname}/ScriptsAndML_related/classify_specific_image.py`, getOptions(req), function (err, results) {
        if (err) res.status(500).send(err);
        // results is an array consisting of messages collected during execution
        console.log(results);
        res.send({});
    });
};