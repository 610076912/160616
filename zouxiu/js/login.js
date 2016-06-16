/*合作网站账号登录显示隐藏*/

$('.k1 p').click(function(){
	if(parseInt($('.k2').css('height')) > 0){
		console.log(111)
		$('.k1 p').css({'border-color':'#F9F9F9 #F9F9F9 #888','top':'10px'})
		$('.k2').animate({'height':'0'});
	}
	else{
		console.log(22)
		$('.k1 p').css({'border-color':'#888 #F9F9F9 #F9F9F9 ','top':'14px'})
		$('.k2').animate({'height':'45'});
	}
})
/*------------用户名焦点事件--------*/
$('#userName').on({'focus':function(){
	if($('#userName').val() == "手机号/邮箱/账号"){
		$('#userName').css('color','#000')
		$('#userName').val('')
	}
},
'focusout':function(){
	if($('#userName').val() == ""){
		$('#userName').css('color','rgb(153, 153, 153)')
		$('#userName').val('手机号/邮箱/账号')
	}
}})
/*------------密码焦点事件--------*/
$('#passWord').on({'focus':function(){
	if($('#passWord').attr('placeholder') == "密码"){
		$('passWord').css('color','#000');
		$('#passWord').attr('placeholder',"");
	};
},
'focusout':function(){
	if($('#passWord').val() == ""){
		$('#passWord').css('color','rgb(153, 153, 153)')
		$('#passWord').attr('placeholder','密码')
	}
}})
/*------------点击提交事件--------*/
$('#subBtn').on('click',function(){
	if($('#passWord').val() == "密码"){
		$('.yz>span').text('请输入密码');
	}
	if($('#userName').val() == "手机号/邮箱/账号"){
		$('.yz>span').text('请输入用户名');
	}
	if($('#passWord').val() != "密码" && $('#userName').val() != "手机号/邮箱/账号"){
		$('.yz>span').text('');
		$.cookie('userName',""+$('#userName').val()+"",{expires:7,path:'/',secure:false});
		alert('登录成功')
		location.href = "../index.html";
	}
})
