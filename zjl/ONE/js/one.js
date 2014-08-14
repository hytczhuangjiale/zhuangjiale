$(function(){
	$(".controlin").click(function(){
		currIndex=$(this).attr("picIndex");
		showFlashImage();
	});
	 $(".contR21").hover(function(){
		clearInterval(timerHandel);
	},function(){
		timerHandel=setInterval("showFlashImage()",1000);
	});

	timerHandel=setInterval("showFlashImage()",1000);
//menu

 $(".headrrli").hover(function(){
		    $(this).css({"background-color":"yellow"});
		     $(this).children().css({"color":"#000"});
	 },function(){
  	        $(this).css({"background-color":""});
		     $(this).children().css({"color":""});

});
});

var timerHandel;
var currIndex=2;
function showFlashImage(){
 	$(".contR21").css("background-image",'url("css/images/' + currIndex+'.jpg")');
  	$(".controlin").removeClass("currentspan");
 	$("#controlspan" +currIndex).addClass("currentspan");
 	currIndex++;
 	if(currIndex==8)
 	{
 		currIndex=1;
 	}
}