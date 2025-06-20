jQuery('.herobanner-slider').slick({
  dots: false,
  infinite: true,
  speed: 100,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  
});


jQuery('.menu-main-coffe').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

jQuery('.isotopes-btns ul li').click(function() {
  jQuery('.isotopes-btns ul li').removeClass('active');
  jQuery(this).addClass('active');

  var selector = jQuery(this).attr('data-filter');
  jQuery('.menu-main-coffe').isotope({
      filter: selector
  });
  return false;
});

// CLIENT SLIDER//
jQuery('.slider-col').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  dots: true,
  speed: 100,
  arrows: false,
  autoplay:false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

//counter//
jQuery(window).scroll(startCounter);
      function startCounter() {
          if (jQuery(window).scrollTop() > 700) {
              jQuery(window).off("scroll", startCounter);
              jQuery('.prg-count').each(function () {
                  var jQuerythis = jQuery(this);
                  jQuery({ Counter: 0 }).animate({ Counter: jQuerythis.text() }, {
                      duration: 9000,
                      easing: 'swing',
                      step: function () {
                          jQuerythis.text(Math.ceil(this.Counter));
                      }
                  });
              });
          }
      }

    // BG VIDEO //
      var player;

      
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '315', 
          width: '560',  
          videoId: 'Gu6z6kIukgg', 
          playerVars: {
            'autoplay': 0, 
            'controls': 1,
            'rel': 0, 
            'showinfo': 0 
          }
        });
      }
    
      
      function playVideo() {
        if (player) {
          player.playVideo();
        }
      }


jQuery('.play-button').click(function(){
jQuery(this).addClass('active');
jQuery('.video-container').addClass('active');
jQuery('.bg-video').addClass('active');
});        

// END-SEC //

jQuery('.slider-img-end').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: false,
arrows: false,
dots: false,
centerMode: true,
centerPadding: '140px',
responsive: [
  {
    breakpoint: 1200,
    settings: {
      arrows: false,
      slidesToShow: 4
    }
  },
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  },
  {
    breakpoint: 575,
    settings: {
      arrows: false,
      slidesToShow: 1,
      centerPadding: '50px',
    }
  }
]
});

// isotopes-js

jQuery('.isotopes-main-img').isotope({
itemSelector: '.item',
layoutMode: 'fitRows'
});

jQuery('.isotopes-btns ul li').click(function() {
jQuery('.isotopes-btns ul li').removeClass('active');
jQuery(this).addClass('active');

var selector = jQuery(this).attr('data-filter');
jQuery('.isotopes-main-img').isotope({
    filter: selector
});
return false;
});
// AOS//
AOS.init();


// RESPONSIVE MENU //
jQuery('.hamburger a').click(function(){
  jQuery('.responsive-menu').addClass('active');
});

jQuery('.cross-btn a').click(function(){
  jQuery('.responsive-menu').removeClass('active');
});