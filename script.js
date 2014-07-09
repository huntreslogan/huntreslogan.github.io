$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });
     $('.popover-btn').popover({
        trigger: 'click'
    });
    $( "#accordion" ).accordion();

    $('.imagelink').hover(function() {
        $( "#toggle" ).toggle( "highlight" );
    });
});


