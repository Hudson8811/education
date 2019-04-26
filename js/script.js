$('#subheader').height($('#header').outerHeight());

$(".input-mask").inputmask("+7 (999) 999-99-99");

$('.form_block .radio').click(function(){
	var selected = false;
    $("input.rad").each(function() {
		if ($(this).prop("checked")) {
			selected = true;
		}
	});
	if (selected) {
		$("#required").prop('required', false);
	} else {
		$("#required").prop('required', true);
	}
});


///****изменение****///
/*
$('.my_tabs .dt ul li').click(function() {
	$(this).closest('.my_tabs').find('li').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.my_tabs').find('.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});*/

$('.mobile-menu .my_tabs .dt ul li').click(function() {
	$(this).closest('.my_tabs').find('li').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.my_tabs').find('.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
});

///****конец изменений****///

$('.before-after-section .next-tab').click(function() {
	$('.before-after-section .dt li').removeClass('active');
	$('.before-after-section .dt li.item2').addClass('active');
	$('.before-after-section .dd .item').removeClass('active');
	$('.before-after-section .dd .item.item2').addClass('active');
});

$('.before-after-section .prev-tab').click(function() {
	$('.before-after-section .dt li').removeClass('active');
	$('.before-after-section .dt li.item1').addClass('active');
	$('.before-after-section .dd .item').removeClass('active');
	$('.before-after-section .dd .item.item1').addClass('active');
});

$('.burger').click(function() {
	$('.mobile-shadow').toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

if (window.innerWidth < 700){
	$('.mobile-slider').slick({
	    infinite:false,
	    dots: true,
	    variableWidth:false,
	    centerMode:false,
	    adaptiveHeight: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: false,
	    prevArrow:'<button type="button" class="slick-prev"></button>',
	    nextArrow: '<button type="button" class="slick-next"></button>'
	});
};


$(document.body).on('click', function(e){
  if(!$(e.target).closest('.open').length){
    $('.open').removeClass('open');
  }
});

$("#header .header .right-block .menu li .drop-reg").mouseout(function () {
	$('#header .header .right-block .menu li .drop-reg').removeClass('open');
});

if(window.innerWidth > 900){
	$(".reg-section .green-button").click(function () {
		    $('#header .header .right-block .menu li .drop-reg .dt li').removeClass('active');
		    $('#header .header .right-block .menu li .drop-reg .dd .item').removeClass('active');
		    $('#header .header .right-block .menu li .drop-reg .dt li:nth-child(2)').addClass('active');
		    $('#header .header .right-block .menu li .drop-reg .dd .item:nth-child(2)').addClass('active');
			setTimeout ("$('#header .header .right-block .menu li .drop-reg').addClass('open');", 100);
	});
} else {
	$(".reg-section .green-button").click(function () {
		    $('.mobile-shadow').addClass('active');
			$('.mobile-menu').addClass('active');
		    $('.mobile-menu .menu li .drop-reg .dt li').removeClass('active');
		    $('.mobile-menu .menu li .drop-reg .dd .item').removeClass('active');
		    $('.mobile-menu .menu li .drop-reg .dt li:nth-child(2)').addClass('active');
		    $('.mobile-menu .menu li .drop-reg .dd .item:nth-child(2)').addClass('active');
			setTimeout ("$('.mobile-menu .menu li .drop-reg').addClass('open');", 100);
	});
}

$('.embl').owlCarousel({
    loop:false,
	nav:true,
	navText:false,
	dots:false,
	autoplay:false,
	responsive : 
	{
		0 : {
			items:1,
			margin:0
		},
		450 : {
			items:2,
			margin:0
		},
		700 : {
			items:4,
			margin:0
		},
		
		950 : {
			items:5,
			margin:0
		}
	}
});

