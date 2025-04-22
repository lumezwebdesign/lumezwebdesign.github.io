$(document).ready(function(){
    
 //-----EFECTO MENU-----//   
    $('.menu a').each(function(index, elemento){
        $(this).css({
          'top': '-200px'
        });

        $(this).animate({
           'top': '0'
        }, 2000 + (index * 500)); /*Este 2000 es el tiempo de duración del efecto de animación y el 500 es el tiempo entre
                                   cada elemento del menú a */
    });

    //------EFECTO HEADER---------//

    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-32px'
        }, 1500); /* Este es el tiempo de la duración del efecto de la animación de los textos, que seria 1.5 segundos */
    }

    //--------SCROLL ELEMENTOS MENU------//

    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollTop: 500 //Tambien se puede poner// /*acercaDe*/ /*acercaDe -100 */ /*acercaDe menos la cantidad que quieras */
           }, 500);
        });
        $('#btn-menu').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollTop: menu
           }, 500);
        });
        $('#btn-galeria').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollTop: galeria 
           }, 500);
        });
        $('#btn-ubicacion').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollTop: ubicacion 
           }, 500);
        });

});