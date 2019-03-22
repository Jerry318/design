// JavaScript Document

$(document).ready(function(){
	$('#login-trigger').click(function(){
		$(this).siblings('#login-content').slideToggle("fast");
        $(this).parent("li.login").toggleClass('selected').css("cursor","pointer");
		$(this).next('strong').toggleClass("Down");
		  
		// if ($(this).hasClass('selected')) $(this).next('strong').addClass("Down")
       // else $(this).next('strong').removeClass("Down")
		
	});
		
	var $div_li = $("div.tab_menu ul li");//获取
  $div_li.click(function(){//绑定事件
	  $(this).addClass("selected")       //当前<li>元素高亮追加样式selected
	         .siblings().removeClass("selected");//同时去掉同辈<li>元素的高亮
   var index = $div_li.index(this);//获取当前单击的<li>元素在全部<li>元素中的索引
   $("div.tab_box>div")//选取子节点
        .eq(index).show()//显示<li>元素对应的<div>元素
		.siblings().hide();//隐藏其他几个同辈的<div>
	  }).hover(function(){   //添加光标滑动效果
		  $(this).addClass("hover");
		  },function(){
			$(this).removeClass("hover"); 
	});
 
	
var $wangrui = $(".TabPaging .inner ul.tabTwo li");//获取
  $wangrui.click(function(){//绑定事件
	  $(this).addClass("selected")       //当前<li>元素高亮追加样式selected
	         .siblings().removeClass("selected");//同时去掉同辈<li>元素的高亮
   var index = $wangrui.index(this);//获取当前单击的<li>元素在全部<li>元素中的索引
   $("div.content_box>div")//选取子节点
        .eq(index).show()//显示<li>元素对应的<div>元素
		.siblings().hide();//隐藏其他几个同辈的<div>
	  }).hover(function(){   //添加光标滑动效果
		  $(this).addClass("hover");
		  },function(){
			$(this).removeClass("hover"); 
		  });
		  

var $xiong = $("..foodLsit_box .A_subclass ul li");//获取
  $xiong.click(function(){//绑定事件
	  $(this).addClass("selected")       //当前<li>元素高亮追加样式selected
	         .siblings().removeClass("selected");//同时去掉同辈<li>元素的高亮
   var index = $xiong.index(this);//获取当前单击的<li>元素在全部<li>元素中的索引
   $("div.A_subclassBox>div")//选取子节点
        .eq(index).show()//显示<li>元素对应的<div>元素
		.siblings().hide();//隐藏其他几个同辈的<div>
	  }).hover(function(){   //添加光标滑动效果
		  $(this).addClass("hover");
		  },function(){
			$(this).removeClass("hover"); 
		  });	  
	
	
	
	
var $xiaofei = $(".foodLsit_box .B_subclass ul li");//获取
  $xiaofei.click(function(){//绑定事件
	  $(this).addClass("selected")       //当前<li>元素高亮追加样式selected
	         .siblings().removeClass("selected");//同时去掉同辈<li>元素的高亮
   var index = $xiaofei.index(this);//获取当前单击的<li>元素在全部<li>元素中的索引
   $("div.B_subclassBox>div")//选取子节点
        .eq(index).show()//显示<li>元素对应的<div>元素
		.siblings().hide();//隐藏其他几个同辈的<div>
	  }).hover(function(){   //添加光标滑动效果
		  $(this).addClass("hover");
		  },function(){
			$(this).removeClass("hover"); 
		  });	  	
	
	
})
