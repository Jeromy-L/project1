// $("body").css("height",window.screen.height);
// $("body").css("width",window.screen.width);
//alert(window.screen.width);

	//COOCAAIPV6.showToast(COOCAAIPV6.getDeviceNetInfo("route"));
	var jsonip =$.parseJSON(COOCAAIPV6.getDeviceNetInfo("ip"));
	COOCAAIPV6.showToast(jsonip[0].addr);
	var jp = jsonip[0].addr;
	if (sessionStorage.ip) {
		$("#ip1").text(sessionStorage.ip);
		$("#ip").val(sessionStorage.ip);
	 }else {
	 	COOCAAIPV6.showToast("dfsdfsdf");
	 	for (var i = 1; i < jsonip.length; i++) {
	 		jp =jp+"</br>"+jsonip[i].addr;
	 		
	 	}
	 	$("#ip1").html(jp);
	 		COOCAAIPV6.showToast(jsonip[0]);
	 		$("#ip").val(jsonip[jsonip.length-1].addr);
		// $("#ip1").text(jsonip[jsonip.length-1].addr);
		// $("#ip").val(jsonip[jsonip.length-1].addr);
	}
	if (sessionStorage.gateway) {
		$("#gate1").text(sessionStorage.gateway);
		$("#gateway").val(sessionStorage.gateway);
	}else{
		$("#gate1").text(COOCAAIPV6.getDeviceNetInfo("route"));
		$("#gateway").val(COOCAAIPV6.getDeviceNetInfo("route"));
	}
	if (sessionStorage.dns) {
		$("#dns1").text(sessionStorage.dns);
		$("#dns").val(sessionStorage.dns);
	}else{
	 	$("#dns1").text(COOCAAIPV6.getDeviceNetInfo("dns"));
	 	$("#dns").val(COOCAAIPV6.getDeviceNetInfo("dns"));
	}
	



//loading动画隐藏
$("#floatingBarsG").css("visibility","hidden");

//获取屏幕的宽度和高度并设置在内容上
// var warpperWidth = 1920;
// var warpperHeight = 1080;
// $(".warpper").css("width",warpperWidth+"px");
// $(".warpper").css("height",warpperHeight+"px");
// $(".content").css("width",warpperWidth+"px");
// $(".content").css("height",warpperHeight+"px");
// $(".back").css("width",warpperWidth+"px");
// $(".back").css("height",warpperHeight+"px");
// 覆盖的方框函数，由.coocaa_button_hover来确定聚焦的位置
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left;
	var hoverWidth = $(".coocaa_button_hover").width();
	var hoverHeight = $(".coocaa_button_hover").height();
	var borderRadius = $(".coocaa_button_hover").css("border-radius");
	$(".button_hover").css({"width":hoverWidth+"px","height":hoverHeight+"px","top":hoverTop+"px","left":hoverLeft+"px","border-radius":borderRadius});
	$(".coocaa_button_hover").focus();

	//根据history来添加聚焦的方框
	//alert($(".history").attr("id"));
	$(".history").css("background","none");
	$(".history").removeClass("history");
	//alert($(".history").attr("id"));
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
	if(hoverTop == $(".btn-primary").offset().top){
		//alert("s");
		$(".btn-primary").css("color","#fff");
		if ($("#left").offset().left!=hoverLeft) {
			//alert("l");
			$("#left").css("color","#009491");
		}else{

			$("#right").css("color","#009491");
		}
	}else{
		$(".btn-primary").css("color","#009491");
	} 

	if(hoverTop == $("#btn").offset().top){
		$("#btn").css("color","#fff");
	}else{
		$("#btn").css("color","#fff");
	}

}

//检测开关是否打开，打开的话用不可编辑的文本来替换input
//并且通过遍历来添加或删除coocaa_button这个样式并且从新初始化对象
$(".switch").on("itemClick",function(){
	if($("input[type='checkbox']").is(':checked')){
		$(".input").css("display","none");
		$(".text").css("display","block");
		$("input[type='checkbox']").removeAttr('checked');
		$(".input >.out1").removeClass("coocaa_button");
		//$(".input")[1].addClass("coocaa_button");
		map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
		buttonHover();
		//回调buttonHover函数
		$(".coocaa_button").on("focusChanged", function(obj){
			buttonHover();
		
		});
	}else{
		$(".input").css("display","block");
		$(".text").css("display","none");
		$("input[type='checkbox']").attr('checked','checked');
		$(".input >.out1").addClass("coocaa_button");
		//$(".input")[1].addClass("coocaa_button");
		map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
		buttonHover();
		//回调buttonHover函数
		$(".coocaa_button").on("focusChanged", function(obj){
			buttonHover();
		
		});
	}
})

//检测是否按下下拉菜单
$("#dns").on("itemClick",function(){
	if ($("#list").is(":hidden")) {
		$("#btn").css("display","none");
		$("#list").css("display","block");
		$("#up").css({"border":"15px solid transparent","border-top":"15px solid #eee","top":"73%"});
		$(".out1").removeClass("coocaa_button");
		$(".down").addClass("coocaa_button");
		$(".coocaa_button_hover").removeClass("coocaa_button_hover");
		map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
		buttonHover();
		//回调buttonHover函数
		$(".coocaa_button").on("focusChanged", function(obj){
			buttonHover();
		
		});
	}else{
		$("#list").css("display","none");
		$("#btn").css("display","block");
		$("#up").css({"border":"15px solid transparent","border-bottom":"15px solid #eee","top":"72%"});
		$(".down").removeClass("coocaa_button");
		$(".out1").addClass("coocaa_button");
		$(".coocaa_button_hover").removeClass("coocaa_button_hover");
		map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
		buttonHover();
		//回调buttonHover函数
		$(".coocaa_button").on("focusChanged", function(obj){
			buttonHover();
		
		});
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
//$(".alert").hide();
$("#btn").on("itemClick",function(){
	$(".alert").fadeIn();
	$(".out2").removeClass("coocaa_button");
	//$("#btn").removeClass("coocaa_button");
	$(".btn-sm").addClass("coocaa_button");
	$(".coocaa_button_hover").removeClass("coocaa_button_hover");
	map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
	buttonHover();
	//回调buttonHover函数
	$(".coocaa_button").on("focusChanged", function(obj){
		buttonHover();
	});
	
})
$("#left").on("itemClick",function(){
	$(".alert").fadeOut();
	// $(".coocaa_button_hover").removeClass("coocaa_button_hover");
	// $("#btn").addClass("coocaa_button_hover");
	// buttonHover();
	$(".btn-sm").removeClass("coocaa_button");
	$(".out2").addClass("coocaa_button");
	//$(".coocaa_button_hover").removeClass("coocaa_button_hover");
	map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
	buttonHover();
	//回调buttonHover函数
	$(".coocaa_button").on("focusChanged", function(obj){
		buttonHover();
	});
    if(COOCAAIPV6!=null)
    {
    	COOCAAIPV6.setDeviceNetInfo("ip",$("#ip").attr("value"));
    	COOCAAIPV6.setDeviceNetInfo("dns",$("#dns0").attr("value"));
    	COOCAAIPV6.setDeviceNetInfo("route",$("#gateway").attr("value"));
   		var jsonip =$.parseJSON(COOCAAIPV6.getDeviceNetInfo("ip"));
   		if (sessionStorage.ip) {
   			$("#ip1").text(sessionStorage.ip);
   			$("#ip").val(sessionStorage.ip);
   		}else{
   			for (var i = 0; i < jsonip.length; i++) {
		 		jp = jsonip[i].addr+"</br>";
		 		$("#ip1").html(jp);
		 		COOCAAIPV6.showToast(jp);
		 		$("#ip").val(jsonip[jsonip.length-1].addr);
	 		}
   		}
   		if (sessionStorage.gateway) {
   			$("#gate1").text(sessionStorage.gateway);
   			$("#gateway").val(sessionStorage.gateway);
   		}else{
   					$("#gate1").text(COOCAAIPV6.getDeviceNetInfo("route"));
   					$("#gateway").val(COOCAAIPV6.getDeviceNetInfo("route"));
   		}
   		if (sessionStorage.dns) {
   			$("#dns1").text(sessionStorage.dns);
   			$("#dns").val(sessionStorage.dns);
   		}else{
   			$("#dns1").text(COOCAAIPV6.getDeviceNetInfo("dns"));
   			$("#dns").val(COOCAAIPV6.getDeviceNetInfo("dns"));
   		}
   		COOCAAIPV6.showToast("45");
		// $(function(){
		// 	setCookie("test","ture");
		// 	var url = $(this).attr("url");
		// 	var https = url.substring(0,8);
		// 	var http = url.substring(0,7);
		// 	if(https == "https://" || http=="http://"){
		// 		window.open(url,"_self");
		// 	}else{
		// 		window.open(url,"_self");
		// 	}
		// });	
   	}
		
   		history.go(0) 
   		COOCAAIPV6.showToast("78");
		//var jsonro =$.parseJSON(COOCAAIPV6.getDeviceNetInfo("route"));
		//var jsondns =COOCAAIPV6.getDeviceNetInfo("dns");
		//$(".text2").first().html(jsonip[2].addr);
		
			
		// var i= jsonip.length-1;
		//COOCAAIPV6.showToast(window.screen.height);
		
		// COOCAAIPV6.showToast(jsonip[2].addr+COOCAAIPV6.getDeviceNetInfo("route")+COOCAAIPV6.getDeviceNetInfo("dns"));
		//COOCAAIPV6.showToast(jsonro[2].addr);

	
    //定焦
	// map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
	// buttonHover();
	// //回调buttonHover函数
	// $(".coocaa_button").on("focusChanged", function(obj){
	// 	buttonHover();
	
	// var url = $(this).attr("url");
	// window.open(url,"_self");
	// });
	//统一的超链接方式，元素的data属性为子路径
 
})



