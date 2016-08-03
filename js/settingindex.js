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
// 覆盖的方框函数，由.coocaa_button_hover来确定聚焦的位置
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left-1;
	var hoverWidth = $(".coocaa_button_hover").width();
	var hoverHeight = $(".coocaa_button_hover").height();
	var borderRadius = $(".coocaa_button_hover").css("border-radius");
	$(".button_hover").css({"width":hoverWidth+"px","height":hoverHeight+"px","top":hoverTop+"px","left":hoverLeft+"px","border-radius":borderRadius});
	$(".coocaa_button_hover").focus();

	//根据history来添加聚焦的方框
	$(".history").css("background","none");
	$(".history").removeClass("history");
	$(".coocaa_button_hover").addClass("history");
	$(".coocaa_button_hover").css("background","linear-gradient(to right, rgba(0,101,179,.6) 0%, rgba(0,180,197,.6) 45%, rgba(186,221,206,.6) 100%)");

	//模拟下拉选择框选择后替换的操作
	if($(".coocaa_button_hover").hasClass("down")){
		$("#dns").css("border","2px solid rgba(0,148,145,.67)" );
		$(".coocaa_button_hover").on("itemClick",function(){
			$("#dns >input").attr("value",$(this).attr("value"));
			$("#dns").trigger("itemClick");
		})

	}else{
		$("#dns").css("border","0" );
	}
}

//检测开关是否打开
$(".switch").on("itemClick",function(){
	if($("input[type='checkbox']").is(':checked')){
		$(".input").css("display","none");
		$(".text").css("display","block");
		$("input[type='checkbox']").removeAttr('checked');
	}else{
		$(".input").css("display","block");
		$(".text").css("display","none");
		$("input[type='checkbox']").attr('checked','checked');
	}
})

// //test
// $("#dns").on("itemClick",function(){
// 	if ($("#list").is(":hidden")) {
// 		$("#btn").css("display","none");
// 		$("#list").css("display","block");
// 		$("#dns").removeClass("up");
// 		$("#dns").addClass("down");
// 	}else{
// 		$("#list").css("display","none");
// 		$("#btn").css("display","block");
// 		$("#dns").removeClass("down");
// 		$("#dns").addClass("up");
// 	}
// })

//检测是否按下下拉菜单
$("#dns").on("itemClick",function(){
	if ($("#list").is(":hidden")) {
		$("#btn").css("display","none");
		$("#list").css("display","block");
		$("#up").css({"border":"15px solid transparent","border-top":"15px solid #eee","top":"68%"});
	}else{
		$("#list").css("display","none");
		$("#btn").css("display","block");
		$("#up").css({"border":"15px solid transparent","border-bottom":"15px solid #eee","top":"67%"});
		$("#dns").focus();
	}
})
$(".cck").on("itemClick", function () {
	clearCookie("guide");
	var url = $(this).attr("url");
	var https = url.substring(0,8);
	var http = url.substring(0,7);
	if(https == "https://" || http=="http://"){
		window.open(url,"_self");
	}else{
		window.open(url,"_self");
	}
});