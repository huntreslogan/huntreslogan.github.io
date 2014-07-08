$(document).ready(function() {
    $('.carousel').carousel({
        interval: 1500
    });
    $('.popover-btn').popover({
        trigger: 'hover'
    });
    $( "#accordion" ).accordion();

    $('.imagelink').hover(function() {
        $( "#toggle" ).toggle( "highlight" );
    });
});


