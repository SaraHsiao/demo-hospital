// ui-search 定義：
$.fn.UiSearch=function() {
    var ui=$(this);

    $('.ui-search-selected',ui).click(function() {

        $('.ui-search-selected-list').show();
        return false;
    })

    $('.ui-search-selected-list a',ui).click(function() {

        $('.ui-search-selected').text($(this).text());
        $('.ui-search-selected-list').hide();
        return false; 
    })

    $('body').click(function(){

        $('.ui-search-selected-list').hide();
    })
}

/*
  * @param {string} header TAB組件，所有選項卡 item
  * @param {string} content TAB組件，內容區域 所有 item
  * @optional {string} focus_prefix 選項卡高亮樣式前綴，可選
 */

// ui-tab 定規
$.fn.UiTab=function(header,content) {
    var ui=$(this);
    var tabs=$(header,ui);
    var cons=$(content,ui);
    // var focusPrefix=focus_prefix||" ";

    tabs.click(function() {
        var index=$(this).index();
        tabs.removeClass('item_focus').eq(index).addClass('item_focus');
        cons.hide().eq(index).show();
        return false;
    })
}
 
// 頁面的腳本邏輯
$(function() {
    $('.ui-search').UiSearch();

    $('.content-tab').UiTab('.caption > .item','.block > .item');

    $('.content-tab .block .item').UiTab('.block-caption > a','.block-content > .block-wrap')
})
