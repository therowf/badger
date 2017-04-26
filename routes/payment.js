var express = require('express');
var router = express.Router();
var open = require('open')
var path = require('path');
var braintree = require("braintree");




var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dvdjgdxrk9spmgnh",
  publicKey: "f9jphvr4k6zxmrdz",
  privateKey: "2cba6b86c2c78160b05ac1069fc8d6ec"
});

/*
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
*/


    
success=0;

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




router.get('/', function(req, res, next) {

  gateway.clientToken.generate({}, function (err, response) {
  // res.send(response.clientToken)
   
    if(err){
      console.log("Error")
    }else{
      
           // res.sendFile(path.resolve(__dirname +"/../client/ng-template/index.html"), options);
           res.render('index.ejs', {name:response.clientToken})

      //response.clientToken
//res.sendFile(path.resolve(__dirname +'/../client/ng-template/index.html?&tokn='+response.clientToken))
   
token_t = response.clientToken;

    }

  });

  

});


module.exports = router;