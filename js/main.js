$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeTab = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeTab).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
});