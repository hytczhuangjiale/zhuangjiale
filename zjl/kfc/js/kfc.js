
$(function(){

 // 	$(".foodtp").hover(function(){
 // 		$(this).find(".foodpic").show(1000);
 // 		$(this).find(".foodnav").show(1000);
 // 		},function(){
	// 	$(this).find(".foodpic").hide(500);
 // 		$(this).find(".foodnav").hide(500);
	// });

	$(".foodtp").click(function(){
		var open;
		open=$(this).attr("openindex");
		if(open=='false')
		 {
			$(this).next().show(1000);
	 		$(this).next().next().show(1000);
	 		open=$(this).attr("openindex",true);
	 		 return false;
		 }else if(open=='true'){
		 	$(this).next().hide(500);
 	 		$(this).next().next().hide(500);
		};
 	   
	});	
	
	$(".foodli").hover(function(){
		$(this).css({"background-color":"#ab182f"});
		$(this).children().css({"color":"#fff"});
	},function(){
		$(this).css({"background-color":""});
		$(this).children().css({"color":""});
	});
});



