let refreshTable = function (){
    let $href = $("[title='Profile']").attr('href');
    let $tableHeight = (window.innerHeight / 3) * 1.5;
    let $fontSize = '20px';

    $('#page-header').hide();
    let $a = $("[href='" + $href +"']");
    $('#table_scroll_live').attr('style', 'overflow:scroll; height:' + $tableHeight+ 'px;');
    $a.parents('tr').addClass('selected eliminated');
    $('#table_scroll_live').animate({ scrollTop: $a.parents('tr').position().top - $tableHeight/3.5}, "slow");
    $a.parents('tr').attr('style', 'font-size: ' + $fontSize);
}

$('#tab_live').click();
window.setInterval(refreshTable, 5000);

