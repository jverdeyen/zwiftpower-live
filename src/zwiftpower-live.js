var refreshTable = function (){
    var  $href = $("[title='Profile']").attr('href');
    var  $tableHeight = (window.innerHeight / 3) * 1.5;
    var  $fontSize = '20px';
    var  $a = $("[href='" + $href +"']");

    $('#tab_live').click();
    $('#page-header').hide();
    $('#table_scroll_live').attr('style', 'overflow:scroll; height:' + $tableHeight+ 'px;');
    $a.parents('tr').addClass('selected eliminated');
    $('#table_scroll_live').animate({ scrollTop: $a.parents('tr').position().top - $tableHeight/3.5}, "slow");
    $a.parents('tr').attr('style', 'font-size: ' + $fontSize);
}

$('#tab_live').click();

window.setInterval(refreshTable, 5000);


