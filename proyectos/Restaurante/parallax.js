$(document).ready(function(){

    //----EVENTO SCROLL--ANCHO VENTANA--Y--POSICION DEL SCROLL--PARALLAX---//
   
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){ //Esta medida de la ventana debe ser la misma de la del screen en @mediaquery//
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)' // Aqui estoy concatenando con el signo + estas cadenas de texto
                                                                  //Con este codigo al mover el scroll el header y el main se van uniendo
                                                                  //lentamente 
            });
           
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)' // Aqui estoy concatenando con el signo + estas cadenas de texto
                                                                  //Con este codigo al mover el scroll el header y el main se van uniendo
                                                                  //lentamente y le puse el signo menos antes de la comilla y el más y
                                                                  //así los elementos se van acomodando unos por encima de los otros 
            });

        }
    });
    
     $(window).resize(function(){ //Este codigo es para cuando uasamos un a tablet y cambiamos de posicion horizontal a vertical y 
                                  //el parallax funcione correctamente y regrese a su posicion original en la posicion vertical
        var windowWidth = $(window).width();
        if(windowWidth < 800){

            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });

        }
       
       });
      });