$(document).ready(function () {
    //function-setting
    function TopicTitle(TopicTitle) {
        $('.topic-article').append('<h1>' + TopicTitle + '</h1>');
        $('.topic-article').append('<div class="topic-article-content owl-carousel owl-theme" id=""></div>');
    }
    //
    function TopicContent(ItemNumberID, ItemImgFileNumber, TopicVisionTitle, TopicVisionContent, TopicNewsLink, TopicNewsTitle, TopicNewsContent) {
        $('.topic-article-content').append('<div class="topic-article-content-item item" id="' + ItemNumberID + '"></div>');
        $('#' + ItemNumberID + '').append('<div class="topic-article-content-item-vision"></div>');
        $('#' + ItemNumberID + '').append('<div class="topic-article-content-item-news"></div>');
        $('#' + ItemNumberID + '').children('.topic-article-content-item-vision').append('<div><img src="' + ItemImgFileNumber + '"></div>');
        $('#' + ItemNumberID + '').children('.topic-article-content-item-vision').append('<article><h5>' + TopicVisionTitle + '</h5><p>' + TopicVisionContent + '</p></article>');
        $('#' + ItemNumberID + '').children('.topic-article-content-item-news').append('<div><h5>' + TopicNewsTitle + '</h5><a href="' + TopicNewsLink + '"target=_blank">詳全文</a></div>');
        $('#' + ItemNumberID + '').children('.topic-article-content-item-news').append('<article>' + TopicNewsContent + '</article>');
    }
    //
    //
    //
    //
    //
    //content-setting
    //TopicTitle('主題內容文案');
    //
    //TopicContent('item-01', 'images/topic-vision-01.svg', '主題01', '主題內文01', '文章連結01', '文章標題01','文章內文01');
    //TopicContent('item-02', 'images/topic-vision-01.svg', '主題02', '主題內文02', '文章連結02', '文章標題02','文章內文02');
    //TopicContent('item-03', 'images/topic-vision-01.svg', '主題03', '主題內文03', '文章連結03', '文章標題03','文章內文03');
    //TopicContent('item-04', 'images/topic-vision-01.svg', '主題04', '主題內文04', '文章連結04', '文章標題04','文章內文04');
});
