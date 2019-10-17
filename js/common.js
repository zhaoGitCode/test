
var lis=$(".onlineStudy .onlineStudy_ul>li");
var lis2=$(".leaderState .iterm");

reduce(lis);
reduce(lis2);
function reduce(object){
    for(var i=0;i<object.length;i++){
      var flog=(i+1)%3;
       if(flog==0){
        object.eq(i).addClass("odd");
       }
    }
}

/************denglu***********/
jQuery(document).ready(function($) {
				$('.theme-login').click(function(){
					$('.theme-popover-mask').fadeIn(100);
					$('.theme-popover').slideDown(200);
				});
				$('.theme-poptit .close').click(function(){
					$('.theme-popover-mask').fadeOut(100);
					$('.theme-popover').slideUp(200);
				});

			});

 //按回车键,触发登陆
		 $(document).keydown(function(e){
			 var e = e || event,
			 keycode = e.which || e.keyCode;
			 if($(".theme-popover").css("display")!="none"){
				 if (keycode==13) {
				 	alert($("#sub"));
				  $("#sub_btn").trigger("click");

				 }
			  }
			});

/****************
 微信、手机二维码扫描
*****************/
$(".one").hover(function(){
				$(".mobile").stop(false, true).fadeIn("1000");
				$(".weixin").stop(false, true).fadeOut("1000");
			},function(){
				$(".mobile").stop(false, true).fadeOut("1000");
			});
			$(".two").hover(function(){
				$(".weixin").stop(false, true).fadeIn("1000");
				$(".mobile").stop(false, true).fadeOut("1000");
			},function(){
				$(".weixin").stop(false, true).fadeOut("1000");
});

$(function() {
	  $(window).scroll(function() {
		  var t = $(document).scrollTop();
		            if (t>10) {
		            	$(".backTop").fadeIn(1000);
		            }else{
		            	$(".backTop").fadeOut(1000);
		            };
	            });
		        $(".backTop").click(function(event){
			        event.preventDefault();
			        $('html,body').animate({scrollTop:0},1000);
		 });
 });
























