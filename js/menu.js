$(document).ready(function () {
    //
    $('.menu-l-open').bind('click', function(e) {
        var MenuHeight = $('.menu-l').height();
        $('.dropdown-menu-l').css({ 'top': MenuHeight }).stop().slideToggle(500);;
        return false;
    });
    //
    $('.menu-m-open').bind('click', function(e) {
        var MenuHeight = $('.menu-m').height();
        $('.dropdown-menu-m').css({ 'top': MenuHeight }).stop().slideToggle(500);;
        return false;
    });
});