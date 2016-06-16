/*----------------电话号码验证-----------*/
formYanz('mphone','mb', /^1[3578]\d{9}$/)
/*$('#mphone').on({'focus':function() {
	$('.mb').find('.err').css('display','none');
	$('.mb').find('.ok').css('display','none');
	$('.mb').find('.not').css('display','block');
},'focusout':function() {
	var ph = /^1[3578]\d{9}$/;
	$('.mb').find('.not').css('display','none');
	if(!ph.test($('#mphone').val())){
		$('.mb').find('.err').css('display','block');
	}
	else{
		$('.mb').find('.ok').css('display','block');
	}
}})*/


/*----------------验证码验证-----------*/
formYanz('yzm','yztxt',/^\d{6}$/)
/*$('#yzm').on({'focus':function() {
	$('.yztxt').find('.err').css('display','none');
	$('.yztxt').find('.ok').css('display','none');
	$('.yztxt').find('.not').css('display','block');
},'focusout':function() {
	var ph = /^\d{6}$/;
	$('.yztxt').find('.not').css('display','none');
	if(!ph.test($('#yzm').val())){
		$('.yztxt').find('.err').css('display','block');
	}
	else{
		$('.yztxt').find('.ok').css('display','block');
	}
}})*/


/*----------------密码验证-----------*/
formYanz('pw','pw',/^\d{6,16}$/);



/*---------密码强度验证---------------------*/
$('#pw').on('keyup',function(){
	AuthPasswd($('#pw').val());
})

function AuthPasswd(string) {
	console.log(1111)
    if(string.length >=6) {
        if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
            noticeAssign(1);
        }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
            if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {
                noticeAssign(-1);
            }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else{
                noticeAssign(0);
            }
        }
    }else{
        noticeAssign(null); 
    }
}
 
function noticeAssign(num) {
    if(num == 1) {
        $('#step1').css({backgroundColor:'#009900'});
        $('#step2').css({backgroundColor:'#009900'});
        $('#step3').css({backgroundColor:'#009900'});
    }else if(num == -1){
        $('#step1').css({backgroundColor:'#009900'});
        $('#step2').css({backgroundColor:'#009900'});
        $('#step3').css({backgroundColor:''});

    }else if(num ==0) {
        $('#step1').css({backgroundColor:'#009900'});
        $('#step2').css({backgroundColor:''});
        $('#step3').css({backgroundColor:''});

    }else{
        $('#step1').css({backgroundColor:''});
        $('#step2').css({backgroundColor:''});
        $('#step3').css({backgroundColor:''});
    }
}

/*--------------确认密码验证-------------*/
$('#qrpw').on({'focus':function() {
	console.log(111)
	$('.qrpw').find('.k').css('display','none');
	$('.qrpw').find('.err').css('display','none');
	$('.qrpw').find('.ok').css('display','none');
	$('.qrpw').find('.not').css('display','block');
},'focusout':function() {
	$('.qrpw').find('.not').css('display','none');
	if($('#qrpw').val() != $('#pw').val()){
		$('.qrpw').find('.err').css('display','block');
	}
	else if($('#qrpw').val() == ""){
		$('.qrpw').find('.k').css('display','block');
	}
	else{
		$('.qrpw').find('.ok').css('display','block');
	}
}})

/*--------------确认密码验证-------------*/
formYanz('emal','emal', /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
/*--------------验证封装-------------*/
function formYanz (ele,cele,p) {
	$('#'+ele).on({'focus':function() {
		$('.'+cele).find('.err').css('display','none');
		$('.'+cele).find('.ok').css('display','none');
		$('.'+cele).find('.not').css('display','block');
	},'focusout':function() {
		$('.'+cele).find('.not').css('display','none');
		if(!p.test($('#'+ele).val())){
			$('.'+cele).find('.err').css('display','block');
		}
		else{
			$('.'+cele).find('.ok').css('display','block');
		}	
	}})
}