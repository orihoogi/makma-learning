fs = require('fs')

export const getAllForRight = (req) => getAllForSide(req, 'right');
export const getAllForLeft = (req) => getAllForSide(req, 'left');

export const getAllForSide = (req) => {   
    if (!fs.existsSync(`./${req.user.username}`)) {
        return [];
    }
    fs.readFile(`./${req.user.username}/${req.side}`, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        return data
    });
};

export const post = req => {
    let data = img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    fs.writeFile(`./${req.user.username}/${req.side}/${req.name}`, buf);
};