var express = require('express');
var router = express.Router();
var open = require('open')
var braintree = require("braintree");
var request = require('request');
var fs = require('fs-extra');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

var upload = multer({ storage: storage });

router.post('/cart', upload.single('upl'), function(req,res){
  /*
 pic = req.body.pic;
 console.log(pic)
 var file = fs.createWriteStream('01');
 request(pic).pipe(file);
 file.on('finish', function(){
   console.log('Alhamdulillah')
    return res.redirect('./cart');
 })
*/

pic = req.file.path;

console.log(pic)

if(res){
  // open('  http://127.0.0.1:3000/payment#/cart');
 return res.redirect('./cart');
}

})


router.get('/cart', function(req,res){
    res.render('index.ejs', {name:token_t, poris: pori, img:pic})
})



var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dvdjgdxrk9spmgnh",
  publicKey: "f9jphvr4k6zxmrdz",
  privateKey: "2cba6b86c2c78160b05ac1069fc8d6ec"
});


router.post("/get", function (req, res) {
  var nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here

res.send(nonceFromTheClient)


gateway.transaction.sale({
  amount: "999.00",
  merchantAccountId: "3382nf",
  paymentMethodNonce: nonceFromTheClient
},  function (err, result) {
  if(err){console.log(err)}else{
    console.log('Alhamdulillah')
  }
})

});


    
success=0;
pic = 0;





router.post("/checkout", function (req, res) {
//  var cst_mail = req.body.cst_mail;
  var nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here

gateway.transaction.sale({
  amount: "199.00",
   customer: {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email
  },
  billing: {
    firstName: req.body.first_name,
    lastName: req.body.first_name,
    streetAddress: req.body.street_address,
    extendedAddress: req.body.extended_address,
    locality: req.body.locality,
    region: req.body.region,
    postalCode: req.body.postal_code
  },
  shipping: {
    firstName: req.body.first_name,
    lastName: req.body.first_name,
    streetAddress: req.body.street_address,
    extendedAddress: req.body.extended_address,
    locality: req.body.locality,
    region: req.body.region,
    postalCode: req.body.postal_code
  },
  paymentMethodNonce: nonceFromTheClient,
  options: {
    submitForSettlement: true
  }
}, function (err, result) {
  if(err){console.log(err)}else{

success = 1 ;

 return res.redirect('./success');

   // 
    console.log('Alhamdulillah');

  }
});



 
});






router.get('/success', function(req,res){
//  success = 0;
  if(success==1){
  res.render('success.ejs');
  success = 0;
  }else{
    return res.redirect('/');
  }
})







/* GET users listing. */




router.get('/payment', function(req, res, next) {

  gateway.clientToken.generate({}, function (err, response) {

   
    if(err){
      console.log("Error")
    }else{
      pori = 'dfksjak kj lkadsjf kljas lfjal fjdkl jaklsj fklafj ldksjl fdajldkas j';
       token_t = response.clientToken;
        res.render('index.ejs', {name:response.clientToken, poris: pori, img:pic})
  
     
    }

  });

  

});


module.exports = router;