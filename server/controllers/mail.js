// import Mail from "../models/mail";

// export const getAll = (req, res, next) => {    
//     Mail.find({to: req.user.email})
//         .exec((err, mails) => err ? next(err) : res.json(mails));
// };

// export const getOutbox = (req, res, next) => {    
//     Mail.find({from: req.user.email})
//         .exec((err, mails) => err ? next(err) : res.json(mails));
// };

// export const post = (req, res, next) => {
//     const { to, subject, content } = req.body;
    
//     if (!to || !subject || !content) {
//         return res.status(422).send({ error: "Please provide all mail fields." });
//     }

//     const mail = new Mail({ from: req.user.email, to, subject, content });

//     mail.save(err => err ? next(err) : res.status(200).json(mail));
// };