var fs = require("fs");
var request = require("request");
var user = require('../models/user.js');
var path = require('path')
module.exports = {
  sendEmail: async (to, subject, text, html) => {
    //var message = `Your app ${fileResult.appId} has reached its qouta limit. \n \t App Name: ${req.body.appName} \n \t token: ${created.token} \n\t at ${created.createdAt} \n \t Thanks for using Drop2Share.`;
    var request = require("request");
    var options = {
      method: 'POST',
      url: process.env.MAILING_SERVER + '/sendEmail',
      headers:
        { 'Content-Type': 'application/json' },
      body: JSON.stringify({ host: process.env.SMTP_HOST, port: process.env.SMTP_PORT, secure: "false", user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD, from: `Drop2Share<${process.env.SMTP_FROM}>`, to: to, subject: subject, text: text, html: html })
    };
    if(process.env.SEND_EMAIL == "true"){
      request(options, function (error, response, body) {
        if (error) {
          console.log("Error : ", error);
          return error
        } else {
          return response
        }
      });
    }else{
      return true
    }
    

  }
}
