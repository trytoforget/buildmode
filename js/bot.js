
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var botkey = "http://www.simsimi.com/getRealtimeReq?uuid=UwmPMKoqosEETKleXWGOJ6lynN1TQq18wwvrmCy6IRt&lc=vn&ft=0&reqText=";
login(
	{	
	email: "nothing.4ever94@gmail.com", 
	password: "Baoanh1994." 
	},
function callback (err, api)
{
	if(err) return console.error(err);
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	
	api.listen(function callback(err, message)
	{
		if(message.body === "/stop"||message.body === "/Stop") { 
			api.sendMessage(";) Đã ngừng auto chat.", message.threadID); 
			api.markAsRead(message.threadID);
			return api.logout(err);
		}
		if (message.body==="Getid"||message.body==="getid"||message.body==="get id"||message.body==="Get id") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Your ID: ", message.threadID); 
			api.sendMessage(message.senderID, message.threadID); 
			api.markAsRead(message.threadID); 
			console.log("Sender ID: " + message.senderID);
		}
		else if(message.body==="Fb"||message.body==="fb"||message.body==="Facebook"||message.body==="facebook") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("nhấn vào đây: https://facebook.com/100026298692629", message.threadID); 
			api.sendMessage("Đệ tử của Bảo Anh đẹp trai. Các lệnh:  \n- Trả lời "fb" để lấy link FB của đại ca. \n- Trả lời "sdt" để có được số phone của sếp. \n- Trả lời kèm "/stop" ở đầu câu để tránh chatbot tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện.", message.threadID);
			return;
		}
		else if(message.body === "sdt"||message.body === "Sdt"||message.body === "SDT") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("SĐT: 0961623343", message.threadID); 
			api.sendMessage("Đệ tử của Bảo Anh đẹp trai. Các lệnh:  \n- Trả lời "fb" để lấy link FB của đại ca. \n- Trả lời "sdt" để có được số phone của sếp. \n- Trả lời kèm "/stop" ở đầu câu để tránh chatbot tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện.", message.threadID);
			return;
		}
		else if (message.body.indexOf("Stop")===0){
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}
		 else if (message.senderID==="id_loại_trừ_1"||message.senderID==="id_loại_trừ_2") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}else if (message.senderID==="10000788508730000") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Chào bạn, mình đang bận ^^~ sẽ trả lời bạn ngay khi đọc được tin nhắn nhé. Vui lòng không nhắn thêm ^^", message.threadID);
			return;
		} else if (message.body)
		{
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			request(botkey + encodeURI(message.body),  
			function(error, response, body)
			{  
				if (error) api.sendMessage("Tao đang đơ, không trả lời được :)", message.threadID);
				if (body.indexOf("502 Bad Gateway") > 0 || body.indexOf("respSentence") < 0)
					api.sendMessage("Đệ tử của Bảo Anh đẹp trai. Các lệnh:  \n- Trả lời "fb" để lấy link FB của đại ca. \n- Trả lời "sdt" để có được số phone của sếp. \n- Trả lời kèm "/stop" ở đầu câu để tránh chatbot tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. ==> " + message.body, message.threadID );
				text = JSON.parse(body);
				if (text.status == "200")
				{
					SimsimiAnswered = text.respSentence;
					if (message.body===text.respSentence) {
						return;
					} else
					SimsimiAnswered = text.respSentence;
					api.sendMessage(SimsimiAnswered+"\n \n --------\n Đệ tử của Bảo Anh đẹp trai. Các lệnh:  \n- Trả lời "fb" để lấy link FB của đại ca. \n- Trả lời "sdt" để có được số phone của sếp. \n- Trả lời kèm "/stop" ở đầu câu để tránh chatbot tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện.", message.threadID);
					api.markAsRead(message.threadID);
					console.log("Answered:"+SimsimiAnswered);
				}
			});
		}
	});
})
