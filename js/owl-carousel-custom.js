$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 80,
        nav: true,
        dots: false,
        stagePadding: 1,
        navText: ['<i class="fas fa-arrow-left"></i>上一個', '<i class="fas fa-arrow-right"></i>下一個'],
        responsive: {
            0: {
                items: 1
            },
            768:{
                margin: 40,
                items: 2
            },
            1280:{
                margin: 40,
                items: 2
            },
        }
    })
});