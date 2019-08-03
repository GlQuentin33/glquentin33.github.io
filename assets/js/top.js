function _c(l){
	console.log(l);
}

$(function(){
	$(".main_area").find("p").eq(0).addClass("current")


	//var img = new movie_images();

	var image = new movie_image();


	var news_change = new news();

})

function movie_images(){
	var _this = this;
	this.count = 0;

	var cl = $(".main_area").find("ul").html();
	$(".main_area ul").append(cl);

	this.move = $(".main_area").find("li").eq(0).width();

	this.start_slid();

	// this.time = setTimeout(function(){
	// 	_this.slider();
	// 	$(".main_area").find("p").removeClass("current");
	// },3000)
}
movie_images.prototype.start_slid = function(){
	var _this = this;

	_this.time = setTimeout(function(){
		_this.slider();
		
	},3000)
}
movie_images.prototype.slider = function(){
	var _this = this;
	$(".main_area ul").velocity({translateX:_this.move*-1},{
		duration:1200,
		easing:'easeInOutSine',
		complete:function(){
			
			var cl = $(".main_area ul").find("li").eq(0).clone();
			$(".main_area ul").append(cl);

			setTimeout(function(){
				$(".main_area ul").find("li").eq(0).remove();
				$(".main_area ul").velocity({translateX:0},0);
			},20);
			_this.count++;
			$(".main_area").find("p").removeClass("current");
			$(".main_area").find("p").eq(_this.count%2).addClass("current");

			_this.start_slid();
		}
	})
}

function movie_image(){
	var _this = this;
	this.time = "";
	this.count = 0;

	var w = $(window).width();

	if(w > 750){
		if(w < 1200){
			w = 1200
		}
		$(".main_area").find("li").width(w*0.97);
		this.dis = $(".main_area").find("img.pc").eq(0).width();
	}else{
		this.dis = $(".main_area").find("img.sp").eq(0).width();
	}

	
	this.fl = Flipsnap('.main_area ul',{
		loop:true,
		//distance:_this.dis,
		transitionDuration:1000
	})//.autoPlay(6000)

	this.fl.element.addEventListener('fspointmove', function() {
	    $(".main_area").find("p").removeClass("current");
		$(".main_area").find("p").eq(_this.fl.currentPoint).addClass("current");
	   
	}, false);

	setTimeout(function(){
		_this.fl.toNext();
		_this.fl.autoPlay()
	},5000)

	$(window).resize(function(){
		var w = $(window).width();

		if(w > 750){
			if(w < 1200){
				w = 1200
			}
			$(".main_area").find("li").width(w*0.97);
			//_this.dis = $(".main_area").find("img.pc").eq(0).width();
		}else{
			$(".main_area").find("li").width(w);
		}
		_this.fl.refresh();
	})
}



function news(){
	var _this = this;


	this.st = 0;
	$(".news_area").find(".tab_news li").click(function(){
		var code = $(this).attr("data-id");
		$(".news_area").find(".tab_news li").removeClass("current");
		$(this).addClass("current")
		$.ajax({
			url:'assets/inc/include_news.html',
			type:'GET',
			data:'site='+code,
			dataType:'html'
		}).done(function(html){
			$(".news_list").find("ul").velocity({opacity:0},{
				duration:300,
				complete:function(){
					$(this).html(html);
					$(this).velocity({opacity:1},200)
				}
			})

		})
	})
}