let {PythonShell} = require('python-shell')

const options = {
    mode: 'text',
    pythonPath: 'path/to/python',
    pythonOptions: ['-u'],
};

const getOptions = photoLocation => {
    options.args = [photoLocation]
}

export const run = (req, res) => PythonShell.run('../../ScriptsAndML_related/classify_specific_image.py', getOptions(`./images/${req.user.username}/test.jpg`), function (err, results) {
    if (err) res.status(500).send(err);
    // results is an array consisting of messages collected during execution
    console.log(results);
});