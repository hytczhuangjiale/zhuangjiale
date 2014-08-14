$(function(){
	$("#nav").hover(function(){
		    $(this).find("#navpic").children().css({"color":" rgb(105,226,50)","background-position":" 0 -13px"});
			$(this).find("#navpic").next().show();
		},function(){
			 $(this).find("#navpic").children().css({"color":"","background-position":""});
			 $(this).find("#navpic").next().hide();
		});
	 $(".navboxin").hover(function(){
		     $(this).css({"color":"rgb(105,226,50)","background-color":"#3C3C46"});
	 },function(){
  	        $(this).css({"color":"","background-color":""});
  });

	
	 $("#schlist").hover(function(){
	 	$(this).find(".schlistin").show();
	 	},function(){
			 $(this).find(".schlistin").hide();
	 });


//焦点图
	$(".banner").click(function(){
		currIndex=$(this).attr("picIndex");
		showFlashImage();
	});
	 $("#picL").hover(function(){
		clearInterval(timerHandel);
	},function(){
		timerHandel=setInterval("showFlashImage()",3000);
	});

	timerHandel=setInterval("showFlashImage()",3000);
//menu
$(".lh").hover(function(){
	$(this).find(".mlcom").css({"color":" rgb(109, 184, 35)"});
	$(this).find(".picspecial1").css({"background-position":"0 -18px"});
	$(this).find(".picspecial2").css({"background-position":"-14px -18px"});
	$(this).find(".picspecial3").css({"background-position":"-28px -18px"});
	$(this).find(".picspecial4").css({"background-position":"-42px -18px"});
	$(this).find(".picspecial5").css({"background-position":"-56px -18px"});
	$(this).find(".picspecials1").css({"background-position":"-70px -18px"});
	$(this).find(".picspecials2").css({"background-position":"-88px  -18px"});
	$(this).find(".picspecials3").css({"background-position":"-106px -18px"});
	$(this).find(".picspecials4").css({"background-position":"-124px -18px"});
	},function(){
	$(this).find(".mlcom").css({"color":""});
	$(this).find(".picspecial1").css({"background-position":""});
	$(this).find(".picspecial2").css({"background-position":""});
	$(this).find(".picspecial3").css({"background-position":""});
	$(this).find(".picspecial4").css({"background-position":""});
	$(this).find(".picspecial5").css({"background-position":""});
	$(this).find(".picspecials1").css({"background-position":""});
	$(this).find(".picspecials2").css({"background-position":""});
	$(this).find(".picspecials3").css({"background-position":""});
	$(this).find(".picspecials4").css({"background-position":""});
});


// 播放热门歌曲
$(".cont1Lpic").hover(function(){
	$(this).find(".abs").animate({"bottom":"0px"},300);
},function(){
	$(this).find(".abs").animate({"bottom":"-36px"},300);
});

$(".lipic").hover(function(){
	$(this).find(".lis").animate({"bottom":"0px"},300);
},function(){
	$(this).find(".lis").animate({"bottom":"-30px"},300);
});

$(".flx").hover(function(){
	$(this).css({"background-color":"rgb(244,244,244)"});
	$(this).find(".li1").children().css({"font-weight":"800","color":"#666","font-size":"12.5px"});
	$(this).find(".lib").css({"background-position": "-64px -36px"});
},function(){
	$(this).css({"background-color":""});
	$(this).find(".li1").children().css({"font-weight":"","color":"","font-size":""});
	$(this).find(".lib").css({"background-position": ""});

});

$(".c3comli").hover(function(){
	$(this).css({"background-color":"rgb(240,240,240)"});
	$(this).find(".c3litxt1").css({"font-weight":"800","color":"#000","font-size":"12.5px"});
},function(){
	$(this).css({"background-color":""});
	$(this).find(".c3litxt1").css({"font-weight":"","color":"","font-size":""});
});

//change
$(".con2LtopR").hover(function(){
	$(this).find(".topRchange").css({"background-position":"-50px -36px"});
	
},function(){
	$(this).find(".topRchange").css({"background-position":""});
	
	
});

//cd

$(".cd").hover(function(){ 
	$(this).find(".cdblack").show(300);
	$(this).find(".cdtit").css({"font-weight":"800","color":"#000","font-size":"12.5px","text-decoration":" underline"});
},function(){
	$(this).find(".cdblack").hide(300);
	$(this).find(".cdtit").css({"font-weight":"","color":"","font-size":"","text-decoration":""});
	
});

  //cd click
  $(".c3topli2").click(function(){
  	$(this).css({"background-color":" rgb(97, 105, 125)"});
  	$(this).children().css({"color":"rgb(255, 255, 255)"});
  	$(this).prev().css({"background-color":"rgb(255, 255, 255)"});
  	$(this).prev().children().css({"color":"rgb(102, 102, 102)"});
  	$(this).parent().parent().next().find(".c3rul2").animate({"left":"0px"},300);
  	$(this).parent().parent().next().find(".c3rul1").hide(300);
  	return false;
   
  });
  $(document).click(function(){
  	$(".c3rul2").animate({"left":"280px"},300);
    $(".c3rul1").show(300);
  });

  $(".c3topli1").click(function(){
  	$(this).css({"background-color":" rgb(97, 105, 125)"});
  	$(this).children().css({"color":"rgb(255, 255, 255)"});
  	$(this).next().css({"background-color":"rgb(255, 255, 255)"});
  	$(this).next().children().css({"color":"rgb(102, 102, 102)"});
  	$(this).parent().parent().next().find(".c3rul2").animate({"left":"280px"},300);
  	$(this).parent().parent().next().find(".c3rul1").show(300);
  	return false;
  });


//ul标签<>
$(".picjtr").click(function(){
	$(".picrnewsinner").removeClass("ulaccitive");
	ng++;
	$("#pic"+ng).addClass("ulaccitive");
	if(ng==3){
		ng=0;
	}
});

$(".picjtl").click(function(){
	$(".picrnewsinner").removeClass("ulaccitive",1000);
	ngs--;
	$("#pic"+ngs).addClass("ulaccitive",1000);
	if(ngs==1){
		ngs=4;
	}
});

});

var ngs=4;
var ng=1;
var timerHandel;
var currIndex=2;
function showFlashImage(){
 	$("#picL").css("background-image",'url("css/images/' + currIndex+'.jpg")');
  	$(".banner").removeClass("bancur");
 	$("#controlspan" +currIndex).addClass("bancur");
 	currIndex++;
 	if(currIndex==7)
 	{
 		currIndex=1;
 	}
}



