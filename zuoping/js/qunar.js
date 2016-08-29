var data = obj.data,
	len = data.length,
	order,
	count,
	a,
	whole=[];

$.fn.extend({
	type1 : function(){
		switch(this.attr("id")){
			case "order1":order = 1;break;
			case "order2":order = 2;break;
			case "order3":order = 3;break;
			case "order4":order = 4;break;
			case "order5":order = 5;break;
			case "order6":order = 6;break;
		}
		console.log(len);
		whole=[];
		if (order==1 || order==2 || order==3){
			for(var i = (order-1)*16; i < (order ==3?order*16+4:order*16);i++){
				whole.push("<a class=\"lst\" href=\""+data[i].href+"\">"
				+"<div class=\"lstPic\"><img class=\"photo\" src=\""+data[i].imgSrc+"\">"
				+"<div class=\"discount\"><span>立享</span><span class=\"disc\">"+data[i].cut+"折</span>"+"</div></div>"
				+"<div class=\"lstbd\"><p class=\"title\">"+data[i].title+"</p>"
				+"<p class=\"describe\">"+data[i].description+"</p>"
				+"<div class=\"money\"><p class=\"price\">¥<mark>"+data[i].price+"</mark>起</p>"
				+"<p class=\"oldPrice\">¥"+data[i].oldPrice+"</p>"
				+"<p class=\"buy\">抢购</p></div></div>"
				+"</a>")
			}
		}else if(order==4 || order==5){
			order==4? (count=52,a=16):(count=76,a=8);
			for(var i = count; i < count+a;i++){
				whole.push("<a class=\"lst\" href=\""+data[i].href+"\">"
				+"<div class=\"lstPic\"><img class=\"photo\" src=\""+data[i].imgSrc+"\">"
				+"<div class=\"discount\"><span>会员</span><span>立减</span>"+"</div>"
				+"<div class=\"floating\"><img src=\"./image/erweima.png\"><p>扫码购买,可享会员折扣</p></div>"
				+"</div>"
				+"<div class=\"lstbd\"><p class=\"title\">"+data[i].title+"</p>"
				+"<p class=\"describe\">"+data[i].description+"</p>"
				+"<div class=\"money\"><p class=\"price\">¥<mark>"+data[i].price+"</mark>起</p>"
				+"<p class=\"oldPrice\"></p>"
				+"<p class=\"buy\">抢购</p></div></div>"
				+"</a>")
			}
		}else{
			for(var i = len-40; i < len;i++){
				whole.push("<a class=\"lst\" href=\""+data[i].href+"\">"
				+"<div class=\"lstPic\"><img class=\"photo\" src=\""+data[i].imgSrc+"\">"
				+"<div class=\"discount\"><span>会员</span><span>一口价</span>"+"</div>"
				+"<div class=\"floating\"><img src=\"./image/erweima.png\"><p>扫码购买,可享会员折扣</p></div>"
				+"</div>"
				+"<div class=\"lstbd\"><p class=\"title\">"+data[i].title+"</p>"
				+"<p class=\"describe\">"+data[i].description+"</p>"
				+"<div class=\"money\"><p class=\"price\">¥<mark>"+data[i].price+"</mark>起</p>"
				+"<p class=\"oldPrice\"></p>"
				+"<p class=\"buy\">抢购</p></div></div>"
				+"</a>")
			}
		}
		this.find(".list").append(whole);
	}
});
$(".part1").type1();
$(".part2").type1();
$(".part3").type1();
$(".part4").type1();
$(".part5").type1();
$(".part6").type1();



$(".lst").mouseenter(function(){
	$(this).find(".lstPic .photo").animate({
		top:"-10px",
		left:"-10px",
		width:"244px",
		height:"169px"
	}, 500);
	$(this).find(".floating").css("z-index","1");
}).mouseleave(function(){
	$(this).find(".lstPic .photo").animate({
		top:"",
		left:"",
		width:"224px",
		height:"149px"
	}, 500);
	$(this).find(".floating").css("z-index","-1");
});

//offset()获取偏移量
var part1TOP =$(".part1 .bd .bd-hd").offset().top;
var part2TOP =$(".part2 .bd .bd-hd").offset().top;
var part3TOP =$(".part3 .bd .bd-hd").offset().top;
var part4TOP =$(".part4 .bd .bd-hd").offset().top;
var part6TOP =$(".part6 .bd .bd-hd").offset().top;
$(window).scroll(function(){
	var winY = window.pageYOffset;
	if(winY>480){
		$(".sliderBar").addClass("fix");
	}else{
		$(".sliderBar").removeClass("fix");
	};
	console.log(winY < part1TOP+$(".part2 .list").height()+40);
	if(winY>part1TOP && winY < part1TOP+$(".part1 .list").height()+40){
		$(".part1 .bd .bd-hd").addClass("fix");
	}else{
		$(".part1 .bd .bd-hd").removeClass("fix");
	};
	if(winY>part2TOP && winY < part2TOP+$(".part2 .list").height()+40){
		$(".part2 .bd .bd-hd").addClass("fix");
	}else{
		$(".part2 .bd .bd-hd").removeClass("fix");
	};
	if(winY>part3TOP && winY < part3TOP+$(".part3 .list").height()+40){
		$(".part3 .bd .bd-hd").addClass("fix");
	}else{
		$(".part3 .bd .bd-hd").removeClass("fix");
	};
	if(winY>part4TOP && winY < part4TOP+$(".part4 .list").height()+40){
		$(".part4 .bd .bd-hd").addClass("fix");
	}else{
		$(".part4 .bd .bd-hd").removeClass("fix");
	};
	if(winY>part6TOP && winY < part6TOP+$(".part6 .list").height()+40){
		$(".part6 .bd .bd-hd").addClass("fix");
	}else{
		$(".part6 .bd .bd-hd").removeClass("fix");
	}
})





