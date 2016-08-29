$(".nav li").mouseenter(function(){
	$(this).find("div").css("display","block");
}).mouseleave(function(){
	$(this).find("div").css("display","none");
});
$(".right li").mouseenter(function(){
	$(this).find("div").css("display","block");
}).mouseleave(function(){
	$(this).find("div").css("display","none");
})
$.fn.extend({
	banner : function(){
		var _this = this;
		var i =1;
		_this._change(i);
		$(".index").click(function(){
			clearTimeout(play);
			var index = $(this).index();
			_this._animation(index);
			i=index+1;
			_this._change(i);
		})
	},
	_animation : function(index){
		$(this).eq(index).addClass("current").siblings().removeClass("current");
		$(".bg div").eq(index).addClass("show").siblings().removeClass("show");
		$(".slider .item").eq(index).addClass("show").siblings().removeClass("show");
		$(".slider .item").eq(index).css({
			"top":"-60px",
			"opacity":"0"
		}).animate({
			top : "0px",
			"opacity":"1"
		},500); 
	},
	_change : function(i){ 
		var _this = this;
		play = setInterval(function(){
				_this._animation(i);
				i++;
				i = i>4? 0: i;
		},3000);		
	},
});
$(".index").banner();