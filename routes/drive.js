var express = require('express');
var router = express.Router();

var google = require('googleapis');
var plus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;


router.get('/', function(req, res, next) {
var oauth2Client = new OAuth2(
  '1052012469207-g4toe6kvdg3a59c4h2olaoned653r9lm.apps.googleusercontent.com',
  'yb1k5HOMqvoII_DoovmyYb9x',
  'http://127.0.0.1:3000'
);

var drive = google.drive({
  version: 'v2',
  auth: oauth2Client
}, function(req,res){
        res.render('index', { title: 'Alhamdulillah' });
});

  


});

module.exports = router;