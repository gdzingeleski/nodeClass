const express = require('express');
let http = require('http');
const Promise = require('bluebird');

console.log(`program.js started`);

const app = express();


app.get('/', function (req, res){
    res.send(`hello sailor`);
});

app.listen(3000);

app.get('/greg',function(req, res){
    res.send(`Hello Sailor`);
});

// http.createServer(function(req, res){
//     res.write('hello old sailor');
//     res.end();
// }).listen(3000);
