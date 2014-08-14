$(function(){
  $(".menuli").hover(function(){
  	$(this).find(".menutitle").css({"background-color":"#333333","color":"#ffffff","border-top-left-radius":"5px","border-top-right-radius":"5px","border":"1px solid #333"});
  	$(this).find(".menutitle").next().show();

  },function(){
  	$(this).find(".menutitle").css({"background-color":"","color":"","border":"0px"});
  	$(this).find(".menutitle").next().hide();
  });

  $(".submenu1").hover(function(){
  	$(this).css("background-color","#e5e5e5");
  },function(){
  	$(this).css("background-color","");
  });
});