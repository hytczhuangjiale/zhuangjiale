
$(function(){
//换背景图片
$("#jtleft").click(function(){
		var index= $("body").attr("bgindex");
		if(index=="1"){
			index =9;
		}
		index --;
		$("body").css("background-image",'url("./css/images/0'+ index +'.jpg")');
		var index= $("body").attr("bgindex",index);
	});
	$("#jtright").click(function(){
		var index= $("body").attr("bgindex");

		if(index == "9"){
			index=0;
		}
		
		index ++;
		$("body").css("background-image",'url("./css/images/0'+ index +'.jpg")');
		var index= $("body").attr("bgindex",index);
	});
//好友ul点击出现
$(".group").click(function(){
	var show=$(this).attr("isshow");
	if(show=='true')
	{
	$(this).find(".lxrconul").show();
	show=$(this).attr("isshow",false);
	
	}else 
	{
		$(this).find(".lxrconul").hide();
		show=$(this).attr("isshow",true);
	}
});


//好友，群，讨论组的切换
	$(".lxrtopli").click(function(){
		
		var lxrappear=$(this).attr("lxrappear");
		$(".friend").addClass("disappear");
		$("#"+lxrappear).removeClass("disappear");
		$(".lxrtopli").removeClass("lxrtoplicolor");
		$(this).addClass("lxrtoplicolor");
	});

//会话、联系人、设置、资料的切换
$(".footerli").click(function(){
		
		var footerappear=$(this).attr("footerappear");
		$(".huihua").addClass("disappear");
		$("#"+footerappear).removeClass("disappear");
		$(".footerli").children().removeClass("footlipichuihua");
		$(".footerli").children().removeClass("footlipiclianxiren");
		$(".footerli").children().removeClass("footlipicfaxian");
	    $(".footerli").children().removeClass("footlipicshezhi");
		$(this).children(".footlipic").addClass("footlipic"+footerappear);
	});

//小衣服
$(".yifu").click(function(){
	var colorindex=$(this).attr("colorindex");
	alert(colorindex);
	  if(colorindex=="1"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": "linear-gradient(#fff,#333)"});
		$(this).parent().parent().parent().find("#footer").css({"background-image": "linear-gradient(#333,#eee)"});
		colorindex=$(this).attr("colorindex",2);
	}
		if(colorindex=="2"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": "linear-gradient(#ddd,rgb(67,71,47))"});
		$(this).parent().parent().parent().find("#footer").css({"background-image": "linear-gradient(rgb(67,71,47),#ddd)"});
		colorindex=$(this).attr("colorindex",3);
		}
		if(colorindex=="3"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": "linear-gradient(#ddd,rgb(0,149,197))"});
		$(this).parent().parent().parent().find("#footer").css({"background-image": "linear-gradient(rgb(0,149,197),#ddd)"});
		colorindex=$(this).attr("colorindex",4);
		}
		if(colorindex=="4"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": "linear-gradient(#ddd,rgb(234,78,169))"});
		$(this).parent().parent().parent().find("#footer").css({"background-image": "linear-gradientrgb(234,78,169),#ddd)"});
		colorindex=$(this).attr("colorindex",0);
		}
		

	});



});