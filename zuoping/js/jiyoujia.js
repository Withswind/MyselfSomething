var global = [];
var	money=[];
var address=[];
var pub=[];
var	j;
var	sum;
$.ajax({
	url :"http://www.ikindness.cn/api/test/getProduct",
}).done(function(data){
	global = data.data;
	pub = data.data;
	$(".list").createDOM(global);
	
});
$.fn.extend({
	createDOM: function(data){
		var	len = data.length;
			whole=[];
		var order = $(".num").text();
		var k = len<10 ? 0 : 10*(order-1);
		for(var i = k;i<(len<10?len:(k+(Math.ceil(len/10)==order?parseInt(len%10==0?10:len%10):10)));i++){
			whole.push("<div class=\"order\">"
			+"<a href=\"https:"+data[i].href+"\" style=\"background-image:url(https:"+data[i].image+")\">"
			+"<p class=\"money\">¥"+data[i].price+"</p>"
			+"<p class=\"baoYou\">包邮</p>"
			+"<p class=\"name\">"+data[i].name+"</p>"
			+"<p class=\"sold\">已售"+data[i].sold+"件</p>"
			+"<div class=\"\"><p class=\"user\">"+data[i].owner+"</p>"
			+"<p class=\"location\">"+data[i].location+"</p></div>"
			+"<div class=\"icon\"><img src=\"./img/icon1.png\" class=\"icon1\"><img src=\"./img/icon2.png\" class=\"icon2\"></div>"
			+"</a><input type=\"button\" class=\"buy\" value=\"购买\"></div>")
		}
		$(".list").append(whole);
		//购买按钮
		$.ajax({
			url :"http://www.ikindness.cn/api/test/getInfo",
			data:{
				userId : 100
			}
		}).done(function(_data){
			sum = _data.data.money; 
			$(".list").delegate(".buy","click",function(){
				var $num = $(".num").text();
				var index = 10*($num-1)+$(this).parent().index();
				if(data[index].price < sum){
					console.log("可以买");
				}else{
					console.log("翻滚吧，穷光蛋")
				}
			})
		})
	},
	//价格区间
	section : function(){
		var	money = [];
			min = $(".test.min").val(),
			max = $(".test.max").val();
		j=0;
		for(var i = 0; i <pub.length; i++){
			var mon = parseInt(pub[i].price);
			if(mon>=min && mon<=max){
				money[j] = pub[i];
				j++;
			}
		};
		$(".maxNum").text(Math.ceil(money.length/10));
		$(".list").html("");
		$(".list").createDOM(money);
		global = money;
	},
	//地点分类
	site : function(value){
		var	address=[];
		j=0;
		for(var i = 0; i <pub.length; i++){
			if(pub[i].location == value){
				address[j] = pub[i];
				j++;
			}
		};
		$(".maxNum").text(Math.ceil(address.length/10));
		$(".list").html("");
		$(".list").createDOM(address);
		global = address;
	}
});
//区间
$(".btn.price").click(function(){
	$(".num").text("1");
	$(".btn.price").section();
});
//地址
$("ul .add .address a").click(function(){
	$(".num").text("1");
	$("input.test").val("");
	var value =this.innerText;
	$("ul .add .address a").site(value);
});
//翻页
$(".toleft").click(function(){
	console.log(global);
	var $num = $(".num").text();
	$(".num").text($num == 1 ? 1 : $num - 1);
	$(".list").html("");
	$(".list").createDOM(global);
});
$(".toright").click(function(){
	var $num = $(".num").text();
	var a = $(".maxNum").text();
	$(".num").text($num > a-1 ? $num : parseInt($num) + 1);
	$(".list").html("");
	$(".list").createDOM(global);
});
var temp=[];
//价格排序
$(".priceAsce").click(function(){
	$(this).addClass("cur").parent().siblings().find(".nav").removeClass("cur");
	$(".num").text("1");
	for(var i = 0; i <global.length-1; i++){
		for(var j = i+1; j <global.length; j++){
			if(parseInt(global[j].price) < parseInt(global[i].price)){
				temp[0] = global[i];
				global[i] = global[j];
				global[j] = temp[0];
			}
		}
	}
	$(".list")[0].innerHTML ="";
	$(".list").createDOM(global);
});
$(".priceDesc").click(function(){
	$(".num").text("1");
	$(this).addClass("cur").parent().siblings().find(".nav").removeClass("cur");
	for(var i = 0; i <global.length-1; i++){
		for(var j = i+1; j <global.length; j++){
			if(parseInt(global[j].price) > parseInt(global[i].price)){
				temp[0] = global[i];
				global[i] = global[j];
				global[j] = temp[0];
			}
		}
	}
	$(".list")[0].innerHTML ="";
	$(".list").createDOM(global);
});
//交易量排序
$(".buyAsce").click(function(){
	$(".num").text("1");
	$(this).addClass("cur").parent().siblings().find(".nav").removeClass("cur");
	for(var i = 0; i <global.length-1; i++){
		for(var j = i+1; j <global.length; j++){
			if(parseInt(global[j].sold) < parseInt(global[i].sold)){
				temp[0] = global[i];
				global[i] = global[j];
				global[j] = temp[0];
			}
		}
	}
	$(".list")[0].innerHTML ="";
	$(".list").createDOM(global);
});
$(".buyDesc").click(function(){
	$(".num").text("1");
	$(this).addClass("cur").parent().siblings().find(".nav").removeClass("cur");

	for(var i = 0; i <global.length-1; i++){
		for(var j = i+1; j <global.length; j++){
			if(parseInt(global[j].sold) > parseInt(global[i].sold)){
				temp[0] = global[i];
				global[i] = global[j];
				global[j] = temp[0];
			}
		}
	}
	$(".list")[0].innerHTML ="";
	$(".list").createDOM(global);
});


