$(document).ready(function() {

    $('.open-reg-modal').click(function () {
        $('.registraion-block').arcticmodal({
            closeOnEsc: false,
            closeOnOverlayClick: false,
            overlay: {
                css: {
                    backgroundColor: '#000',
                    opacity: .35,
                }
            }
        });
    });

});