var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var crypto = require("crypto");
var async = require('async');
var sendMessage = require('./sendMessage.js');
var messageTemplate = require('./messageTemplate.js');

app.set('port', (process.env.PORT || 8000));
// JSONの送信を許可
app.use(bodyParser.urlencoded({
    extended: true
}));
// JSONパーサー
app.use(bodyParser.json());

app.post('/callback', function(req, res) {
    async.waterfall([
            function(callback) {
                // リクエストがLINE Platformから送られてきたか確認する
                if (!validate_signature(req.headers['x-line-signature'], req.body)) {
                    return;
                }
                // テキストが送られてきた場合のみ返事をする
                if ((req.body['events'][0]['type'] != 'message') || (req.body['events'][0]['message']['type'] != 'text')) {
                    return;
                }
                // 特定の単語に反応させたい
                //if (req.body['events'][0]['message']['text'].indexOf('please input some word') == -1) {
                //    return;
                //}

                // ユーザIDを取得する
                var user_id      = req.body['events'][0]['source']['userId'];
                var message_text = req.body['events'][0]['message']['text'];
                if (req.body['events'][0]['source']['type'] == 'user') {
                    request.get(getProfileOption(user_id), function(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            callback(req, body['displayName'], message_text);
                        }
                    });
                }
            },
        ],
//        function(req, displayName, message_text) {
//            var message = "hello," +　displayName　+ ""; // helloと返事する
//            //var message = message_text; // おうむ返しする
//            //var message = message_text + "[" + message_text.length + "文字]";
//            sendMessage.send(req, [ messageTemplate.textMessage(message) ]);
//            return;
//        }
         function(req, displayName, message_text) {
             var messages = ["1", "2", "3", "4"];
             if (message_text == "猫") {
                 sendMessage.send(req, [ messageTemplate.imagemapMessage(messages, 'https://i.imgur.com/8cbL5dl.jpg') ]);
             } else if (message_text == "犬") {
                 sendMessage.send(req, [ messageTemplate.imagemapMessage(messages, 'https://i.imgur.com/ph82KWH.jpg') ]);
             } else {
                 sendMessage.send(req, [ messageTemplate.imagemapMessage(messages, 'https://i.imgur.com/Z6ilhSI.jpg') ]);                 
             }

             return;
         }
    );
});

app.listen(app.get('port'), function() {
    console.log('Node app is running');
});

// メッセージの長さを返す
function textcount(body) {
    return body.length;
}

function getProfileOption(user_id) {
    return {
        url: 'https://api.line.me/v2/bot/profile/' + user_id,
        proxy: process.env.FIXIE_URL,
        json: true,
        headers: {
            'Authorization': 'Bearer {' + process.env.LINE_CHANNEL_ACCESS_TOKEN + '}'
        }
    };
}

// 署名検証
function validate_signature(signature, body) {
    return signature == crypto.createHmac('sha256', process.env.LINE_CHANNEL_SECRET).update(new Buffer(JSON.stringify(body), 'utf8')).digest('base64');
}
