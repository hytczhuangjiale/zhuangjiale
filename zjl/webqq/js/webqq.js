
$(function(){
//换背景图片
$("#jtleft").click(function(){
		var index= $("body").attr("bgindex");
		if(index=="1"){
			index =10;
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

	  if(colorindex=="1"){
	  	$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/bg9.gif")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/bg9.gif")'});
		colorindex=$(this).attr("colorindex",2);
	}
		if(colorindex=="2"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/bg7.gif")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/bg7.gif")'});
		colorindex=$(this).attr("colorindex",3);
		}
		if(colorindex=="3"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/bg6.png")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/bg6.png")'});
		colorindex=$(this).attr("colorindex",4);
		}
		if(colorindex=="4"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/06.jpg")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/06.jpg")'});
		colorindex=$(this).attr("colorindex",5);
		}
		if(colorindex=="5"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/bg8.gif")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/bg8.gif")'});
		colorindex=$(this).attr("colorindex",6);
		}
		if(colorindex=="6"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": 'url("./css/images/bg1.gif")'});
		$(this).parent().parent().parent().find("#footer").css({"background-image": 'url("./css/images/bg1.gif")'});
		colorindex=$(this).attr("colorindex",7);
		}
		if(colorindex=="7"){
		$(this).parent().parent().parent().find(".huihuatop").css({"background-image": "linear-gradient(#555, #222)"});
		$(this).parent().parent().parent().find("#footer").css({"background-image": " linear-gradient(#555, #222)"});
		colorindex=$(this).attr("colorindex",1);
		}

	});
//状态
	$(".onlinestate").click(function(){
		var show = $(this).attr("show");
		if(show == 'false')
		{
		$(this).find(".statelist").removeClass("disappear");
		show = $(this).attr("show",true);
		//切换图标
		$(".stateli").click(function(){
	 		var findclass= $(this).find(".onlinepic").attr("findclass");
		    $(".statepic").attr("class","statepic onlinepic "+findclass);
		});

		}
		else
		{
		$(this).find(".statelist").addClass("disappear");
		show = $(this).attr("show",false);
		}
	});

});





			
		
		

