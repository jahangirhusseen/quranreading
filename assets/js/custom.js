$(document).ready(function () {
    "use strict";
   
    /*==============================================
        * Author        : ""
        * Template Name :  | HTML Template
        * Version       : 1.0
    ================================================= */

    /*=========== TABLE OF CONTENTS ===========

        1. Sticky Menu js
    	2. CounterUp js
        3. scroll-to-top js
        4. owl carousel js
        5. wow js

    ===========================================*/
  
    //  *=========== 1. sticky Menu js ===========

        $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 50) {
            sticky.addClass('fixed') 
        }
        else {
            sticky.removeClass('fixed');
        } 
      });
      
	//  *=========== 2. CounterUp js ===========
      jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
     
  //  *=========== 3. scroll-to-top  js ===========

 $(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
  //  *=========== 4. owl carousel js ===========
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    slideBy:2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2,
            
        }
    }
})

})
  //  *=========== 5. Wow  js ===========
new WOW().init();