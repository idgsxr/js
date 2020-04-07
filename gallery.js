 $(document).on('ready', function() {
    $(".regular").slick({
      dots: false,
      slidesToShow: 2,
      arrows: false,
      responsive: [
      {
          breakpoint: 1800,
          settings: {
            }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1
            }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        }
      ]
    });

  // $(document).on('click', '.modal-window', function(){
  //       var $imgitem = $(this).closest('.image-area').find('div.images'),
  //           $imgsrc = $imgitem.data('img'),
  //           $imgalt = $imgitem.data('alt');

  //         if($imgitem.find('img').length == 0){
  //             $imgitem.append("<img src='"+ $imgsrc +"' alt='"+ $imgalt +"' />");
  //         }

  //   var $content = $(this).closest('.image-area').find('.img-desc-container').html();
    
  //   $('#defaultModal').find('.modal-body').html("").html($content);
  //   $('#defaultModal').modal('toggle');

  // })

});

 function isInView(elem){
 
  //  return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;
  var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;

     //console.log(docViewTop, docViewBottom, elemTop);
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));

}

 $(window).scroll(function(){
   if (isInView($('.gallerycomponent'))){
    //console.log("loaded");
    $('.gallerycomponent .image-area img.lazy-load').each(function(){
      $(this).attr('src', $(this).data('src'));
    })
   }
      
      
})