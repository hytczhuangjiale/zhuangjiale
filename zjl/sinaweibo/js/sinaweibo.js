$(function(){
	$(".topMainLeft1All").hover(function(){
		$(this).find(".topMainLeft1Title").addClass("topMainLeft1Title3");
		$(this).find(".topMainLeft1Content").show();
	},function(){
		$(this).find(".topMainLeft1Title").removeClass("topMainLeft1Title3");
		$(this).find(".topMainLeft1Content").hide();
	});


	$(".topMainRight1All2").hover(function(){
		$(this).find(".topMainRight1Title2Span2").css({"background-position":"-49px -73px"});
		$(this).find(".topMainRight1Title2Span3").css({"background-position":"-50px -125px"});
		$(this).find(".topMainRight1Title2Span4").css({"background-position":"-50px -200px"});
		$(this).find(".topMainRight1Title2").addClass("topMainLeft1Title3");
		$(this).find(".topMainRight1All2Content").show();
	},function(){
		$(this).find(".topMainRight1Title2Span2").css({"background-position":""});
		$(this).find(".topMainRight1Title2Span3").css({"background-position":""});
		$(this).find(".topMainRight1Title2Span4").css({"background-position":""});
		$(this).find(".topMainRight1Title2").removeClass("topMainLeft1Title3");
		$(this).find(".topMainRight1All2Content").hide();
	});

	$(".Topsearchs input").focus(function(){
		$(this).parent().css("background-position","-474px -5px");
		$(this).siblings().slideDown();
		var val2=$(this).val();
		var moren=$(this).attr("moren");
		if (val2==moren) {
			$(this).val("");
		}
	}).blur(function(){
		$(this).parent().css("background-position","0px -5px");
		$(this).siblings().slideUp();
		var val2=$(this).val();
		var moren=$(this).attr("moren");
		if (val2=="") {
			$(this).val(moren);
		}
	}).hover(function(){
		$(this).parent().css("background-position","-237px -5px");
	},function(){
		$(this).parent().css("background-position","0px -5px");
	});



});