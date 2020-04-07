(function () {
 
   var strIsAuto = $("#sliderAutoRunTile").val();
   var strTimer = $("#sliderTimerTile").val();
   var autoRun = strIsAuto === '' || strIsAuto === undefined ? false : JSON.parse(strIsAuto);
   var autoTimer = strTimer === '' || strTimer === undefined  ? 3000 : JSON.parse(strTimer);

   $('.tilebanner').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: autoRun,
          autoplaySpeed: autoTimer,
         // arrow: true
          //nextArrow: '.slick-next',
          //prevArrow: '.slick-prev',
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        dots: true
		      }
		    },
		    		    {
		      breakpoint: 320,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        dots: true
		      }
		    }
		  ]
		});
 
})();