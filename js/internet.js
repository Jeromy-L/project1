alert(typeof(getCookie("test")));
if(getCookie("test")==="ture"){
	//alert("ad");
	test();
	clearCookie("test");
}

//按回车键，触发submit向后台提交数据
if(location.href=="file:///C:/Users/lenovo/Desktop/project/html/index.html"){
	for(var i=0;i<3;i++){
		$($(".setting")[i]).on("focusChanged",function(){
			if ($(".internet_test").hasClass("coocaa_button_hover")) {
				$("body").keydown(function(){
					var key1;
					key1=getKey();
					if (key1==13) {
						$(".internet_test").click();
					}
				});
			}
		});
	}
}
//结果正常页面按钮跳转
if(location.href=="http://www.codemans.cn/Coocaa/html/test_result_normal.html")
{
	var key2;
	document.onkeydown=function(){
		key2=getKey();
		if(key2==13){
			window.history.go(-2);
		}
	}	
}
//几个检测结果子页面的按钮交互事件
$button=$(".btn a");
for(var i=0;i<3;i++){
	$($button[i]).on("focusChanged",function(){
		for(var i=0;i<3;i++){
			if ($($button[i]).hasClass("coocaa_button_hover")) {
				$($button[i]).css({
					"background":"url(../images/bottom_side.png)",
					"filter":"opacity(alpha=100)",
					"opacity": "1"
				});
			}
			if (!$($button[i]).hasClass("coocaa_button_hover")) {
				$($button[i]).css({
					"background":"none",
					"filter":"opacity(alpha=50)",
					"opacity": "0.5"
				});
			}
		}
	});
}
//超时页面按钮跳转
if(location.href=="file:///C:/Users/lenovo/Desktop/project11/project/html/test_error.html"){

	if($(".retest").hasClass("coocaa_button_hover")){
		var key3;
		document.onkeydown=function(){
			key3=getKey();
			alert(key4);
			if(key3==13){
				location.href="index.html";
			}
		}
	}
}	
//超时跳转函数
function delayURL(url, time) { 
		setTimeout("location.href='" + url + "'", time); 
} 
//获取键值
function getKey(){
		var key;
		if(window.event) // IE
			{
			key = event.keyCode;
			}
		else if(event.which) // Netscape/Firefox/Opera
			{
			key = event.which;
			}
		return key;
}
//获取数据，检测完接收从后台返回的数据，并根据返回值更新页面
function test(){

	$(".index").css("display","none");
	$(".test_loading").css("display","block");
	//动画
	for (var i = 0; i <6; i++) {
		 $(".dot1").animate({
	                    left: "+=494px"
	                }, 3000,function(){ $(".dot1").css("left","0px");});
		  $(".dot2").animate({
	                    left: "+=494px"
	                }, 2000,function(){ $(".dot2").css("left","0px");});
		  $(".dot3").animate({
	                    left: "+=494px"
	                }, 4000,function(){ $(".dot3").css("left","0px");});
		 
	}
	// onJsAndroidPing("IP",false,30);
	// onJsAndroidPing("route",false,80);
	
	COOCAAIPV6.ping("","",3);
	
}




// function test(){
// 		$.get('get.php',
// 		{
// 			ip : $("#ip").val(),
// 			dns : $("#dns").val(),
// 			gateway : $("gateway").val()
// 		}, 
// 		function(data,status){
// 			if (data==0) {
// 				location.href="test_result_abnormal.html";	
// 				$(".IPV6 a").text()="不正确";
// 				$(".IPV6").css("color","#ffde00");
// 			}else if(data==1){
// 				location.href="test_result_abnormal.html";	
// 				$(".gateway a").text()="不正确";
// 				$(".gateway").css("color","#ffde00");
// 			}else if(data==2){
// 				location.href="test_result_abnormal.html";	
// 				$(".conect a").text()="不正确";
// 				$(".conect").css("color","#ffde00");
// 			}else if(data==3){
// 				location.href="test_result_normal.html";	
// 			}else{
// 				delayURL("http://www.codemans.cn/Coocaa/html/test_error.html", 10000); 
// 			}
// 		});
// }
//读取ip和网关
function getip(){
    if(COOCAAIPV6 != null){
        document.getElementById("ip").innerHTML+=("<span>"+COOCAAIPV6.getDeviceNetInfo("ip")+"</span><br>");
    }
}

function getroute(){
    if(COOCAAIPV6 != null){
    	document.getElementById("route").innerHTML+=("<span>"+COOCAAIPV6.getDeviceNetInfo("route")+"</span><br>");
    }
}
//调用格式 onJsAndroidPing("route",[任意值],0);
function onJsAndroidPing(pingType,pingAddr,pingLoss){
	/*网络是否连接*/
	if(window.navigator.onLine){
		$(".conect a").text("正确");
	}else{//网络连接有误
		$(".conect a").text("不正确");
		$(".conect a").css("backgroundColor","#a60000");
	}
	/*IP或route或DNS是否正确*/
	var array=["IP","route","DNS"];
	for (var i = 0; i < 3; i++) {
		if (pingType==array[i]) {
			if (pingLoss <= 20) {  //丢包率小于20，IP或route或DNS状态良好
				$($(".address a")[i]).text("良好");
			}
			else if(pingLoss > 20 && pingLoss < 60) { //丢包率处于20-60之间，IP或route或DNS状态良好
				$($(".address a")[i]).text("一般");
				$($(".address a")[i]).css("backgroundColor","#005982");

			}
			else{ //丢包率大于60，IP或route或DNS不正确
				$($(".address a")[i]).text("不正常");
				$($(".address a")[i]).css("backgroundColor","#a60000");
				$($(".address a")[i]).removeClass("short");
				$($(".address a")[i]).addClass("long");
			};
		}else{
			continue;
		}
	}
setTimeout(function(){
	for (var i = 0; i < 3; i++) {
		if($($(".address a")[i]).text()=="检测中"){
			location.href="test_error.html";	
		}
		else{
			if(i==2){
				$(".test_loading").css("display","none");
				$(".test_result").css("display","block");
			}else{
				continue;
			}
		}
	}
	},10000);
}
	

