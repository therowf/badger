var express = require('express');
var router = express.Router();

var google = require('googleapis');
var plus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;


router.get('/', function(req, res, next) {


  res.render('index',{title:"Alhamdulillah"});
  var oauth2Client = new OAuth2(
  '1052012469207-62p8l39ja79thmtva38jjouoog3d2c1f.apps.googleusercontent.com',
  'xjfHEex5Mffd-VBgqQQIQyrS',
  'http://127.0.0.1:3000'
);


// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/drive'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }



});


oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if (!err) {
    oauth2Client.setCredentials(tokens);
    console.log(tokens)
  }
});




});

module.exports = router;


/*
function(err,resl){
       if(err){
        //  res.render('index', { title: 'Alhamdulillah' });
        console.log(err)
       }else{
        // res.render('index', {title: resl })
        console.log(resl)
       }
}

*/