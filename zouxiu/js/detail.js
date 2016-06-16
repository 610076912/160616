$(function(){
	$.ajax({
		type:"get",
		url:"../html/commod/header1.html",
		async:false,
		success:function(msg){
			$('.ajaxh').append(msg);
		}
	});
	
	$.ajax({
		// 方式
		type:'GET',
		url:'commod/footer1.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
	//		console.log(msg);
			$('.ajaxf').append(msg);
		}
	});
	
	
/*-------------放大镜----------*/
$('.bigmap').mousemove(function(ev){
	var scale=800/458;
	ev=ev||event;
	$('#div2,#div3').show();
	var x=ev.pageX-$(this).offset().left-$('#div2').width()/2;
	var y=ev.pageY-$(this).offset().top-$('#div2').height()/2;
	if(x<0){
		x=0;
	}
	if(x>($(this).width()-$('#div2').width())){
		x=$(this).width()-$('#div2').width();
	}
	if(y<0){
		y=0;
	}
	if(y>($(this).height()-$('#div2').height())){
		y=$(this).height()-$('#div2').height();
	}
	$('#div2').css('left',x);
	$('#div2').css('top',y);
	$('#bigImg').css('margin-left',-1*x*scale);
	$('#bigImg').css('margin-top',-1*y*scale);
})
$('.bigmap').mouseout(function(){
	$('#div2,#div3').hide();
});
	
	
	
	
	
/*-------------选项卡----------*/	
$('.xxkheader').find('li').click(function(){
	$(this).css({'background':'#ea7514','height':'36'}).siblings().css('background','#efefef');
	$(this).find('a').css({'color':'#fff','fontWeight':'bold'}).parent().siblings().find('a').css({'color':'#000','fontWeight':'normal'});
	var cHeight = $('.xxkcontentbox').find('img').eq($(this).index()).height();
	$('.xxkcontentbox').css('height',cHeight);
	$('.xxkcontentbox').find('img').eq($(this).index()).css('zIndex',"4").siblings().css('zIndex','1');
})




/*$('#detailbtn1').click(function(){
	$(this).css('background','#ea7514')
	$('.xxkcontentbox').find('img').css('zIndex','1');
	$('.xxkcontentbox').css('height','5362');
	$('#detail1').css('zIndex',"4");
})
$('#detailbtn2').click(function(){
	$(this).css('background','#ea7514')
	$('.xxkcontentbox').find('img').css('zIndex','1');
	$('.xxkcontentbox').css('height','466');
	$('#detail2').css('zIndex',"4");
})
$('#detailbtn3').click(function(){
	$(this).css('background','#ea7514')
	$('.xxkcontentbox').find('img').css('zIndex','1');
	$('.xxkcontentbox').css('height','3734');
	$('#detail3').css('zIndex',"4");
})
$('#detailbtn4').click(function(){
	$(this).css('background','#ea7514')
	$('.xxkcontentbox').find('img').css('zIndex','1');
	$('.xxkcontentbox').css('height','772');
	$('#detail4').css('zIndex',"4");
})*/

/*------------存cookie-------------*/
$('.goodscolor').find('div').click(function(){
	$(this).css('border','2px solid #ff6701').siblings().css('border','1px solid #646464')
	$(this).attr('dataclass','color').siblings().attr('dataclass','');
})


$('.jian').click(function(){
	var num = $('#sl').text();
	num--;
	$('#sl').text(num);
})
$('.jia').click(function(){
	var num = $('#sl').text();
	num++;
	$('#sl').text(num);
})

$('.gwd').click(function(){
	var gcolor = $('.goodscolor').find('div[dataclass=color]').find('a').text();
	var gnum = $('#sl').text();
//	console.log(gnum)
	$.cookie('ginfor','{"name":"新飞驰 V8 尊贵版","color":"'+gcolor+'","shuliang":"'+gnum+'"}',{expires:7,path:'/',secure:false});
	alert("成功放入购物袋")
})








	
})
