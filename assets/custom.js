$( document ).ready(function() {
  $('.carousel_product_selector').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: true
  }
                                                                 
                                        
);
  
  
  $('.slick_carousel_featured').slick({
  infinite: true,
  slidesToShow:4,
  slidesToScroll: 1,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        dots: false,
        arrows: false

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  } );
  
  
   $(function() {
	// (Optional) Active an item if it has the class "is-active"	
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});
  
  
 $(".scroll_to").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".product-section").offset().top
    }, 2000);
});
  
  $('.close_popup').click(function() {
  	$('.overlay').hide();
  	$('.video-popup').hide();
    
   
    var v = document.getElementById('videoPlayer');
    v.pause();
       
    
 });
  $('.open_popup').click(function() {
  	$('.overlay').show();
  	$('.video-popup').show();
  });
  
});