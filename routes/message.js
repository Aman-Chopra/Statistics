var text = require('textbelt');

exports.sendSms = function(req, res) {
    var opts = {
        fromAddr: 'sthakur@innominds.com', // "from" address in received text
        fromName: 'shikha', // "from" name in received text
        region: 'india', // region the receiving number is in: 'us', 'canada', 'intl'
        subject: 'something' // subject of the message
    }

    text.sendText('8197974214', 'A sample text message!',opts);
    console.log("Yes");
};
