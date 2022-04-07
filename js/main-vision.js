$(document).ready(function () {
    //function-setting
    function MainVision() {
        var ScreenHeight = document.body.clientHeight;
        var ScreenWidth = document.body.clientWidth;
        var HeaderHeight = $('header').height();
        $('.main-vision').height(ScreenHeight - HeaderHeight).width(ScreenWidth);
    }
    //
    //
    //
    //
    //
    MainVision();
    //
    $(window).resize(function () { 
        MainVision();
    });
});
