import fs from 'fs';
import {run} from '../services/classify'

export const getAllForRight = (req, res) => getAllForSide(req, res, 'right');
export const getAllForLeft = (req, res) => getAllForSide(req, res, 'left');

export const getAllForSide = (req, res, side) => {   
    if (!fs.existsSync(`./images/${req.user.username}/test`)) {
        res.send([]);
    } else {
        fs.readdir(`./images/${req.user.username}/test/${side}`, function(err, filenames) {
            if (err) {
                res.send([]);
            } else {
                res.send(filenames);
            }
        });    
    }
};

export const post = (req, res) => {
    if (!fs.existsSync(`./images`)) {
        fs.mkdirSync(`./images`);
    }
    if (!fs.existsSync(`./images/${req.user.username}`)) {
        fs.mkdirSync(`./images/${req.user.username}`);
        fs.mkdirSync(`./images/${req.user.username}/test`);
        fs.mkdirSync(`./images/${req.user.username}/test/left`);
        fs.mkdirSync(`./images/${req.user.username}/test/right`);        
        fs.mkdirSync(`./images/${req.user.username}/train`);
        fs.mkdirSync(`./images/${req.user.username}/train/left`);
        fs.mkdirSync(`./images/${req.user.username}/train/right`);        
    }

    let data = req.body.img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    fs.writeFileSync(`./images/${req.user.username}/test/${req.body.side}/${req.body.name}.jpg`, buf);
    fs.writeFileSync(`./images/${req.user.username}/train/${req.body.side}/${req.body.name}.jpg`, buf);
    res.status(200).send();
};

export const postTest = (req, res) => {
    if (!fs.existsSync(`./images`)) {
        fs.mkdirSync(`./images`);
    }
    if (!fs.existsSync(`./images/${req.user.username}`)) {
        fs.mkdirSync(`./images/${req.user.username}`);
        fs.mkdirSync(`./images/${req.user.username}/test`);
        fs.mkdirSync(`./images/${req.user.username}/test/left`);
        fs.mkdirSync(`./images/${req.user.username}/test/right`);        
        fs.mkdirSync(`./images/${req.user.username}/train`);
        fs.mkdirSync(`./images/${req.user.username}/train/left`);
        fs.mkdirSync(`./images/${req.user.username}/train/right`);        
    }

    let data = req.body.img.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    fs.writeFileSync(`./images/${req.user.username}/test.jpg`, buf);
    res.status(200).send();
};

export const getTestResults = (req, res) => {
    run(req, res);
}