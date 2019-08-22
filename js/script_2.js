

$('.carus_nagr').owlCarousel({
    loop:false,
	nav:true,
	navText:false,
	dots:false,
	autoplay:false,
	responsive :
	{
		0 : {
			items:3
		},
        680 : {
            items:2
        },
		1050 : {
			items:3
		}
	}
});


$('.acc_main .sect_1 .bottom .button').click(function() {
    $('.acc_main .sect_1 .bottom .modal_1').addClass('active');
    $('.backgr').addClass('active');
});
$('.backgr').click(function() {
    $('.acc_main .sect_1 .bottom .modal_1').removeClass('active');
    $('.backgr').removeClass('active');
});

$('.acc_main .sect_1 .carus_nagr .img1').click(function() {
    $('.acc_main .sect_1 .img1_down').toggleClass('active');
    $('.acc_main .sect_1 .img2_down').removeClass('active');
    $('.acc_main .sect_1 .img3_down').removeClass('active');
});
$('.acc_main .sect_1 .carus_nagr .img2').click(function() {
    $('.acc_main .sect_1 .img2_down').toggleClass('active');
    $('.acc_main .sect_1 .img1_down').removeClass('active');
    $('.acc_main .sect_1 .img3_down').removeClass('active');
});
$('.acc_main .sect_1 .carus_nagr .img3').click(function() {
    $('.acc_main .sect_1 .img3_down').toggleClass('active');
    $('.acc_main .sect_1 .img2_down').removeClass('active');
    $('.acc_main .sect_1 .img1_down').removeClass('active');
});

$('.acc_main .sect_1 .img_down').click(function() {
    $('.acc_main .sect_1 .img3_down').removeClass('active');
    $('.acc_main .sect_1 .img2_down').removeClass('active');
    $('.acc_main .sect_1 .img1_down').removeClass('active');
});