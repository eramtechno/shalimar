/*=========================================

Template Name: INDUSTRIAL_ 
Author: HidraWira
Version: 1.0
Design and Developed by: HidraWira

NOTE: This is the custom jQuery file for the template

=========================================*/





(function ($) {

  
    "use strict"; 


    /*=================== THEME COLOR PANEL FUNCTIONS ===================*/
    $(".style-option-wrap #style-btn").on("click", function() {
        $(this).parent(".style-option-wrap").toggleClass("open-style");
    });


    /*=================== THEME COLOR FUNCTIONS ===================*/
    $(".theme-panel #default").on("click", function() {
        $("body").removeAttr('class');
    });

    $('#tc-green,#tc-blue,#tc-red-grey,#tc-yellow,#tc-purple,#tc-blue-sea').on("click", function() {
        var style = this.id;
        $("body").attr('class', style);
    });


    /*=================== preloader ===================*/
    $(window).on('load',function() { 
        $(".preloading").fadeOut("slow"); 
    });


    /*=================== Animate ===================*/
    function onScrollInit( items, trigger ) {
      items.each( function() {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');
          
            osElement.css({
              '-webkit-animation-delay':  osAnimationDelay,
              '-moz-animation-delay':     osAnimationDelay,
              'animation-delay':          osAnimationDelay
            });

            var osTrigger = ( trigger ) ? trigger : osElement;
            
            osTrigger.waypoint(function() {
              osElement.addClass('animated').addClass(osAnimationClass);
              },{
                  triggerOnce: true,
                  offset: '90%'
            });
      });
    }

     onScrollInit( $('.os-animation') );
     onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') ); 


    /*=================== filtering function ===================*/
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "gallery-no-filter")
        {
            $('.gallery-img-box').removeClass("gallery-hidden");
        }
        else
        { 
            $(".gallery-img-box").not('.'+value).addClass("gallery-hidden");   
            $('.gallery-img-box').filter('.'+value).removeClass("gallery-hidden");
            
        }
    });

    $('.filter-gallery .filter-button').on("click", function() {
        $('.filter-gallery').find('.filter-button.active').removeClass('active');  
        $(this).addClass('active');
    });


   /*=================== GALLERY FUNCTIONS ===================*/ 
    loadGallery(true, 'a.viewthumb');

    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }


    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').on("click", function() {
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }


    // ======================= NAV MENU FUNCTION  ======================= //
      /* "Hovernav" navbar dropdown on hover */
      var mq = window.matchMedia('(min-width: 768px)');
      if (mq.matches) {
        $('ul.navbar-nav > li').addClass('hovernav');
      } else {
        $('ul.navbar-nav > li').removeClass('hovernav');
      }; 
      if (matchMedia) {
        var mq = window.matchMedia('(min-width: 768px)');
        mq.addListener(WidthChange);
        WidthChange(mq);
      }
      function WidthChange(mq) {
        if (mq.matches) {
          $('ul.navbar-nav > li').addClass('hovernav');
          // Restore "clickable parent links" in navbar
          $('.hovernav a.dropdown-toggle').click(function () {
            window.location = this.href;
          });
        } else {
          $('ul.navbar-nav > li').removeClass('hovernav');
        }
      };
      // Restore "clickable parent links" in navbar
      $('.hovernav a.dropdown-toggle').click(function () {
        window.location = this.href;
      });
      $('.navbar-nav > li a').on("click", function() {
        $('.navbar-nav').find('li.active').removeClass('active'); 
        $(this).parents("li").addClass('active');
    });


    // ======================= jQuery for page scrolling feature  ======================= // 
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



     // ======================= Go to top function  ======================= //
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');


        // ======================= Owl Carousel  ======================= // 
        $('.owl-carousel').owlCarousel({
          dots: false,
          loop: true,
            autoplay: true,
            slideSpeed : 2000,
          margin: 5,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            480: {
              items: 2,
              nav: true
            },
            600: {
              items: 3,
              nav: true
            },
            1000: {
              items: 4,
              nav: true,
              loop: true,
              margin: 5
            }
          }
        })
  

      // ======================= Counter  ======================= //
      $('#counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this).find('.count').each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 9000,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });
          $(this).unbind('inview');
        }
      });


    /*=================== TESTIMONIAL ===================*/ 
      //Set the carousel options
      $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
      });
   

 })(jQuery);





 












