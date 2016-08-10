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
//再获取它的位置大小并设置在.button_hover样式上，移除只读属性并聚焦
function buttonHover(){
	var hoverTop = $(".coocaa_button_hover").offset().top;
	var hoverLeft = $(".coocaa_button_hover").offset().left;
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
		if ($("#next").offset().left!=hoverLeft) {
			$("#next").css("color","#009491");
		}else{
			$("#before").css("color","#009491");
		}
	}else{
		$(".btn-primary").css("color","#009491");
	} 

	$(".radio").on("itemClick",function(){
		$(this).children().attr("checked","checked");
		$(this).siblings().children().removeAttr("checked");
	})

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
}
// $(".progress-bar").animate({width:"66.7%"},2500)

//发送请求
$("#next").on("itemClick",function(){
	var dns = $("input[checked='checked']");
	sessionStorage.dns = dns.next().next().text();
	console.log(dns.next().next().text());
	//$.get('set.php',{dns:dns.next().next().text()},function(data,status){});
})
$("#dns").on("keyup",function(ev){
	var str = $("#dns").val();
	var svg =/^[a-f0-9A-F:]$/;
	var n=m=k=0;
	if (ev.keyCode==8) {
		var t=str.length-1;
		//alert(str.charAt(t));
		str=str.substring(0,str.length-1);
		$("#dns").attr("value",str);
	}
	for(i=0;i<str.length;i++){
		if (str.charAt(0)==":"){
			$(".alert").css("display","block");
			$(".alert >p").html("第一个字符不能为':'");
			break;
		}
		if (str.length>39) {
			$(".alert").css("display","block");
			$(".alert >p").html("你输入长度过长");
			break;
		}else{
			$(".alert").css("display","none");
		}
		var t = str.charAt(i);
		if (!svg.test(t)) {
			$(".alert").css("display","block");
			$(".alert >p").html("你输入字符不合法，请使用十六进制数");
		}
		if (str.charAt(i)==":") {
			n = i;
			var ss=str.substring(m,n);
			var f=str.indexOf(":");
			//alert(ss.indexOf("0"));
			if (n!=f) {
				if (ss.indexOf("0")== 1) {
					$(".alert").css("display","block");
					$(".alert >p").html("冒号之间头次出现非零数前的零可省略");
				}
			}
			
			if (n-m>5) {
				$(".alert").css("display","block");
				$(".alert >p").html("你输入冒号之间超过4位数");
			}else if (n-m==1) {
				k++;
			}
			if (k>1) {
				$(".alert").css("display","block");
				$(".alert >p").html("输入错误，不能再次使用'::'");
			}
			if (n==f) {
				if (ss.indexOf("0")== 0) {
					$(".alert").css("display","block");
					$(".alert >p").html("冒号之间头次出现非零数前的零可省略");
				}
				if (n-m>4) {
					$(".alert").css("display","block");
					$(".alert >p").html("你输入冒号之间超过4位数");
				}
			}
			m = n;		
		}
	}
})

