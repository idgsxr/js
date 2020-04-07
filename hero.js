(function(){
 // hero component specific code here…

 $(document).on('click', '.innerContent .togglemore', function(e){
    e.preventDefault();
    var $content = $(this).next('.overlay').clone();
  
    GaTrackHero("hero",null);
      $('#defaultModal').find('.modal-body').html("").html($content);
      $('#defaultModal').modal('toggle');

  });


  $('.hero .outer').slick({
	  slidesToShow: 3,
	  arrows:false,
	  dots:false,
	  responsive: [
	  {
	      breakpoint: 980,
	      settings: {
	      	infinite : false,
	        arrows: false,
	        centerMode: true,
	        centerPadding: '100px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	infinite : true,
	        arrows: false,
	        centerMode: true,
	        centerPadding: '100px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	infinite : true,
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

if($(window).width() < 980){
  $(".hero .outer").slick("slickNext");
}


})();
// --*********** 8 may: prateek.  popup GA code track

function GaTrackHero(type, item) {

    if (type === "hero") {
        msildl.push({
            'event': 'virtual_pageview',
            'virtualPageURL': '/more-from-us',
            'virtualPageTitle': 'More from us',
            'cd_timestamp': ''
        });

        //   console.log('done ' + arrayValue.EnquiryID);

    }

}
