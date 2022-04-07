$(document).ready(function () {
    //function-setting
    function TabContent(TabTitle, TabContent, TabTopicHref) {
        $('.books-categories').append('<li><a href="#' + TabTopicHref + '" data-name="' + TabContent + '">' + TabTitle + '</a></li>');
    }
    //
    //
    //
    //
    //
    //content-setting
    //TabContent('書展主題01','主題01內文' , 'tab-content-01');
    //
    //TabContent('書展主題02','主題02內文' , 'tab-content-02');
    //
    //TabContent('書展主題03','主題03內文' , 'tab-content-03');
    //
    //TabContent('書展主題04','主題04內文' , 'tab-content-04');
});
