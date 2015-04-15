# APNS_PushServer
这是一个能让iOS开发者在本地轻松发送push消息给设备的一个文件

####push需要证书和秘钥<br/> PushServer_cer.pem 和 PushServer_key.pem

制作证书和秘钥需要 从devloper.apple.com证书中心创建push证书后下载,假设下载回来证书为 apns-cert.cer, 秘钥为 private_key.p12.

PS: 可以使用production或developer的push证书,后面在push.js文件中更改push服务器即可

创建 PushServercer.pem:

	openssl x509 -in apns-cert.cer -inform DER -out PushServercer.pem -outform PEM 
	
创建 PushServer_key.pem

	openssl pkcs12 -nocerts -out PushServer_key.pem -in private_key.p12

生成好证书后将证书放在 APNS_PushServer 的根目录, 在push.js文件中可以找到证书和秘钥即可

####

####安装nodejs
[安装方法](http://howtonode.org/how-to-install-nodejs)

####运行
**打开push.js文件 更改token和push服务器(production或developer)**<br/>

	node push.js


当然 在创建秘钥的时候需要输入密码, 这个时候需要在这里输入




