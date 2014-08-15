
$(function(){

 // 	$(".foodtp").hover(function(){
 // 		$(this).find(".foodpic").show(1000);
 // 		$(this).find(".foodnav").show(1000);
 // 		},function(){
	// 	$(this).find(".foodpic").hide(500);
 // 		$(this).find(".foodnav").hide(500);
	// });
	$(".foodtp").click(function(){
 		$(this).find(".foodpic").show(1000);
 		$(this).find(".foodnav").show(1000);
 	    return false;

	});	$(document).click(function(){
  		$(".foodpic").hide(500);
    	$(".foodnav").hide(500);
  });


	$(".foodli").hover(function(){
		$(this).css({"background-color":"#ab182f"});
		$(this).children().css({"color":"#fff"});
	},function(){
		$(this).css({"background-color":""});
		$(this).children().css({"color":""});
	});
});