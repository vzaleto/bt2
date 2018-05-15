
$(document).ready(function(){


// modal

$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href') || $(this).attr('data-target'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});


//меню и конпка 

  $('.menu-trigger').click(function() {
    $('.navbar-item  #navbar ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 768 ) {     
      $('#navbar ul').removeAttr('style');
     }
  });//end resize


// счётчик на скролл
$(function() { 
    var num = $(".spincrement");    
    num.each(function(indx, el) {

        var max = $(el).data("max");
        var duration = 5000;
        var visibility = checkViewport(el);
		

        $(el).one("animeNum", function() {

            $({n: 0}).delay(1000).animate({n: max}, {
                easing: "linear",
                duration: duration,

                step: function(now, fx) {
                    $(el).html(now | 0)
                }

            })
        }).data("visibility", visibility);
        visibility && $(el).trigger("animeNum") 

    });

    function checkViewport(el) {
    var H = document.documentElement.clientHeight,
        h = el.scrollHeight,
        pos = el.getBoundingClientRect();
        return pos.top + h > 0 && pos.bottom - h < H
    }
    
   
    $(window).scroll(function() {
    	
	        num.each(function(indx, el) {
	            var visibility = checkViewport(el);
	            el = $(el);
	            var old = el.data("visibility");
	            old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
	        
	        })
    })
    
});

//копка показать скрыть

	$(".show-item_left" ).click(function() {
			var hBlock = $('.item-hide_left');
   				$(this).text(hBlock.is(':visible') ? 'показать всё' : 'Скрыть');
    				hBlock.toggle('slow');
  
	});

	$( ".show-item_center" ).click(function() {
 		var hBlock = $('.item-hide_center');
  			$(this).text(hBlock.is(':visible') ? 'показать всё' : 'Скрыть');
    				hBlock.toggle('slow');
	});

	$( ".show-item_right" ).click(function() {
  		var hBlock = $('.item-hide_right');
  			$(this).text(hBlock.is(':visible') ? 'показать всё' : 'Скрыть');
    				hBlock.toggle('slow');
	});

	// навигация
	var headerHeight = $(".navbar-item").height();

	    $(".navbar-right").on("click",".navigation", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top - headerHeight}, 1000);
	    });

 		// вов анимация на скрол
		 new WOW().init();
	    // кнопка вверх
		 $('.btn-up').click(function () {  
		      $('body, html').animate({
		        scrollTop: 0
		      }, 1000);
		    });

		 // слайдер
		 $('.item-slider').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 4,
		  autoplay: true,
  			autoplaySpeed: 3000,
  			prevArrow:'<button class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></button',
		  nextArrow:'<button class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></button',
          responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

});
