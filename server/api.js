const express= require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/mail', function(req, res, next){


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // create new gmailaccount
        service: 'hotmail' ,
        auth: {
            user: 'm.and.reflex@outlook.com', // generated ethereal user
            pass: 'TestingPassword'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"from Frend" m.and.reflex@outlook.com`, // sender address
        to: 'vatroslav.puncer@outlook.com', // list of receivers
        subject: req.body.subject, // Subject line
        // text: req.body.text + req.body.from, // plain text body
        html: `<p>${req.body.text}</p><h4>from: ${req.body.from}</h4>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.end()
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        res.end()
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })

});
module.exports = router;
