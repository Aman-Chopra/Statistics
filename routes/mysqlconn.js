var express = require('express');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aman',
  database: 'test',
  port: '3306'
});

connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected');
  }
});

var query = connection.query(
  'SELECT id FROM demo where name = 'aman'', function(err,result,fields){
    console.log(result);
  }
);
