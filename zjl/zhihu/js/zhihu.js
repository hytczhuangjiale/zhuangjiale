//ul标签
$(function(){
$(".logo").hover(function(){
	number=$(this).attr("logoindex");
    showimageul();
});

});
function showimageul(){
	$(".ulcom").removeClass("ulactive");
	$("#ul" +number).addClass("ulactive");
}