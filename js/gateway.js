$("body").css("height",window.screen.height);
//获取屏幕的宽度和高度并设置在内容上
var warpperWidth = window.screen.width;
var warpperHeight = window.screen.height;
$(".warpper").css("width",warpperWidth);
$(".warpper").css("height",warpperHeight);
$(".content").css("width",warpperWidth);
$(".content").css("height",warpperHeight);
// 覆盖的方框函数，由.coocaa_button_hover来确定聚焦的位置
//再获取它的位置大小并设置在.button_hover样式上，移除只读属性并聚焦。
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left-1;
	var hoverWidth = $(".coocaa_button_hover").width();
	var hoverHeight = $(".coocaa_button_hover").height();
	$(".button_hover").css({"width":hoverWidth+"px","height":hoverHeight+"px","top":hoverTop+"px","left":hoverLeft+"px"});
	$(".coocaa_button_hover").removeAttr("readOnly");
	$(".coocaa_button_hover").focus();
	
	//根据history来添加聚焦的方框
	$(".history").css("background","none");
	$(".history").removeClass("history");
	$(".coocaa_button_hover").addClass("history");
	$(".coocaa_button_hover").css("background","linear-gradient(to right, rgba(0,101,179,.6) 0%, rgba(0,180,197,.6) 45%, rgba(186,221,206,.6) 100%)");
	if(hoverTop == $(".btn-primary").offset().top){
		$(".btn-primary").css("color","#fff");
	}else{
		$(".btn-primary").css("color","#009491");
	} 		
}
//$(".progress-bar").animate({width:"33.3%"},2500);
//loading动画隐藏
$("#floatingBarsG").css("visibility","hidden");

//如若按键为回车，则将对应藏在输入框的链接给赋予给url
//输入框有两种url对应于是否为向导模式，根据cookie来判断
//如果是向导模式则guide为true
if(!getCookie("guide")){	
	$(".ui-step").css("visibility","hidden");
}
$(".cck").on("itemClick", function () {
	$("#floatingBarsG").css("visibility","visible");
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
	//点击下一步后，loading动画出现后跳转页面
	// setTimeout(function(){
	// 	var https = url.substring(0,8);
	// 	var http = url.substring(0,7);
	// 	if(https == "https://" || http=="http://"){
	// 		window.open(url,"_self");
	// 	}else{
	// 		window.open(url,"_self");
	// 	}
	// },"800")
});
