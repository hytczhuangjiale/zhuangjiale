
$(function(){
//Login登录注册
$(".login").click(function(){
	$(this).parent().parent().animate({"top":"0px","left":"400px"},600);
	$(this).parent().parent().next().animate({"top":"0px","left":"140px"},600);
	return false;
	//  $(this).parent().parent().animate({"top":"0px","left":"400px"},300);
	// $(this).parent().parent().next().animate({"top":"0px","left":"140px"},300);
});
 $(document).click(function(){
  	$(".tpspecial1").animate({"top":"0px","left":"140px"},600);
    $(".tpspecial2").animate({"top":"0px","left":"400px"},600);
  });
$(".zhuce").click(function(){
	$(this).parent().parent().animate({"top":"0px","left":"400px"},600);
	$(this).parent().parent().prev().animate({"top":"0px","left":"140px"},600);
	return false;
 });

//ul标签
$(".logo").hover(function(){
	number=$(this).attr("logoindex");
    showimageul();
});


});
function showimageul(){
	$(".ulcom").removeClass("ulactive");
	$("#ul" +number).addClass("ulactive");
}