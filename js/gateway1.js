//判断输入的个数是不是等于4个，是就自动跳到下一个输入框
//除去输入框满四个而按钮为向左而出现不移动的bug
$(":input").on("keydown",function(ev){
	if ($(this).val().length == 4 && ev.keyCode!=37 && ev.keyCode!=8 && ev.keyCode!=39) {
    	map.moveRight();
	}
})	
