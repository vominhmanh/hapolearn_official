$( document ).ready( function ()
{
  $( '.feedback-list' ).slick( {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  } );
} );
