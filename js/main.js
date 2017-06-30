(function ($) {
   "use strict";


/*----------------------------
 wow js active
------------------------------ */
	new WOW().init();   


/*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
/*----------------------------
 Navbar nav
------------------------------ */

	$(".main-menu ul.navbar-nav li ").on('click', function(){
		$(".main-menu ul.navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});	

/*----------------------------
 Header Images
------------------------------ */
	$(".header-img").height($(window).height());

	$(window).resize(function(){
		$(".header-img").height($(window).height());
	});	

/*----------------------------
Page Scroll
------------------------------ */

	jQuery('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top - 55
			}, 1500, 'easeInOutExpo');
		event.preventDefault();
	}); 

/*----------------------------
 Counter js active
------------------------------ */

	$('.counter').counterUp({
		delay: 40,
		time: 3000
	});
/*---------------------
 mixItUp
--------------------- */	

	$('.awesome-portfolio-content').mixItUp({
		animation: {
		  effects: 'rotateZ',
		  duration: 1000,
		}
	});

/*---------------------
 testimonial-curosel
--------------------- */
	$('.testimonial-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		animateOut: 'slideOutUp',
		animateIn: 'zoomInRight',
		navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

/*---------------------
 Blog-curosel
--------------------- */
	$('.blog-item ').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		animateOut: 'slideOutDown',
		animateIn: 'zoomInLeft',
		navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay:false,
		smartSpeed:3000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

//Попап менеджер FancyBox
//Документация: http://fancybox.net/howto
//<a class="fancybox"><img src="image.jpg" /></a>
//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	//$(".fancybox").fancybox();
	$(".fancybox").fancybox({
	helpers: {
		overlay: {
			locked: false
		}
	}
	});


//Аякс отправка форм
//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
	    //var form_data = $(this).serialize(); //собераем все данные из формы
	    $.ajax({
	        url: "https://www.enformed.io/q4ocurqv", //путь до php фаила отправителя
	        type: "POST", //Метод отправки
	        data: $('#form').serialize(),
	        datatype: 'json'
	    });
	    e.preventDefault();
	    $(this).get(0).reset();
	    alert("Ми скоро з вами зв’яжемось");
	});  

	$("#form1").submit(function(event) { //устанавливаем событие отправки для формы с id=form
	    //var form_data = $(this).serialize(); //собераем все данные из формы
	    $.ajax({
	        url: "https://www.enformed.io/q4ocurqv", //путь до php фаила отправителя
	        type: "POST", //Метод отправки
	        data: $('#form').serialize(),
	        datatype: 'json'
	    });
	    event.preventDefault();
	    $(this).get(0).reset();
	    alert("Ми скоро з вами зв’яжемось");
	});  
})(jQuery); 
