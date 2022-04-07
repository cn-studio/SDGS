$(document).ready(function () {
    $('.to-top').bind('click', function (e) {
        $('body').stop().animate({ scrollTop: 0 }, 1000);
        return false;
    });
    //
    $(window).scroll(function () {
        var WindowScrollTop = $(this).scrollTop();
        var MainVisionHeight = $('.main-vision').height();
        var SubjectHeight = $('.subject').outerHeight(true);
        var footerHeight = $('footer').outerHeight();
        if (WindowScrollTop <= MainVisionHeight + SubjectHeight) {
            $('.to-top').removeClass('to-top-show').addClass('to-top-hide').css({ 'bottom': footerHeight*0.5 });
        } else {
            $('.to-top').removeClass('to-top-hide').addClass('to-top-show').css({ 'bottom': footerHeight });
        };
    });
});