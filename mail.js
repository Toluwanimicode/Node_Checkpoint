const nodemailer = require('nodemailer');
console.log(nodemailer);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'da.Toluwanimi@gmail.com',
    pass: 'Tolu1329'
  }
});

const mailOptions = {
  from: 'tolugodsproperty@gmaail.com',
  to: 'da.toluwanimi@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});