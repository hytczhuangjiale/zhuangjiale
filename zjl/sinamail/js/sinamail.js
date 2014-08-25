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

//删除
$(".delete").click(function(){
	$(".check").each(function(){
		if($(this).is(':checked')){
			var a=$(this).parent().next().find(".sender").html();
			var b=$(this).parent().parent().find(".emailname").html();
			var c=$(this).parent().parent().find(".emailname").next().html();
			var d=$(this).parent().parent().find("p2").html();	
			$(this).parent().parent(".comemail").addClass("disappear");
			showul(a,b,c,d);
		}
	});
});


//收件箱
$(".receive").click(function(){
	$(this).next().next().css({"background-image":"url('./css/images/bg_tablist.png')","background-position":"0 -26px","background-repeat":"repeat-x"});
	$(this).css({"top":"1","background-color":"#fff","background-image":"none"});
    $("#conrin").show();
    $("#conrins").hide();
});


//回收站
$(".rubbish").click(function(){ 
	$(this).css({"background-color":"#fff","background-image":"none"});
	$(this).prev().prev().css({"top":"0","background-color":"none","background-image":"url('./css/images/bg_tablist.png')","background-position":"0 -26px","background-repeat":"repeat-x"});
    $("#conrin").hide();
    $("#conrins").show();
    
	});

});
 


function showul(a,b,c,d){
	
	var html="";
	html+='<div class="comemail">';
	html+='<div class="comemail1">';
	html+='<span class="move"></span>';
	html+='<input class="check" type="checkbox">';
	html+='<a href="#" class="icon_starnot"></a>';
	html+='<a href="#"  class="icon_emailnot" ></a>';
	html+='</div>';
	html+='<div class="comemail2">';
	html+='<a href="#" class="sender">'+a+'</a>';
	html+='</div>';
	html+='<div class="comemail3">';
	html+='<a class="emailname" href="#" >'+b+'</a>';
	html+=' <a class="wztz">'+c+'</a>';
	html+='</div>';
	html+='<div class="comemail4">';
	html+='<a class="tag"></a>';
	html+='<p2>'+d+'</p2>';
	html+='</div>';
	html+='</div>';
	$("#conrinbottoms").append(html);

}

 			
 	
 				  
 				  
 				   	
 				   	
 				   	
 				