/*------头部固定导航----------*/
$(window).scroll(function(){
	if($(document).scrollTop()>154){
		$('#nav').css({'position':'fixed','top':0,'opacity':'.9','zIndex':999})
		$('#navlistbox').css({'position':'fixed','top':44,'opacity':'.9','zIndex':999})
	}
	else{
		$('#nav').css({'position':'static','opacity':'1'})
		$('#navlistbox').css({'position':'static','opacity':'1'})
	}
})
/*---------------登录cookie-----------*/
if($.cookie('userName')){
	$('#welc').text('欢迎您');
	$('#uname').text($.cookie('userName')).attr('href','javascript:del();');
}
function del () {
	$.cookie('userName','null',{expires:0,path:'/',secure:false});
	$('#welc').text('登录');
	$('#uname').text('注册').attr('href','html/register.html');
}
/*-------------购物袋读取cookie----------*/
if($.cookie('ginfor')){
	var str = $.cookie('ginfor');
	var jsons = eval("("+str+")");
	console.log(jsons)
	$('#gcart').text(jsons.name);
}
