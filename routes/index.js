var express = require('express');
var router = express.Router();
var open = require('open')
var braintree = require("braintree");








var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dvdjgdxrk9spmgnh",
  publicKey: "f9jphvr4k6zxmrdz",
  privateKey: "2cba6b86c2c78160b05ac1069fc8d6ec"
});





    router.get('/',function(req,res){
       // res.sendFile(path.resolve(__dirname +'/../client/ng-template/index.html'))
      //return res.redirect('./payment');

       gateway.clientToken.generate({}, function (err, response) {

   
    if(err){
      console.log("Error")
    }else{
      pori = 'dfksjak kj lkadsjf kljas lfjal fjdkl jaklsj fklafj ldksjl fdajldkas j';
       token_t = response.clientToken;
        res.render('index.ejs', {name:token_t, poris: pori, img:pic})
  
     
    }

  });

    })
module.exports = router;
