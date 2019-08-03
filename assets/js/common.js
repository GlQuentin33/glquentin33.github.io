$(function(){
	$(".pagetop").click(function(){
		$("html,body").stop().animate({scrollTop:0},600)
	})

	$("#global_navi").find(".sp_menu").click(function(){
		var cl = $(".global_menu").attr("class");
		if(cl.indexOf("open") > 0){
			$(".global_menu").removeClass("open")
			$(".menu_icon").removeClass("close")
		}else{
			$(".global_menu").addClass("open");
			$(".menu_icon").addClass("close")
		}

	})
})

$(window).on('load',function(){
	$("#wrapper").addClass("open");
})