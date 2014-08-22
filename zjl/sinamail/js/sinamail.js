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



//复选框
$("#span1").hover(function(){
		    $(this).find(".checkboxul").show(300);
		},function(){
			$(this).find(".checkboxul").hide();
});

$("#span2").hover(function(){
		    $(this).find(".checkboxul1").show(300);
		},function(){
			$(this).find(".checkboxul1").hide();
});
$("#span2").hover(function(){
		    $(this).find(".checkboxul2").show(300);
		},function(){
			$(this).find(".checkboxul2").hide();
});
$("#span3").hover(function(){
		    $(this).find(".checkboxul3").show(300);
		},function(){
			$(this).find(".checkboxul3").hide();
});
$("#span4").hover(function(){
		    $(this).find(".checkboxul4").show(300);
		},function(){
			$(this).find(".checkboxul4").hide();
});
$(".span5").hover(function(){
		    $(this).find(".checkboxul5").show(300);
		},function(){
			$(this).find(".checkboxul5").hide();
});
$(".span6").hover(function(){
		    $(this).find(".checkboxul6").show(300);
		},function(){
			$(this).find(".checkboxul6").hide();
});
$(".comemail").hover(function(){
		    $(this).css({"background-color":"rgb(228,228,228)"});
		},function(){
		   $(this).css({"background-color":""});
});


//全选
$(".cbpic1").click(function(){
	
	var choose=$(this).attr("choose");
	if(choose=='true')
		{
		   $(".check").each(function(){
			$(this).prop("checked",true);

			});
		   $(".comemail").css({"background-color":"rgb(228,228,228)"});
		   $(this).attr("choose",false);
		}
	else{
			$(".check").each(function(){
			$(this).prop("checked",false);
		});
			$(this).attr("choose",true);
			 $(".comemail").css({"background-color":""});
	}
});

//删除
$(".delete").click(function(){
	$(".check").each(function(){
		if($(this).is(':checked')){
			$(this).parent().parent(".comemail").addClass("disappear");
		}
		});
});
//星标
$(".staremail").click(function(){
	$(".check").each(function(){
		if($(this).is(':checked')){
			$(this).next(".icon_starnot").addClass("icon_star");
			$(this).next(".icon_starnot").removeClass("icon_starnot");
		}
		});
});
//已读
$(".haveread").click(function(){
	$(".check").each(function(){
		if($(this).is(':checked')){
			$(this).next().next(".icon_email").addClass("icon_emailnot");
			$(this).next().next(".icon_email").removeClass("icon_email");
		}
		});
});
//未读
$(".unread").click(function(){
	$(".check").each(function(){
		if($(this).is(':checked')){
			$(this).next().next(".icon_emailnot").addClass("icon_email");
			$(this).next().next(".icon_emailnot").removeClass("icon_emailnot");
		}
		});
});
//回收站
.rubbish{}


});

