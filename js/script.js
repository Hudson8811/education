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

$('.my_tabs ul li').click(function() {
	$(this).closest('.my_tabs').find('li').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.my_tabs').find('.item').removeClass('active')
	                  .eq($(this).index()).addClass('active');
	return false;
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
}