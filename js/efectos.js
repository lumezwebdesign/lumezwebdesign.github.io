$(document).ready(function(){

//-----EFECTO MENU-----//   
    /*$('.menu .a').each(function(index, elemento){
        $(this).css({
           'bottom': 'Reviews'
        });

        $(this).animate({
          'bottom': 'Reviews'
        }, 2000 + (index * 500)); /*Este 2000 es el tiempo de duración del efecto de animación y el 500 es el tiempo entre
                               cada elemento del menú a 
    }); */   


    Reviews = $('#reviews').offset().top,
    Perfiles = $('#submenuperfiles').offset().top,
    perfilfundador = $('#perfilfund').offset().top;

    //galeria = $('#galeria').offset().top,//
    //ubicacion = $('#ubicacion').offset().top;//

        $('#btn-reviews').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollDown: 800 //Tambien se puede poner// /*acercaDe*/ /*acercaDe -100 */ /*acercaDe menos la cantidad que quieras */
           }, 700);
        });
        $('#btn-submenuperfiles').on('click', function(e){
            e.preventDefault();
           $('html, body').animate({
            scrollDown: 900
           }, 800);
        });


});