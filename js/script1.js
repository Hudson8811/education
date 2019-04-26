$(document).ready(function () {
    $(".insta-carousel").smoothDivScroll({
        autoScrollingMode: "onStart",
        manualContinuousScrolling: true,
    });
    $('.tech-block-toggle').click(function () {
       $(this).toggleClass('active').next('.tech-block').slideToggle();
    });


});

var swipercustom = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 701 && swipercustom == undefined) {
        $('.custom-swiper').each(function(){
            swipercustom = new Swiper(this, {
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })
        });
    } else if (screenWidth > 701 && swipercustom != undefined) {
        $('.custom-swiper').each(function(){
            this.swiper.destroy();
        })
        swipercustom = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
    }
}
initSwiper();
$(window).on('resize', function(){
    initSwiper();
});