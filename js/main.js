var $opns=$(".option");
var $video=$(".video");
var $setting=$(".setting");
$(document).ready(
	function(){
		for (var i = 0; i < 6; i++) {
			/*焦点在左侧导航栏*/
			$($opns[i]).on("focusChanged",function(){
				// 焦点从右边跳向左边导航栏
				for (var j = 0; j < 9; j++) {
					if($($video[j]).hasClass("last")){
						changeToFocus(i);
						$(".default_title").css("display","none");
					}
				}
				for (var j = 0; j < 3; j++) {
					if($($setting[i]).hasClass("set_last")){
						changeToFocus(i);
					}
				}
				//左侧导航栏跳转
				for (var i = 0; i < 6; i++) {
					if($($opns[i]).hasClass("coocaa_button_hover")){
						changeToFocus(i);
				 	}
				 	else{
				 		changeToUnchosen(i);
				 	}
					
				}
				switchToRecommed();
				switchToRecently();
				switchToCCTV();
				switchToPlace();
				switchToOthers();
				switchToInternet();
			});
		}

		/*焦点改变就清除放大样式*/
		$height=parseInt($($video[0]).css("height"));
		$(".row").css("height",$height);
		for(var i = 0; i < 16; i++){
			$($(".coocaa_button")[i]).on("focusChanged",function(){
				$(".set_last").css("backgroundColor","white");
				$(".set_last").removeClass("set_last");
				reset();
				//右上角网络状态选中
				toggleTop(); 
			});
		}

		for (var i = 0; i < 9; i++) {
			/*焦点在右侧*/
			$($video[i]).on("focusChanged",function(){
				
				// 左侧导航栏选中且焦点在右边时，左侧呈蓝色状态	
				for (var i = 0; i < 6; i++) {
					if($($opns[i]).hasClass("active_opn")){
					 	changeToChosen();
					}
				}
				//焦点所在位置，添加放大样式
				for (var j = 0; j < 9; j++) {
					if($($video[j]).hasClass("coocaa_button_hover")){
						$($video[j]).animate({
						 	left:'-=70px',
						 	top:'-=70px'
						 	},1);
						$($video[j]).animate({
		                    height: '+=164px',
		                    width: '+=164px'
		                    }, 1
		                 );

						$($video[j]).css({
							"zIndex":"4",
							"border":"6px solid #2eb0e0",
							"boxShadow":"20px 30px 50px 6px #000"
						});
						$($video[j]).addClass("last");
						//添加蓝色覆盖层
						// $($(".b")[j]).animate({
						//  	left:'-=70px',
						//  	top:'-=2px'
						//  	},1);
						$($(".b")[j]).attr("src","../images/front.png");
						$width=parseInt($($video[j]).css("width"));

						$($(".b")[j]).css({
							"zIndex":"5",
							"display":"block",
							"width":$width+164+"px",
							"left":"-70px",
							"bottom":"-88px"
						});
						$($(".b")[j]).addClass("blue");
						//	添加正副标题
						$($(".video_title")[j]).css({
							"display":"block"
						});
						
					}
					if(!($($video[j]).hasClass("coocaa_button_hover"))){
						$($(".video_hover")[j]).css("display","block");
						$($(".b")[j]).css("display","block");
						$($(".default_title")[j]).css("display","block");
					}
				}
			});
		}

		//网络设置网络检测设置向导选中
		$setting=$(".setting");
		for(var i=0;i<3;i++){
			$($setting[i]).on("focusChanged",function(){
				reset();
				$(".opn_top").attr("downtarget",".internet_test");
				toggleTop();
				for (var i = 0; i < 6; i++) {
					if($($opns[i]).hasClass("active_opn")){
					 	changeToChosen();
					}
				}

				for(var i=0;i<2;i++){
					if($($setting[i]).hasClass("coocaa_button_hover")){
						$($(".bg_small")[i]).css("display","none");
						$($(".bg_big")[i]).css({
							"display":"block",
							"border":"4px solid #006b63"
						});
						$setting.css("height",$($(".bg_big")[i]).css("height"));
						$($(".black_hover")[i]).attr("src","../images/homepage/front.png");
						$($(".black_hover")[i]).css("width","110%");
						$($setting[i]).addClass("last_ie");
					}
					if(!$($setting[0]).hasClass("coocaa_button_hover")){
						$($(".setting div")[i]).css("display","block");
						$($(".setting div")[i]).addClass("b_hover");
					}
					if(!$($setting[1]).hasClass("coocaa_button_hover")){	
						$(".inline div").css("display","block");
						$(".inline div").addClass("b_hover");
						
					}
					
				}
				if($($setting[2]).hasClass("coocaa_button_hover")){
					$(".bt_circle").css("display","none");
					$(".bt_square").css("display","block");
					$(".b_hover").css("display","none");

				}
				if(!$($setting[2]).hasClass("coocaa_button_hover")){
					$(".bt_circle").css("display","block");
					$(".bt_square").css("display","none");
				}		
			});	
		}

		//右上角网络正常&不正常
		if($(".icon").attr("src")=="../images/homepage/IPV6/signal_normal.png"){
			$(".opn_top").attr("url","http://www.codemans.cn/Coocaa/html/settingindex.html");
		}
		if($(".icon").attr("src")=="../images/homepage/IPV6/signal_error.png"){
			$(".opn_top").attr("url","http://www.codemans.cn/Coocaa/html/internet_test.html");
		}		
		
		//url改变时触发事件，获取ip dns gateway地址到表单
		if ($(".internet_test").hasClass("coocaa_button_hover")) {
			window.onload=function(){
				$("form").css("display","block");
				$("#id").attr("value",getip());
				$("#gateway").attr("value",getroute());
			}	
		}
		//动画
	
});

			
function switchToRecommed(){
			if($($opns[0]).hasClass("coocaa_button_hover")){
				$(".recently").css("display","none");
				$(".CCTV").css("display","none");
				$(".place").css("display","none");
				$(".others").css("display","none");
				$(".internet").css("display","none");
				$(".recommend").css("display","block");

			}
}
function switchToRecently(){			
			if($($opns[1]).hasClass("coocaa_button_hover")){
				$(".recommend").css("display","none");
				$(".CCTV").css("display","none");
				$(".place").css("display","none");
				$(".others").css("display","none");
				$(".internet").css("display","none");
				$(".recently").css("display","block");

			}
}
function switchToCCTV(){
			if($($opns[2]).hasClass("coocaa_button_hover")){
				$(".recently").css("display","none");
				$(".recommend").css("display","none");
				$(".place").css("display","none");
				$(".others").css("display","none");
				$(".internet").css("display","none");
				$(".CCTV").css("display","block");
			}
}
function switchToPlace(){
			if($($opns[3]).hasClass("coocaa_button_hover")){
				$(".recently").css("display","none");
				$(".CCTV").css("display","none");
				$(".recommend").css("display","none");
				$(".others").css("display","none");
				$(".internet").css("display","none");
				$(".place").css("display","block");
			}
}
function switchToOthers(){
			if($($opns[4]).hasClass("coocaa_button_hover")){
				$(".recently").css("display","none");
				$(".CCTV").css("display","none");
				$(".place").css("display","none");
				$(".recommend").css("display","none");
				$(".internet").css("display","none");
				$(".others").css("display","block");
			}
}
function switchToInternet(){
			if($($opns[5]).hasClass("coocaa_button_hover")){
				$(".recently").css("display","none");
				$(".CCTV").css("display","none");
				$(".place").css("display","none");
				$(".others").css("display","none");
				$(".recommend").css("display","none");
				$(".internet").css("display","block");

			}
}
function reset(){
			$(".last").animate({
					height: '-=140px',
			        width: '-=140px'
					},1
			);
							
			$(".last").animate({
			        left:'+=70px',
			        top:'+=70px'
			        },1
			 );
			$(".last").css({
					"border":"none",
					"boxShadow":"none",
					"zIndex":"0",
					});
			$(".blue").css({
				"width":"100%",
				"zIndex":"2",
				"left":"0",
				"bottom":"-30px"
			});
			// $(".blue").css("zIndex","2");
			$(".blue").attr("src","../images/front_small.png");
			$(".blue").removeClass("blue");
			$(".last").removeClass("last");
			$(".video_hover").css("display","none");
			$(".b").css("display","none");
			$(".video_title").css("display","none");
			//ipv6网络子页面
			$(".last_ie .bg_small").css("display","block");
			$(".last_ie .bg_big").css({
				"display":"none",
				"border":"none"
			});
			$(".inline .bg_small").css("display","block");
			$(".inline .bg_big").css({
				"display":"none",
				"border":"none"
			});
			$setting.css("height",$(".bg_small").css("height"));
			$(".last_ie .black_hover").attr("src","../images/homepage/front_small.png");
			$(".last_ie .black_hover").css("width","100%");
			$(".inline .black_hover").attr("src","../images/homepage/front_small.png");
			$(".inline .black_hover").css("width","100%");
			$(".last_ie").removeClass("last_ie");
			$(".b_hover").css("display","none");
			$(".b_hover").removeClass("b_hover");
}
function changeToFocus(i){
		var aBig=["live_tv","history","CCTV","toys","movie_filter","settings"];
		$($opns[i]).removeClass("opn");
		$($opns[i]).removeClass("chosen");
		// alert($($opns[i]).prop("className"));
		$($opns[i]).addClass("active_opn");
		$($(".option img")[i]).attr("src","../images/homepage/icon_big_chosen/"+aBig[i]+".png");
}
function changeToChosen(){
		var aChosen=["ic_live_tv_white_48dp_2x","ic_history_white_small","CCTV","ic_toys_white_48dp_2x","ic_movie_filter_white_48dp_2x","ic_settings_white_48dp_2x"];
		var a=$(".active_opn").prop('className')||$(".chosen").prop('className');
		var n=a.replace(/[^0-9]/ig,"");
		$(".active_opn").addClass("chosen");
		$(".active_opn img").attr("src","../images/homepage/icon_small_chosen/"+aChosen[n-1]+".png");
		$(".active_opn").removeClass("active_opn");
}
function changeToUnchosen(i){
		var aSmall=["ic_live_tv_white_48dp_2x","ic_history_white_small","CCTV","ic_toys_white_48dp_2x","ic_movie_filter_white_48dp_2x","ic_settings_white_48dp_2x"];
 		$($opns[i]).removeClass("active_opn");
		$($opns[i]).addClass("opn");
		$($(".option img")[i]).attr("src","../images/homepage/icon_small/"+aSmall[i]+".png");
}
function toggleTop(){
		if($(".opn_top").hasClass("coocaa_button_hover")){
			$(".unchosen").attr("src","../images/homepage/IPV6/chosen_bottom.png");
			$(".unchosen").css("left","-9%");
			$(".unchosen").css("width","90%");
		}
		else{
			$(".unchosen").attr("src","../images/homepage/IPV6/not_chosen_bottom.png");
			$(".unchosen").css("left","40%");
			$(".unchosen").css("width","50%");
		}
}
