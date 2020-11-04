import fs from 'fs';

export const getAllForRight = (req, res) => getAllForSide(req, res, 'right');
export const getAllForLeft = (req, res) => getAllForSide(req, res, 'left');

export const getAllForSide = (req, res, side) => {   
    if (!fs.existsSync(`./users/${req.user.username}`)) {
        res.send([]);
    } else {
        fs.readdir(`./users/${req.user.username}/${side}`, function(err, filenames) {
            if (err) {
                res.send([]);
            } else {
                res.send(filenames);
            }
        });    
    }
};

export const post = (req, res) => {
    if (!fs.existsSync(`./users`)) {
        fs.mkdirSync(`./users`);
    }
    if (!fs.existsSync(`./users/${req.user.username}`)) {
        fs.mkdirSync(`./users/${req.user.username}`);
        fs.mkdirSync(`./users/${req.user.username}/left`);
        fs.mkdirSync(`./users/${req.user.username}/right`);        
    }

    let data = req.body.img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    fs.writeFileSync(`./users/${req.user.username}/${req.body.side}/${req.body.name}.jpg`, buf);
    res.status(200).send();
};