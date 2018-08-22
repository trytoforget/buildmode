function htt_orion(){

setTimeout(function(){

var senderid = $("#senderid").val();
var sendername = $("#sendername").val();
var loverid = $("#loverid").val();
var lovername = $("#lovername").val();
swal({  

 title: "Bạn nhận được một món quà !",   
text: sendername + " vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
imageUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/31562081_10157324683366729_5005221974700457984_n.png?_nc_cat=1&oh=14cc0e665839ce2c48ae6438f939dd1f&oe=5BF65D55/picture?type=large"
 // imageUrl: "https://graph.facebook.com/"+senderid+"/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là "+lovername+" ?",
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "aibiet") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: lovername + " muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Xe SH , IPhone X , Vertu, Lamborghini .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho "+lovername +" trong 10s nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ "+ sendername +" ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

