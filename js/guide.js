$("body").css("height",window.screen.height);
$("body").css("width",window.screen.width);

//loading动画隐藏
$("#floatingBarsG").css("visibility","hidden");

//获取屏幕的宽度和高度并设置在内容上
var warpperWidth = window.screen.width;
var warpperHeight = window.screen.height;
$(".warpper").css("width",warpperWidth);
$(".warpper").css("height",warpperHeight);
$(".content").css("width",warpperWidth);
$(".content").css("height",warpperHeight);
$(".back").css("width",warpperWidth);
$(".back").css("height",warpperHeight);
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left;
	var hoverWidth = $(".coocaa_button_hover").width();
	var hoverHeight = $(".coocaa_button_hover").height();
	$(".button_hover").css({"width":hoverWidth+"px","height":hoverHeight+"px","top":hoverTop+"px","left":hoverLeft+"px"})

	//根据history来添加聚焦的方框
	$(".history").css("background","none");
	$(".history").removeClass("history");
	$(".coocaa_button_hover").addClass("history");
	$(".coocaa_button_hover").css("background","linear-gradient(to right, rgba(0,101,179,.6) 0%, rgba(0,180,197,.6) 45%, rgba(186,221,206,.6) 100%)");
	

	if ($("#ok").offset().left!=hoverLeft) {
		$("#ok").css("color","#009491");
		$("#no").css("color","#fff");
	}else{
		$("#ok").css("color","#fff");
		$("#no").css("color","#009491");
	}		
}



$(".coocaa_button").on("itemClick", function () {
	setCookie("guide","ture");
	var url = $(this).attr("url");
	var https = url.substring(0,8);
	var http = url.substring(0,7);
	if(https == "https://" || http=="http://"){
		window.open(url,"_self");
	}else{
		window.open(url,"_self");
	}
});