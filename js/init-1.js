$(function () {
	            //定焦
				map = new coocaakeymap($(".coocaa_button"), null, "coocaa_button_hover");
				buttonHover();
				//回调buttonHover函数
				$(".coocaa_button").on("focusChanged", function(obj){
					buttonHover();
					
				});
				//统一的超链接方式，元素的data属性为子路径
	            
	 })