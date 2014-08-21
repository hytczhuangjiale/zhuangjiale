$(function(){
//更多分类
$(".moretypeul,moreyyul").click(function(){
	var show=$(this).attr("isshow");
	if(show=='true')
	{
	$(this).next(".disappear").show();
	$(this).next(".moretypeul2").show();
	$(this).find(".mtli1arrow").css({"background-position":"0 0"});
	show=$(this).attr("isshow",false);
	}else 
	{
		$(this).next(".disappear").hide();
		$(this).next(".moretypeul2").hide();
		$(this).find(".mtli1arrow").css({"background-position":""});
		show=$(this).attr("isshow",true);
	}
});





});