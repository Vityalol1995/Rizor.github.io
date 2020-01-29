$(function() {

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 700);
    });
    
    let nav = $("#nav");
    let burger = $("#burger");

    burger.on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
    
});


jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 5) {
        jQuery('.position__item').addClass('active');
    }
    else {
        jQuery('.position__item').removeClass('active');
    }
});

jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 500) {
        jQuery('.position__item1').addClass('active');
    }
    else {
        jQuery('.position__item1').removeClass('active');
    }
});

jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 1600) {
        jQuery('.position__item2').addClass('active');
    }
    else {
        jQuery('.position__item2').removeClass('active');
    }
});

jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 2300) {
        jQuery('.position__item3').addClass('active');
    }
    else {
        jQuery('.position__item3').removeClass('active');
    }
});



AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

