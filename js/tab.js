$(document).ready(function () {
    //
    $(window).scroll(function () {
        var WindowScroll = $(window).scrollTop();
        var TabHeight = $('.books-categories').height();
        var TabPositon = $('#tab-content-01').offset().top;
        var TabLength = $('.books-categories li a').length;
        //
        if (WindowScroll > TabPositon - TabHeight - 1) {
            $('.books-categories').addClass('fixed').removeClass('relative');
        } else {
            $('.books-categories').addClass('relative').removeClass('fixed');
        }
        //
        for (let index = 0; index < TabLength; index++) {
            var TabContentPosition = $($('.books-categories li').eq(index).children('a').attr('href')).offset().top;
            var TabPositionDefault = $('.books-categories').hasClass('books-categories relative');
            if (WindowScroll >= TabContentPosition - TabHeight - 1) {
                $('.books-categories li').children('a').removeClass('tab-active');
                $('.books-categories li').children('a').children('i').remove();
                $('.books-categories li').eq(index).children('a').prepend('<i class="fas fa-book">').addClass('tab-active');
            } else if (TabPositionDefault == true) {
                $('.books-categories li').children('a').removeClass('tab-active');
                $('.books-categories li').children('a').children('i').remove();
            }
        }
    });
    //
    $('.books-categories li a').bind('click', function (e) {
        var TabHeight = $('.books-categories').height();
        var TabContentPosition = $($(this).attr('href')).offset().top;
        var TabPositionDefault = $('.books-categories').hasClass('books-categories relative');
        if (TabPositionDefault == true) {
            return false;
        } else {
            $('body').stop().animate({ scrollTop: TabContentPosition - TabHeight }, 1000);
        }
        return false;
    });
    //
    TabCount();
    //
    $(window).resize(function () {
        TabCount();
    });
    //
    //
    //
    //
    //function setting
    function TabCount() {
        var ScreenWidth = document.body.clientWidth;
        var TabLength = $('.books-categories li a').length;
        if (TabLength >= '4' && ScreenWidth >= 1024) {
            $('.books-categories').css({ 'flex-wrap': 'nowrap' });
            $('.books-categories li').css({ 'width': '100%' });
        } else if (TabLength >= '4' && ScreenWidth <= 768) {
            $('.books-categories').css({ 'flex-wrap': 'wrap' });
            $('.books-categories li').css({ 'width': '50%' });
        } else {
            $('.books-categories').css({ 'flex-wrap': 'nowrap' });
            $('.books-categories li').css({ 'width': '100%' });
        }
    }
});