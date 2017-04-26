var google = require('googleapis');
var urlshortener = google.urlshortener('v1');
var plus = google.plus('v1');
var open = require('open');

var fs = require('fs');
var drive = google.drive({ version: 'v3', auth: oauth2Client });




//ar google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  '1052012469207-g4toe6kvdg3a59c4h2olaoned653r9lm.apps.googleusercontent.com',
  'yb1k5HOMqvoII_DoovmyYb9x',
  'urn:ietf:wg:oauth:2.0:oob","http://localhost'
);



var GAPI = require('node-gcs').gapitoken;
var GCS = require('node-gcs');
var fs = require('fs');



var gapi = new GAPI({
    iss: 'rakibna@bismillah-165615.iam.gserviceaccount.com',
    scope: 'full-control',
    keyFile: 'b6f00f86d493b4f5bec0678ae299d09aa4366763'
}, function(err) {
   if (err) { return console.log(err); }

   gapi.getToken(function(err, token) {
       if (err) { return console.log(err); }
       console.log(token);
   });     
});






/*

var gapi = new GAPI(gapitoken-options, function(err) {
    if (err) { console.log(err); }

    var gcs = new GCS(gapi);
 
    fs.stat('./p.png', function(err, stats) {
	    if (err) { return console.log(err); }
	
	    var file = fs.createReadStream('./p.png');
	
	    var headers = {
	        'Content-Length': stats.size,
            'Content-Type': 'Image/jpeg',
            'x-goog-acl': 'public-read'		
	    };

	    gcs.putStream(file, '<BUCKET NAME>', '/p.png', headers, function(err, res) {
		    console.log(err, res);
	    });
    });
});    







   


*/












