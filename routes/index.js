var express = require('express');
var path = require('path');
var router = express.Router();
var request = require('request');
var fs = require('fs');

    router.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname +'/../client/ng-template/index.html'))
    })
module.exports = router;
