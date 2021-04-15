// Inicio de funcion JS

$(document).ready(function(){  

    // Menú Responsive
    $('aside#menu-movil').css('right','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
            right: 0
        },300, 'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        $('header, main,footer').animate({
            right: 290,
            opacity: 0.5
        },300, 'easeOutExpo');

        

        event.preventDefault();
    });
    
    $('#cerrar, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            right: -290
        },300, 'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        $('header, main,footer').animate({
            right: 0,
            opacity: 1
        },300, 'easeOutExpo');
        

        event.preventDefault();

    });


});
