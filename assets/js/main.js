<!-- ================================================== -->
<!-- =============== START JS OPTIONS ================ -->
<!-- ================================================== -->
	
jQuery(document).ready(function(){
	
	"use strict";

	// FitVides Option
	jQuery("html").fitVids({ customSelector: "iframe"});

	// PrettyPhoto Options
	jQuery(".attachment").find('a > img:not(.attachment-thumbnail)').parent().prettyPhoto({animation_speed:'normal',slideshow:9999, autoplay_slideshow: false});
	
	// "single-post-content" is the class of blog-single content container
	jQuery(".single-post-content").find('a > img').parent().prettyPhoto({animation_speed:'normal',slideshow:9999, autoplay_slideshow: false});

	jQuery(".galleryPopup a").prettyPhoto({animation_speed:'normal',slideshow:9999, autoplay_slideshow: false});
	jQuery(".galleryPopup1 a").prettyPhoto({animation_speed:'normal',slideshow:9999, autoplay_slideshow: false});

	function isotope() {

	  var container = jQuery('.contentGallery ul');

	  container.imagesLoaded(function() {

	   container.isotope();

	  });

	  container.isotope();

	  var jQueryoptionSets = jQuery('.categories ul'),

	  jQueryoptionLinks = jQueryoptionSets.find('a');

	  jQueryoptionLinks.on("click", function(){

	   var jQuerythis = jQuery(this);

	   if ( jQuerythis.hasClass('selected') ) {

	    return false;

	   }
	   var jQueryoptionSet = jQuerythis.parents('.categories ul');

	   jQueryoptionSet.find('.selected').removeClass('selected');

	   jQuerythis.addClass('selected');

	   var options = {},

	    key = jQueryoptionSet.attr('data-option-key'),

	    value = jQuerythis.attr('data-option-value');

	   value = value === 'false' ? false : value;

	   options[ key ] = value;

	   if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

	    changeLayoutMode( jQuerythis, options )

	   } else {

	    container.isotope( options );

	   }

	   return false;

	  });

	 };

	 isotope();

	 jQuery(window).resize(function(){

	  isotope();

	 });

	<!-- ========== MENU ========== -->
	jQuery('.navbar-toggle').on("click", function(){

		jQuery(this).toggleClass('collapsed');

		jQuery('.menu nav ul').toggleClass('active');
	});
	<!-- ========== END MENU ========== -->

	/*SLIDER*/
	jQuery('.revolutionSlider').revolution({
      shadow:0,
      startheight:925,
      navigationType: "none"
  	});  



  	
  // Go to top button
    jQuery(window).load(function(){
    	 $(window).scroll(function(){

	        if($(document).scrollTop() > 300)
	        {    
	            $('.back-to-top').css({bottom:"50px"});
	        }
	        else
	        {  
	           $('.back-to-top').css({bottom:"-80px"});
	        }
    	});	
    	$('#overlay').fadeOut();
    });
     
  $('.back-to-top').on("click",function(){
      $('html, body').animate({scrollTop:0}, 'slow');
      return false;
  }); 
// End button top


  	/*Carousel*/

	jQuery(".headerButton").on("click", function(event){
		event.preventDefault();
		jQuery(this).find("i").toggleClass("fa-angle-up");
		jQuery(this).find("i").toggleClass("fa-angle-down");
		jQuery(".topContent").slideToggle();
		return false;
	});

	jQuery(".carouselPresentation").owlCarousel({
		items:1,
		autoHeight:true,
		navigation:true,
		pagination:false,
		navigationText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
		responsive: true,
		 singleItem:true,
	    responsiveRefreshRate : 200,
	    responsiveBaseWidth: window
	});

	$(".owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      navigation:true,
      navigationText:false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

	//hover
	jQuery( ".searchWidget" ).hover(
	  function() {
	    jQuery(".menu nav").addClass( "hover" );
	  }, function() {
	    jQuery(".menu nav").removeClass( "hover" );
	  }
	);
	

});

<!-- ================================================== -->
<!-- =============== END JS OPTIONS ================ -->
<!-- ================================================== -->