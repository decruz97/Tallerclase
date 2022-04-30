 $(document).ready(function (){
 $(".hide").on('click', function() {
      $("nav ul").toggle('slow')});
  $(window).resize(function(){
            var ancho = $(this).width();
            if(ancho>768){
                $("nav ul").show();
            }
        });
 });
