$(document).ready(function () {
    
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
       } else {
            $('nav').removeClass('sticky');
       }
    }, {
        offset: '40px'
    });
    
    /* Button Navigation mobile */
    $('.js--mobile-nav').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-compass')) {
            icon.addClass('ion-close');
            icon.removeClass('ion-compass');
        } else {
            icon.addClass('ion-compass');
            icon.removeClass('ion-close');
        }
    });
    
    
    /* Button scroll functions */
    $('.js--scroll-to-showcase').click(function () {
        $('html, body').animate({scrollTop: $('.js--liquids-showcase').offset().top}, 1000);
    });
    
    $('.js--scroll-to-signup').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top}, 1000);
    });
    
    // Slide to anchors on page. Taken from web
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    $('.js--wp-about-us').waypoint(function (direction) {
        $('.js--wp-about-us').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    // Accordion script
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }
    
    

});