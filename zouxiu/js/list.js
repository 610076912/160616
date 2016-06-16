$(function(){
/*-----------------Ajax获取头尾-----------------*/
//	alert($)
	$.ajax({
		// 方式
		type:'GET',
		url:'commod/header1.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//		console.log(msg);
		$('#ajaxheader').append(msg);
		}
	})
	
	
	$.ajax({
		// 方式
		type:'GET',
		url:'commod/footer1.html',
		// 页面加载时就取数据 故同步
		async:false,
		success:function(msg){
//		console.log(msg);
		$('#ajaxfooter').append(msg);
		}
		
		
		
		
		
	})
/*-----------------分页----------------*/	
	 $(".page").createPage({
        pageCount:6,
        current:1,
        backFn:function(p){
            //单击回调方法，p是当前页码
        }
    });
/*-----------------lunbo----------------*/	
	$('.cnxh').on({'mouseenter':function(){
		$('#left').stop().animate({'left':0,'opacity':1})
		$('#right').stop().animate({'right':0,'opacity':1})
	},'mouseleave':function(){
		$('#left').stop().animate({'left':'-48','opacity':0})
		$('#right').stop().animate({'right':'-48','opacity':0})
	}})


	var index = 1;
	
	$('#left').on('click',function(){
		clearInterval(timer);
		index--;
		// console.log(index)
		if(index < 0){
			$('#oul').css('left',-2*940);
			index=2;
		}
		$('#oul').stop().animate({'left':-index*940});
		setInterval(slide,3000);
	})
	$('#right').on('click',function(){
		clearInterval(timer);
		
		// console.log(index)
		/*if(index > 5){
			$('ul').css('left',0);
			index=1;
		}
		$('span').attr('class','');
		$('span').eq(index-1).attr('class','on');
		$('ul').stop().animate({'left':-index*520});*/
		slide();
		timer = setInterval(slide,3000);
	})
	function slide(){
		index++
		// console.log(index)
		if(index > 2){
			$('#oul').css('left',0);
			index=1;
		}
		
		$('#oul').stop().animate({'left':-index*940});
	}
	var timer = setInterval(slide,3000)



/*-----------------筛选——品牌展开----------------*/
	var kg1 = true;
	$('#ppzk').on('click',function(){
		if(kg1){
			$('.pinpai').css('overflow','visible');
			kg1 = false;
		}
		else{
			$('.pinpai').css('overflow','hidden');
			kg1 = true;
		}
	})
/*-----------------筛选——精简选项展开----------------*/	
	var kg2 = true;
	$('#jjxx').click(function(){
		if(kg2){
			$('.yanse').css('height','0');
			$('.jjxx').find('span').css('backgroundPosition','0 -562px');
			kg2 = false;
		}
		else{
			$('.yanse').css('height','auto');
			$('.jjxx').find('span').css('backgroundPosition','0 -584px');
			kg2  = true;
		}
	})
/*-----------------筛选——精简选项展开----------------*/	
	var kg3 = true;
	$('#yssq').click(function(){
		if(kg3){
			$('.yanse').css('height','42');
			$('#yssq').text('展开').css('backgroundPosition','0 -20px');
			kg3 = false;
		}
		else{
			$('.yanse').css('height','auto');
			$('#yssq').text('收起').css('backgroundPosition','0 -60px');
			kg3 = true;
		}
	})
	
	
	
	
	
	
	
})

