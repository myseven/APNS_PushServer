var cert_path = '/Users/jibin/Documents/APNS_push_server/PushServer_cer.pem';
var keys_path = '/Users/jibin/Documents/APNS_push_server/PushServer_key.pem';


//////////// you need modify ////////////
var token = 'your device token'
var payload = {id: "001",  alert:"Hello", sound: "default", badge:0}  // payload will put into dictionary and key is aps like : {'aps' : payload}

// var APNS = require('./apns').createServer(cert_path, keys_path, 'gateway.push.apple.com');       // production
var APNS = require('./apns').createServer(cert_path, keys_path, 'gateway.sandbox.push.apple.com');		// develop

//////////// you need modify ////////////
APNS.notify(token, payload);
APNS.end();
