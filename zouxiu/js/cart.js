$(function(){
	$.ajax({
		type:"get",
		url:"../html/commod/header.html",
		async:false,
		success:function(msg){
			$('.cartheader').append(msg);
		}
	});
	
	$.ajax({
		// 方式
		type:'GET',
		url:'commod/footer.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
	//		console.log(msg);
			$('.cartfooter').append(msg);
		}
	});


/*------------读取cookie-----------*/
	var jsonc = $.cookie('ginfor');
	var a = eval('('+jsonc+')');
	if(jsonc){
		$('.nogoods').hide();
		var html = '<div class="havagoods">'
				 +	'<div class="gInformation">'
				+		'<div class="inforheader">'
				+			'<ul>'
				+				'<li class="cartli1">商品</li>'
				+				'<li class="cartli2">单价（元）</li>'
				+			'<li class="cartli3">小计（元）</li>'
				+				'<li class="cartli4">数量</li>'
				+				'<li class="cartli5">操作</li>'
				+			'</ul>'
				+		'</div>'
				+		'<div class="inforcent">'
				+			'<ul>'
				+				'<li class="cart1">'
				+					'<div class="cart1img">'
				+						'<img src="../img/small.jpg"/>'
				+					'</div>'
				+					'<div class="carxx">'
				+						'<p>Bentley</p>'
				+						'<p>新飞驰 V8 尊贵版</p>'
				+						'<p>颜色 :'+a.color+'</p>'
				+					'</div>'
				+				'</li>'
				+				'<li class="cart2">¥ 3178000</li>'
				+				'<li class="cart3">'+3178000*a.shuliang+'元</li>'
				+				'<li class="cart4">'
				+					'<a class="jian" href="javascript:;"></a>'
				+					'<div>'+a.shuliang+'</div>'
				+					'<a class="jia" href="javascript:;"></a>'
				+				'</li>'
				+				'<li class="cart5"><a href="JavaScript:del();">删除</a></li>'
				+			'</ul>'
				+		'</div>'
				+	'</div>'
				+	'<div class="jiesuan">'
				+		'<div class="yixuan">'
				+			'已选<span>'+a.shuliang+'</span>件商品'
				+		'</div>'
				+		'<div class="zongji">总计：'
				+			'<span>'+3178000*a.shuliang+'元</span>'
				+		'</div>'
				+		'<div class="tojiesuan">'
				+			'<a href="javascript:;">.</a>'
				+		'</div>'
				+	'</div>';
				
		$('.have').append(html);		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

function del () {
	$.cookie('ginfor',null,{expires:0,path:'/',secure:false});
	$('.nogoods').show();
	$('.havagoods').hide();
}	