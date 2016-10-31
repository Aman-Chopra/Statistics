//I done by this code using node- gcm module.
//We're using the express framework and the node-gcm wrapper

var express = require('express');
var gcm = require('node-gcm');
//init express
var app = express();
//app.get('/push', function (req, res) {
    var message = new gcm.Message({
        data: { key1: 'hello' },
        notification: {
            title: 'SPECOZ Offers1',
            body: 'body_data'
        }
    });
    console.log("hello");
    // Set up the sender with you API key, prepare your recipients' registration tokens.
    var sender = new gcm.Sender('AIzaSyC-oh1kpuCuIq-bZFip9XGyVNFJiSSacME');
    sender.send(message, 'd-cRujBYZew:APA91bGZJy9MqXnw6CNZifSw12qRBVE_cdF4BaIyWA6o2edqpBzSHmqPyJItdBfR7U4EXL3oM5H5HrGuoTN7NIw9ZZyCt1z4SpdzQv4E6o4bpntz4tDj1oBJiID-bhd8y82LkI9jmrHE', function (err, response) {
        if (err) {
            console.error("Error:", err);


        }

        else console.log("Response:", response);
        //res.send(response);
    });

//});
//app.listen(8000);
