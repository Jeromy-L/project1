$("body").css("height",window.screen.height);
$("body").css("height",window.screen.height);
var warpperWidth = window.screen.width;
var warpperHeight = window.screen.height;
$(".warpper").css("width",warpperWidth);
$(".warpper").css("height",warpperHeight);
$(".content").css("width",warpperWidth);
$(".content").css("height",warpperHeight);
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left-1;
	var hoverWidth = $(".coocaa_button_hover").width();
	var hoverHeight = $(".coocaa_button_hover").height();
	$(".button_hover").css({"width":hoverWidth+"px","height":hoverHeight+"px","top":hoverTop+"px","left":hoverLeft+"px"});
	$(".coocaa_button_hover").focus();	
}
$(".cck").on("itemClick", function () {
	var url = $(this).attr("url");
	var https = url.substring(0,8);
	var http = url.substring(0,7);
	if(https == "https://" || http=="http://"){
		window.open(url,"_self");
	}else{
		window.open(url,"_self");
	}
});
$(".progress-bar").animate({width:"100%"},2500);
$.get