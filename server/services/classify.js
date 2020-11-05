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

        const left = results.find(str => str.startsWith('left')).split(":")[1];
        const right = results.find(str => str.startsWith('right')).split(":")[1];

        res.send({'left': parseInt(left), 'right': parseInt(right)});
    });
};