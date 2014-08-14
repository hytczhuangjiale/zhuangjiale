
$(function(){
	$(".controlin").click(function(){
		currIndex=$(this).attr("picIndex");
		showFlashImage();
	});
	 $("#flash").hover(function(){
		clearInterval(timerHandel);
	},function(){
		timerHandel=setInterval("showFlashImage()",1000);
	});

	timerHandel=setInterval("showFlashImage()",1000);
});

var timerHandel;
var currIndex=2;
function showFlashImage(){
 	$("#flash").css("background-image",'url("css/images/' + currIndex+'.png")');
  	$(".controlin").removeClass("currentspan");
 	$("#controlspan" +currIndex).addClass("currentspan");
 	currIndex++;
 	if(currIndex==5)
 	{
 		currIndex=1;
 	}
}