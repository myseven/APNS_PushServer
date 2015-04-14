var cert_path = '/Users/jibin/Documents/APNS_push_server/guestops.pem';
var keys_path = '/Users/jibin/Documents/APNS_push_server/guestops_key.pem';

// push 证书转pem  openssl x509 -in aps_developer.cer -inform DER -out aps_developer.pem -outform PEM 
// push 私钥 转 pem openssl pkcs12 -nocerts -out private_key.pem -in private_key.p12


// remember to remove "<", ">" and " "'s

// p12 转 pem    openssl pkcs12 -clcerts -nokeys -out apns-dev-cert.pem -in apns-dev-cert.p12

// python   服务端 制作证书 
// 制作证书
// openssl pkcs12 -in a8dev.p12 -out dev_key.pem -nodes
// openssl x509 -in aps_development.cer -inform DER -outform PEM -out sandbox_cert.pem

// cat sandbox_cert.pem dev_key.pem > apns_sandbox_cert.pem

// openssl s_client -connect gateway.sandbox.push.apple.com:2195 -cert apns_sandbox_cert.pem -key dev_key.pem -debug


// openssl pkcs12 -in a8dis.p12 -out prod_key.pem -nodes
// openssl x509 -in aps_production.cer -inform DER -outform PEM -out cert.pem

// cat cert.pem prod_key.pem > apns_cert.pem
// """

 // var APNS = require('./apns').createServer(cert_path, keys_path, 'gateway.push.apple.com');       // production
 var APNS = require('./apns').createServer(cert_path, keys_path, 'gateway.sandbox.push.apple.com');		// develop
//var APNS = require('./apns').createServer(cert_path, keys_path);

//APNS.notify('2537c7c1331fcff8509f627a032cc7fd19bea3758a9bd0c3c6a746c93d018e47', {id: "ssss",  alert:"Hello Guests", sound: "default", badge:12 });
// APNS.notify('2f2ba5d2821b184b3ac46116f76941acd5d2eb2714c475b1bd62c3e1cfa50893', {id: "ssss",  alert:"Hello yuyang" + new Date(), sound: "default", badge:0 ,extra: "wdy://tab=3/wv-url=www.baidu.com"});
// APNS.notify('2f2ba5d2821b184b3ac46116f76941acd5d2eb2714c475b1bd62c3e1cfa50893', {"content-available" : 1 , "sound" : ""} ); // 静默推送
// APNS.notify('2f2ba5d2821b184b3ac46116f76941acd5d2eb2714c475b1bd62c3e1cfa50893', {"content-available" : 1 , "sound" : ""} );
// APNS.notify('2f2ba5d2821b184b3ac46116f76941acd5d2eb2714c475b1bd62c3e1cfa50893', {id: "ssss",  alert:"Hello 2n1eidhwiaoGuests", sound: "default", badge:12 , extra: "wdy://tab=1/wv-url=www.baidu.com"});
// APNS.notify('2f2ba5d2821b184b3ac46116f76941acd5d2eb2714c475b1bd62c3e1cfa50893', {id: "ssss", alert:"Hello", sound: "default", badge:0 ,title : "title", jump : "wdy://tab=2/al-tagid=0,tagtype=sys/ad-uid=1032,type=feed/fd-fid=6070486899125423580"});

// in house  production
// APNS.notify('8ede625eb3c4daba39349187974c0273bf1f1f6ca408e126addd685cd7d0b9e9', {id: "ssss", alert:"Hello", sound: "default", badge:0 ,title : "title", jump : "wdy://tab=2/al-tagid=0,tagtype=sys/ad-uid=1032,type=feed/fd-fid=6070486899125423580"});

//********************** ipad dev weidingyue a4877ea944a479c18dfc5edaf63f20e404403e5d2de3256f754c5f67895b9b4d			
// APNS.notify('a4877ea944a479c18dfc5edaf63f20e404403e5d2de3256f754c5f67895b9b4d', {id: "ssss",  alert:"Hello 2n1eidhwiaoGuests", sound: "default", badge:12 , extra: "wdy://tab=3/wv-url=www.baidu.com"});
// APNS.notify('a4877ea944a479c18dfc5edaf63f20e404403e5d2de3256f754c5f67895b9b4d', {"content-available" : 1 , "sound" : ""} );
//********************** ipad distribute weidingyue b648cd73644548f88714f77c67ec91bf1cca84fe21a2476485002b90156f262d
// APNS.notify('b648cd73644548f88714f77c67ec91bf1cca84fe21a2476485002b90156f262d', {id: "ssss", alert:"Hello", sound: "default", badge:0 ,title : "title", jump : "wdy://tab=2/al-tagid=0,tagtype=sys/ad-uid=1032,type=feed/fd-fid=6070486899125423580"});


// 测试ipad dev
APNS.notify('c54bc67b83954c27b0fc9b77f7ce549d80929d055099003f341113dab0e96204', {id: "ssss",  alert:"Hello yuyang" + new Date(), sound: "default", badge:0});


APNS.end();
