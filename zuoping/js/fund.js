$.ajax({
	url : "http://www.ikindness.cn/api/test/getFund",
	data : {}
}).done(function(data){
	var _data = data.data;
	for(var i = 0, dataLen = _data.length; i < dataLen; i++){
		var $img = _data[i].image,
		$name = _data[i].name,
		$label = _data[i].label,
		$rate = _data[i].rate,
		$amount = _data[i].amount,
		$sum = _data[i].sum,
		$main = $(".list .content .main").eq(i);
		$main.prepend("<div class=\"nav\"><img class=\"pic\" src=\"" + $img +"\"></div>");
		if (i % 8 !=0) {
			$main.append("<div class=\"current\"><span style=\" font-size:15px;\">"+$name+"</span></div> ");
			$main.append("<div class=\" test\"></div>");
			for (var j = 0; j < $label.length; j++) {
				$main.find(".test").append("<label>"+$label[j]+"</label>");
			}
			$main.append("<div class=\"bar\" style=\"border-right-width:"+(250*(0.01*(100-($rate <= 100 ? $rate : 100))))+"px\"></div>");
			$main.append("<div class=\"project\"><span class=\" spLeft\"><em class=\"num\">"+ $rate+"%</em><em class=\"name\">达成率</em></span><span class=\"spMiddle\"><em class=\"num\">"+$sum+"</em><em class=\"name\">已筹金额</em></span><span class=\"spRight\"><em class=\"num\">"+$amount+"%</em><em class=\"name\">支持人数</em></span></div> ");	
		}
	}
});
$(".banner").banner({
	setting : [
		{
			imageUrl:"./image/1_1.jpg"
		},
		{
			imageUrl:"./image/1_2.jpg"
		},
		{
			imageUrl:"./image/1_3.jpg"
		},
		{
			imageUrl:"./image/1_4.jpg"
		},
		{
			imageUrl:"./image/1_5.jpg"
		},
	],
	type : "slide",
	indicator : 2 ,	
});