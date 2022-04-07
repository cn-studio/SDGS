$(document).ready(function () {
    var TabTopic01 = $('.books-categories').children('li').eq(0).children('a').text();
    var TabContent01 = $('.books-categories').children('li').eq(0).children('a').data('name');
    var TabTopic02 = $('.books-categories').children('li').eq(1).text();
    var TabContent02 = $('.books-categories').children('li').eq(1).children('a').data('name');
    var TabTopic03 = $('.books-categories').children('li').eq(2).text();
    var TabContent03 = $('.books-categories').children('li').eq(2).children('a').data('name');
    var TabTopic04 = $('.books-categories').children('li').eq(3).text();
    var TabContent04 = $('.books-categories').children('li').eq(3).children('a').data('name');
    //function setting
    function BooksTopic01() {
        $('.books').append('<div class="books-content" id="tab-content-01"></div>');
        $('#tab-content-01').append('<article><h3> ' + TabTopic01 + ' </h3><h5> ' + TabContent01 + ' </h5></article>');
    }
    function BooksTopic02() {
        $('.books').append('<div class="books-content" id="tab-content-02"></div>');
        $('#tab-content-02').append('<article><h3> ' + TabTopic02 + ' </h3><h5> ' + TabContent02 + ' </h5></article>');
    }
    function BooksTopic03() {
        $('.books').append('<div class="books-content" id="tab-content-03"></div>');
        $('#tab-content-03').append('<article><h3> ' + TabTopic03 + ' </h3><h5> ' + TabContent03 + ' </h5></article>');
    }
    function BooksTopic04() {
        $('.books').append('<div class="books-content" id="tab-content-04"></div>');
        $('#tab-content-04').append('<article><h3> ' + TabTopic04 + ' </h3><h5> ' + TabContent04 + ' </h5></article>');
    }
    //function setting
    function BookContent01(BookImageNumber, BookContentName, BookContentLink) {
        $('#tab-content-01').append('<a href=' + BookContentLink + '><img src="images/books-image-' + BookImageNumber + '.jpg"><p>' + BookContentName + '</p></a>')
    }
    function BookContent02(BookImageNumber, BookContentName, BookContentLink) {
        $('#tab-content-02').append('<a href=' + BookContentLink + '><img src="images/books-image-' + BookImageNumber + '.jpg"><p>' + BookContentName + '</p></a>')
    }
    function BookContent03(BookImageNumber, BookContentName, BookContentLink) {
        $('#tab-content-03').append('<a href=' + BookContentLink + '><img src="images/books-image-' + BookImageNumber + '.jpg"><p>' + BookContentName + '</p></a>')
    }
    function BookContent04(BookImageNumber, BookContentName, BookContentLink) {
        $('#tab-content-04').append('<a href=' + BookContentLink + '><img src="images/books-image-' + BookImageNumber + '.jpg"><p>' + BookContentName + '</p></a>')
    }
    //
    //
    //
    //
    //
    //content-setting
    //BookContent01
    //BooksTopic01();
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //
    //BookContent01('01', '書名最多兩行字', '#');
    //BooksContent02
    //BooksTopic02();
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BookContent02('01', '書名最多兩行字', '#');
    //
    //BooksContent03
    //BooksTopic03();
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BookContent03('01', '書名最多兩行字', '#');
    //
    //BooksContent04
    //BooksTopic04();
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
    //BookContent04('01', '書名最多兩行字', '#');
    //
});
