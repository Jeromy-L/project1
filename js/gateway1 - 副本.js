//判断输入的个数是不是等于4个，是就自动跳到下一个输入框
//除去输入框满四个而按钮为向左而出现不移动的bug
$(":input").on("keydown",function(ev){
	if ($(this).val().length == 4 && ev.keyCode!=37 && ev.keyCode!=8 && ev.keyCode!=39) {
    	map.moveRight();
	}
})	
//如若按键为回车，则将对应藏在输入框的链接给赋予给url
//输入框有两种url对应于是否为向导模式，根据cookie来判断
//如果是向导模式则guide为true
if(!getCookie("guide")){	
	$(".progress").css("visibility","hidden");
}
$(".cck").on("itemClick", function () {
	if(getCookie("guide")){
		var url = $(this).attr("url");
	}else{
		var url = $(this).attr("href");
	}
	var https = url.substring(0,8);
	var http = url.substring(0,7);
	if(https == "https://" || http=="http://"){
		window.open(url,"_self");
	}else{
		window.open(url,"_self");
	}
});